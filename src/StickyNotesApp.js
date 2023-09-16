import NotesWall from "./NotesWall.js";

class StickyNotesApp {
    constructor() {
        this.notesWall = new NotesWall();
        this.wallNode = document.getElementById("notes-wall");
    }

    // event listener for adding a new note
    // adds new note to noteswall, and assign eventlistener to it
    addNote = (e) => {
        if (e.key == "Enter" && !e.shiftKey) {
            e.preventDefault();
            let txt = e.target.value.trim();
            if (txt) {
                let newNoteNode = this.notesWall.add(txt).note;
                e.target.value = "";
                this.wallNode.appendChild(newNoteNode);
                newNoteNode.children[0].onclick = this.handleDelete;
                newNoteNode.ondblclick = this.handleEdit;
                newNoteNode.onkeydown = this.handleSaveEdit;
                newNoteNode.children[2].onblur = this.handleSaveEdit;
            }
        }
    }

    handleDelete = (e) => {
        this.notesWall.delete(e.target.id);
        this.wallNode.removeChild(e.target.parentNode);
    }

    handleEdit = (e) => {
        let selectedNode = this.notesWall.edit(e.target.id).note.children[2];
        selectedNode.classList.remove("hidden");
        selectedNode.focus();
    }

    handleSaveEdit = (e) => {
        if (e.key == "Enter" && !e.shiftKey || !e.target.hasFocus && !e.key) {
            e.preventDefault();
            e.target.classList.add("hidden");
            this.notesWall.saveEdit(e.currentTarget.id, e.target.value);
        }
    }

    // init event listener for existing content
    init = () => {
        this.wallNode.replaceChildren();
        document.getElementById("new-note").onkeydown = this.addNote;
    }
}

export default StickyNotesApp;