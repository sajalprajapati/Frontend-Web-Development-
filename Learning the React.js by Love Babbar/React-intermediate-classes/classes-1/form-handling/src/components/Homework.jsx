import React, { useState } from "react";

const Homework = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    Country: "",
    Street: "",
    City: "",
    State: "",
    ZIP: "",
    isChecked1: false,
    isChecked2: false,
    isChecked3: false,
    pushing: "",
  });

  function changeHandler(event) {
    let { name, type, value, checked } = event.target;
    setFormData((previousFormDta) => ({
      ...previousFormDta,
      [name]: type === "checkbox" ? checked : value,
    }));
  }

  console.log(formData);
  
  
  function saveTolocalStorage(event)
  {
    // localStorage.clear();
    event.preventDefault();

    localStorage.setItem("formData",JSON.stringify(formData));
    alert("Data saved to local storage ");

  }


  return (
    <div className="bg-gray-100 min-h-screen flex justify-center items-center">
      <form
      onSubmit={saveTolocalStorage} 
      className="bg-white w-[90%] md:w-[70%] lg:w-[60%] p-6 rounded-lg shadow-md space-y-5">
        {/* Personal Information */}
        <div className="space-y-3">
          <h2 className="text-2xl font-bold text-gray-800">Personal Information</h2>

          <label htmlFor="firstName" className="block font-medium text-gray-700">
            First Name
          </label>
          <input
            className="w-full p-3 border rounded-md focus:ring focus:ring-blue-300"
            type="text"
            placeholder="Sajal"
            onChange={changeHandler}
            value={formData.firstName}
            name="firstName"
            id="firstName"
          />

          <label htmlFor="lastName" className="block font-medium text-gray-700">
            Last Name
          </label>
          <input
            className="w-full p-3 border rounded-md focus:ring focus:ring-blue-300"
            type="text"
            placeholder="Prajapati"
            onChange={changeHandler}
            value={formData.lastName}
            name="lastName"
            id="lastName"
          />

          <label htmlFor="email" className="block font-medium text-gray-700">
            Email Address
          </label>
          <input
            className="w-full p-3 border rounded-md focus:ring focus:ring-blue-300"
            type="email"
            placeholder="prajapatisajal00@demo.com"
            onChange={changeHandler}
            value={formData.email}
            name="email"
            id="email"
          />

          <label htmlFor="country" className="block font-medium text-gray-700">
            Country
          </label>
          <select
            className="w-full p-3 border rounded-md focus:ring focus:ring-blue-300"
            onChange={changeHandler}
            value={formData.Country}
            name="country"
            id="country"
          >
            <option value="India">India</option>
            <option value="Australia">Australia</option>
            <option value="Canada">Canada</option>
            <option value="United Kingdom">UK</option>
          </select>
        </div>

        {/* Address Section */}
        <div className="space-y-3">
          <h2 className="text-2xl font-bold text-gray-800">Address</h2>

          <label htmlFor="street" className="block font-medium text-gray-700">
            Street Address
          </label>
          <input
            className="w-full p-3 border rounded-md focus:ring focus:ring-blue-300"
            type="text"
            placeholder="1234 Main St"
            onChange={changeHandler}
            value={formData.Street}
            name="Street"
            id="street"
          />

          <label htmlFor="city" className="block font-medium text-gray-700">
            City
          </label>
          <input
            className="w-full p-3 border rounded-md focus:ring focus:ring-blue-300"
            type="text"
            placeholder="Ansoi"
            onChange={changeHandler}
            value={formData.City}
            name="City"
            id="city"
          />

          <label htmlFor="state" className="block font-medium text-gray-700">
            State / Province
          </label>
          <input
            className="w-full p-3 border rounded-md focus:ring focus:ring-blue-300"
            type="text"
            placeholder="West Bengal"
            onChange={changeHandler}
            value={formData.State}
            name="State"
            id="state"
          />

          <label htmlFor="zip" className="block font-medium text-gray-700">
            ZIP / Postal Code
          </label>
          <input
            className="w-full p-3 border rounded-md focus:ring focus:ring-blue-300"
            type="text"
            placeholder="713301"
            onChange={changeHandler}
            value={formData.ZIP}
            name="ZIP"
            id="zip"
          />
        </div>

        {/* Notification Preferences */}
        <div className="space-y-3">
          <h2 className="text-2xl font-bold text-gray-800">Notifications</h2>

          {/* Comments */}
          <div className="flex items-center space-x-3">
            <input
              className="h-5 w-5 border rounded focus:ring focus:ring-blue-300"
              type="checkbox"
              onChange={changeHandler}
              name="isChecked1"
              checked={formData.isChecked1}
              id="comment"
            />
            <div>
              <label htmlFor="comment" className="font-medium text-gray-800">
                Comments
              </label>
              <p className="text-sm text-gray-500">
                Get notified when someone posts a comment on your posting.
              </p>
            </div>
          </div>

          {/* Candidates */}
          <div className="flex items-center space-x-3">
            <input
              className="h-5 w-5 border rounded focus:ring focus:ring-blue-300"
              type="checkbox"
              onChange={changeHandler}
              name="isChecked2"
              checked={formData.isChecked2}
              id="candidates"
            />
            <div>
              <label htmlFor="candidates" className="font-medium text-gray-800">
                Candidates
              </label>
              <p className="text-sm text-gray-500">
                Get notified when a candidate applies for a job.
              </p>
            </div>
          </div>

          {/* Offers */}
          <div className="flex items-center space-x-3">
            <input
              className="h-5 w-5 border rounded focus:ring focus:ring-blue-300"
              type="checkbox"
              onChange={changeHandler}
              name="isChecked3"
              checked={formData.isChecked3}
              id="offers"
            />
            <div>
              <label htmlFor="offers" className="font-medium text-gray-800">
                Offers
              </label>
              <p className="text-sm text-gray-500">
                Get notified when a candidate accepts or rejects an offer.
              </p>
            </div>
          </div>
        </div>

        {/* Push Notifications */}
        <div className="space-y-3">
          <h2 className="text-2xl font-bold text-gray-800">Push Notifications</h2>
          <p className="text-sm text-gray-500">
            These are delivered via SMS to your mobile phone.
          </p>

          <div className="flex items-center space-x-3">
            <input
              className="h-5 w-5 border rounded focus:ring focus:ring-blue-300"
              type="radio"
              onChange={changeHandler}
              name="pushing"
              value="Everything"
            />
            <label className="font-medium text-gray-800">Everything</label>
          </div>

          <div className="flex items-center space-x-3">
            <input
              className="h-5 w-5 border rounded focus:ring focus:ring-blue-300"
              type="radio"
              onChange={changeHandler}
              name="pushing"
              value="No Push Notifications"
            />
            <label className="font-medium text-gray-800">No Push Notifications</label>
          </div>

          <div className="flex items-center space-x-3">
            <input
              className="h-5 w-5 border rounded focus:ring focus:ring-blue-300"
              type="radio"
              onChange={changeHandler}
              name="pushing"
              value="Same as Email"
            />
            <label className="font-medium text-gray-800">Same as Email</label>
          </div>
        </div>


        <button>Save</button>
      </form>
    </div>
  );
};

export default Homework;
