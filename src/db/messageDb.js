import DbConnection from "./db";

const getMessageUsers = async () =>{
    const connexion = new DbConnection();
    return await connexion.performQuery("SELECT * FROM messages;", []);
};
const getMessageUser = async (userId) =>{
    const connexion = new DbConnection();
    return await connexion.performQuery("SELECT * FROM messages WHERE id_receiver= ? OR id_sender= ?;", [userId, userId]);
};
const insertMessageUser = async (title, content) =>{
    const connexion = new DbConnection();
    return await connexion.performQuery("INSERT INTO messages (title, content) VALUES (?, ?);", [title, content]);
};


export default{
    getMessageUsers,
    getMessageUser,
    insertMessageUser
}