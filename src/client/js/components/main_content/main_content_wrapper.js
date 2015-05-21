"use strict";

var React = require("react");

module.exports = React.createClass({

	render: function () {
		return (
			<div className="content-wrapper" style={{minHeight: "800px"}}>
				{/* Content Header (Page header) */}
				<section className="content-header">
				  <h1>
				    Page Header
				    <small>Optional description</small>
				  </h1>
				  <ol className="breadcrumb">
				    <li><a href="#"><i className="fa fa-dashboard"></i> Level</a></li>
				    <li className="active">Here</li>
				  </ol>
				</section>

				{/* Main content */}
				<section className="content">

				  {/* Your Page Content Here */}

				</section>
			</div>
		);
	}
});
