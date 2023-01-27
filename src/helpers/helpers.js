const msgFormatoConst = (msj) =>{
    console.log(`\x1b[33m ${msj} \x1b[0m`)
}

const respApi = (res, msg, data) =>{
    res.json({
        msg,
        total: data.length,
        data
    })
}
module.exports = {
    msgFormatoConst,
    respApi
}