const addButton = document.querySelector("input[value=Add]");
const nameTextBox = document.querySelector("input[name=studentName]");
const gradeTextBox = document.querySelector("input[name=studentGrade]");
const studentTable = document.createElement("table");
const gradeErrorMsg = document.querySelector("#gardeError");
const nameErrorMsg = document.querySelector("#nameError");
const filterSelect = document.querySelector("select");

document.body.append(studentTable);

addButton.onclick = function () {
  // Validate  Name
  if (
    !checkIfNameRepeated(nameTextBox.value) ||
    nameTextBox.value.length == 0
  ) {
    nameErrorMsg.classList.remove("hide");
    return;
  } else {
    nameErrorMsg.classList.add("hide");
  }

  // Validate grade (0-100)
  if (gradeTextBox.value < 0 || gradeTextBox.value > 100) {
    gradeErrorMsg.classList.remove("hide");
    return;
  } else {
    gradeErrorMsg.classList.add("hide");
  }

  // create row
  let departmentValue = document.querySelector(
    "input[name=Department]:checked"
  ).value;
  let trObject = createRow({
    name: nameTextBox.value,
    grade: gradeTextBox.value,
  });

  //delete Button
  let buttonObject = document.createElement("button");
  buttonObject.innerText = "Delete";
  buttonObject.onclick = function () {
    this.parentElement.parentElement.remove();
  };
  let tdElm = document.createElement("td");
  tdElm.append(buttonObject);
  trObject.append(tdElm);
  //end of delete button

  trObject.classList.add(departmentValue);
  studentTable.append(trObject);
};

// Validate grade
gradeTextBox.onkeypress = function (event) {
  if (isNaN(event.key)) {
    gradeErrorMsg.classList.remove("hide");
    event.preventDefault();
  } else {
    gradeErrorMsg.classList.add("hide");
  }
};

// Filter grades
filterSelect.onchange = function () {
  filterTable(this.value);
};
