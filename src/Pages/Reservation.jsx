import "./Reservation.css";
import "../components/BookingForm";
import BookingForm from "../components/BookingForm";

function Reservation() {
  return (
    <div className="reservation">
      <div className="reserve-form">
        <h2>Book Table</h2>
      </div>
      <div className="reserve-info">
        <BookingForm />
      </div>
    </div>
  );
}

export default Reservation;
