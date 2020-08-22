const { Router } = require('express');
const router = Router()

const {
    renderNoteForm,
    createNewNote,
    renderNotes,
    renderEditForm,
    updateNote,
    deleteNote
} = require('../controllers/notes.controller');

const { isAuthenticated } = require('../helpers/auth');

//New note
router.get('/notes/add', isAuthenticated, renderNoteForm); //muestra las notas creadas 

router.post('/notes/new-note', isAuthenticated, createNewNote); // crea las notas

//Get all note
router.get('/notes', isAuthenticated, renderNotes);

//Edit Notes
router.get('/notes/edit/:id', isAuthenticated, renderEditForm); //muestra el formulario y seran enviados

router.put('/notes/edit/:id', isAuthenticated, updateNote); //recibe el formulario enviado edita el formulario

//Delete note
router.delete('/notes/delete/:id', isAuthenticated, deleteNote);

module.exports = router;