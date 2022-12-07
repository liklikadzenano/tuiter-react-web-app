import PostSummaryItem from "./PostSummaryItem";
import posts from "./posts"



const PostSummaryList = () => {
    // eslint-disable-next-line no-undef
    return (`
        
        <ul class="list-group">

         
        ${posts.map(post => (PostSummaryItem(post)))}

        </ul>
               
    `)
}
export default PostSummaryList;