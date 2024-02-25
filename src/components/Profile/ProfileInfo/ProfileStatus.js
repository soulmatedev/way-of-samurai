import React from "react";

class ProfileStatus extends React.Component {
	state = {
		editMode: false,
	}

	activateEditMode() {
		this.setState({
			editMode: true
		});
	}

	deactivateEditMode() {
		this.setState({
			editMode: false
		});
	}

	render() {
		return (
			<div>
				{!this.state.editMode &&
					<section>
						<span onDoubleClick={this.activateEditMode.bind(this)}>{this.props.status}</span>
					</section>
				}
				{this.state.editMode &&
					<section>
						<input autoFocus={true} onBlur={this.deactivateEditMode.bind(this)} value={this.props.status}></input>
					</section>
				}
			</div>
		)
	}
}

export default ProfileStatus;
