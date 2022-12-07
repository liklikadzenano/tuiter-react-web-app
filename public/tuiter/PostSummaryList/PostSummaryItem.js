const PostSummaryItem = (post) => {
    return (`
        <li class="list-group-item bg-dark">
                        <div class="row">
                            <div class="col-10">
                                <div class="text-secondary"> ${post.topic} </div>

                                <div class="fw-bolder">
                                    ${post.userName} - ${post.time}
                                </div>
                                <div class="fw-bolder">
                                    ${post.title}
                                </div>

                            </div>
                            <div class="col-2">
                                <img class="float-end" src=${post.image} height="100px">
                            </div>
                        </div>
           </li>
    `)

}
export default PostSummaryItem