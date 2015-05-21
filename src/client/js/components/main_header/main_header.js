var React         = require("react");
var MainHeaderNav = require("./navigation/main_header_navigation");

module.exports = React.createClass({
	render: function () {
		return (
			<header className="main-header">
				<a href="#" className="logo">
					<span className="logo-mini"><b>ED</b>T</span>
					<span className="logo-lg"><b>EDTwitter</b></span>
				</a>
				<MainHeaderNav />
			</header>
		);
	}
});
