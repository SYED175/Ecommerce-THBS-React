const Spinner = () => {
  return (
    <div>
      <div
        className="spinner-border sd-spinner"
        style={{ width: "5rem", height: "5rem" }}
        role="status"
      >
        <span className="visually-hidden">...</span>
      </div>
    </div>
  );
};

export default Spinner;
