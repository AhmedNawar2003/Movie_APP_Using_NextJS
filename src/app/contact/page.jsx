"use client"
import { useState } from "react";
import styles from "./contact.module.css";

export default function Contact() {
  // State to control input values
  const [formData, setFormData] = useState({
    firstName: "Mark",
    lastName: "Otto",
    username: "",
    city: "",
    state: "",
    zip: "",
    termsAgreed: false,
  });

  // Handle input changes
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);
  };

  return (
    <div className={`${styles.contact}`}>
      <h1>Contact</h1>
      <p>Contact Us Here</p>
      <form className="row g-3 needs-validation" noValidate onSubmit={handleSubmit}>
        <div className="col-md-4">
          <label htmlFor="firstName" className="form-label">
            First name
          </label>
          <input
            type="text"
            className={`form-control ${styles.input}`}
            id="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            required
          />
          <div className="valid-feedback">Looks good!</div>
        </div>
        <div className="col-md-4">
          <label htmlFor="lastName" className="form-label">
            Last name
          </label>
          <input
            type="text"
            className={`form-control ${styles.input}`}
            id="lastName"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            required
          />
          <div className="valid-feedback">Looks good!</div>
        </div>
        <div className="col-md-4">
          <label htmlFor="username" className="form-label">
            Username
          </label>
          <div className="input-group has-validation">
            <span className="input-group-text" id="inputGroupPrepend">
              @
            </span>
            <input
              type="text"
              className={`form-control ${styles.input}`}
              id="username"
              name="username"
              value={formData.username}
              onChange={handleChange}
              aria-describedby="inputGroupPrepend"
              required
            />
            <div className="invalid-feedback">Please choose a username.</div>
          </div>
        </div>
        <div className="col-md-6">
          <label htmlFor="city" className="form-label">
            City
          </label>
          <input
            type="text"
            className={`form-control ${styles.input}`}
            id="city"
            name="city"
            value={formData.city}
            onChange={handleChange}
            required
          />
          <div className="invalid-feedback">Please provide a valid city.</div>
        </div>
        <div className="col-md-3">
          <label htmlFor="state" className='form-label'>
            State
          </label>
          <select
            className={`form-select ${styles.input}`}
            id="state"
            name="state"
            value={formData.state}
            onChange={handleChange}
            required
          >
            <option value="">Choose...</option>
            <option>...</option>
          </select>
          <div className="invalid-feedback">Please select a valid state.</div>
        </div>
        <div className="col-md-3">
          <label htmlFor="zip" className="form-label">
            Zip
          </label>
          <input
            type="text"
            className={`form-control ${styles.input}`}
            id="zip"
            name="zip"
            value={formData.zip}
            onChange={handleChange}
            required
          />
          <div className="invalid-feedback">Please provide a valid zip.</div>
        </div>
        <div className="col-12">
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              id="termsAgreed"
              name="termsAgreed"
              checked={formData.termsAgreed}
              onChange={handleChange}
              required
            />
            <label className="form-check-label" htmlFor="termsAgreed">
              Agree to terms and conditions
            </label>
            <div className="invalid-feedback">
              You must agree before submitting.
            </div>
          </div>
        </div>
        <div className="col-12">
          <button className="btn btn-primary" type="submit">
            Submit form
          </button>
        </div>
      </form>
    </div>
  );
}
