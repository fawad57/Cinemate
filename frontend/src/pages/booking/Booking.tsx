import React, { useEffect, useState } from "react";
import ShowCaseCard from "../../components/show-case-card/ShowCaseCard";
import { getSingleMovie } from "../../components/api-functions/getMovies";
import { useForm } from "react-hook-form";
import axios from "axios";
import "./Booking.css";
import { useNavigate } from "react-router-dom";

interface Movie {
  id: number;
  title: string;
  trailerLink: string;
  backdrop_path: string;
  genres: string[];
  overview: string;
  duration: number;
  rating: number;
  tagline: string;
  language: string;
  poster: string;
}

const cinemas = [
  { id: 1, name: "Cinema 1" },
  { id: 2, name: "Cinema 2" },
  { id: 3, name: "Cinema 3" },
];

const halls = [
  { id: 1, name: "Hall A" },
  { id: 2, name: "Hall B" },
  { id: 3, name: "Hall C" },
];

const Booking = () => {
  const API_BASE_URL = "http://localhost:8080"; // Update with your backend API base URL

  const [seats, setSeats] = useState<number[]>(
    Array.from({ length: 50 }, (_, i) => i + 1)
  );

  const [id, setId] = useState<number | null>(null);
  const [loading, setLoading] = useState(true);
  const [movie, setMovie] = useState<Movie | undefined>(undefined);
  const [bookedSeats, setBookedSeats] = useState<number[]>([]);
  const [selectedSeats, setSelectedSeats] = useState<number[]>([]);
  useEffect(() => {
    const movieId = localStorage.getItem("movie");
    if (movieId) {
      setId(parseInt(movieId));
    }

    const fetchMovie = async () => {
      try {
        const movie = await getSingleMovie(Number(movieId));
        setMovie(movie);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching movie:", error);
        setLoading(false);
      }
    };

    fetchMovie();

    const fetchBookedSeats = async () => {
      if (movie) {
        try {
          const response = await axios.post(`${API_BASE_URL}/booked-seats`, {
            name: movie.title,
          });
          console.log("Booked seats:", response.data);
          setBookedSeats(response.data);
        } catch (error) {
          console.error("Failed to fetch booked seats:", error);
        }
      }

      //remove the booked seats from the seats array
      setSeats((prevSeats) =>
        prevSeats.filter((seat) => !bookedSeats.includes(seat))
      );
    };

    fetchBookedSeats();
  }, [movie]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();

  const generateBookingNumber = () => {
    return Math.floor(100000 + Math.random() * 900000).toString();
  };

  const submitBooking = async (data: any) => {
    const bookingNumber = generateBookingNumber();
    const user = localStorage.getItem("email");

    const price = selectedSeats.length * 1000;
    console.log({
      ...data,
      movieName: movie?.title,
      bookingNumber,
      user,
      seats: selectedSeats,
      price,
    });
    localStorage.setItem("bookingNumber", bookingNumber);

    try {
      const response = await axios.post(`${API_BASE_URL}/book`, {
        ...data,
        movieName: movie?.title,
        bookingNumber,
        user,
        seats: selectedSeats,
        price,
      });
      console.log("Booking successful:", response.data);

      // Handle successful booking (e.g., show success message, redirect)
    } catch (error) {
      console.error("Booking failed:", error);
      // Handle booking failure (e.g., show error message)
    }

    navigate("/Payment");
  };

  const toggleSeatSelection = (seatNumber: number) => {
    setSelectedSeats((prevSelectedSeats) =>
      prevSelectedSeats.includes(seatNumber)
        ? prevSelectedSeats.filter((seat) => seat !== seatNumber)
        : [...prevSelectedSeats, seatNumber]
    );
  };

  return (
    <div className="booking">
      {loading ? (
        <div className="loader"></div>
      ) : (
        <div className="booking-container">
          <div className="side-part">
            <ShowCaseCard movie={movie!} />
            <div className="price-card">
              <h3>Price Details</h3>
              <div className="price-details">
                <div className="price-row">
                  <span>Price </span>
                  <span> Rs.1000</span>
                </div>
                <div className="price-row">
                  <span>Tickets</span>
                  <span>{selectedSeats.length}</span>
                </div>
                <div className="price-row">
                  <span>Total</span>
                  <span>Rs.{selectedSeats.length * 1000}</span>
                </div>
              </div>
            </div>
          </div>

          <form className="booking-box" onSubmit={handleSubmit(submitBooking)}>
            <h2>Book your tickets</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi.
            </p>
            <div className="input-box">
              <label htmlFor="cinema">Cinema</label>
              <select id="cinema" {...register("cinemaId")}>
                {cinemas.map((cinema) => (
                  <option key={cinema.id} value={cinema.id}>
                    {cinema.name}
                  </option>
                ))}
              </select>
            </div>
            <div className="input-box">
              <label htmlFor="hall">Hall</label>
              <select id="hall" {...register("hallId")}>
                {halls.map((hall) => (
                  <option key={hall.id} value={hall.id}>
                    {hall.name}
                  </option>
                ))}
              </select>
            </div>
            <div className="input-box">
              <label htmlFor="date">Date</label>
              <input type="date" id="date" {...register("date")} />
            </div>
            <div className="input-box">
              <label htmlFor="time">Time</label>
              <input type="time" id="time" {...register("time")} />
            </div>
            <div className="input-box">
              <label htmlFor="tickets">Tickets</label>
              <input type="number" id="tickets" {...register("tickets")} />
            </div>
            <div className="input-box">
              <label>Seats</label>
              <div className="seats-container">
                {seats.map((seat) => (
                  <div
                    key={seat}
                    className={`seat ${
                      selectedSeats.includes(seat)
                        ? "selected"
                        : bookedSeats.includes(seat)
                        ? "booked"
                        : ""
                    }`}
                    onClick={() =>
                      !bookedSeats.includes(seat) && toggleSeatSelection(seat)
                    }
                  >
                    {seat}
                  </div>
                ))}
              </div>
            </div>
            <button className="book-btn" type="submit">
              Book Now
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default Booking;
