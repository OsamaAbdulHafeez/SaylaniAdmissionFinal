import React, { useState } from 'react';

function Cities() {
  const [cityData, setCityData] = useState({
    cityName: '',
    cityCampus: []
  });

  const handleChange = (e) => {
    setCityData({ ...cityData, [e.target.name]: e.target.value });
  };

  const handleCampusChange = (campus) => {
    if (cityData.cityCampus.includes(campus)) {
      setCityData({
        ...cityData,
        cityCampus: cityData.cityCampus.filter(c => c !== campus)
      });
    } else {
      setCityData({
        ...cityData,
        cityCampus: [...cityData.cityCampus, campus]
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Implement logic to submit the city data
    console.log(cityData);
    // Clear the form after submission
    setCityData({
      cityName: '',
      cityCampus: []
    });
  };

  return (
    <div className="cities-page">
      <h1 className="page-title">Cities Management</h1>
      <form onSubmit={handleSubmit} className="page-form">
  <div className="form-group">
    <label htmlFor="cityName">City Name:</label>
    <input
      type="text"
      id="cityName"
      name="cityName"
      value={cityData.cityName}
      onChange={handleChange}
      placeholder="Enter City Name"
      required
      className="form-control"
    />
  </div>
  <div className="form-group">
    <label htmlFor="cityCampus">Associated Campuses (comma separated):</label>
    <input
      type="text"
      id="cityCampus"
      name="cityCampus"
      value={cityData.cityCampus.join(', ')} // Convert array to string for display
      onChange={(e) => handleCampusChange(e.target.value)}
      placeholder="Enter campuses"
      required
      className="form-control"
    />
  </div>
  <button type="submit" className="btn btn-primary">Add City</button>
</form>

<table className="page-table">
  <thead>
    <tr>
      <th>City Name</th>
      <th>Associated Campuses</th>
      <th>Actions</th>
    </tr>
  </thead>
  <tbody>
    {/* Rows for each city would go here */}
  </tbody>
</table>

    </div>
  );
}

export default Cities;
