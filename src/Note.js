
export default class Note{
    // takes built-in note as input and create a copy of it.
    static id = 0;
    constructor(text, node){
        this.id = Note.id++;
        this.note = node.cloneNode(true);
        this.setText(text);
    }
    setText(text){
        this.text = text;
        this.note.children[1].innerHTML = text.replaceAll("\n", "<br>");
        this.note.children[2].value = text;
    }
}