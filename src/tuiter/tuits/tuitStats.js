import React from "react";
import {updateTuitThunk} from "../../services/tuits-thunks";
import {useDispatch} from "react-redux";

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
            dislikes:456,
            handle: "@jQuery",
            tuit: "You want to wake up in the morning and think the future is going to be great - and that’s what being a spacefaring civilization is all about. It’s about believing in the future and thinking that the future will be better than the past. And I can’t think of anything more exciting than going out there and being among the stars"
        }
    }
) => {
    const dispatch = useDispatch();

    return (
        <div className="row">

            <div className="col-2">
                 <span className="text-secondary">
                     <i className="bi bi-chat"></i>
                     {tuit.replies}
                 </span>
            </div>

            <div className={"col-2"}>
                <span className="text-secondary">
                    <i className="bi bi-reply"></i>
                    {tuit.retuits}
                </span>
            </div>




            <div className={"col-3"}>
                <i onClick={() => dispatch(updateTuitThunk({
                                                               ...tuit,
                                                               likes: tuit.likes + 1
                                                           }))} className="bi bi-heart-fill me-2 text-danger"></i>

                <span className={"text-secondary"}>{tuit.likes}</span>


            </div>

            <div className={"col-2"}>


                <i onClick={() => dispatch(updateTuitThunk({
                                                               ...tuit,
                                                               dislikes: tuit.dislikes + 1
                                                           }))} className="bi bi-hand-thumbs-down-fill"></i>
                <span className={"text-secondary"}>{tuit.dislikes}</span>



            </div>

            <div className={"col-1 "}>

                <i className="bi bi-download"></i>

            </div>

        </div>
    )
}
export default TuitStats