const getUser = (req, res) => {
  
    res.status(200).render("pages/user", { method: "GET" });
};
const postUser = (req, res) => {

    res.status(200).render("pages/user", { method: "POST" });
};
const putUser = (req, res) => {

    res.status(200).render("pages/user", { method: "PUT" });
};
const deleteUser = (req, res) => {

    res.status(200).render("pages/user", { method: "DELETE" });
};


export default{
    getUser,
    postUser,
    putUser,
    deleteUser
};