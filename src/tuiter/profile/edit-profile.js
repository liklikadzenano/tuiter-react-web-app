import "./index.css"

import {Link, useNavigate} from "react-router-dom";
import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {updateProfile} from "./profile-reducer";

const EditProfile = () => {
    const profile = useSelector(state => state.profile);
    const navigate = useNavigate();
    const dispatch = useDispatch()

    const [name, setName] = useState(profile.firstName + " " + profile.lastName)
    const [bio, setBio] = useState(profile.bio)
    const [location, setLocation] = useState(profile.location)
    const [website, setWebsite] = useState(profile.location)
    const birth = profile.dateOfBirth.split("/")
    const [dateOfBirth, setDateOfBirth] = useState(birth[0] + " " + birth[1] + " " + birth[2])


    const updateProfileHandler = () => {
        dispatch(updateProfile({name, bio, location, website, dateOfBirth}));
        navigate("/tuiter/profile");
    }

    return (

        <>
            <div className={"row"}>
                <div className={"col-2"}>
                    <Link to={"/tuiter/profile"}>
                        <i className="bi bi-x"></i>
                    </Link>
                </div>

                <div className={"col-4"}>
                    <h5 className={"text-black"}> Edit Profile</h5>
                </div>

                <div className={"col-6"}>
                    <button className={"btn btn-dark float-end rounded-pi"}
                            onClick={updateProfileHandler}>
                        Save
                    </button>
                </div>
            </div>

            <div className={"row position-relative pt-2 "}>
                <img height={250} width={300} src={profile.bannerPicture}/>
            </div>


            <div className={"row pb-3"}>
                <div className={"col-8 position-relative"}>
                    <img src={profile.profilePicture}
                         className={"rounded-circle position-absolute wd-nudge-up-more"}
                         height={100}
                         width={100}/>
                </div>

                <div className={"positione-relative"}>
                    <i className="wd-camera bi bi-camera position-relative"></i>
                </div>

            </div>


            <form>
                <div className={"form-group pt-3"}>
                    <div className={"border border-secondary rounded-2 border-opacity-25 p-1"}>
                        <label className={"ps-2 text-secondary fs-6"} htmlFor={"nameField"}>
                            Name
                        </label>
                        <input type={"text"} className={"form-control border-0 ps-2"}
                               id={"nameField"} value={"Name"} onChange={event => {
                            setName(event.target.value)
                        }}/>
                    </div>
                </div>

                <div className={"form-group pt-2"}>
                    <div className={"border border-secondary rounded-2 border-opacity-25 p-1"}>
                        <label className={"ps-2 text-secondary fs-6"} htmlFor={"bioField"}>
                            Bio
                        </label>
                        <textarea type={"text"} className={"form-control border-0 ps-2"}
                                  id={"bioField"} value={"bio"} onChange={event => {
                            setBio(event.target.value)
                        }}/>
                    </div>
                </div>

                <div className={"form-group pt-2"}>
                    <div className={"border border-secondary rounded-2 border-opacity-25 p-1"}>
                        <label className={"ps-2 text-secondary fs-6"} htmlFor={"locationField"}>
                            Location
                        </label>
                        <input type={"text"} className={"form-control border-0 ps-2"}
                               id={"locationField"} value={"Location"} onChange={event => {
                            setLocation(event.target.value)
                        }}/>
                    </div>
                </div>

                <div className={"form-group pt-2"}>
                    <div className={"border border-secondary rounded-2 border-opacity-25 p-1"}>
                        <label className={"ps-2 text-secondary fs-6"} htmlFor={"webField"}>
                            Website
                        </label>
                        <input type={"text"} className={"form-control border-0 ps-2"}
                               id={"webField"} value={"Website"} onChange={event => {
                            setWebsite(event.target.value)
                        }}/>
                    </div>
                </div>


                <div className={"form-group pt-2"}>
                    <div className={"border border-secondary rounded-2 border-opacity-25 p-1"}>
                        <label className={"ps-2 text-secondary fs-6"} htmlFor={"birthField"}>
                            Date Of Birth
                        </label>
                        <input type={"date"} className={"form-control border-0 ps-2"}
                               id={"birthField"} value={"Birth Date"} onChange={event => {
                            setDateOfBirth(event.target.value)
                        }}/>
                    </div>
                </div>
            </form>


            <div className={"pt-3"}>
                <button classsName={"btn btn-light w-100 border border-none"}>
                <h5 className={"float-start pt-2"}> switch to professional </h5>
                    <i className="bi bi-arrow-right pt-1 float-end"></i>

               </button>
            </div>

            <br/> <br/>


        </>
    )
}
export default EditProfile