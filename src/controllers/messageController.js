import messageDb from "../db/messageDb"

const getMessageUsers = async (req, res) => {
    const { userId } = req.params;
    const result = await messageDb.getMessageUsers();
    res.status(200).render("pages/messages", { messages: result.rows});
}
const getMessageUser = async (req, res) => {
    const { userId } = req.params;
    const result = await messageDb.getMessageUser(userId);
    res.status(200).render("pages/messages", { messages: result.rows});
};

const putMessageUser = async (req, res) => {
    const { userId } = req.params;    
    const { title, content } = req.body;
    const insert = await messageDb.insertMessageUser(title, content);
    res.status(200).send("Insertion OK");
};

export default{
    getMessageUsers,
    getMessageUser,
    putMessageUser
}