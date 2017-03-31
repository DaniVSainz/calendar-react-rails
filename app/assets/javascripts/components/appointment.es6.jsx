const Appointment = ({appointment}) =>
  <div className='appointment'>
    <h3>{appointment.title}</h3>
    <p>{moment(appointment.appt_time).format('MMMM Do YYYY, h:mm:ss a')}</p>
  </div>
