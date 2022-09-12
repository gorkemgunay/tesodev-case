function Error({ errors, setErrors }) {
  return (
    <div className="error">
      <div className="error__content">
        <h4>Error while adding link element</h4>
        {Object.values(errors).map((err, index) => (
          <div key={index}>{err}</div>
        ))}
      </div>
      <div className="error__pink">Error</div>
      <button onClick={() => setErrors({})} className="error__close">
        <img src="./assets/icons/close.svg" alt="close" />
      </button>
    </div>
  );
}

export default Error;
