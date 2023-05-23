 const Planet = require("../data");

 module.exports = async (req, res) => {
    const planets =  await Planet.list();  // esto simula ser un modelo
    res.status(200).json(planets);
}; 