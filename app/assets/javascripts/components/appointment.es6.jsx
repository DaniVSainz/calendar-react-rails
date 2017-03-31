class Appointment extends React.component {
  render {
    return(
      <div>
        <h3>{this.props.appointment.title}</h3>
        <p>{moment(this.props.appointment.appt_time).format('MMMM Do YYYY, h:mm:ss a')}</p>
      </div>
    )
  }
}
