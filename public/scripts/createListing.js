/*  creates the container for a form to be filled out to make a new listing */
$(document).ready(function () {
  $("#createlistingslink").on("click", function (event) {
     event.preventDefault();
     console.log(event)
     $("#list").empty()
     $("#page-title").replaceWith("<p id='page-title'>Create A Listing</p>")
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
