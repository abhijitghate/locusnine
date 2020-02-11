import React from "react";
// import "./App.css";
import "antd/dist/antd.css";
import PageHeader from "./components/pageHeader/PageHeader";
import Listing from "./components/listing/Listing";

class App extends React.Component {
	render() {
		return (
			<div className="App">
				<PageHeader />
				<Listing />
			</div>
		);
	}
}

export default App;
