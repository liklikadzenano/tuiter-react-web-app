import React from "react";
import HeartConditional from "./conditional";

const TuitStats = (
    {

        tuit = {

            topic: "Web Development",
            userName: "Jquery",
            title: "jQuery",
            time: "last week",
            image: "../../../../images/jquery.png",
            tweets: "122K",
            liked: true,
            replies: 123,
            retuits: 202,
            likes: 2345,
            handle: "@jQuery",
            tuit: "You want to wake up in the morning and think the future is going to be great - and that’s what being a spacefaring civilization is all about. It’s about believing in the future and thinking that the future will be better than the past. And I can’t think of anything more exciting than going out there and being among the stars"
        }
    }
) => {


    return (
        <div className="row">

            <div className="col-3">
                 <span className="text-secondary">
                     <i className="bi bi-chat"></i>
                     {tuit.replies}
                 </span>
            </div>

            <div className={"col-3"}>
                <span className="text-secondary">
                    <i className="bi bi-reply"></i>
                    {tuit.retuits}
                </span>
            </div>




            <div className={"col-3"}>

                <HeartConditional tuit={tuit}/>



            </div>

        <div className={"col-3"}>

            <i className="bi bi-download"></i>

        </div>

        </div>
    )
}
export default TuitStats
