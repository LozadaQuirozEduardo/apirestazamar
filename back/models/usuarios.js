var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var usuariosSchema = new Schema({
    nombre: String,
    apellido: String,
    email: String,
    password: String,
    rol: String,
    imagen: String
}, { timestamps: true });

module.exports = mongoose.model('Usuarios', usuariosSchema);