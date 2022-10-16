function NavigationSidebar() {
    // eslint-disable-next-line no-undef
    $(`#wd-nav-side-bar`).append(`
    
    <div class="col-xxl-2 col-xl-3 col-lg-1 col-md-2 col-sm-1">
            <!--using list-group to make the list of hyperlinks that we see on the left -->
                <ul class="list-group">
                    <li class="list-group-item bg-dark">
                        <div class="row">
                            <div class="col-1">
                                <i class="fab fa-twitter text-white"></i>
                            </div>
                            <div class="col-11 d-xxl-block d-xl-block d-lg-none d-md-none d-sm-none">
                                <a href="#" class="text-decoration-none"> </a>

                            </div>

                        </div>
                    </li>

                    <li class="list-group-item bg-dark">
                        <div class="row">
                            <div class="col-2">
                                <i class="fas fa-home text-white"></i>
                            </div>
                            <div class="col-10 d-xxl-block d-xl-block d-lg-none d-md-none d-sm-none">
                                <a href="../home.html"class="text-decoration-none text-white"> Home </a>

                            </div>

                        </div>
                    </li>

                    <li class="list-group-item bg-dark">
                        <div class="row">
                            <div class="col-2">
                                <i class="fas fa-home text-white"></i>
                            </div>
                            <div class="col-10 d-xxl-block d-xl-block d-lg-none d-md-none d-sm-none">
                                <a href="index.html"class="text-decoration-none text-white"> Explore </a>

                            </div>

                        </div>
                    </li>

                    <li class="list-group-item bg-dark">
                        <div class="row">
                            <div class="col-2">
                                <i class="fas fa-bell text-white"></i>
                            </div>
                            <div class="col-10 d-xxl-block d-xl-block d-lg-none d-md-none d-sm-none">
                                <a href="index.html" class="text-decoration-none text-white"> Explore </a>

                            </div>

                        </div>
                    </li>

                    <li class="list-group-item bg-dark">
                        <div class="row">
                            <div class="col-2">
                                <i class="fas fa-envelope text-white"></i>
                            </div>
                            <div class="col-10 d-xxl-block d-xl-block d-lg-none d-md-none d-sm-none">
                                <a href="messages.html" class="text-decoration-none text-white"> Messages </a>

                            </div>

                        </div>
                    </li>


                    <li class="list-group-item bg-dark">
                        <div class="row">
                            <div class="col-2">
                                <i class="fas fa-list text-white"></i>
                            </div>
                            <div class="col-10 d-xxl-block d-xl-block d-lg-none d-md-none d-sm-none">
                                <a href="#" class="text-decoration-none text-white"> Lists </a>

                            </div>

                        </div>
                    </li>

                    <li class="list-group-item bg-dark">
                        <div class="row">
                            <div class="col-2">
                                <i class="fas fa-user-alt text-white"></i>
                            </div>
                            <div class="col-10 d-xxl-block d-xl-block d-lg-none d-md-none d-sm-none">
                                <a href="../profile.html" class="text-decoration-none text-white"> Profile </a>

                            </div>

                        </div>
                    </li>
                    <li class="list-group-item bg-dark">
                        <div class="row">
                            <div class="col-2">
                                <i class="fas fa-comment-dots text-white"></i>
                            </div>
                            <div class="col-10 d-xxl-block d-xl-block d-lg-none d-md-none d-sm-none">
                                <a href="#" class="text-decoration-none text-white"> More </a>

                            </div>

                        </div>
                    </li>

                </ul>

                <button class="btn btn-primary w-100 mt-1 rounded-pill " > Tuit </button>

            </div>
    
    
    `)

}
// eslint-disable-next-line no-undef
$ (NavigationSidebar())