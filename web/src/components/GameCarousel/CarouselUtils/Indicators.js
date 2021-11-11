const Indicators = ({ games }) => {
  return (
    <div className="carousel-indicators">
      {games.map((game, index) => (
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to={index.toString()}
          className={index === 0 ? "active" : null}
          aria-current={index === 0 ? "true" : null}
          aria-label={`Slide ${index}`}
        />
      ))}
    </div>
  );
};

export default Indicators;
