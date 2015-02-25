var navigationConfig = [{
	id: 1,
	href: 'https://armno.github.io',
	text: 'Armno blog',
	children: [{
		id: 2,
		href: 'https://www.facebook.com/armnoblog',
		text: 'FB Page'
	}, {
		id: 3,
		href: 'https://instagram.com/armno',
		text: 'Armnostagram'
	}]
}, {
	id: 4,
	href: 'http://nemo.in.th',
	text: 'Nemo blog'
}];

var Navigation = React.createClass({
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
	openDropdown: function(id) {
		this.setState({
			openDropdown: id
		});
	},
	closeDropdown: function() {
		this.setState({
			openDropdown: -1
		});
	},
	render: function() {
		var config = this.props.config;

		var items = config.map(function(item, index) {
			var children;
			var dropdown;

			if (item.children) {
				children = item.children.map(function(child) {
					return (
						<li className="navigation__dropdown__item">
							<a className="navigation__dropdown__link" href={ child.href }>
								{ child.text }
							</a>
						</li>
					)
				});

				var dropdownClass = 'navigation__dropdown';
				if (this.state.openDropdown === index) {
					dropdownClass += ' navigation__dropdown--open';
				}
				console.log(this.state.openDropdown, index);

				dropdown = (
					<ul className={ dropdownClass }>
						{ children }
					</ul>
				)
			}

			return (
				<li key={ item.id }
					className="navigation__item"
					onMouseOut={ this.closeDropdown }
					onMouseOver={ this.openDropdown.bind(this, index) }>
					<a className="navigation__link" href={ item.href}>
						{ item.text }
					</a>
					{ dropdown }
				</li>
			)
		}, this);

		return (
			<div className="navigation">
				{ items }
			</div>
		);
	}
});

React.render(<Navigation config={ navigationConfig } />, document.body);
