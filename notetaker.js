let myNote = "";
let myTitle = "";

let noteInput = document.getElementById("note-input");
let titleInput = document.getElementById("title-input");

let title = document.getElementById("title");
let note = document.getElementById("first-note-p");

let addButton = document.getElementById("addButton");
let removeButton = document.getElementById("remove-button");

const addNote = () => {
  myNote = noteInput.value;
  myTitle = titleInput.value;

  title.innerHTML = myTitle;
  note.innerText = myNote;

  titleInput.value = "";
  noteInput.value = "";
};

const removeNote = () => {
  title.innerHTML = "";
  note.innerHTML = "";
};

removeButton.onclick = removeNote;
addButton.onclick = addNote;
