import React from "react";
const WhoToFollowListItem = (
    {
        who = { userName: 'Tesla', handle: 'Tesla', avatarIcon: "../../../../images/tesla.png" }
    }
) => {
    return(
        <li className="list-group-item bg-white">
            <div className="row">

                <div className="col-xxl-2 col-xl-3 col-lg-3 ">
                    <img src={who.avatarIcon} className="rounded-circle" width="48px"
                         height="48px"/>
                </div>
                <div className="col-xxl-7 col-xl-5 col-lg-5">
                    <div className="fw-bolder text-black"> {who.userName} </div>
                    <div className="text-black"> @ {who.handle} </div>
                </div>
                <div className="col-xxl-3 col-xl-4 col-lg-4">
                    <button
                        className="btn btn-primary w-30 mt-1 rounded-pill position-relative "> Follow
                    </button>
                </div>
            </div>
        </li>
    );
};
export default WhoToFollowListItem;