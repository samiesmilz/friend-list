const unFriendButtons = document.querySelectorAll("ol button");

// for (let button of unFriendButtons) {
//   button.addEventListener("click", function (e) {
//     e.target.parentElement.remove();
//   });
// }

const addFriend = document.querySelector("#add-friend");
const newFriend = document.getElementById("first-name");
const friendList = document.querySelector("ol");

addFriend.addEventListener("submit", function (e) {
  e.preventDefault();

  let friendsName = newFriend.value;
  const newListItem = document.createElement("li");
  const newButton = document.createElement("button");

  // // One way of solving the problem of added button not working ===> Not best solution
  // newButton.addEventListener("click", function (e) {
  //   e.target.parentElement.remove();
  // });

  newButton.innerText = "Un-Friend";
  newListItem.innerText = friendsName;
  newListItem.append(newButton);
  friendList.prepend(newListItem);
  newFriend.value = "";
});

// Better solution is to add a delegate event listener
// friendList.addEventListener("click", function (e) {
//   if (e.target.tagName === "BUTTON") {
//     e.target.parentElement.remove();
//   }
// });

// This can also be written as => we remove the work function
// friendList.addEventListener("click", (e) => {
//   if (e.target.tagName === "BUTTON") {
//     const listItem = e.target.closest("li");
//     listItem.remove();
//   }
// });

// It cans still be improved - where we use matches("button")
// friendList.addEventListener("click", (e) => {
//   if (e.target.matches("button")) {
//     e.target.parentElement.remove();
//   }
// });

//It can further be improved and destructured to only focus on what we want form the event
friendList.addEventListener("click", ({ target }) => {
  if (target.matches("button")) {
    target.parentElement.remove();
  } else if (target.matches("li")) {
    target.classList.toggle("blocked");
  }
});
