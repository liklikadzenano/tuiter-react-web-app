import PostList from "../PostList/PostList";

function homescreenComponent() {
    $('#wd-home').append(`
      ${PostList()}
   `);
}
$(homescreenComponent);