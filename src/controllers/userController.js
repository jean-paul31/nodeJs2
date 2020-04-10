import userDb from "../db/userDb";


const getUsers = async (req, res) => {
    const result = await userDb.getUsers();
    res.status(200).render("pages/users", { users: result.rows});
}
const getUser = async (req, res) => {
    const { userId } = req.params;
    const result = await userDb.getUser(userId);
    const { search, name } = req.query;
    res.status(200).render("pages/users", { users: result.rows});
};

const putUser = async (req, res) => {
    const { userId } = req.params;    
    const { name, password } = req.body;
    const insert = await userDb.insertUser(name, password);
    res.status(200).send("Insertion OK");
};

const postUser = (req, res) => {
    const { userId } = req.params;
    const { search, name } = req.query;
    const { ville } = req.body;
    res.status(200).render("pages/user", { method: "POST", userId: userId, search: search, name: name, ville: ville});
};

const deleteUser = (req, res) => {
    const { userId } = req.params;
    const { search, name } = req.query;
    const { ville } = req.body;
    res.status(200).render("pages/user", { method: "DELETE", userId: userId, search: search, name: name,ville: ville});
};


export default{
    getUsers,
    getUser,
    postUser,
    putUser,
    deleteUser
};