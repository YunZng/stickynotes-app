import NotesWall from "./NotesWall.js"

export default class StickyNotesApp{
    constructor(){
        this.wall = new NotesWall();
    }

    // event listener for adding a new note
    addNote = (e) => {
        if(e.key == "Enter" && !e.shiftKey){
            e.preventDefault();
            this.wall.add(e.target.value);
            e.target.value = "";
        }
    }

    // init event listener for existing content
    init = () => {
        this.wall.updateListener();
        document.getElementById("new-note").onkeydown = this.addNote;
    }
}