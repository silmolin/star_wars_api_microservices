const Character = require("../data");

module.exports = async (req,res) => {
    const characters =  await Character.list();  // esto simula ser un modelo
    res.status(200).json(characters);
};