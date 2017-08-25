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
      red: "white",
    }
    this.setState({ [name]: colors[this.state[name]] });
  }


  render() {
    IMPORT MOMENT.JS
    const date = new Date(this.props.timeslot.start).toDateString()
    const startHour = new Date(this.props.timeslot.start).getHours()
    const startMin = new Date(this.props.timeslot.start).getMinutes()
    const finishHour = new Date(this.props.timeslot.finish).getHours()
    const finishMin = new Date(this.props.timeslot.finish).getMinutes()
      return (
        <tr key={ this.props.timeslot.id }>
           <td>{ date } <br/> from { startHour }:{ startMin } to { finishHour }:{ finishMin } </td>
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
              <td>Add a new time</td>
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
