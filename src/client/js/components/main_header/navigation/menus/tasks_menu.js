"use strict";

var React = require("react");

module.exports = React.createClass({

	render: function () {
		return (
			<li className="dropdown tasks-menu">
        {/*} Menu Toggle Button */}
        <a href="#" className="dropdown-toggle" data-toggle="dropdown">
          <i className="fa fa-flag-o"></i>
          <span className="label label-danger">9</span>
        </a>
        <ul className="dropdown-menu">
          <li className="header">You have 9 tasks</li>
          <li>
            {/*} Inner menu: contains the tasks */}
            <ul className="menu">
              <li>{/*} Task item */}
                <a href="#">
                  {/*} Task title and progress text */}
                  <h3>
                    Design some buttons
                    <small className="pull-right">20%</small>
                  </h3>
                  {/*} The progress bar */}
                  <div className="progress xs">
                    {/*} Change the css width attribute to simulate progress */}
                    <div className="progress-bar progress-bar-aqua" style={{width: "20%"}} role="progressbar" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100">
                      <span className="sr-only">20% Complete</span>
                    </div>
                  </div>
                </a>
              </li>{/*} end task item */}
            </ul>
          </li>
          <li className="footer">
            <a href="#">View all tasks</a>
          </li>
        </ul>
      </li>
		);
	}
});