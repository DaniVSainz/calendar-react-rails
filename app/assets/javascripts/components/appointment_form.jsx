var AppointmentForm = React.createClass({
  render: function () {
    return (
      <div>
        <h2>Make a new Appointment </h2>
        <form>
          <input name='title' placeholder='Appointment Title' />
          <input name='appt_time' placehodler='Date & Time' />
          <input type='submite' value='Make Appointment' />
        </form>
      </div>
    )
  }
})
