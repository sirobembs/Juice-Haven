import { useState } from "react";

export default function BookingForm() {
  const [date, setDate] = useState("dd/mm/yy");
  const [time, setTime] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [diners, setDiners] = useState("2");

  return (
    <div>
      <div>
        <h3>Select no of Diners, Date and Time</h3>
        <form>
          <label>
            Diners:
            <input
              value={diners}
              onChange={(e) => setDiners(e.target.value)}
              type="number"
            />
          </label>
          <label>
            Select Date:
            <input value={date} onChange={(e) => setDate(e.target.value)} />
          </label>
          <label>
            Set Time:
            <input
              placeholder="select"
              value={time}
              onChange={(e) => setTime(e.target.value)}
            />
          </label>
          <p>
            Occassion:
            <label>
              <input type="radio" name="myRadio" value="birthday" /> Birthday
            </label>
            <label>
              <input
                type="radio"
                name="myRadio"
                value="engagement"
                defaultChecked={true}
              />{" "}
              Engagement
            </label>
            <label>
              <input type="radio" name="myRadio" value="anniversary" />{" "}
              Anniversary
            </label>
          </p>
          <button> Check Availability</button>
        </form>
      </div>
      <div>
        <h3>Enter your Details</h3>
        <form>
          <label>
            First Name:
            <input
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </label>
          <label>
            Last Name:
            <input
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </label>
          <label>
            Phone Number:
            <input
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              type="phone"
              placeholder="+234 090********"
            />
          </label>
          <label>
            Email Address:
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="mail"
              placeholder="example@gmail.com"
            />
          </label>
          <button> Confirm Booking</button>
        </form>
      </div>
    </div>
  );
}
