const { Schema, model } = require('mongoose');

const NoteSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    user: {
        type: String,
        required: true
    }
}, {
    timestamps: true //propiedad de mongoose, para las actualizaciones de las notas
})

module.exports = model('Note', NoteSchema, 'notas');