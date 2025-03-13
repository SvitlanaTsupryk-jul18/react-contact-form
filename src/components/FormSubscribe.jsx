import React, { useState } from "react";

const FormSubscribe = () => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (event) => {
    setEmail(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (validateEmail(email)) {
      // Handle successful form submission (e.g., send email to server)
      const rData = { email };
      function sendRequest(rData) {
        fetch("/form-data/5", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(rData),
        });
      }
      console.log("Email submitted:", email);
      setSubmitted(true);
      setError("");
    } else {
      setError("Please enter a valid email address.");
    }
  };

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };

  return (
    <div className="form-container">
      <h3>Join Our Newsletter</h3>
      {submitted ? (
        <p className="subscribeForm-success">Thank you for subscribing!</p>
      ) : (
        <form onSubmit={handleSubmit} noValidate>
          <div className="subscribeForm">
            <input
              type="email"
              placeholder="Your email address"
              value={email}
              onChange={handleChange}
              required
              className={error ? "error" : ""}
            />
            <button type="submit" className="subscribeForm-btn">Subscribe</button>
          </div>
          {error && <p className="subscribeForm-error">{error}</p>}
        </form>
      )}
      <p>* Will send you weekly updates for your better tool management.</p>
    </div>
  );
};

export default FormSubscribe;
