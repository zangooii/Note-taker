let input = "";

const addNote = () => {
  input = document.getElementById("input").value;
  document.getElementById("first-note").innerHTML = input;
};
