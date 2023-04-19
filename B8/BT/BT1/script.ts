class Note {
    title: string
    content: string
    constructor(title: string, content: string) {
        this.title = title
        this.content = content
    }
    addNote() {
        console.log(`Title note: ${this.title}\nContent: ${this.content}\n`);
    }
}
class NoteList {
    note: Note[] = []
    constructor() {
        this.note = []
    }
    addNote(note: Note) {
        this.note.push(note)
        console.log(`Note added to list: ${note.title}\nContent: ${note.content}\n`);
    }
}

let noteList = new NoteList()
let note1 = new Note('Shopping', 'Buy T-Shirt, Shoes')
let note2 = new Note('To do tomorrow', 'Meeting, Studying')

noteList.addNote(note1)
noteList.addNote(note2)
console.log(noteList.note)
