function Input({ label, htmlFor, value, setValue, error, ...props }) {
  return (
    <div className="input__container">
      {label && (
        <label
          htmlFor={htmlFor}
          className={`input__label ${error && "label-error"}`}
        >
          {label}
        </label>
      )}
      <input
        id={htmlFor}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className={`input ${error && "input-error"}`}
        {...props}
      />
      {error && <span className="input__error">{error}</span>}
    </div>
  );
}

export default Input;
