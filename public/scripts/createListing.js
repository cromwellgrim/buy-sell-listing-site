const{ createListingElement } = require('./app')


$(document).ready(function () {
  $("#createlistinglink").on("submit", function (event) {
    event.preventDefault();
    let currentUser = $("#login-text").val();
  $.ajax({
    method: "GET",
    url: "/api/create",
    data: $(this).serialize(),
  }).then(() => {
      $("#listing").replaceWith('
      <div class="create-container">
        <input name="price" type="text" class="" placeholder="seller ID"></input>
        <input name="price" type="text" class="" placeholder="title"></input>
        <input name="price" type="text" class="create-description" placeholder="description"></input>
        <input name="price" type="text" class="create-price" placeholder="Price"></input>
        <input name="price" type="text" class="create-year" placeholder="Year"></input>
        <input name="make" type="text" class="create-make" placeholder="Make"></input>
        <input name="model"type="text" class="create-model" placeholder="Model">
        <button type="submit" class="button">Create Listing</button>
      </div>
        ')

      })
})
})




{/* $(document).ready(function () {
  $("#createlistinglink").on("submit", function (event) {
    event.preventDefault();
    let currentUser = $("#login-text").val();
  $.ajax({
    method: "GET",
    url: "/api/create",
    data: $(this).serialize(),
  }).then((users) => {
    for (let user of users) {
      if (currentUser === user.name) {
        return $("<div>").text(user.name).appendTo("#currentUser")
        // $('li#currentUser').append('<div>${user.name}</div>');



      }
    }
  })
})
}) */}
