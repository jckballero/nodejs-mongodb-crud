const { Schema, model } = require('mongoose');
const bcrypt = require('bcryptjs'); //importando modulo de cifrado

const UserSchema = new Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true }
}, {
    timestamps: true
});

UserSchema.methods.encryptPassword = async password => { //metodo para cifrar las contraseñas
    const salt = await bcrypt.genSalt(10);
    return await bcrypt.hash(password, salt); //retornando la contraseña cifrada
}

UserSchema.methods.matchPassword = async function(password) { //comparaciones con base de datos
    return await bcrypt.compare(password, this.password) // true para contraseñas correctas, false contraseñas incorrectas
}

module.exports = model("User", UserSchema);