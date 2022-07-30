/**
 * When the document is ready we need to load the JSON from the APIs.
 * This is just a event listener provided by Jquery to listen to the load event of the document
 */
$(document).ready(async function () {
  // We will load the json from the API once the document load is done
  let blog = new Letter();

  // Show the loader
  showLoader();

  // Fetch the data
  try {
    await blog.get();

    // We need to draw the data in the document
    draw(blog.posts);
  } catch (error) {
    showError();
  }
});

/**
 * Function to show error in the HTML document
 * @param {String} error The error message
 */
let showError = (error) => {
  $("#loader").addClass("d-none");
  $("#json-text-area").addClass("d-none");
  $("#json-error").removeClass("d-none");
  $("#json-error").html(error);
};

/**
 * Function to show the loader in the HTML document
 */
let showLoader = () => {
  $("#loader").removeClass("d-none");
  $("#json-text-area").addClass("d-none");
  $("#json-error").addClass("d-none");
};

/**
 * Function to draw the posts JSON data on the
 * @param {Object} posts The array object which contains the user list and the posts
 */
let draw = (posts) => {
  $("#loader").addClass("d-none");
  $("#json-text-area").removeClass("d-none");
  $("#json-text-area pre").html(library.json.prettyPrint(posts));
  $("#json-error").addClass("d-none");
};
