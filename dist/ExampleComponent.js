var navigationConfig = [{
	href: 'https://armno.github.io',
	text: 'Armno blog'
}, {
	href: 'http://nemo.in.th',
	text: 'Nemo blog'
}];

var Navigation = React.createClass({displayName: "Navigation",
	getInitialState: function() {
		return {
			openDropdown: -1
		}
	},
	getDefaultProps: function() {
		return {
			config: []
		}
	},
	propTypes: {
		config: React.PropTypes.array
	},
	componentWillMount: function() {
		// called before `render()`
	},
	componentDidMount: function() {
		// called after `render()`
	},
	componentWillUnmount: function() {
		// called before the component is removed from the DOM
		// useful to unbind event listeners specific to this component
	},
	render: function() {
		var config = this.props.config;

		var items = config.map(function(item) {
			return (
				React.createElement("li", {className: "navigation__item"}, 
					React.createElement("a", {className: "navigation__link", href:  item.href}, 
						 item.text
					)
				)
			)
		});

		return (
			React.createElement("div", {className: "navigation"}, 
				items 
			)
		);
	}
});

React.render(React.createElement(Navigation, {config: navigationConfig }), document.body);
