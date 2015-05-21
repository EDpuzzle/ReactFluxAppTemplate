"use strict";

var React = require("react");

var MainSidebarUserPanel = require("./extras/main_sidebar_user_panel");
var MainSidebarSearchForm = require("./extras/main_sidebar_search_form");
var MainSidebarMenu = require("./menu/main_sidebar_menu");

module.exports = React.createClass({

	render: function () {
		return (
			<aside className="main-sidebar">
				<section className="sidebar">

					<MainSidebarUserPanel />
					<MainSidebarSearchForm />
					<MainSidebarMenu />

				</section>
			</aside>
		);
	}
});
