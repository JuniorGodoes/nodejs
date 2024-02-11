const db = require('../Data/db')

module.exports.getallusers = async () => {
    const [data] = await db.query("SELECT * FROM USERS")
    .catch(err => console.log(err))
    return data
}   

module.exports.getuserid = async (id) => {
    const [data] = await db.query("SELECT * FROM USERS WHERE id = ?",[id])
    .catch(err => console.log(err))
    return data
}

module.exports.deleteuserid = async (id) => {
    const [data] = await db.query("DELETE FROM USERS WHERE id = ?",[id])
    .catch(err => console.log(err))
    return data
}

module.exports.adduser = async (obj) => {
    const [data] = await db.query("INSERT INTO USERS(Name, Senha, Access) VALUES(?,?,?)",[obj.Name, obj.Senha, JSON.stringify(obj.Access)])
    .catch(err => console.log(err))
    return data
}

module.exports.updateuser = async (obj, id) => {
    const [data] = await db.query("UPDATE USERS SET NAME = ?, SENHA = ?,ACCESS = ? WHERE ID = ?",[obj.Name, obj.Senha, JSON.stringify(obj.Access), id])
    .catch(err => console.log(err))
    return data
}

module.exports.getallteste = async () => {
    const [data] = await db.query("SELECT * FROM exemplo")
    .catch(err => console.log(err))
    return data
}   
