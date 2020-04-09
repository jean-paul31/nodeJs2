const getUser = (req, res) => {
    const { userId } = req.params;
    res.status(200).render("pages/user", { method: "GET" });
};
const postUser = (req, res) => {
    const { userId } = req.params;
    res.status(200).render("pages/user", { method: "POST" });
};
const putUser = (req, res) => {
    const { userId } = req.params;
    res.status(200).render("pages/user", { method: "PUT" });
};
const deleteUser = (req, res) => {
    const { userId } = req.params;
    res.status(200).render("pages/user", { method: "DELETE" });
};


export default{
    getUser,
    postUser,
    putUser,
    deleteUser
};