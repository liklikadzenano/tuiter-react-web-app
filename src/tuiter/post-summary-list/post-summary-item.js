import React from "react";

const PostSummaryItem = (
    {
        tuit = {
            topic: "Space",
            userName: "SpaceX",
            time: "2h",
            title: "Tesla Cybertruck lands on Mars and picks up the Curiosity rover on its 6' bed",
            image: "../../../../images/tesla.png"
        }
    }
) => {
    return(

        <li className="list-group-item bg-white">
            <div className="row">
                <div className="col-10">
                    <div className="text-secondary fw-bolder"> {tuit.userName} - {tuit.time} </div>

                    <div className="fw-bolder text-black">
                        {tuit.topic}
                    </div>
                    <div className="fw-bolder text-black">
                        {tuit.title}
                    </div>

                </div>
                <div className="col-2">
                    <img src= {tuit.image}  className="float-end" height="100px"/>
                </div>
            </div>
        </li>

    );


}
export default PostSummaryItem;

