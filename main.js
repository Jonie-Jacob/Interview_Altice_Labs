const USERS_API = `https://jsonplaceholder.typicode.com/users`;
const POSTS_API = `https://jsonplaceholder.typicode.com/posts`;

/**
 * Function to get the data from a API
 * @param {String} link The API to fetch the data from
 * @returns {Promise} The promise will be resolved with the data from API
 */
let fetchJson = async (link) => {
  try {
    let result = await fetch(link);
    return await result.json();
  } catch (error) {
    throw new Error("Error in fetching the data");
  }
};

/**
 * The funcion constructor for the Letter object
 */
function Letter() {
  this.posts = [];
  this.get = get;
}

/**
 * Function to get the data
 */
async function get() {
  let users = [];
  let allPosts = [];

  // Fetch the users
  try {
    users = await fetchJson(USERS_API);
  } catch (error) {
    console.error("Could not fetch users", error);
    throw new Error("Could not fetch data");
  }

  // Fetch the posts
  try {
    allPosts = await fetchJson(POSTS_API);
  } catch (error) {
    console.error("Could not fetch posts", error);
    throw new Error("Could not fetch data");
  }

  // We are using the below approach for better time complexity.
  // The below approach will have only O(n) time complexity

  // Construct the final object
  let postMap = {};
  // Iterate through each post and create post map with user id as key
  for (let post of allPosts) {
    postMap[post.userId] = postMap?.[post.userId]
      ? [
          ...postMap[post.userId],
          { id: post.id, title: post.title, body: post.body },
        ]
      : [{ id: post.id, title: post.title, body: post.body }];
  }

  let result = [];
  // Iterate through each user and construct the final object
  for (let user of users) {
    let { id, name, username, email, address, phone, website, company } = user;
    result.push({
      id,
      name,
      username,
      email,
      address: `${address.street}, ${address.suite} - ${address.zipcode} ${address.city}`,
      phone,
      website,
      company: company.name,
      posts: postMap[id],
    });
  }

  this.posts = result;
}
