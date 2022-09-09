function RecordCard({ fullName, company, date, country, city, left }) {
  return (
    <div className="record">
      <div className="record__right">
        <img src="./assets/icons/location.svg" alt="location" />
        <div>
          <h3>{company}</h3>
          <small>
            {country}, {city}
          </small>
        </div>
      </div>
      {left && (
        <div className="record__left">
          <p>{fullName}</p>
          <strong>{date}</strong>
        </div>
      )}
    </div>
  );
}

export default RecordCard;
