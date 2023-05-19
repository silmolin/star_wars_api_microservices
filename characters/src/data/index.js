const characters = require("./characters.json");

module.exports = {
    list: async () => {
        return characters;
    },
};

/* 
list es una funcion que retorna los personajes
que hay en el json 
*/