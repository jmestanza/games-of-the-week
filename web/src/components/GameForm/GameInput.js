const GameInput = ({ label, field, defaultValue, onChange }) => {
  return (
    <div className="col-2">
      <label htmlFor={label} className="form-label">
        {label}
      </label>
      <input
        type="text"
        className="form-control"
        id={field}
        placeholder={defaultValue}
        onChange={onChange}
      />
    </div>
  );
};

export default GameInput;
