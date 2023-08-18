"use client";
import React, { useState } from "react";

const FormContainer = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    fatherName: "",
    maritalStatus: "",
    caste: "",
    address: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData); // You can perform further actions with the form data here
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div>
      <h1>Form</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type='text'
            name='name'
            value={formData.name}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Email:
          <input
            type='email'
            name='email'
            value={formData.email}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Father Name:
          <input
            type='text'
            name='fatherName'
            value={formData.fatherName}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Marital Status:
          <select
            name='maritalStatus'
            value={formData.maritalStatus}
            onChange={handleChange}
          >
            <option value=''>Select</option>
            <option value='married'>Married</option>
            <option value='unmarried'>Unmarried</option>
            <option value='widow'>Widow</option>
          </select>
        </label>
        <br />
        <label>
          Caste:
          <select name='caste' value={formData.caste} onChange={handleChange}>
            <option value=''>Select</option>
            <option value='gen'>General</option>
            <option value='sc'>SC</option>
            <option value='st'>ST</option>
          </select>
        </label>
        <br />
        <label>
          Full Address:
          <textarea
            name='address'
            value={formData.address}
            onChange={handleChange}
          />
        </label>
        <br />
        <button type='submit'>Submit</button>
      </form>
    </div>
  );
};

export default FormContainer;
