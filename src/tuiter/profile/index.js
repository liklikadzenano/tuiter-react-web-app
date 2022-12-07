import React from "react";
import "./index.css"
import {useSelector} from "react-redux";
import {Link} from "react-router-dom"

const ProfileComponent =() => {
    const profile = useSelector(state=>state.profile)
    return(
        <>
            {/*first row*/}
            <div className={"row"}>
                {/*the arrow linking back to the home */}
                <div className={"col-2 pt-1"}>
                    <Link to ="/tuiter/home">
                        <i className="bi bi-arrow-left-short text-black"></i>
                    </Link>

                </div>
                <div className={"col-10 text-secondary"}>
                    <h5 className={"fw-bold text-black"}>  {profile.firstName} {profile.lastName}</h5>
                    <p className={"text-secondary"}>  {profile.tuitCout} tuits</p>
                </div>

            </div>


            {/*second row  with the banner pictures */}

            <div className={"row"}>
                <img height={250} width={300} src={profile.bannerPicture}/>
            </div>

            <div className={"row"}>
                <div className={"col-8 position-relative"}>
                    <img src={profile.profilePicture} className={"rounded-circle position-absolute wd-nudge-up" } height={100}
                    width={100}/>
                </div>

                <div className={"col-4 pt-3 "}>
                    <Link to="/tuiter/edit-profile">
                        <button className={"btn border rounded-pill fw-semibold float-end"}>
                            Edit Profile
                        </button>
                    </Link>

                </div>
            </div>

            <div className={"row"}>
                <div className={"col-8  pt-3"}>
                    <h4 className={"fw-bold"}> {profile.firstName}  {profile.lastName} </h4>
                    <p className={"fw-secondary"}> {profile.handle}</p>

                </div>

            </div>

            <div className={"row"}>
                <p className={"text-black"}> {profile.bio} </p>
            </div>

            <div className={"row pt-3"}>

                <div className={"col-4 text-secondary"}>
                    <i className="bi bi-geo-alt-fill"></i>
                    location {profile.location}
                </div>

                <div className={"col-4 text-secondary"}>
                    <i className="bi bi-balloon"></i>
                    Born {profile.dateOfBirth}
                </div>

                <div className={"col-4 text-secondary"}>
                    <i className="bi bi-calendar"></i>
                    <span>  </span> joined {profile.dateJoined}
                </div>
            </div>

            <div className={"row pt-3"}>
                <span className={"text-secondary"}>
                <span className={"text-black"}> {profile.followingCount}</span>

                Following
                <span className={"text-black"}> {profile.followersCount}</span>
                Followers

                </span>
            </div>

        </>
    );
}
export default ProfileComponent