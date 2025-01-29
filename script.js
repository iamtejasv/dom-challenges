// challenge 1

document
  .getElementById("changeTextButton")
  .addEventListener("click", function () {
    let paragraph = document.getElementById("myParagraph");
    paragraph.textContent = "the paragraph is changed";
  });

// challenge 2

document
  .getElementById("highlightFirstCity")
  .addEventListener("click", function () {
    let citiesList = document.getElementById("citiesList");
    citiesList.firstElementChild.classList.add("highlight");
  });

// challenge 3

document.getElementById("changeOrder").addEventListener("click", function () {
  let coffeeType = document.getElementById("coffeeType");
  coffeeType.textContent = "expresso";
  coffeeType.style.backgroundColor = "brown";
  coffeeType.style.padding = "5px";
});

// challenge 4

document.getElementById("addNewItem").addEventListener("click", function () {
  let newItem = document.createElement("li");
  newItem.textContent = "eggs";
  document.getElementById("shoppingList").appendChild(newItem);
});

// challenge 5

document.getElementById("removeLastTask").addEventListener("click", function () {
  let taskList = document.getElementById("tasklist");
  taskList.lastElementChild.remove();
});

// challenge 6

document.getElementById("clickMeButton").addEventListener("dblclick", function () {
  alert("helloworld")
})

// challenge 7

document.getElementById("teaList").addEventListener("click", function(event) {
  if (event.target && event.target.matches('.teaItem')) {
    alert('you selected: ' + event.target.textContent);
  }
  
})

// challenge 8

document.getElementById("feedbackForm").addEventListener('submit', function(event) {
  event.preventDefault();
  let feedback = document.getElementById("feedbackInput").value;
  console.log(feedback);
  document.getElementById("feedbackDisplay").textContent =
    `feedback is: ${feedback}`;
})