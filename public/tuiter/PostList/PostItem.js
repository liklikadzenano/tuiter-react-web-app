const PostItem = (post) => {
    return(`
    
        <li class="list-group-item bg-black">
        <div class="row">

<!--            left side where the icon picture is-->
            <div class="col-2 float-end">
                <img src=${post.icon}class="rounded-circle" width="48px" height="48px">
            </div>

<!--            middle part clumn -->

            <div class="col-8 float-start">
                <span class="fw-bold text-white"> ${post.poster}
                    <i class="fas fa-check-circle text-white"></i>
                    <span class="text-secondary"> ${post.username} -${post.time} </span>
                    <p class="text-white fw-normal"> amazing show about
                        <span class="text-info"> @inspiration4x</span> mission</p>
                </span>
<!--                right part where the dots are -->
            </div>
            <div class="col-2 float-end">
                <i class="fas fa-ellipsis-h text-secondary fw-bold"></i>
            </div>
        </div>
<!--        the row with the post-->
        <div class="row">
            <div class="col-2">
            </div>
            <div class="col-9">
                <ul class="list-group">
                    <li class="list-group-item bg-black pt-1 border-dark">
                        <img src= ${post.images} class="rounded" width="95%" height="100%">
                    </li>
                    <li class="list-group-item bg-black border-dark">
                        <span class="text-white"> ${post.textHeader}</span>
                        <p class="text-secondary">
                            ${post.text}
                        </p>

                    </li>

                    <li class="border-bottom border-dark pt-2 pb-3">
                        <div class="d-flex justify-content-between">
                            <span  class="text-secondary"> <i class="fas fa-comments text-secondary"></i>
                             4.2K
                            </span>
                            <span class="text-secondary">
                                <i class="fal fa-retweet text-secondary"></i>
                             3.5K
                            </span>
                            <span class="text-secondary">
                            <i class="far fa-heart text-secondary"></i>
                            37.5K
                            </span>
                            <i class="fas fa-upload text-secondary"></i>

                        </div>

                    </li>

                </ul>
            </div>

        </div>

    </li>
    
    
    `)
}

export default PostItem