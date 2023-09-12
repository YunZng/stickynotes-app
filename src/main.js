import "../style.css";

class Note{
    // takes built-in note as input and create a copy of it.
    constructor(text, id, node){
        this.id = id;
        this.note = node.cloneNode(true);
        this.text = text;
        this.note.children[1].innerHTML = text.replaceAll("\n", "<br>");
        this.note.children[2].innerHTML = text;
    }
}

class NotesWall{
    constructor(){
        this.id = 0;
        this.wall = document.getElementById("notes-wall");
        this.noteTemplate = node.clone(this.wall.children[0]);
        this.delete = this.delete.bind(this);
        this.edit = this.edit.bind(this);
        this.saveEdit = this.saveEdit.bind(this);

        // adds event listener to all delete icon
        this.updateListener();
    }

    // function to add a new note to the wall
    add(text){
        let newNote = new Note(text, this.id++, this.noteTemplate);
        let node = newNote.note;
        this.wall.appendChild(node);
        node.children[0].onclick = this.delete;
        node.ondblclick = this.edit;
        node.children[2].onkeydown = this.saveEdit;
        node.children[2].onblur = this.saveEdit;
    }

    // updates eventlistener for all notes, only runs once.
    updateListener(){
        for(let node of this.wall.children){
            node.children[0].onclick = this.delete;
            node.ondblclick = this.edit;
            node.children[2].onkeydown = this.saveEdit;
            node.children[2].onblur = this.saveEdit;
        }
    }

    // event listener for deleting a note.
    delete(e){
        this.wall.removeChild(e.target.parentNode);
    }
    
    // event listener for entering edit mode
    edit(e){
        e.currentTarget.children[2].classList.remove("hidden");
        e.currentTarget.children[2].focus();
    }

    // event listener for exiting edit mode
    saveEdit(e){
        if(e.key == "Enter" && !e.shiftKey || !e.target.hasFocus && !e.key){
            e.preventDefault();
            e.target.classList.add("hidden");
            e.target.parentNode.children[1].innerHTML = e.target.value.replaceAll("\n", "<br>");
        }
    }
    
}

class StickyNotesApp{
    constructor(){
        this.wall = new NotesWall();
        this.addNote = this.addNote.bind(this);
        this.deleteNote = this.wall.delete;
    }

    // event listener for adding a new note
    addNote(e){
        if(e.key == "Enter" && !e.shiftKey){
            e.preventDefault();
            this.wall.add(e.target.value);
            e.target.value = "";
        }
    }
}

let app = new StickyNotesApp();
document.getElementById("new-note").onkeydown = app.addNote;