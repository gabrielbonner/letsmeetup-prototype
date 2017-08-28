class Row extends React.Component {
  constructor(props) {
    super(props);
    console.log('Row props =', props);
    this.state = {};
    this.state.fiona = props.timeslot.fiona;
    this.state.gabriel = props.timeslot.gabriel;
    this.state.jeremy = props.timeslot.jeremy;
    this.state.kevin = props.timeslot.kevin;
    this.state.kyle = props.timeslot.kyle;
    this.toggleColor = this.toggleColor.bind(this);
  }

  toggleColor(name) {
    const colors = {
      white: "green",
      green: "yellow",
      yellow: "red",
<<<<<<< HEAD
      red: "blue",
      blue: "white",
=======
      red: "white",
      white: "blue",
>>>>>>> 06c5ade1c17fc611beb3b9bac86aa74aa19be569
    }
    this.setState({ [name]: colors[this.state[name]] });
  }


  render() {
<<<<<<< HEAD
=======
    IMPORT MOMENT.JS
    PUT COLOR KEY AT BOTTOM OF TABLE, BLUE=PREFERRED
    const date = new Date(this.props.timeslot.start).toDateString()
    const startHour = new Date(this.props.timeslot.start).getHours()
    const startMin = new Date(this.props.timeslot.start).getMinutes()
    const finishHour = new Date(this.props.timeslot.finish).getHours()
    const finishMin = new Date(this.props.timeslot.finish).getMinutes()
>>>>>>> 06c5ade1c17fc611beb3b9bac86aa74aa19be569
      return (
        <tr key={ this.props.timeslot.id }>
           <td>{ this.props.timeslot.date } <br/> from { this.props.timeslot.startTime } to { this.props.timeslot.endTime} </td>
           <td className={ this.state.fiona } onClick={() => this.toggleColor("fiona")}></td>
           <td className={ this.state.gabriel } onClick={() => this.toggleColor("gabriel") }></td>
           <td className={ this.state.jeremy } onClick={() => this.toggleColor("jeremy") }></td>
           <td className={ this.state.kevin } onClick={() => this.toggleColor("kevin") }></td>
           <td className={ this.state.kyle } onClick={() => this.toggleColor("kyle") }></td>
        </tr>
      )
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
            <tr>
              <td><a href="{ http://localhost:3000/timeslots/new }">Add a new time</a></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}
