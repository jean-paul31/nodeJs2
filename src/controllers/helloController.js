import meteoService from"../service/meteo";

const hello = (req, res) => {
    res.status(200).send("hello world !");
};
const templatedPage = (req, res) => {
    let users = [{ name: "Bob", age: 24 },
                 { name: "Benjamin", age: 31 }, 
                 { name: "Mehdi", age: 28 }];
    res.status(200).render('pages/index', { users });
  };
const getMeteo = async (req, res) =>{

    const { city } = req.params;
    const meteoJson = await meteoService.getCityMeteo(city);
    const meteoCity = JSON.parse(meteoJson);
    // res.status(200).json(meteoData);
    res.status(200).render("pages/meteo", {meteoCity:meteoCity});
}

export default{
    hello,
    templatedPage,
    getMeteo
};
