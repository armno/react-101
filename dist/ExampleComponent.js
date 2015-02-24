var ExampleComponent = React.createClass({displayName: "ExampleComponent",
	render: function() {
		return (
			React.createElement("div", {className: "navigation"}, 
				"Hello World!"
			)
		);
	}
});

React.render(React.createElement(ExampleComponent, null), document.body);
