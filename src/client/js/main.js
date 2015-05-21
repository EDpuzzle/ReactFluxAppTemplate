"use strict";

var React = require("react");
var MainLayout = require("./components/main_layout");

module.exports = React.render(React.createElement(MainLayout, {}), document.getElementById("edpuzzle-app"));