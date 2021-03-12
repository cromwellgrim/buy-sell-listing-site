// renders created listing in the my listings tab

$(document).ready(function () {
  $.ajax({
    url: "/",
    method: "GET",
    dataType: "JSON",
    success: (listing) => {
      renderListings(Object.values(listing));
    }
  })
  $("#mylistingslink").on("click", function (event) {
     event.preventDefault();
     let currentUser = document.cookie
     $("#list").empty()
     $("#page-title").replaceWith("<p id='page-title'>My Listings</p>")


     $.ajax({
      method: "POST",
      url: "/api/listings/listings"
    }).done((listings) => {
      console.log("listing are here in 23", listings)
      for (let listing of listings) {
        if (currentUser === ('user='+listing.name)) {
          const container = $("<div id='adbox'>")
          const imgContainer = $("<div id='imgContainer'>").appendTo(container)
          const textContainer = $("<div id='textContainer'>").appendTo(container)
          // const deleteForm = $("<form action='/api/listings/listings/delete' method='POST' id='delete-listing-form'>").appendTo(container)
          $("<div id='adtitle'>").text(listing.title).appendTo(imgContainer)
          $("<img class='thumbnail'>").attr("src", listing.thumbnail_photo).appendTo(imgContainer)
          $("<div>").text("Seller: " + listing.name).appendTo(textContainer)
          $("<div>").text("Price: $" + listing.price).appendTo(textContainer)
          $("<div>").text("Year: " + listing.year).appendTo(textContainer)
          $("<div>").text("Make: " + listing.make).appendTo(textContainer)
          $("<div>").text("Model: " + listing.model).appendTo(textContainer)
          $("<div>").text("ID: " + listing.listings_id).appendTo(textContainer)
          $("<div>").text(listing.description).appendTo(textContainer)
          $("<button onclick='removeElement()' type='submit id='delete-listing-button' class='button'>").text('DELETE').appendTo(textContainer)
          container.appendTo($("#list"))
        }
      }
    })
    })

  })
