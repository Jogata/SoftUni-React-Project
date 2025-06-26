import "./booking.css";

export function Booking() {
  return (
    <div id="deals" className="booking" >
      <form onSubmit={e => e.preventDefault()}>
        <div className="form-group">
          <label>Destination</label>
          <select>
            <option>Grande Antigua</option>
            <option>Key West</option>
            <option>Maldives</option>
            <option>Cozumel</option>
          </select>
        </div>
        <div className="form-group dates">
          <div className="date">
            <label>Check-In</label>
            <input type="date" />
          </div>
          <div className="date">
            <label>Check-Out</label>
            <input type="date" />
          </div>
        </div>
        <div className="form-group">
          <label>Search</label>
          <button>Rates & Availabilities</button>
        </div>
      </form>
    </div>
  );
};