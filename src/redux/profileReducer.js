import profile from "../components/Profile/Profile";
import {usersAPI} from "../api/api";

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';

let initialState = {
	posts: [
		{id: 1, message: 'Hi, how are you?', likesCount: 15},
		{id: 2, message: "It`s my first post", likesCount: 20},
	],
	newPostText: [
		''
	],
	profile: null,
}
const profileReducer = (state = initialState, action) => {
	switch (action.type) {
		case UPDATE_NEW_POST_TEXT: {
			return {
				...state,
				newPostText: action.newText,
			}
		}
		case ADD_POST: {
			let newPost = {
				id: 5,
				message: state.newPostText,
				likesCount: 0,
			};
			return {
				...state,
				posts: [...state.posts, newPost],
				newPostText: '',
			}
		}
		case SET_USER_PROFILE: {
			return {...state, profile: action.profile}
		}

		default:
			return state;
	}
}

export const addPostActionCreator = () => ({type: ADD_POST})
export const setUserProfile = () => ({type: SET_USER_PROFILE, profile})
export const getUserProfile = (userId) => (dispatch) => {
	usersAPI.getProfile(userId).then(response => {
		dispatch(setUserProfile(response.data));
	})
}

export const updateNewPostTextActionCreator = (text) => ({type: UPDATE_NEW_POST_TEXT, newText: text})
export default profileReducer;

