import DbConnection from "./db";

const getUsers = async () =>{
    const connexion = new DbConnection();
    return await connexion.performQuery("SELECT * FROM users;", []);
};
const getUser = async (id) =>{
    const connexion = new DbConnection();
    return await connexion.performQuery("SELECT * FROM users WHERE id = ?;", [id]);
};
const insertUser = async (name, password) =>{
    const connexion = new DbConnection();
    return await connexion.performQuery("INSERT INTO users (name, password) VALUES (?, ?);", [name, password]);
};
const deleteUser = async (userId) =>{
    const connexion = new DbConnection();
    return await connexion.performQuery("DELETE FROM users WHERE id=?", [userId]);
};



export default{
    getUsers,
    getUser,
    insertUser,
    deleteUser
}