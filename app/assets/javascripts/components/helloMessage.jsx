var HelloMessage = React.createClass({
  render: function() {
    return (
      <div>
        <h1>Hello {this.props.name}!</h1>
        <p>Show page for User</p>
      </div>
    )
  }
});