// $(() => {
//   $.ajax({
//     method: "GET",
//     url: "/api/users"
//   }).done((users) => {
//     for(user of users) {
//       $("<div>").text(user.name).appendTo($("#listings"));
//     }
//   });;
// });

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

    // let listArr = [];
    // console.log("object.entries", Object.entries(listings));
    // for (let listing of listings) {
    //   listArr.push(listing);
    // }
    // for (let i = 0; i < listArr.length; i++) {
    //   console.log("listArr", listArr[i])
    // $("<tr>").text(listArr[i]).appendTo($("tbody"));
    // }

  });;
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
