// Make sure we wait to attach our handlers until the DOM is fully loaded.

  $(".update-order").on("click", function(event) {
    var id = $(this).data("id");
    console.log("Update",id)
      // Send the PUT request.
    $.ajax("/api/burgers/" + id, {
      type: "PUT",
     
    }).then(
      function() {
        console.log("burger updated", "updateBurger");
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

  $("#create-form").on("submit", function(event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();

    var newBurger ={
      burger_name: $("#burger_name").val().trim(),
      
    };
    console.log("post",newBurger)
    // Send the POST request.
    $.ajax("/api/burgers", {
      type: "POST",
      data: newBurger
    }).then(
      function() {
        console.log("created neworder");
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

  $(".delete-order").on("click", function(event) {
    var id = $(this).data("id");
    console.log("delete", id)
    // Send the DELETE request.
    $.ajax("/api/burgers/", + id, {
      type: "DELETE"
    }).then(
      function() {
        console.log("deleted burger", id);
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });


  console.log("JS")