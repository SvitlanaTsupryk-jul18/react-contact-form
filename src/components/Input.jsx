import { useState } from "react";

const Input = ({
  label,
  type,
  name,
  value,
  onChange,
  error,
  placeholder = "",
}) => {
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };
  return (
    <div className={error ? "error input-wrapper" : "input-wrapper"}>
      <label htmlFor={label} className={isFocused ? "focused" : ""}>
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
        className="input"
        placeholder={placeholder}
      />
      {error && <p className="input-error">{error}</p>}
    </div>
  );
};

export default Input;
