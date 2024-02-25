import React from "react";
import style from './ProfileInfo.module.css';
import Preloader from "../../common/preloader/Preloader";
import ProfileStatus from "./ProfileStatus";

const ProfileInfo = (props) => {
	// if (!props.profile) {
	// 	return <Preloader />
	// }

	return (
		<div>
			{/*<div>*/}
			{/*	<img src="https://t3.ftcdn.net/jpg/03/57/96/98/360_F_357969833_OJe2ircqLJDBsBfE6rva63hpIBzK2vRG.jpg"/>*/}
			{/*</div>*/}
			<div className={style.description_block}>
				{/*<img src={props.profile.photos.large} alt=""/>*/}
				<ProfileStatus status={"hi"}/>
			</div>
		</div>
	)
}

export default ProfileInfo;
