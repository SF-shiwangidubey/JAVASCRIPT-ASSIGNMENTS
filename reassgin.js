const userInfo = [
    {
      firstName: "Aman",
      email: "aman@example.com",
      Contact: "1234567890",
      address: "Delhi",
    },
    {
      firstName: "Rahul",
      email: "Rahul@example.com",
      Contact: "1234567890",
      address: "Delhi",
    },
  ];

  const tableBody = document.querySelector("#userTable tbody");
  const add = document.querySelector("#addUser");
  const button = document.querySelector("button");

  userDisplays();

  function userDisplays() {
    tableBody.innerHTML = "";
    userInfo.forEach((user) => {
      const row = document.createElement("tr");
      row.innerHTML = `
        <td>${user.firstName}</td>
        <td>${user.email}</td>
        <td>${user.Contact}</td>
        <td>${user.address}</td>
        <td>
          <button class="editBtn">Edit</button>
          <button class="deleteBtn">Delete</button>
        </td>
      `;
      tableBody.appendChild(row);
    });
    document.querySelectorAll(".editBtn").forEach((btn, index) => {
      btn.addEventListener("click", () => editUser(index));
    });
    document.querySelectorAll(".deleteBtn").forEach((btn, index) => {
      btn.addEventListener("click", () => deleteUser(index));
    });
  }
  function editUser(index) {
    const row = tableBody.children[index];
    const cells = row.querySelectorAll("td");
    
    cells.forEach(cell => {
        const text = cell.textContent;
        cell.innerHTML = `<input type="text" value="${text}">`;
      });

    const actionCell = cells[cells.length - 1];
    actionCell.innerHTML = `
    <button class="saveBtn">Save</button>
    <button class="cancelBtn">Cancel</button>`;
  
    const saveBtn = actionCell.querySelector(".saveBtn");
    const cancelBtn = actionCell.querySelector(".cancelBtn");
  
    saveBtn.addEventListener("click", () => saveUser(index));
    console.log(saveBtn);
    cancelBtn.addEventListener("click", () => userInfo());
    console.log(cancelBtn);
}


function saveUser(index) {
    const row = tableBody.children[index];
    const cells = row.querySelectorAll("td");
  
    cells.forEach((cell, i) => {
      if (i !== cells.length - 1) {
        const input = cell.querySelector("input");
        cell.textContent = input.value;
      }
    });
  
    const actionCell = cells[cells.length - 1];
    actionCell.innerHTML = `
    <button class="editBtn">Edit</button>
    <button class="deleteBtn">Delete</button>`;
  
    document.querySelectorAll(".editBtn").forEach((btn, i) => {
      btn.addEventListener("click", () => editUser(i));
    });
  
    document.querySelectorAll(".deleteBtn").forEach((btn, i) => {
      btn.addEventListener("click", () => deleteUser(i));
    });
  }
  
  function deleteUser(index) {
    userInfo.splice(index, 1);
    userDisplays();
  }


  let btnSubmit = document.querySelector("#btnSubmit");
  btnSubmit.addEventListener("click", () => onsubmit());
  
  let userName = document.querySelector("#username");
  let email = document.querySelector("#email");
  
  function onsubmit() {
    console.log("onsubmit", email.value, userName.value,Contact.value,address.value);
    userInfo.push({
      firstName: userName.value,
      email: email.value,
      Contact:Contact.value,
      address:address.value
    });
    userDisplays();
    userName.value = "";
    email.value = "";
    Contact.value = "";
    address.value = "";
    userDiv.classList.add("d-none");
    btnadduser.classList.remove("d-none");
}
  
  let userDiv = document.querySelector("#userDiv");
  
  let btnadduser = document.querySelector("#btnadduser");
  btnadduser.addEventListener("click", () => onBtnAddUser("clearInput"));
  
  function onBtnAddUser() {
    userDiv.classList.remove("d-none");
    btnadduser.classList.add("d-none");
  
  }

  
 