import React, { useState } from "react";
import Input from "./Input";
import RadioSubject from "./RadioSubject";

function FormContact() {
  const [values, setValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    subject: "General Inquiry1",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
    console.log(e.target.name, value, values);
  };

  const validate = () => {
    const validationErrors = {};
    if (!values.firstName) {
      validationErrors.firstName = "First name is required";
    }
    if (!values.lastName) {
      validationErrors.lastName = "Last name is required";
    }
    if (!values.email) {
      validationErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
      validationErrors.email = "Email address is invalid";
    }
    if (!values.subject) {
      validationErrors.subject = "Subject is required";
    }
    if (!values.message) {
      validationErrors.message = "Message name is required";
    }
    console.log(
      "validationErrors",
      validationErrors,
      Object.keys(validationErrors).length
    );

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      console.log("Form submitted with value:", values);
      setErrors({});
    }
    return validationErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    console.log(
      "validationErrors submit",
      validationErrors,
      Object.keys(validationErrors).length
    );

    if (Object.keys(validationErrors).length === 0) {
      console.log("Form submitted successfully:", values);
      setSubmitted(true);
      setValues({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        subject: "General Inquiry1",
        message: "",
      });
      setErrors({});
      // You can pass formData as a fetch body directly:
      // const formJson = Object.fromEntries(formData.entries());
      // fetch('/some-api', { method: form.method, body: formJson });
    } else {
      setErrors(validationErrors);
    }
  };

  return (
    <div className="container form-wrapper">
      <form onSubmit={handleSubmit} noValidate>
        <div className="form-inputs">
          <Input
            label="First Name"
            type="text"
            name="firstName"
            value={values.firstName}
            onChange={handleChange}
            error={errors.firstName}
          />
          <Input
            label="Last Name"
            type="text"
            name="lastName"
            value={values.lastName}
            onChange={handleChange}
            error={errors.lastName}
          />
          <Input
            label="Email"
            type="email"
            name="email"
            value={values.email}
            onChange={handleChange}
            error={errors.email}
          />
          <Input
            label="Phone Number"
            type="phone"
            name="phone"
            value={values.phone}
            onChange={handleChange}
            error={errors.phone}
          />
        </div>
        <div className="form-radio">
          <h3>Select Subject?</h3>
          <div className="radio-wrapper">
            <RadioSubject
              name="subject"
              id="option1"
              value="General Inquiry1"
              checked={values.subject === "General Inquiry1"}
              onChange={handleChange}
              label="General Inquiry1"
            />
            <RadioSubject
              name="subject"
              id="option2"
              value="General Inquiry2"
              checked={values.subject === "General Inquiry2"}
              onChange={handleChange}
              label="General Inquiry2"
            />
            <RadioSubject
              name="subject"
              id="option3"
              value="General Inquiry3"
              checked={values.subject === "General Inquiry3"}
              onChange={handleChange}
              label="General Inquiry3"
            />
            <RadioSubject
              name="subject"
              id="option4"
              value="General Inquiry4"
              checked={values.subject === "General Inquiry4"}
              onChange={handleChange}
              label="General Inquiry4"
            />
          </div>
        </div>
        <div className="form-message">
          <Input
            label="Message"
            type="text"
            name="message"
            value={values.message}
            onChange={handleChange}
            placeholder="Write your message.."
            error={errors.message}
          />
        </div>
        <button type="submit" className="btn">
          Send Message
        </button>
      </form>
      {submitted && (
        <div className="success-msg">
          <h3>Thank you!</h3>
          <p>We`ll contact with you assap</p>
        </div>
      )}
    </div>
  );
}

export default FormContact;
