const Customer = require("./../models/customerSchema");
const bcryptjs = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { msgFormatoConst, respApi } = require("../helpers/helpers");

const getCustomers = async (req, res) => {
  try {
    msgFormatoConst("getCustumer");
    const Costumers = await Customer.find({});
    respApi(res, "Success", Costumers);
  } catch {
    console.log("Error en la consulta");
  }
};

const createCustomer = async (req, res) => {
  const { name, email, password } = req.body // OBTENER USUARIO, EMAIL Y PASSWORD DE LA PETICIÓN

	try {
		// GENERAMOS STRING ALEATORIO PARA USARSE CON EL PASSWORD
		const salt = await bcryptjs.genSalt(10)
		const hashedPassword = await bcryptjs.hash(password, salt) //el metodo hash encripta la contraseña

		// CREAMOS UN USUARIO CON SU PASSWORD ENCRIPTADO
		const respuestaDB = await Customer.create({
			name,
			email,
			password: hashedPassword,
		})
		// USUARIO CREADO. VAMOS A CREAR EL JSON WEB TOKEN

		const payload = {
			customer: {
				id: respuestaDB._id,
			},
		}

		// 2. FIRMAR EL JWT
		jwt.sign(
			payload, // DATOS QUE SE ACOMPAÑARÁN EN EL TOKEN
			process.env.SECRET, // LLAVE PARA DESCIFRAR LA FIRMA ELECTRÓNICA DEL TOKEN,
			{
				expiresIn: 3600000, // EXPIRACIÓN DEL TOKEN
			},
			(error, token) => {
				// CALLBACK QUE, EN CASO DE QUE EXISTA UN ERROR, DEVUELVA EL TOKEN
				if (error) throw error
				// res.json(respuestaDB)
				res.json({ token })
			}
		)
	} catch (error) {
		return res.status(400).json({
			msg: error,
		})
	}
};
// INICIAR SESIÓN
const loginCustomer = async (req, res) => {
	const { email, password } = req.body

	try {
		let foundCustomer = await Customer.findOne({ email: email }) // ENCONTRAMOS UN USUARIO
		if (!foundCustomer) {
			// SI NO HUBO UN USUARIO ENCONTRADO, DEVOLVEMOS UN ERROR
			return res.status(400).json({ msg: 'El cliente no existe' })
		}

		// SI TODO OK, HACEMOS LA EVALUACIÓN DE LA CONTRASEÑA ENVIADA CONTRA LA BASE DE DATOS
		const passCorrecto = await bcryptjs.compare(password, foundCustomer.password)

		// SI EL PASSWORD ES INCORRECTO, REGRESAMOS UN MENSAJE SOBRE ESTO
		if (!passCorrecto) {
			return await res.status(400).json({ msg: 'Password incorrecto' })
		}

		// SI TODO CORRECTO, GENERAMOS UN JSON WEB TOKEN
		// 1. DATOS DE ACOMPAÑAMIENTO AL JWT
		const payload = {
			customer: {
				id: foundCustomer.id,
			},
		}

		// 2. FIRMA DEL JWT
		if (email && passCorrecto) {
			jwt.sign(payload, process.env.SECRET, { expiresIn: 3600000 }, (error, token) => {
				if (error) throw error
				//SI TODO SUCEDIÓ CORRECTAMENTE, RETORNAR EL TOKEN
				res.json({ token })
			})
		} else {
			res.json({ msg: 'Hubo un error', error })
		}
	} catch (error) {
		res.json({ msg: 'Hubo un error', error })
	}
};

const verificarCustomers = async (req, res) => {
	
	try {
		// CONFIRMAMOS QUE EL USUARIO EXISTA EN BASE DE DATOS Y RETORNAMOS SUS DATOS, EXCLUYENDO EL PASSWORD
		const customer = await Customer.findById(req.customer.id).select("-password");
		res.json({ customer });
	  } catch (error) {
		// EN CASO DE ERROR DEVOLVEMOS UN MENSAJE CON EL ERROR
		res.status(500).json({
		  msg: "Hubo un error",
		  error,
		});
	  }
	};

const updateCustomers = async (req, res) => {
	const { nombre, email } = req.body;
	try {
	  const actualizacionCustomer = await Customer.findByIdAndUpdate(
		req.user.id,
		{ nombre, email },
		{ new: true }
	  );
	  res.json(actualizacionCustomer);
	} catch (error) {
	  res.status(500).json({
		msg: "Hubo un error actualizando al cliente",
	  });
	}
  };

module.exports = {
  getCustomers,
  createCustomer,
  loginCustomer,
  verificarCustomers,
  updateCustomers
};
