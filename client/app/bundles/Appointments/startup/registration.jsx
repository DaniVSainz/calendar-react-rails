import ReactOnRails from "react-on-rails";
import Appointments from "../components/appointments";
import HelloWorld from "../components/HelloWorld";
import Message from "../components/Message"
import AppFrame from "../components/AppFrame"
// This is how react_on_rails can see the Appointments in the browser.
ReactOnRails.register({
  Appointments,
  HelloWorld,
  Message,
  AppFrame
});
