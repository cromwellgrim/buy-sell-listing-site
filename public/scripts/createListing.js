/*  creates the container for a form to be filled out to make a new listing */
$(document).ready(function () {
  $("#createlistingslink").on("click", function (event) {
     event.preventDefault();
     $("#list").empty()
     $("#page-title").replaceWith("<p id='page-title'>Create A Listing</p>")
     $("#list").prepend(`
      <div class="create-container">
        <form action="/api/listings" method="POST" id="createlisting">
          <input name="seller_id" type="number" class="create-input" placeholder="Seller ID"></input>
          <input name="title" type="text" class="create-input" placeholder="title"></input>
          <input name="description" type="text" class="create-input" placeholder="Description"></input>
          <input name="price" type="number" class="create-input" placeholder="Price"></input>
          <input name="thumbnail_photo" type="text" class="create-input" placeholder="Photo"></input>
          <input name="year" type="number" class="create-input" placeholder="Year"></input>
          <input name="make" type="text" class="create-input" placeholder="Make"></input>
          <input name="model"type="text" class="create-input" placeholder="Model"></input>
          <button type="submit" id="listing-button" class="button">Create Listing</button>
        </form>
      </div>
      `)

      })

  })


$(document).ready(function () {
  $("#listing-button").on("click", function () {
    console.log("pre-listing button click")
    console.log("window location", window.location)
    window.location.href="/"

    })
})

// $(document).ready(function () {
//   $("#createlisting").on("submit", function(event) {
//     event.preventDefault();

//     console.log("we're back to the main page")
//     $("#list").empty()
//     $("page-title").replaceWith("<p id='page-title'>Featured Listings</p>")
//     $.ajax({
//       method: "GET",
//       url: "/api/listings"
//     }).done((listings) => {

//       for (let listing of listings) {
//         const container = $("<div id='adbox'>")
//         $("<div id='adtitle'>").text(listing.title).appendTo(container)
//         $("<div>").text("Seller: " + listing.name).appendTo(container)
//         $("<div>").text(listing.description).appendTo(container)
//         $("<div>").text("$" + listing.price).appendTo(container)
//         $("<img class='thumbnail'>").attr("src", listing.thumbnail_photo).appendTo(container)
//         $("<div>").text("Year: " + listing.year).appendTo(container)
//         $("<div>").text("Make: " + listing.make).appendTo(container)
//         $("<div>").text("Model: " + listing.model).appendTo(container)
//         container.appendTo($("#list"))
//       }

//     })
//   })
// })
