import DbConnection from "./db";

const getUsers = async () =>{
    const connexion = new DbConnection();
    return await connexion.performQuery("SELECT * FROM users;", []);
} 

export default{
    getUsers
}