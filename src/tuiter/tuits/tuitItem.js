import React from "react";
import TuitStats from "./tuitStats";
import {deleteTuitThunk} from "../../services/tuits-thunks";
import {useDispatch} from "react-redux";




const TuitsItem = (
    {
        tuit = {

            topic: "Web Development",
            userName: "Jquery",
            title: "jQuery",
            time: "last week",
            image: "../../../../images/jquery.png",
            tweets: "122K",
            liked: true,
            dislikes: 345,
            replies: 123,
            retuits: 202,
            likes: 2345,
            handle: "@jQuery",
            tuit: "You want to wake up in the morning and think the future is going to be great - and that’s what being a spacefaring civilization is all about. It’s about believing in the future and thinking that the future will be better than the past. And I can’t think of anything more exciting than going out there and being among the stars"
        }
    }
) => {
    const dispatch = useDispatch();
    const deleteTuitHandler = (id) => {
        dispatch(deleteTuitThunk(id));

    }
    return(

        <li className="list-group-item bg-white">
            <div className="row">
                <div className="col-2">
                    <img src= {tuit.image}  className="float-end" width="48px" height="48px"/>
                </div>
                <div className="col-10">
                    <div className="text-black fw-bolder"> {tuit.userName}
                        <span className={"text-info"}> <i className="bi bi-patch-check-fill"></i> </span>
                        <span className={"text-secondary"}> - {tuit.handle} -{tuit.time}</span>

                        {/*this one is a delete button */}
                        <i className="bi bi-x-lg float-end"
                           onClick={() => deleteTuitHandler(tuit._id)}></i>

                    </div>



                    <div className={"fw-light text-black"}>
                        {tuit.tuit}

                    </div>
                    <TuitStats tuit={tuit}/>



                </div>


            </div>


        </li>
    );


}
export default TuitsItem;