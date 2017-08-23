var listUsers = React.createClass({
  componentDidMount() {
    console.log("Mounted users");
  },

  render() {
    return (
      <div>
        {this.props.users.map((user, index) => {
          return <div key={index} className="user">{user.username}</div>;
        })}
      </div>
    )
  }
})
