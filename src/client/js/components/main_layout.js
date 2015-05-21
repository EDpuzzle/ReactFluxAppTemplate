"use strict";

var React       = require("react");

var MainHeader  = require("./main_header/main_header");
var MainSidebar = require("./main_sidebar/main_sidebar");
var MainFooter  = require("./main_footer/main_footer");
var ControlSidebar = require("./control_sidebar/control_sidebar");

var MainContent = require("./main_content/main_content_wrapper");

module.exports = React.createClass({

	render: function () {
		return (
			<div>
				<MainHeader />
				<MainSidebar />
				<MainContent />
				<MainFooter />
				<ControlSidebar />
			</div>
		);
	}
});
