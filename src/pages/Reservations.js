import { useState } from 'react';
import useFavorites from '../hooks/useFavorites';
import menuData from '../data/menuData';

function Reservations() {
  const { favorites } = useFavorites();
  const favoriteDishes = menuData.filter(item => favorites.includes(item.id));

  const emptyForm = {
    name: '',
    email: '',
    date: '',
    time: '',
    partySize: '',
    specialRequests: ''
  };

  const [formData, setFormData] = useState(emptyForm);
  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState('');
  const [reservations, setReservations] = useState(function() {
    const saved = localStorage.getItem('reservations');
    if (saved) {
      return JSON.parse(saved);
    }
    return [];
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    if (errors[name]) {
      setErrors({ ...errors, [name]: '' });
    }
  }

  function validate() {
    const newErrors = {};
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required.';
    }
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required.';
    } else if (!formData.email.includes('@')) {
      newErrors.email = 'Please enter a valid email address.';
    }
    if (!formData.date) {
      newErrors.date = 'Date is required.';
    } else if (new Date(formData.date) <= new Date(new Date().toDateString())) {
      newErrors.date = 'Please select a future date.';
    }
    if (!formData.time) {
      newErrors.time = 'Time is required.';
    }
    if (!formData.partySize) {
      newErrors.partySize = 'Please select a party size.';
    }
    return newErrors;
  }

  function handleSubmit(e) {
    e.preventDefault();
    const newErrors = validate();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    const newReservation = {
      id: Date.now(),
      name: formData.name,
      email: formData.email,
      date: formData.date,
      time: formData.time,
      partySize: formData.partySize,
      specialRequests: formData.specialRequests,
      createdAt: new Date().toISOString()
    };
    const updated = [newReservation, ...reservations];
    setReservations(updated);
    localStorage.setItem('reservations', JSON.stringify(updated));
    setFormData(emptyForm);
    setErrors({});
    setSuccessMessage('Your reservation has been received. We look forward to seeing you!');
  }

  function cancelReservation(id) {
    const updated = reservations.filter(r => r.id !== id);
    setReservations(updated);
    localStorage.setItem('reservations', JSON.stringify(updated));
  }

  function prefillFavorites() {
    if (favoriteDishes.length === 0) return;
    const names = favoriteDishes.map(d => d.name);
    let note = '';
    if (names.length === 1) {
      note = 'I love your ' + names[0] + '.';
    } else {
      const last = names[names.length - 1];
      const rest = names.slice(0, -1).join(', ');
      note = 'I love your ' + rest + ', and ' + last + '.';
    }
    setFormData({ ...formData, specialRequests: note });
  }

  function formatDate(dateStr) {
    const [year, month, day] = dateStr.split('-');
    return month + '/' + day + '/' + year;
  }

  function formatTime(timeStr) {
    const [hourStr, minute] = timeStr.split(':');
    const hour = parseInt(hourStr, 10);
    const ampm = hour >= 12 ? 'PM' : 'AM';
    const display = hour % 12 === 0 ? 12 : hour % 12;
    return display + ':' + minute + ' ' + ampm;
  }

  return (
    <main>
      <section className="page-header">
        <div className="container">
          <h1>Reservations</h1>
        </div>
      </section>

      <section>
        <div className="container">

          {favoriteDishes.length > 0 && (
            <div className="favorites-callout mb-5">
              <p className="favorites-callout-heading">&#9829; Your Favorites</p>
              <div className="fav-badges">
                {favoriteDishes.map(dish => (
                  <span key={dish.id} className="fav-badge">{dish.name}</span>
                ))}
              </div>
              <button className="btn-sm-outline" onClick={prefillFavorites}>
                Add these to my special requests
              </button>
            </div>
          )}

          <div className="form-card form-section">
            <h2>Reserve a Table</h2>

            {successMessage && (
              <div className="alert-success-custom" role="alert">
                {successMessage}
              </div>
            )}

            <form noValidate onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="res-name">Name</label>
                  <input
                    type="text"
                    id="res-name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                  />
                  {errors.name && <span className="error">{errors.name}</span>}
                </div>
                <div className="form-group">
                  <label htmlFor="res-email">Email</label>
                  <input
                    type="email"
                    id="res-email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                  />
                  {errors.email && <span className="error">{errors.email}</span>}
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="res-date">Date</label>
                  <input
                    type="date"
                    id="res-date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                  />
                  {errors.date && <span className="error">{errors.date}</span>}
                </div>
                <div className="form-group">
                  <label htmlFor="res-time">Time</label>
                  <input
                    type="time"
                    id="res-time"
                    name="time"
                    value={formData.time}
                    onChange={handleChange}
                  />
                  {errors.time && <span className="error">{errors.time}</span>}
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="res-party">Party Size</label>
                <select
                  id="res-party"
                  name="partySize"
                  value={formData.partySize}
                  onChange={handleChange}
                >
                  <option value="">Select</option>
                  <option value="1">1 guest</option>
                  <option value="2">2 guests</option>
                  <option value="3">3 guests</option>
                  <option value="4">4 guests</option>
                  <option value="5">5 guests</option>
                  <option value="6">6 guests</option>
                  <option value="7+">7 or more</option>
                </select>
                {errors.partySize && <span className="error">{errors.partySize}</span>}
              </div>

              <div className="form-group">
                <label htmlFor="res-notes">Special Requests</label>
                <textarea
                  id="res-notes"
                  name="specialRequests"
                  value={formData.specialRequests}
                  onChange={handleChange}
                ></textarea>
              </div>

              <button type="submit" className="btn">Request Reservation</button>
            </form>
          </div>

          <div className="reservations-list">
            <h2>My Reservations</h2>
            {reservations.length === 0 && (
              <p className="no-reservations">You have no reservations yet.</p>
            )}
            <div className="row g-3 mt-2">
              {reservations.map(r => (
                <div key={r.id} className="col-md-6">
                  <div className="card reservation-card h-100">
                    <div className="card-body">
                      <h5 className="card-title">{r.name}</h5>
                      <p className="card-text">
                        <span className="res-detail-label">Date:</span> {formatDate(r.date)}<br />
                        <span className="res-detail-label">Time:</span> {formatTime(r.time)}<br />
                        <span className="res-detail-label">Party:</span> {r.partySize} {r.partySize === '1' ? 'guest' : 'guests'}<br />
                        {r.specialRequests && (
                          <>
                            <span className="res-detail-label">Notes:</span> {r.specialRequests}
                          </>
                        )}
                      </p>
                      <button
                        className="btn-cancel"
                        onClick={() => cancelReservation(r.id)}
                      >
                        Cancel Reservation
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>
    </main>
  );
}

export default Reservations;
