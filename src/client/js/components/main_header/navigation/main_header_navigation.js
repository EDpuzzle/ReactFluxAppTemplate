"use strict";

var React = require("react");

var MessagesMenu      = require("./menus/messages_menu");
var NotificationsMenu = require("./menus/notifications_menu");
var TasksMenu         = require("./menus/tasks_menu");
var UserAccountMenu   = require("./menus/user_account_menu");

module.exports = React.createClass({
	render: function () {
		return (
			<nav className="navbar navbar-static-top" role="navigation">

				<a href="#" className="sidebar-toggle" data-toggle="offcanvas" role="button">
				  <span className="sr-only">Toggle navigation</span>
				</a>

				<div className="navbar-custom-menu">
					<ul className="nav navbar-nav">

						<MessagesMenu />
						<NotificationsMenu />
						<TasksMenu />
						<UserAccountMenu />

						{/* Control Sidebar Toggle Button */}
						<li>
						  <a href="#" data-toggle="control-sidebar"><i className="fa fa-gears"></i></a>
						</li>

					</ul>
				</div>
			</nav>
		);
	}
});
