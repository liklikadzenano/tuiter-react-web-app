import React from "react";
import {Link} from "react-router-dom";
import {useLocation} from "react-router";


const NavigationSidebar = (
) => {

    const {pathname} = useLocation(); //creating a new variable called pathname which is being destructed from the object locatiom
    const paths = pathname.split('/') //creates an array path names splitting on the slash
    const active = paths[2];

    return (
        <ul className="list-group">
            <li className="list-group-item">
                <div className="row">
                    <div className="col-1">
                        <i className="bi bi-twitter"></i>
                    </div>
                    <div className="col-11 d-xxl-block d-xl-block d-lg-none d-md-none d-sm-none">
                        <a href="#" className="text-decoration-none"> </a>

                    </div>

                </div>
            </li>

            <li className="list-group-item">
                <div className="row">
                    <div className="col-2">
                        <i className="bi bi-house-door-fill"></i>
                    </div>
                    <div className="col-10 d-xxl-block d-xl-block d-lg-none d-md-none d-sm-none">

                        <Link to="/tuiter/home" className={`${active === "home" ? 'text-bg-primary p-3':''} `} >
                            Home
                        </Link>



                    </div>

                </div>
            </li>

            <li className="list-group-item">
                <div className="row">
                    <div className="col-2">
                        <i className="bi bi-hash"></i>
                    </div>
                    <div className="col-10 d-xxl-block d-xl-block d-lg-none d-md-none d-sm-none">
                        <Link to="/tuiter/explore">
                            Explore
                        </Link>


                    </div>

                </div>
            </li>

            <li className="list-group-item">
                <div className="row">
                    <div className="col-2">
                        <i className="bi bi-asterisk"></i>
                    </div>
                    <div className="col-10 d-xxl-block d-xl-block d-lg-none d-md-none d-sm-none">
                        <Link to="/labs" >
                            Labs
                        </Link>


                    </div>

                </div>
            </li>

            <li className="list-group-item">
                <div className="row">
                    <div className="col-2">
                        <i className="bi bi-bell-fill"></i>
                    </div>
                    <div className="col-10 d-xxl-block d-xl-block d-lg-none d-md-none d-sm-none">
                        <a href="index.html"
                           className="text-decoration-none text-black"> Notifications </a>

                    </div>

                </div>
            </li>

            <li className="list-group-item">
                <div className="row">
                    <div className="col-2">
                        <i className="bi bi-envelope-fill"></i>
                    </div>
                    <div className="col-10 d-xxl-block d-xl-block d-lg-none d-md-none d-sm-none">
                        <a href="messages.html"
                           className="text-decoration-none text-black"> Messages </a>

                    </div>

                </div>
            </li>


            <li className="list-group-item">
                <div className="row">
                    <div className="col-2">
                        <i className="bi bi-list-ul"></i>
                    </div>
                    <div className="col-10 d-xxl-block d-xl-block d-lg-none d-md-none d-sm-none">
                        <a href="#" className="text-decoration-none text-black"> Lists </a>

                    </div>

                </div>
            </li>

            <li className="list-group-item">
                <div className="row">
                    <div className="col-2">
                        <i className="bi bi-person-circle"></i>
                    </div>
                    <div className="col-10 d-xxl-block d-xl-block d-lg-none d-md-none d-sm-none">
                        <Link to="/tuiter/profile" className={`${active === "profile" ? 'text-bg-primary p-3':''} `} >
                            Profile
                        </Link>

                    </div>

                </div>
            </li>
            <li className="list-group-item">
                <div className="row">
                    <div className="col-2">
                        <i className="bi bi-chat-dots"></i>
                    </div>
                    <div className="col-10 d-xxl-block d-xl-block d-lg-none d-md-none d-sm-none">
                        <a href="#" className="text-decoration-none text-black"> More </a>

                    </div>

                </div>
            </li>

        </ul>





    );
};
export default NavigationSidebar;