function Button({ type = "button", children }) {
  return (
    <button type={type} className="button">
      {children}
    </button>
  );
}

export default Button;
