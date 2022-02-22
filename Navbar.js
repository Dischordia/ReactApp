import React, { Component } from 'react';
import Navitem from './Navitem';


 // “Navitem” is the sub-component. 
 class Navbar extends Component {
	render() {
		return (
			<nav>
			<ul>
			<Navitem item="Home" tolink="/" activec={this.activeitem}></Navitem>
			<Navitem item="About" tolink="/about" activec={this.activeitem}></Navitem>
			<Navitem item="Education" tolink="/education" activec={this.activeitem}></Navitem>
			<Navitem item="Skills" tolink="/skills" activec={this.activeitem}></Navitem>
			<Navitem item="Contact" tolink="/contact" activec={this.activeitem}></Navitem>
			</ul>
			</nav>
		) 
	} 
} 

activeitem=(x)=> 
	{ 
		if(this.state.NavItemActive.length>0)
			{ 
				document.getElementById(this.state.NavItemActive).classList.remove('active');
			} 
			this.setState({'NavItemActive':x},()=>{
				document.getElementById(this.state.NavItemActive).classList.add('active');
			});
	};

export default Navbar