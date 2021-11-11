import "./GameInput.css"

const GameInput = ({className, label, field, defaultValue, onChange }) => {
  return (
    <div className={className}>
      <label htmlFor={label} className="form-label">
        {label}
      </label>
      <input
        type="text"
        className="form-control"
        id={field}
        placeholder={defaultValue}
        onChange={onChange(field)}
      />
    </div>
  );
};

export default GameInput;
