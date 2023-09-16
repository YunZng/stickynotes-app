let template = document.getElementById("notes-wall").children[0];

export default class Note{
    // takes built-in note as input and create a copy of it.
    static id = 0;
    constructor(text){
        this.id = Note.id++;
        this.note = template.cloneNode(true);
        this.note.id = this.id;
        this.setText(text);
    }
    setText(text){
        this.text = text;
        this.note.children[1].innerHTML = text.replaceAll("\n", "<br>");
        this.note.children[2].innerHTML = text;
    }
}