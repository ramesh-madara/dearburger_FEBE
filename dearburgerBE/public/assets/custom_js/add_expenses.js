console.log("Works");
/**
 * Filters the expenses form groups based on the provided keyword.
 *
 * @param {string} keyWord - The keyword to filter the expenses form groups by. If 'All', all form groups will be shown.
 */
var categotyFilter = "All";
function filterResults(keyWord) {
  categotyFilter = keyWord;
  $(".expenses-form-group").show();

  if (keyWord !== "All") {
    $(".category-name-input").each(function () {
      if ($(this).val() !== keyWord) {
        $(this).closest(".expenses-form-group").hide();
      }
    });
  }
}

/**
 * Adds a keyup event listener to the '#searchInput' element that filters the '.expenses-form-group' elements based on the search term entered.
 * When the user types into the search input, the function will hide any '.expenses-form-group' elements whose '.expenses-item-label' text does not contain the search term (case-insensitive).
 * This allows the user to quickly find and focus on specific expense items in the form.
 */
$(document).ready(function () {
  $("#searchInput").on("keyup", function () {
    var searchTerm = $(this).val().toLowerCase();
    $(".expenses-form-group").each(function () {
      var itemName = $(this).find(".expenses-item-label").text().toLowerCase();
      var itemName2 = $(this).find(".category-name-input").text().toLowerCase();
      console.log(itemName2);
      if (itemName.indexOf(searchTerm) === -1) {
        $(this).hide();
      } else {
        $(this).show();
      }
    });
  });
});

/**
 * Handles the submission of the 'quickForm' form on the page.
 * - Prevents the default form submission behavior.
 * - Serializes the form data and sends it to the '/addExpenses/save' endpoint via an AJAX POST request.
 * - Includes the user's authentication token in the request headers.
 * - If the token is not found in localStorage, redirects the user to the '/' page.
 * - On successful submission, clears the values of all '.expenses-input' elements.
 * - On error, logs the error to the console.
 */
$(document).ready(function () {
  $("#quickForm").submit(function (event) {
    event.preventDefault();
    var formData = $(this).serialize();

    var token = localStorage.getItem("token");
    if (!token) {
      window.location.href = "/";
    } else {
    }

    $.ajax({
      type: "POST",
      url: "/addExpenses/save",
      data: formData,
      headers: {
        Authorization: "Bearer " + token,
      },
      success: function (response) {
        console.log("Form submitted successfully");
        $(".expenses-input").each(function () {
          $(this).prop("value", "");
        });
      },
      error: function (xhr, status, error) {
        console.error("Error submitting form:", error);
      },
    });
  });
});
