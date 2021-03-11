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
    console.log("my listings link is here")
     event.preventDefault();
     let currentUser = $("#currentUser").val();
     $("#list").empty()
     $("#page-title").replaceWith("<p id='page-title'>My Listings</p>")


     $.ajax({
      method: "POST",
      url: "/api/listings/listings"
    }).done((listings) => {

      for (let listing of listings) {
        if (currentUser === listing.name) {
        const container = $("<div id='adbox'>")
        $("<div id='adtitle'>").text(listing.title).appendTo(container)
        $("<div>").text("Seller: " + listing.name).appendTo(container)
        $("<div>").text(listing.description).appendTo(container)
        $("<div>").text("$" + listing.price).appendTo(container)
        $("<img class='thumbnail'>").attr("src", listing.thumbnail_photo).appendTo(container)
        $("<div>").text("Year: " + listing.year).appendTo(container)
        $("<div>").text("Make: " + listing.make).appendTo(container)
        $("<div>").text("Model: " + listing.model).appendTo(container)
        container.appendTo($("#list"))
        }
      }
    })
    })

  })
