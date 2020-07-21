import React from 'react';
import './UserOutput.css';
function UserOutput(props) {
	return (
		<div className="UserOutput">
			<p>Something about me {props.userName} </p>
			<p> Listening to music and coding</p>
		</div>
	);
}
export default UserOutput;
