import React from "react";
import styles from "./users.module.css";
import userPhoto from "../../assets/images/user.png";
import {NavLink} from "react-router-dom";
import axios from "axios";

let Users = (props) => {
	let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

	let pages = [];
	for (let i = 1; i <= pagesCount; i++) {
		pages.push(i)
	}

	return <div>
		<div>
			{
				pages.map(p => {
					return <span
						key={p.id}
						className={props.currentPage === p && styles.selectedPage}
						onClick={(e) => {
							props.onPageChanged(p);
						}}
					>
							{p}
						</span>
				})
			}
		</div>
		{
			props.users.map(user => <div key={user.id}>
				<span>
					<div>
						<NavLink to={'/profile/' + user.id}>
						<img
							key={user.id}
							className={styles.userPhoto}
							alt={""}
							src={
								user.photos.small != null
									? user.photos.small
									: userPhoto}
						/>
						</NavLink>
					</div>
					<div>
						{
							user.followed
								? <button onClick={() => {
									axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${user.id}`, {
										withCredentials: true,
										headers: {
											"API-KEY": "189c3e8c-a494-4c55-922a-acbd41e43453"
										}
									})
										.then(response => {
											if (response.data.resultCode === 0) {
												props.unfollow(user.id)
											}
										});
								}}>unfollow</button>

								: <button onClick={() => {
									axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${user.id}`, {},
										{
											withCredentials: true,
											headers: {
												"API-KEY": "189c3e8c-a494-4c55-922a-acbd41e43453"
											}
										})
										.then(response => {
											if (response.data.resultCode === 0) {
												props.follow(user.id)
											}
										});
								}}>follow</button>
						}
					</div>
				</span>
				<span>
					<span>
						<div>{user.name}</div>
						<div>{user.status}</div>
					</span>
					<span>
						<div>{"user.location.country"}</div>
						<div>{"user.location.city"}</div>
					</span>
				</span>
			</div>)
		}
	</div>
}

export default Users;
