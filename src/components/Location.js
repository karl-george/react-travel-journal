import '../css/Location.css';

const Location = ({title, location, googleMapsUrl, startDate, endDate, description, imageUrl}) => {
  return <div className='container'>
    <div className="grid grid-1x2">
      <img className='location-img' src={imageUrl} alt="" />
      <div className="location-content">
        <div className="location-info">
          <span><img src="https://www.freeiconspng.com/uploads/contact-address-icon-4.png" width="20" alt="contact address icon" /> {location}</span>
          <a className='location-google' href={googleMapsUrl}>View on Google Maps</a>
        </div>
        <h2 className='location-title'>{title}</h2>
        <h3 className='location-date'>{startDate} - {endDate}</h3>
        <p className='location-text'>{description}</p>
      </div>
    </div>
  </div>;
};

export default Location;
