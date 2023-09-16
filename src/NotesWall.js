import Note from "./Note.js";

export default class NotesWall{
    constructor(){
        this.wall = document.getElementById("notes-wall");
    }

    // function to add a new note to the wall
    add = (text) => {
        this.wall.appendChild(new Note(text).note);
        this.updateListener();
    }

    // updates eventlistener for all notes
    updateListener = () => {
        for(let node of this.wall.children){
            node.children[0].onclick = this.delete;
            node.ondblclick = this.edit;
            node.onkeydown = this.saveEdit;
            node.children[2].onblur = this.saveEdit;
        }
    }

    // event listener for deleting a note.
    delete = (e) => {
        this.wall.removeChild(e.target.parentNode);
    }
    
    // event listener for entering edit mode
    edit = (e) => {
        e.currentTarget.children[2].classList.remove("hidden");
        e.currentTarget.children[2].focus();
    }

    // event listener for exiting edit mode
    saveEdit = (e) => {
        if(e.key == "Enter" && !e.shiftKey || !e.target.hasFocus && !e.key){
            e.preventDefault();
            e.target.classList.add("hidden");
            e.target.parentNode.children[1].innerHTML = e.target.value.replaceAll("\n", "<br>");
        }
    }
}