import React from "react";
import HomeList from "./homeItem";
import homeArray from  "./homePosts.json"

const HomeComponent = () => {
    return(
        <ul className="list-group">
            {
                homeArray.map(post =>
                                   <HomeList
                                       key={post._id} post={post}/> )
            }
        </ul>
    );
};
export default HomeComponent;
