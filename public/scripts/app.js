/* brings all listings to the home page */
$(document).ready(function () {
  $.ajax({
    method: "GET",
    url: "/api/listings"
  }).done((listings) => {

    for (let listing of listings) {
      const container = $("<div id='adbox'>")
      const imgContainer = $("<div id='imgContainer'>").appendTo(container)
      const textContainer = $("<div id='textContainer'>").appendTo(container)
      $("<div id='adtitle'>").text(listing.title).appendTo(imgContainer)
      $("<img class='thumbnail'>").attr("src", listing.thumbnail_photo).appendTo(imgContainer)
      $("<div>").text("Seller: " + listing.name).appendTo(textContainer)
      $("<div>").text("Price: $" + listing.price).appendTo(textContainer)
      $("<div>").text("Year: " + listing.year).appendTo(textContainer)
      $("<div>").text("Make: " + listing.make).appendTo(textContainer)
      $("<div>").text("Model: " + listing.model).appendTo(textContainer)
      $("<div>").text(listing.description).appendTo(textContainer)
      $("<a href='#' id='contact'>").text("Contact Seller").appendTo(textContainer)
      $("<div id='phone' class='hidden'>").text("(604)235-7249").appendTo(textContainer)
      const $favourite = $(`<i id='listing-${listing.listing_id}-${listing.user_id}' class='fas fa-plane'>`)
      $favourite.appendTo(textContainer)
      container.appendTo($("#listings"))

      // $('#contact').on('click', function(event) {
      //   event.preventDefault()
      //   $("#phone").hide().show()
      // })


    $favourite.on("click", function (event) {
      event.preventDefault()
      const listingIdString = $(event.target).attr("id")
      const [listing, listing_id, user_id] = listingIdString.split("-")
      const favouritesInfo = [listing, listing_id, user_id]
      console.log("fav info", favouritesInfo)

      $.ajax({
        method: "POST",
        url: "/api/favourites",
        data: {listing_id: listing_id, user_id: user_id}
      })

    });
    }
  })
})

/* grabs a users favourites to put on the page */
$(document).ready(function () {
  $("#favouritelistingslink").on("click", function (event) {
    event.preventDefault();
    console.log("favourite listings link")
    $("#list").empty()
    $("#page-title").replaceWith("<p id='page-title'>Favourite Listings</p>")
    $.ajax({
      url: "/api/favourites",
      method: "GET",
    }).done((listings) => {
      console.log("listings on favourites", listings)
      for (let listing of listings) {
          const container = $("<div id='adbox'>")
          const imgContainer = $("<div id='imgContainer'>").appendTo(container)
          const textContainer = $("<div id='textContainer'>").appendTo(container)
          $("<div id='adtitle'>").text(listing.title).appendTo(imgContainer)
          $("<img class='thumbnail'>").attr("src", listing.thumbnail_photo).appendTo(imgContainer)
          $("<div>").text("Seller: " + listing.name).appendTo(textContainer)
          $("<div>").text("Price: $" + listing.price).appendTo(textContainer)
          $("<div>").text("Year: " + listing.year).appendTo(textContainer)
          $("<div>").text("Make: " + listing.make).appendTo(textContainer)
          $("<div>").text("Model: " + listing.model).appendTo(textContainer)
          $("<div>").text(listing.description).appendTo(textContainer)
          container.appendTo($("#list"))
      }
    })
  })
})

/* controls navbar transparency on scroll */
$(document).ready(function() {
  // Transition effect for navbar
  $(window).scroll(function() {
    // checks if window is scrolled more than 500px, adds/removes solid class
    if($(this).scrollTop() > 180) {
      $('.navbar').addClass('solid');
    } else {
      $('.navbar').removeClass('solid');
    }
    if($(this).scrollTop() > 200) {
      $('.search-container').fadeOut()
    } else {
      $('.search-container').fadeIn()
    }
  });
});

/* this reveals user links and hides the login button */
$(document).ready(function () {
	$(".login-button").on("click", function (event) {
    event.preventDefault();
    $(".sellerLinks").removeClass("hidden").addClass("visible");
    $("#login").toggle("show");
	});
});

/* html article creater for each listing */
const createListingElement = function (listing) {
    const $listing = $(`
    <div id='adbox'>

      <div id='imgContainer'>
        <div id='adtitle'>${listing.title}</div>
        <img class='thumbnail' src="${listing.thumbnail_photo}" />
      </div>

      <div id='textContainer'>
        <div>Seller: ${listing.name}</div>
        <div>Price: $${listing.price}</div>
        <div>Year: ${listing.year}</div>
        <div>Make: ${listing.make}</div>
        <div>Model: ${listing.model}</div>
        <div>${listing.description}</div>
        <a href='#' id='contact'>Contact Seller</a>
        <div id='phone' class='hidden'>(604)235-7249</div>
      </div>

    </div>
    `);
    return $listing;
  };

/* This toggles the visibility of the seller contact info */
$(document).ready(function () {
  $("#contact").on("click", function (event) {
    $("#phone").removeClass("hidden").addClass("visible");
  })
})

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

/////////////
/* SEARCH */
////////////
  $(document).ready(function () {
    getListingsForSearch();
    $("#search").on("submit", function (event) {
      event.preventDefault();
      $.ajax({
        url: "/api/listings/search",
        method: "POST",
        data: $(this).serialize(),
      }).then((listings) => {
        $("#search").val("")
        $("#page-title").replaceWith("<p id='page-title'>Searched Listings</p>")
        renderListings(Object.values(listings.listings));
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

/* toggle stretch goal 2: sends user back to top of screen */
$(document).ready(function () {
	$(".to-the-top").hide();

	$(window).on("scroll", function (event) {
		const showArrow = 300;
		if ($(this).scrollTop() > showArrow) {
			$(".to-the-top").fadeIn();
		} else {
			$(".to-the-top").fadeOut();
		}
	});

	$(".to-the-top").on("click", function (event) {
		$("html, body").animate({ scrollTop: 0 }, 800);
		return false;
	});
});
