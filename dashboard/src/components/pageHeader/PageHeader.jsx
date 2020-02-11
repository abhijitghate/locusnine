import React from "react";
import "./pageheader.css";
import NavMenu from "../navMenu/NavMenu";

class PageHeader extends React.Component {
	render() {
		return (
			<div className="general-style">
				<img className="logo-style" src={require("../../Logo.svg")} />
				<NavMenu />
			</div>
		);
	}
}

export default PageHeader;
