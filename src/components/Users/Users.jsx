import React from "react";
import styles from './users.module.css';
import axios from "axios";
import userPhoto from '../../assets/images/user.png';

const Users = (props) => {
	let getUsers = () => {
		if (props.users.length === 0) {
			axios.get("https://social-network.samuraijs.com/api/1.0/users")
				.then(response => {
					props.setUsers(response.data.items);
				})
		}
	}

	return <div>
		<button onClick={getUsers}>Get Users</button>
		{
			props.users.map(user => <div key={user.id}>
				<span>
					<div>
						<img
							className={styles.userPhoto}
							src={
								user.photos.small != null
									? user.photos.small
									: userPhoto}
						/>
					</div>
					<div>
						{
							user.followed
								? <button onClick={() => {
									props.unfollow(user.id)
								}}>unfollow</button>
								: <button onClick={() => {
									props.follow(user.id)
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
