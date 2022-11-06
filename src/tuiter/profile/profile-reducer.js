import { createSlice } from "@reduxjs/toolkit";


const currentProf = {
    firstName: "Snowbell",
    lastName: "Gunda",
    tuitCout: 19,
    handle: "@SnowbellGunda",
    profilePicture: "../images/tesla.png",
    bannerPicture: "../images/nature.jpeg",
    bio: "Currentlys sleeping all day and enjoying a carefree life",
    website: "youtube.com/webdevtv",
    location: "Boston, MA",
    dateOfBirth: '09/29/2014',
    dateJoined: '9/2021',
    followingCount: 340,
    followersCount: 223,
};



const profileSlice = createSlice({
                                   name: 'profile',
                                   initialState: currentProf,
                                   reducers: {

                                      updateProfile(state, action) {
                                           const updatedProfile = action.payload;
                                           let [firstName, ...lastName] = updatedProfile.name.split(' ');
                                           lastName = lastName.jon(' ');
                                           const bio = updatedProfile.bio;
                                           const location = updatedProfile.location;
                                           const website = updatedProfile.website
                                           const [yy, mm, dd] = updatedProfile.dateOfBirth.split("-")
                                           const dateOfBirth = [yy, mm, dd].join("/");
                                           return {...state, firstName,lastName, bio, location, website, dateOfBirth}

                                       }

                                   }



                               });
export const {updateProfile} = profileSlice.actions;

export default profileSlice.reducer;