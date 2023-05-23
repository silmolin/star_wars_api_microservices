const Film = require("../data");

module.exports = async (req,res) => {
    const films =  await Film.list();  // esto simula ser un modelo
    res.status(200).json(films);
};