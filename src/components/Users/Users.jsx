import React from "react";
import styles from './users.module.css';

const Users = (props) => {

	if(props.users.length === 0) {
		props.setUsers(
			{
				id: 1,
				fullName: 'Egor',
				followed: true,
				photoUrl: 'https://www.vokrug.tv/pic/person/2/8/c/e/28ce20b1e15dc87395b00bcc2a7052e4.jpg',
				status: 'I`m a rockstar',
				location: {city: 'Kurgan', country: 'Russia'}
			},
			{
				id: 2,
				fullName: 'Dmitriy',
				followed: false,
				photoUrl: 'https://www.vokrug.tv/pic/person/2/8/c/e/28ce20b1e15dc87395b00bcc2a7052e4.jpg',
				status: 'I`m a boss',
				location: {city: 'Tumen', country: 'Russia'}
			},
			{
				id: 3,
				fullName: 'Vovan',
				followed: true,
				photoUrl: 'https://www.vokrug.tv/pic/person/2/8/c/e/28ce20b1e15dc87395b00bcc2a7052e4.jpg',
				status: 'I`m a bober',
				location: {city: 'Yekaterinburg', country: 'Russia'}
			},
		);
	}

	return <div>
		{
			props.users.map(user => <div key={user.id}>
				<span>
					<div>
						<img src={user.photoUrl} className={styles.userPhoto}/>
					</div>
					<div>
						{
							user.followed
							? <button onClick={() => { props.unfollow(user.id) }}>unfollow</button>
							: <button onClick={() => { props.follow(user.id) }}>follow</button>
						}
					</div>
				</span>
				<span>
					<span>
						<div>{user.fullName}</div>
						<div>{user.status}</div>
					</span>
					<span>
						<div>{user.location.country}</div>
						<div>{user.location.city}</div>
					</span>
				</span>
			</div>)
		}
	</div>
}

export default Users;
