function Button({ type = "button", children, ...props }) {
  return (
    <button type={type} className="button" {...props}>
      {children}
    </button>
  );
}

export default Button;
