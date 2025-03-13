import check from "../assets/check.svg";

const RadioSubject = ({ name, value, checked, onChange, label }) => {
  return (
    <div className="radio-container">
      <input
        type="radio"
        id={value}
        name={name}
        value={value}
        checked={checked}
        onChange={onChange}
        className="radio-input"
      />
      <label htmlFor={value} className="radio-label">
        <span className="radio-icon">
          {checked && <img className="open-icon" src={check} />}
        </span>
        <span className="radio-text">{label}</span>
      </label>
    </div>
  );
};

export default RadioSubject;
