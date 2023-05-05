var Usuarios = require('../models/usuarios');
var bcrypt = require('bcrypt-nodejs');

function registro_usuario_admin(req, res) {
    var params = req.body; //recibe todos los datos por Por el Metodo POST
    console.log(params);

    var usuario = new Usuarios();
    usuario.nombre = params.nombre;
    usuario.apellido = params.apellido;
    usuario.email = params.email;
    usuario.rol = 'ROLE_USER';
    usuario.imagen = 'null';

    if (params.password) {
        bcrypt.hash(params.password, null, null, function(err, hash) {
            if (err) {
                res.status(500).send({ message: 'Error al hashear la contraseña' });
            } else {
                usuario.password = hash;
                if (usuario.nombre != null && usuario.apellido != null && usuario.email != null) {
                    //guardar el usuario en BD
                    usuario.save().then(usuarioAlmacenado => {
                        //hacer algo con el usuario almacenado
                    }).catch(err => {
                        //manejar el error
                    });

                } else {
                    res.status(200).send({ message: 'Introduce todos los campos' });
                }
            }
        });

    } else {
        res.status(500).send({ message: 'Introduce la contraseña' });
    }
}

module.exports = {
    registro_usuario_admin
};