function Reservations() {
  return (
    <main>
      <section className="page-header">
        <div className="container">
          <h1>Reservations</h1>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="form-section">
            <h2>Reserve a Table</h2>
            <form noValidate>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="res-name">Name</label>
                  <input type="text" id="res-name" />
                </div>
                <div className="form-group">
                  <label htmlFor="res-email">Email</label>
                  <input type="email" id="res-email" />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="res-date">Date</label>
                  <input type="date" id="res-date" />
                </div>
                <div className="form-group">
                  <label htmlFor="res-time">Time</label>
                  <input type="time" id="res-time" />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="res-party">Party Size</label>
                <select id="res-party">
                  <option value="">Select</option>
                  <option value="1">1 guest</option>
                  <option value="2">2 guests</option>
                  <option value="3">3 guests</option>
                  <option value="4">4 guests</option>
                  <option value="5">5 guests</option>
                  <option value="6">6 guests</option>
                  <option value="7+">7 or more</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="res-notes">Special Requests</label>
                <textarea id="res-notes"></textarea>
              </div>

              <button type="submit" className="btn">Request Reservation</button>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Reservations;
