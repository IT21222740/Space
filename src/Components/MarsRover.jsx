import { useState } from "react";

const Mars = () => {
  const [rover, setRover] = useState("Curiosity");
  const [camera, setCamera] = useState("");
  const [date, setDate] = useState("");
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchPhotos = async () => {
    try {
      setLoading(true);
      const response = await fetch(
        `https://api.nasa.gov/mars-photos/api/v1/rovers/${rover}/photos?earth_date=${date}&page=1&api_key=RI3sd4D7VvsJxzWL1HpmfF9aFh8wZSausfDbxOeI`
      );
      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }
      const data = await response.json();
      setPhotos(data.photos);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchPhotos();
  };

  return (
    <>
      <div className="mars-container">
        <form className="form-container mars-form" onSubmit={handleSubmit}>
          <label className="mars-label">
            Rover:
            <select
              className="mars-select"
              value={rover}
              onChange={(e) => setRover(e.target.value)}
            >
              <option value="Curiosity">Curiosity</option>
              <option value="Opportunity">Opportunity</option>
              <option value="Spirit">Spirit</option>
            </select>
          </label>
          <label className="mars-label">
            Date:
            <input
              className="mars-input"
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              required
            />
          </label>
          <button className="mars-button" type="submit">
            Fetch Photos
          </button>
        </form>
      </div>
      {loading && <p className="loading mars-loading">Loading...</p>}
      {error && <p className="error mars-error">Error: {error}</p>}
      {photos.length > 0 && (
        <div className="mars-photos-container">
          <ul className="mars-ul">
            {photos.map((photo) => (
              <li className="mars-li" key={photo.id}>
                <img
                  className="mars-img"
                  src={photo.img_src}
                  alt={`Mars Rover Photo ${photo.id}`}
                />
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
};

export default Mars;
