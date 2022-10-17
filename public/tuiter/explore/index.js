import NavigationSidebar from "../NavigationSidebar/index";
import WhoToFollowList from "../WhoToFollowList/index";
import ExploreComponent from "../ExploreScreen/ExploreComponent";

function exploreComponent() {
    // eslint-disable-next-line no-undef
    $('#wd-explore').append(`
      
  <div class="row">
  
       <div class="col-xxl-2 col-xl-3 col-lg-1 col-md-2 col-sm-1">
       ${NavigationSidebar()}
       </div>
       <div class="col-xxl-6 col-xl-6 col-lg-5 col-md-10 col-sm-11">
       ${ExploreComponent()}
       </div>
       <div class="col-xxl-4 col-xl-3 col-lg-4 d-xxl-block d-xl-block d-lg-block d-md-none d-sm-none">
       ${WhoToFollowList()}
        
       </div>
  </div>
   `);
}
// eslint-disable-next-line no-undef
$(exploreComponent);



