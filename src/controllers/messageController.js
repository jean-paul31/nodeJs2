import messageDb from "../db/messageDb";
import userDb from "../db/userDb";

// const getMessageUsers = async (req, res) => {
//     const { userId } = req.params;
//     const result = await messageDb.getMessageUsers();
//     res.status(200).render("pages/messages", { messages: result.rows});
// }
const getMessageUser = async (req, res) => {
    const { userId } = req.params;
    const { search } = req.query
    const result = await messageDb.getMessageUser(userId);
    res.status(200).render("pages/messages", { userId: userId, messages: result.rows, search: search});
};

const putMessageUser = async (req, res) => {
    const { userId } = req.params;    
    const user = await userDb.getUser(userId);
    const { id_receiver, title, content, password } = req.body;
    if (user.rows[0].password == password) {
        const insert = await messageDb.insertMessageUser(userId, id_receiver, title, content);
        res.status(200).send("Insertion OK" );
    } else {
        res.status(403).send("vous n'etes pas autoriser à poster un message");
    }
    
     
};
const deleteMessageUser = async (req, res) => {
    const { userId } = req.params;    
    const deleted = await messageDb.deleteMessageUser(userId);
    res.status(200).send("suppresion OK");
};

export default{
    // getMessageUsers,
    getMessageUser,
    putMessageUser,
    deleteMessageUser
}