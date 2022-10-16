import who from "./who.js"
import NavigationSidebar from "../NavigationSidebar";



const WhoToFollowList = (who) => {
        // eslint-disable-next-line no-undef
        return (`
        <div class="col-xxl-4 col-xl-3 col-lg-4 d-xxl-block d-xl-block d-lg-block d-md-none d-sm-none">
        <ul class="list-group bg-dark">
        <li class="list-group-item fw-bolder text-white bg-dark">
                        Who to follow
        </li>

        ${who.map(each => (`
                
                <li class="list-group-item bg-dark">
                        <div class="row">
<!--                            left side images-->
                            <div class="col-xxl-2 col-xl-3 col-lg-3 ">
                                <img src=${each.avatarIcon} class="rounded-circle" width="48px" height="48px">
                            </div>
<!--                            middle texts-->
                            <div class="col-xxl-7 col-xl-5 col-lg-5">
                                <div class="fw-bolder text-white"> ${each.userName} <i class="fas fa-check-circle"></i> </div>
                                <div class="text-white"> @ ${each.handle} </div>
<!--                                buttons-->
                            </div>
                            <div class="col-xxl-3 col-xl-4 col-lg-4">
                                <button class="btn btn-primary w-30 mt-1 rounded-pill position-relative " > Follow </button>
                            </div>
                        </div>
                    </li>
                
                
                `) )
                }

                           

                </ul>
                </div>
    `)
}
export default WhoToFollowList;

