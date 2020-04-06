const hello = (req, res) => {
    res.status(200).send("hello world !");
};
const templatedPage = (req, res) => {
    let users = [{ name: "Bob", age: 24 },
                 { name: "Benjamin", age: 31 }, 
                 { name: "Mehdi", age: 28 }];
    res.status(200).render('pages/index', { users });
  };


export default{
    hello,
    templatedPage
};