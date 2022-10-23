import WhoToFollowListItem from "./WhoToFollowListItem";
import who from "./who"

const WhoToFollowList = () => {
        // eslint-disable-next-line no-undef
        return (`
        
        <ul class="list-group bg-dark">
        <li class="list-group-item fw-bolder text-white bg-dark">
                        Who to follow
        </li>

         
        ${who.map(each => (WhoToFollowListItem(each)))}
        

        </ul>
               
    `)
}
export default WhoToFollowList;

