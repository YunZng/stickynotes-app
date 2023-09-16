class Note{
    // takes built-in note as input and create a copy of it.
    static id = 0;
    constructor(text, node){
        this.text = text;
        this.id = "note"+Note.id++;
        this.note = node.cloneNode(true);
        this.note.id = this.id;
        for(let child of this.note.children){
            child.id = this.id;
        }
        this.setText(text);
    }
    setText(text){
        this.text = text;
        this.note.children[1].innerHTML = text.replaceAll("\n", "<br>");
        this.note.children[2].value = text;
        this.note.children[2].innerHTML = text;
    }
}

export default Note;