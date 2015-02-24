var ExampleComponent = React.createClass({
	render: function() {
		return (
			<div className="navigation">
				Hello World!
			</div>
		);
	}
});

React.render(<ExampleComponent />, document.body);
