class Table extends React.Component {
  hello() {
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
                     <td onClick={this.hello}></td>
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
