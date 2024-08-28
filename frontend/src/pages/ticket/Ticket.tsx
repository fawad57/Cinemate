import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Ticket.css";

interface Ticket {
  ticket_id: number;
  movieName: string;
  price: number;
  seat_no: number;
  user_id: number;
}

const Ticket = () => {
  const API_BASE_URL = "http://localhost:8080"; // Update with your backend API base URL
  const [tickets, setTickets] = useState<Ticket[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const bookingNumber = localStorage.getItem("bookingNumber");
    if (!bookingNumber) {
      alert("Booking number not found. Please complete your booking first.");
      return;
    }

    const fetchTickets = async () => {
      const email = localStorage.getItem("email");
      try {
        const response = await axios.post(`${API_BASE_URL}/tickets`, { email });
        console.log(response.data);
        setTickets(response.data);
      } catch (error) {
        console.error("Error fetching tickets:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchTickets();
  }, []);

  return (
    <div className="tickets">
      {loading ? (
        <div className="loader"></div>
      ) : (
        <div className="tickets-container">
          <h2>Your Tickets</h2>
          {tickets.length === 0 ? (
            <p>No tickets found.</p>
          ) : (
            tickets.map((ticket) => (
              <div key={ticket.ticket_id} className="ticket-card">
                <div className="ticket-detail">
                  <span className="label">Movie Name:</span>
                  <span>{ticket.movieName}</span>
                </div>
                <div className="ticket-detail">
                  <span className="label">Price:</span>
                  <span>${ticket.price}</span>
                </div>
                <div className="ticket-detail">
                  <span className="label">Seat No:</span>
                  <span>{ticket.seat_no}</span>
                </div>
                <div className="ticket-detail">
                  <span className="label">User:</span>
                  <span>{ticket.user_id}</span>
                </div>
              </div>
            ))
          )}
        </div>
      )}
    </div>
  );
};

export default Ticket;
