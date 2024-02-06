import preloader from "../../../assets/images/preloader.svg";
import React from "react";

let Preloader = () => {
	return <div style={ { backgroundColor: 'white' } }>
		<img src={preloader} alt=""/>
	</div>
}

export default Preloader;
