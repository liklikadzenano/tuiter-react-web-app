import { createSlice } from "@reduxjs/toolkit";
import tuits from './tuits.json';


const currentUser = {
    "userName": "Nano",
    "handle": "@nanoLik",
    "image": "../images/nature.jpg",
};

const templateTuit = {
    ...currentUser, //ellipses copy over the values from the currentUser object.
    "topic": "Nature",
    "time": "2h",
    "liked": true,
    "replies": 2000,
    "retuits": 1000,
    "likes": 300000,
}


const tuitsSlice = createSlice({
                                   name: 'tuits',
                                   initialState: tuits,
                                   reducers: {

                                       deleteTuit(state, action) {
                                           const index = state
                                               .findIndex(tuit =>
                                                              tuit._id === action.payload);
                                           state.splice(index, 1);
                                       },

                                       createTuit(state, action) {
                                           state.unshift({
                                                             ...action.payload,
                                                             ...templateTuit,
                                                             _id: (new Date()).getTime(),
                                                         })
                                       }
                                   }

                               });
export const {createTuit,  deleteTuit} = tuitsSlice.actions;

export default tuitsSlice.reducer;