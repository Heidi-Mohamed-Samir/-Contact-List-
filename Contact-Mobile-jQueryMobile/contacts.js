var nextId = 0;
function Person(name, phone, Email, gender) {
  this.name = name;
  this.phone = phone;
  this.Email = Email;
  this.gender = gender;
  this.id = nextId++;
}

var contacts = [];
var viewedContact;

//filtering contacts
function filterList() {
  window.location = "#firstPage";
  $("#Unlist").empty();
  for (var i = 0; i < contacts.length; i++) {
    $("#Unlist").append(
      "<li onclick='thirdPage(" +
        contacts[i].id +
        ")'> <a href='#thirdPage'> <img src = '" +
        contacts[i].gender +
        ".png" +
        "'>" +
        contacts[i].name +
        "</a><a href ='tel:19991' class='ui-btn ui-corner-all ui-icon-phone ui-btn-icon-notext'></a></li>"
    );
    $("#Unlist").listview("refresh");
  }
  viewedContact = null;
}

//add contact
function add() {
  var name = document.getElementById("name2").value;
  var phone = document.getElementById("phone").value;
  var Email = document.getElementById("Email").value;
  var gender = document.getElementById("gender").value;

  var person = new Person(name, phone, Email, gender);
  contacts.push(person);

  $("#name2").val("");
  $("#phone").val("");
  $("#Email").val("");

  filterList();
  $("#Unlist").listview("refresh");

  return false;
}

//gender image
function gender(person) {
  var img = document.getElementById("img");
  if (person.gender === "Female") {
    img.src = "Female.png";
  } else {
    img.src = "Male.png";
  }
}

//thirdPage content(contact data)
function thirdPage(id) {
  var myPerson = contacts.find((x) => x.id === id);
  document.getElementById("header").textContent = myPerson.name;
  gender(myPerson);
  viewedContact = myPerson;
  // console.log(myPerson.name);
  // console.log(contacts);
}

//remove contact
function remove() {
  // console.log(viewedContact);
  var index = contacts.indexOf(viewedContact);
  if (index > -1) {
    contacts.splice(index, 1);
  }
  filterList();
  console.log(contacts);
}

//edit page
function editPages() {
  console.log(viewedContact);
  document.getElementById("editName").value = viewedContact.name;
  document.getElementById("editPhone").value = viewedContact.phone;
  document.getElementById("editEmail").value = viewedContact.Email;
  document.getElementById("editGender").value = viewedContact.gender;
}

//save edit
function editSave() {
  viewedContact.name = document.getElementById("editName").value;
  viewedContact.phone = document.getElementById("editPhone").value;
  viewedContact.Email = document.getElementById("editEmail").value;
  viewedContact.gender = document.getElementById("editGender").value;
  filterList();
}

//cancel edit
function editCancel() {
  window.location = "#thirdPage";
}
