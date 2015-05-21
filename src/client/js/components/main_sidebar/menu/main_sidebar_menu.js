"use strict";

var React = require("react");

module.exports = React.createClass({

	render: function () {
		return (
			<ul className="sidebar-menu">
				<li className="header">HEADER</li>
				<li className="active">
					<a href="#"><i className="fa fa-link"></i> <span>Link</span></a>
				</li>
				<li><a href="#"><i className="fa fa-link"></i> <span>Another Link</span></a></li>
				<li className="treeview">
				  <a href="#"><i className="fa fa-link"></i> <span>Multilevel</span> <i className="fa fa-angle-left pull-right"></i></a>
				  <ul className="treeview-menu">
				    <li><a href="#">Link in level 2</a></li>
				    <li><a href="#">Link in level 2</a></li>
				  </ul>
				</li>
			</ul>
		);
	}
});
