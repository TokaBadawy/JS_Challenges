const createRow = function (student) {
  let trObject = document.createElement("tr");
  let tdObject;
  for (let property in student) {
    tdObject = document.createElement("td");
    tdObject.innerText = student[property];
    trObject.append(tdObject);
  }
  return trObject;
};

const filterTable = function (filter) {
  const rows = document.querySelectorAll("body > table tr");
  let gradeCell;
  [...rows].forEach((row) => {
    gradeCell = row.querySelectorAll("td")[1];
    if (filter == "success") {
      if (+gradeCell.innerText >= 50) {
        row.classList.remove("hide");
      } else {
        row.classList.add("hide");
      }
    } else if (filter == "fail") {
      if (+gradeCell.innerText < 50) {
        row.classList.remove("hide");
      } else {
        row.classList.add("hide");
      }
    } else {
      row.classList.remove("hide");
    }
  });
};

function checkIfNameRepeated(name) {
  const rows = document.querySelectorAll("body > table tr");
  for (let i = 0; i < rows.length; i++) {
    if (rows[i].querySelector("td").innerText == name) {
      return false;
    }
  }
  return true;
}