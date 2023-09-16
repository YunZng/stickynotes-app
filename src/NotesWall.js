import Note from "./Note.js";

class NotesWall{
    constructor(){
        this.template = document.getElementById("notes-wall").children[0].cloneNode(true);
        this.notes = [];
    }

    // function to add a new note to the wall
    add = (text) => {
        let newNote = new Note(text, this.template);
        this.notes.push(newNote);
        return newNote;
    }

    // event listener for deleting a note.
    delete = (id) => {
        this.notes = this.notes.filter((node) => node.id != id);
    }
    
    // event listener for entering edit mode
    edit = (id) => this.notes.find((node) => node.id == id);

    // event listener for exiting edit mode
    saveEdit = (id, text) => {
        this.notes.find((node) => node.id == id).setText(text);
    }
}
export default NotesWall;