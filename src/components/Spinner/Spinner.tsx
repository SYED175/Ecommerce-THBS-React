const Spinner = () => {
  return (
    <div className="container d-flex flex-column align-items-center m-4">
      <div
        className="spinner-border mb-3"
        style={{ width: "5rem", height: "5rem" }}
        role="status"
      >
        <span className="visually-hidden">...</span>
      </div>
      <p>It may take upto 50 seconds or more if strapi is inactive..</p>
    </div>
  );
};

export default Spinner;
