import posts from "./posts.js"
import PostItem from "./PostItem";

const PostList = () => {
    return (`
    <ul class="list-group bg-black">
     ${posts.map(post => (PostItem(post)))}
    </ul>
    `)
}
export default PostList