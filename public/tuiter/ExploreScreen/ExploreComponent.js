import PostSummaryList from "../PostSummaryList/index";

const ExploreComponent = () => {
    return (`
    
    <div class="row">
                    <div class="col-10">
                        <div class="position-relative">
                            <input class="ps-5 form-control rounded-pill" placeholder="Search Tuiter"/>
                            <i class="fas fa-search position-absolute wd-search-tuiter" ></i>
                        </div>
                    </div>

                    <div class="col-2 pt-1">
                        <i class="fas fa-cog fa-lg" style="color: dodgerblue"></i>
                    </div>


                </div>

                <ul class="nav nav-tabs pt-1 mb-1">
                    <li class="nav-item">
                        <a class="nav-link active" href="#"> For you</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Trending</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">News</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#" tabindex="-1">Sports</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#" tabindex="-1">Entertainment</a>
                    </li>
                </ul>

                <!--below div groups the picture and the title on the picture together -->
                <div class="position-relative">
                <img src="starship.jpg" width="100%"/>
                <h1 class="position-absolute bottom-0 left-0 text-white">SpaceX's Starship </h1>
                </div>
                
                ${PostSummaryList()}
    
    `)
}
export default ExploreComponent;
