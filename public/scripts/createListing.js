
$(document).ready(function () {
  $("#createlistingslink").on("click", function (event) {
     event.preventDefault();
     console.log(event)
     $("#list").empty()
     $("#page-title").replaceWith("<p>Create A Listing</p>")
    return $("#list").prepend(`

      <div class="create-container">
      <form action="api/listings/" method="POST" id="createlisting">
        <input name="seller_id" type="number" class="create-input" placeholder="Seller ID"></input>
        <input name="title" type="text" class="create-input" placeholder="title"></input>
        <input name="description" type="text" class="create-input" placeholder="Description"></input>
        <input name="price" type="number" class="create-input" placeholder="Price"></input>
        <input name="thumbnail_photo" type="text" class="create-input" placeholder="Photo"></input>
        <input name="year" type="number" class="create-input" placeholder="Year"></input>
        <input name="make" type="text" class="create-input" placeholder="Make"></input>
        <input name="model"type="text" class="create-input" placeholder="Model"></input>

          <button type="submit" class="button">Create Listing</button>
        </form>
      </div>
      `)
    })
  }
)

// $(document).ready(function () {
//   $("#createlisting").on("click", function(event) {
//     let listingsData = $(".create-container").val()
//   })
//   return $.ajax({
//     method: "POST",
//     url: "/api/listings",
//     data: listingsData.serialize()
//   }).then((listings) => {
//     console.log("listings", listings)
//     addListings(listingsData, listings)
//     console.log("listings after", listings)

//   })
// })

/* $(document).ready(function () {
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
}) */
