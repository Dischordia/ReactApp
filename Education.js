import React, { Component } from 'react';
import Widecard from '../components/Widecard';


class Education extends Component {
	render() {
		return (
			<div className="condiv">
				<h1 className="subtopic">My Education</h1>
				<Widecard title="Ph.D" where="Robert Gordon University" from="2021" to="present"/>
				<Widecard title="Bachelor of Science (Computing...)" where="Robert Gordon University" from="August 2017" to="2021"/> 
			</div> 
		) 
	}
} 

export default Education