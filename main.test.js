const userSuccessResponse = new Response(
  JSON.stringify([
    {
      id: 1,
      name: "Leanne Graham",
      username: "Bret",
      email: "Sincere@april.biz",
      address: {
        street: "Kulas Light",
        suite: "Apt. 556",
        city: "Gwenborough",
        zipcode: "92998-3874",
        geo: {
          lat: "-37.3159",
          lng: "81.1496",
        },
      },
      phone: "1-770-736-8031 x56442",
      website: "hildegard.org",
      company: {
        name: "Romaguera-Crona",
        catchPhrase: "Multi-layered client-server neural-net",
        bs: "harness real-time e-markets",
      },
    },
  ]),
  {
    status: 200,
    statusText: "OK",
  }
);

const postsSuccessResponse = new Response(
  JSON.stringify([
    {
      userId: 1,
      id: 1,
      title:
        "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
      body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
    },
    {
      userId: 1,
      id: 2,
      title: "qui est esse",
      body: "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla",
    },
  ]),
  {
    status: 200,
    statusText: "OK",
  }
);


describe("Validate the Letter object creation", () => {
  it("Successfull data fetch", async () => {
    spyOn(window, "fetch")
      .withArgs(USERS_API)
      .and.returnValue(userSuccessResponse)
      .withArgs(POSTS_API)
      .and.returnValue(postsSuccessResponse);

    let blog = new Letter();
    await blog.get();
    expect(blog.posts[0].id).toEqual(1);
    expect(blog.posts[0].name).toEqual("Leanne Graham");
    expect(blog.posts[0].posts[0].id).toEqual(1);
  });

  it("Data fetch error", async () => {
    spyOn(window, "fetch")
      .withArgs(USERS_API)
      .and.returnValue(Promise.reject())
      .withArgs(POSTS_API)
      .and.returnValue(postsSuccessResponse);

    let blog = new Letter();
    await expectAsync(blog.get()).toBeRejectedWith(
      new Error("Could not fetch data")
    );
  });
});
