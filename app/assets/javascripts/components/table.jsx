class Row extends React.Component {
  constructor(props) {
    super(props);
    console.log('Row props =', props);
    this.state = {};
    this.state.color = "white";
    this.toggleColor = this.toggleColor.bind(this);
  }

  toggleColor() {
    const colors = {
      white: "green",
      green: "yellow",
      yellow: "red",
      red: "white",
    }
    this.setState({color: colors[this.state.color] });
    console.log(this.state.color);
  }

  render() {
      return <tr key={this.props.timeslot.id}>
               <td>{this.props.timeslot.start}</td>
               <td className={this.state.color} onClick={this.toggleColor}></td>
               <td></td>
               <td></td>
               <td></td>
               <td></td>
            </tr>
  }
}

class Table extends React.Component {
  constructor(props) {
    super(props);
    console.log('Table props =', props);
  }

  render() {
    var rows = [];
    this.props.timeslots.forEach(function(timeslot) {
        rows.push(<Row timeslot={timeslot} key={timeslot.id} />);
      });
    return (
      <div className="main">
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
            {rows}
          </tbody>
        </table>
      </div>
    );
  }
}
