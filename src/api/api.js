import axios from "axios";

const instance = axios.create({
	withCredentials: true,
	baseURL: 'https://social-network.samuraijs.com/api/1.0/',
	headers: {
		"API-KEY": "189c3e8c-a494-4c55-922a-acbd41e43453"
	},
})

export const usersAPI = {
	getUsers(currentPage = 1, pageSize = 10) {
		return instance.get(`users?page=${currentPage}&count=${pageSize}`)
			.then(response => {
				return response.data;
			})
	},
	follow(userId) {
		return instance.post(`follow/${userId}`)
	},
	unfollow(userId) {
		return instance.delete(`follow/${userId}`)
	},
	getProfile(userId) {
		return instance.get(`profile/2` + userId);
	},
}

export const authAPI = {
	me() {
		return instance.get(`auth/me`)
	},
}