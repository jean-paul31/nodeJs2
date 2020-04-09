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


  // exercice de l'appli meteo
const getMeteo = async (req, res) =>{

    const { city } = req.params; //on déclare city qui est une requete des parametres
    const meteoJson = await meteoService.getCityMeteo(city); // on transfére les données de l'API en string
    const meteoCity = JSON.parse(meteoJson); // on la transforme en JSON  
    res.status(200).render("pages/meteo", {meteoCity:meteoCity}); // on balance le tout sur le template meteo.ejs
}

export default{ // a partir d'ici on exporte les methodes faitent plus haut
    hello,
    templatedPage,
    getMeteo
};
