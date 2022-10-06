let myNote = "";
let myTitle = "";

let noteInput = document.getElementById("note-input");
let titleInput = document.getElementById("title-input");

let title = document.getElementById("title");
let note = document.getElementById("first-note-p");

let addButton = document.getElementById("add-btn");
let removeButton = document.getElementById("remove-button");
notePlace = document.getElementById("note-place");

const createElement = (tag, text, attributes) => {
  const el = document.createElement(tag);
  !!text && (el.textContent = text);
  attributes = attributes || {};
  for (let attr in attributes)
    attributes.hasOwnProperty(attr) && el.setAttribute(attr, attributes[attr]);
  return el;
};

const addNote = () => {
  const noteEl = createElement("div");

  [
    createElement("h3", titleInput.value),
    createElement("p", noteInput.value),
    createElement("button", "remove", {
      type: "button",
      class: removeButton,
    }),
  ].forEach((el) => noteEl.appendChild(el));

  notePlace.appendChild(noteEl);
};

const removeNote = () => {
  title.innerHTML = "";
  note.innerHTML = "";
};

addButton.onclick = addNote;

notePlace.addEventListener(
  "click",
  (e) =>
    e.target.classList.contains(removeButton) && e.target.parentNode.remove()
);
