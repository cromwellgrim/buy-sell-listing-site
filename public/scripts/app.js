
$(() => {
  $.ajax({
    method: "GET",
    url: "/api/listings"
  }).done((listings) => {

    for (let listing of listings) {
      const container = $("<div class='listing'>")
      $("<div>").text(listing.title).appendTo(container)
      $("<div>").text(listing.name).appendTo(container)
      $("<div>").text(listing.description).appendTo(container)
      $("<div>").text(listing.price).appendTo(container)
      $("<img class='thumbnail'>").attr("src", listing.thumbnail_photo).appendTo(container)
      $("<div>").text(listing.year).appendTo(container)
      $("<div>").text(listing.make).appendTo(container)
      $("<div>").text(listing.model).appendTo(container)
      container.appendTo($("#listings"))
    }

  })
})

$(document).ready(function() {
  // Transition effect for navbar
  $(window).scroll(function() {
    // checks if window is scrolled more than 500px, adds/removes solid class
    if($(this).scrollTop() > 500) {
      $('.navbar').addClass('solid');
    } else {
      $('.navbar').removeClass('solid');
    }
  });
});



  const createListingElement = function (listing) {
    console.log("at start of func", listing)
    const $listing = $(`
    <article class="listing-article">
    <header class="listing-container-header">
    <p>${listing.title}</p
    <p>${listing.price}</p>
    <p>${listing.name}</p>
    <form action="/listings/:id" method="GET" class="singleListing">
    <button type="submit" class="button">Contact Seller</button>
    </form>
    <div class="listing-pic-name">
    <img class="listing-pic" src="${listing.thumbnail_photo}"/>
    <p>${listing.make}</p>
    <p>${listing.model}</p>
    <p>${listing.year}</p>
    </div>
    </header>
    <p>${listing.description}</p>
    <hr>
    <footer class="listing-container-footer">
    </footer>
    </article>
    `);
    console.log("create listing function here", listing)
    return $listing;
  };

  const renderListings = function (listings) {
    $("#list").empty();
    console.log("after empty", listings)
    for (let listing of listings) {
      console.log("create listing here", listing)
      $("#list").prepend(createListingElement(listing));
    }
  };

  const getListings = function () {
    $.ajax({
      url: "/",
      method: "GET",
      dataType: "JSON",
      success: (listing) => {
        renderListings(Object.values(listing));
      },
    });
  };

  $(document).ready(function () {
    getListings();
    $("#search").on("submit", function (event) {
      event.preventDefault();
      console.log("this is working")
      $.ajax({
        url: "/api/listings",
        method: "POST",
        data: $(this).serialize(),
      }).then((listings) => {
        console.log("listings in ajax", listings)
        $("#search").val("")
        console.log(listings.listings)
        renderListings(Object.values(listings.listings));
      })
    })
  });
// const timeSinceTweet = function (now, before) {
// 	const timePassed = now - before;
// 	const minute = 60 * 1000;
// 	const hour = minute * 60;
// 	const day = hour * 60;

// 	if (timePassed < minute) {
// 		return Math.round(timePassed / 1000) + " seconds ago";
// 	} else if (timePassed < hour) {
// 		return Math.round(timePassed / minute) + " minutes ago";
// 	} else if (timePassed < day) {
// 		return Math.round(timePassed / hour) + " hours ago";
// 	} else if (timePassed > day) {
// 		return "This tweet happened a long time ago";
// 	}
// };
