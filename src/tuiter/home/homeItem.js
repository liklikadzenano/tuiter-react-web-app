import React from "react";

const HomeList = (
    {
        post = {
            icon:"../../../../tesla.png",
            poster: "Elon Musk",
            username: "@elonmusk",
            time: "2h",
            image: "../../../../images/tesla.webp",
            textHeader: "Countdoen: Inspiration4 Mission to Space| Netflic Official Site",
            text: "From training to launch to landing this all-access docuserioes rides along with the inspiration4 crew on the first all-civilian orbital space"

        }
    }
) => {
    return(

        <li className="list-group-item bg-white">
            <div className="row">

                <div className="col-2 float-end">
                    <img src={post.icon} className="rounded-circle" width="48px"
                         height="48px"/>
                </div>


                <div className="col-8 float-start">
                <span className="fw-bold text-black"> {post.poster}
                    <i className="fas fa-check-circle text-black"></i>
                    <span className="text-secondary"> {post.userName} - {post.time} </span>
                    <p className="text-black fw-normal"> {post.textHeader}</p>
                </span>

                </div>
                <div className="col-2 float-end">
                    <i className="bi bi-three-dots"></i>
                </div>
            </div>

            <div className="row">
                <div className="col-2">
                </div>
                <div className="col-9">
                    <ul className="list-group">
                        <li className="list-group-item bg-white pt-1 border-white ">
                            <img src= {post.image} className="rounded" width="95%"
                                 height="100%"/>
                        </li>
                        <li className="list-group-item bg-white border-white">
                            <span className="text-black"> countdown somethisng something </span>
                            <p className="text-secondary">
                                {post.text}
                            </p>

                        </li>

                        <li className="border-bottom border-0  border-light pt-2 pb-3">
                            <div className="d-flex justify-content-between">
                            <span className="text-secondary">
                                <i className="bi bi-chat"></i>
                             4.2K
                            </span>
                                <span className="text-secondary">
                                <i className="bi bi-reply"></i>
                             3.5K
                            </span>
                                <span className="text-secondary">



                               <i className="bi bi-heart-fill "></i>
                            37.5K
                            </span>
                                <i className="bi bi-download"></i>

                            </div>

                        </li>

                    </ul>
                </div>

            </div>

        </li>

    );

}
export default HomeList;

