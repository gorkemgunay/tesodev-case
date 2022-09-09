function Form({ className, onSubmit, children }) {
  return (
    <form onSubmit={onSubmit} className={className}>
      {children}
    </form>
  );
}

export default Form;
