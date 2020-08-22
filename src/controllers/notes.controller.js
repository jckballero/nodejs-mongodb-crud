const notesCtrl = {};
const Note = require('../models/Note');

notesCtrl.renderNoteForm = (req, res) => {
    //console.log(req.user.id);
    res.render('notes/new-note');
};

notesCtrl.createNewNote = async(req, res) => {
    const { title, description } = req.body;
    const newNote = new Note({ title, description });
    newNote.user = req.user.id; //por cada nota que guarde en base de datos, tambien se guardara el id del usuario
    await newNote.save(); //guarda este objeto dentro de mongodb
    req.flash('success_msg', 'Note Added Successfully');
    res.redirect('/notes')
};

notesCtrl.renderNotes = async(req, res) => {
    const notes = await Note.find({ user: req.user.id }).sort({ createdAt: 'desc' }).lean();
    res.render('notes/all-notes', { notes }); //({notes} trae o muestra los archivos guaardados en bd)
};

notesCtrl.renderEditForm = async(req, res) => {
    const note = await Note.findById(req.params.id).lean();
    if (note.user != req.user.id) {
        req.flash('error_msg', 'Not Authorized');
        return res.redirect('/notes');
    }
    //console.log(note)
    res.render('notes/edit-note', { note });
};

notesCtrl.updateNote = async(req, res) => {
    const { title, description } = req.body;
    await Note.findByIdAndUpdate(req.params.id, { title, description })
    req.flash('success_msg', 'Note Update Successfully');
    res.redirect('/notes');
};

notesCtrl.deleteNote = async(req, res) => {
    await Note.findByIdAndDelete(req.params.id);
    req.flash('success_msg', 'Note Delete Successfully');
    res.redirect('/notes')
};

module.exports = notesCtrl;