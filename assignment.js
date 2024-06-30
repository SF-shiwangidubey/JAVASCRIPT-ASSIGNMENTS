const userInfo=[
    {firstName: "Aman",  email: "aman@example.com", phoneNumber: "1234567890",  address: "Delhi" },
    {firstName: "Rahul",  email: "Rahul@example.com", phoneNumber: "1234567890",  address: "Delhi" }
]

  const tableBody = document.querySelector("#userTable tbody");
  const add=document.querySelector("#addUser");
  const button =document.querySelector("button");
   userDisplays()
  function userDisplays() {
    tableBody.innerHTML = "";
    userInfo.forEach(user => {
      const row = document.createElement("tr");
      row.innerHTML = `
        <td>${user.firstName}</td>
        <td>${user.email}</td>
        <td>${user.phoneNumber}</td>
        <td>${user.address}</td>
        <td>
          <button class="btn btn-outline-primary editBtn">Edit</button>
          <button class="btn btn-outline-primary deleteBtn">Delete</button>
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

let form=document.querySelector("#btnSubmit");

form.addEventListener("sumbit", function(e){
     e.preventDefault();
    console.log("form");
})

function onsubmit(e){
    e.preventDefault();
    console.log("submitted")
}


