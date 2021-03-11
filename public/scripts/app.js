/* brings all listings to the home page */
$(document).ready(function () {
  $.ajax({
    method: "GET",
    url: "/api/listings"
  }).done((listings) => {

    for (let listing of listings) {
      const container = $("<div id='adbox'>")
      $("<div id='adtitle'>").text(listing.title).appendTo(container)
      $("<div>").text("Seller: " + listing.name).appendTo(container)
      $("<div>").text(listing.description).appendTo(container)
      $("<div>").text("$" + listing.price).appendTo(container)
      $("<img class='thumbnail'>").attr("src", listing.thumbnail_photo).appendTo(container)
      $("<div>").text("Year: " + listing.year).appendTo(container)
      $("<div>").text("Make: " + listing.make).appendTo(container)
      $("<div>").text("Model: " + listing.model).appendTo(container)
      container.appendTo($("#listings"))
    }

  })
})

/* controls navbar transparency on scroll */
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

/* this reveals user links and hides the login button */
$(document).ready(function () {
	$(".login-button").on("click", function (event) {
    $(".sellerLinks").removeClass("hidden").addClass("visible");
    $("#login").toggle("show");
	});
});

/* html article creater for each listing */
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
    return $listing;
  };

/* moves through the listings and uses createListingElement function on each listing - part of SEARCH */
  const renderListings = function (listings) {
    $("#list").empty()
    for (let listing of listings) {
      $("#list").prepend(createListingElement(listing));
    }
  };

/* retrieves listings from the database - part of SEARCH */
  const getListingsForSearch = function () {
    $.ajax({
      url: "/",
      method: "GET",
      dataType: "JSON",
      success: (listing) => {
        renderListings(Object.values(listing));
      },
    });
  };

/* SEARCH */
  $(document).ready(function () {
    getListingsForSearch();
    $("#search").on("submit", function (event) {
      event.preventDefault();
      $.ajax({
        url: "/api/listings/search",
        method: "POST",
        data: $(this).serialize(),
      }).then((listings) => {
        console.log("listings in ajax", listings)
        $("#search").val("")
        $("#page-title").replaceWith("<p id='page-title'>Searched Listings</p>")
        renderListings(Object.values(listings.listings));
      })
    })
  })

/* LOGIN */
  $(document).ready(function () {
    $("#login").on("submit", function (event) {
      event.preventDefault();
      let currentUser = $("#login-text").val();
    $.ajax({
      method: "GET",
      url: "/api/users",
      data: $(this).serialize(),
    }).then((users) => {
      for (let user of users) {
        console.log("user.name in-for loop", user.name)
        console.log("currentUser in loop here", currentUser)
        if (currentUser === user.name) {
          return $("<div>").text(user.name).appendTo("#currentUser")

        }
      }

    })
  })
  })


/* to be reserved for timestamping listings */
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
// }
