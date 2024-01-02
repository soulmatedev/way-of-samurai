import React from "react";
import style from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";

const Profile = () => {
	return (
		<div>
			<div>
				<img src="https://t3.ftcdn.net/jpg/03/57/96/98/360_F_357969833_OJe2ircqLJDBsBfE6rva63hpIBzK2vRG.jpg"/>
			</div>
			<div>
				ava + description
			</div>
			<MyPosts />
		</div>
	)
}

export default Profile;
