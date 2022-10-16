const who = [
    {   avatarIcon: '/public/images/virgin.png',
        userName: 'Virgin Galactic',
        handle: 'virgingalactic', },
    ];

function WhoToFollowListItem(who) {
    $(`#wd-list-item`).append(`
         <ul class="list-group">
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
    `))
    }
    </ul>

`)
}

$ (WhoToFollowListItem(who))