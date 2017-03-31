const Appointment = ({appointment}) => {
    return(
      <div>
        <h3>{appointment.title}</h3>
        <p>{moment(appointment.appt_time).format('MMMM Do YYYY, h:mm:ss a')}</p>
      </div>
    )
}
