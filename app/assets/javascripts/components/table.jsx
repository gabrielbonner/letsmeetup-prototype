class Table extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);
    this.state = { color: "white" };
    this.hello = this.hello.bind(this);
  }

  hello() {
    console.log(this);
    this.setState({ color: "green" });
    console.log('hello');
  }


  render() {
    return (
      <table>
        <thead>
          <tr>
            <th></th>
            <th className="user">Fiona</th>
            <th className="user">Gabriel</th>
            <th className="user">Jeremy</th>
            <th className="user">Kevin</th>
            <th className="user">Kyle</th>
          </tr>
        </thead>
        <tbody>
          { this.props.timeslots.map((timeslot) => {
            return <tr key={timeslot.id}>
                     <td>{timeslot.start}</td>
                     <td onClick={this.hello} className={this.state.color}></td>
                     <td></td>
                     <td></td>
                     <td></td>
                     <td></td>
                  </tr>
          })}
        </tbody>
      </table>
    );
  }
}
