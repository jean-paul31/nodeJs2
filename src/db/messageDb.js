import DbConnection from "./db";

// const getMessageUsers = async () =>{
//     const connexion = new DbConnection();
//     return await connexion.performQuery("SELECT * FROM messages;", []);
// };
const getMessageUser = async (userId) =>{
    const connexion = new DbConnection();
    return await connexion.performQuery("SELECT * FROM messages WHERE id_receiver= ? OR id_sender= ?;", [userId, userId]);
};
const insertMessageUser = async (userId, id_receiver, title, content) =>{
    const connexion = new DbConnection();
    return await connexion.performQuery("INSERT INTO messages (id_sender, id_receiver, title, content) VALUES (?, ?, ?, ?);", [userId, id_receiver, title, content]);
};
const deleteMessageUser = async (userId) =>{
    const connexion = new DbConnection();
    return await connexion.performQuery("DELETE FROM messages WHERE id=?", [userId]);
};


export default{
    // getMessageUsers,
    getMessageUser,
    insertMessageUser,
    deleteMessageUser
}