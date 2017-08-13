var listUsers = React.createClass({
  render: function() {
    return (
      <ul>
        {this.props.users.map(function(user){
          return <li>{user.username} - {user.email}</li>;
        })}
      </ul>
    )
  }
})