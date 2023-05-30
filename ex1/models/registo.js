var mongoose = require("mongoose");

var plantasSchema = new mongoose.Schema({
    "_id": String,
    "Id": Number,
    "NúmerodeRegisto":Number,
    "Códigoderua":Number,
    "Rua": String,
    "Local": String,
    "Freguesia": String,
    "Espécie": String,
    "NomeCientífico": String,
    "Origem": String,
    "DatadePlantação": String,
    "Estado": String,
    "Caldeira": String,
    "Tutor": String,
    "Implantação": String,
    "Gestor": String,
    "Datadeactualização": String,
    "Númerodeintervenções": Number
});

module.exports = mongoose.model("plantas", plantasSchema);