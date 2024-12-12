import React, { useState } from 'react'; // Importing React and useState for state management
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai"; // Importing icons for password visibility toggle
import { useToast } from '@/hooks/use-toast'; // Importing a custom toast hook for notifications
import { useNavigate } from 'react-router-dom'; // Importing useNavigate for navigation

const SignupForm = ({ setIsLoggedIn }) => {
    // Destructuring the toast function from useToast hook
    const { toast } = useToast(); 

    // Initializing useNavigate for navigation after signup
    const navigate = useNavigate(); 

    // State to store form data with default empty values
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: ""
    });

    // State to toggle password visibility
    const [showPassword, setShowPassword] = useState(false);

    // Function to handle changes in form input fields
    function changeHandler(event) {
        setFormData((prevData) => ({
            ...prevData, // Preserve existing data
            [event.target.name]: event.target.value // Update the specific field by name
        }));
    }

    // Function to handle form submission
    function submitHandler(event) {
        event.preventDefault(); // Prevent default form submission behavior

        // Check if password and confirmPassword match
        if (formData.password !== formData.confirmPassword) {
            toast({ description: "Passwords don't match." }); // Show error toast
            return; // Exit the function
        }

        // Set login state to true
        setIsLoggedIn(true);
        
        // Show success toast message
        toast({ description: "Account Created Successfully." });

        // Create a copy of account data for further use (e.g., API calls)
        const accountData = { ...formData };
        console.log(accountData); // Logging account data for debugging

        // Navigate to a different page if required (e.g., dashboard)
        navigate('/dashboard');
    }

    return (
        <div>
            {/* Tabs for selecting account type (Student/Instructor) */}
            <div>
                <button>Student</button>
                <button>Instructor</button>
            </div>

            {/* Signup form */}
            <form onSubmit={submitHandler}>
                {/* First Name and Last Name Fields */}
                <div>
                    <label>
                        <p>First Name <sup>*</sup></p>
                        <input
                            required
                            type='text'
                            name='firstName'
                            onChange={changeHandler}
                            placeholder='Enter your first name'
                            value={formData.firstName}
                        />
                    </label>

                    <label>
                        <p>Last Name <sup>*</sup></p>
                        <input
                            required
                            type='text'
                            name='lastName'
                            onChange={changeHandler}
                            placeholder='Enter your last name'
                            value={formData.lastName}
                        />
                    </label>
                </div>

                {/* Email Address Field */}
                <label>
                    <p>Enter Your Email Address <sup>*</sup></p>
                    <input
                        required
                        type='email'
                        name='email'
                        onChange={changeHandler}
                        placeholder='Enter your email address'
                        value={formData.email}
                    />
                </label>

                {/* Password and Confirm Password Fields */}
                <div>
                    <label>
                        <p>Create Password <sup>*</sup></p>
                        <input
                            required
                            type={showPassword ? "text" : "password"} // Toggle between text and password type
                            onChange={changeHandler}
                            placeholder='Enter your password'
                            value={formData.password}
                            name='password'
                        />

                        <span onClick={() => setShowPassword((prev) => !prev)}>
                            {showPassword ? <AiOutlineEye /> : <AiOutlineEyeInvisible />}
                        </span>
                    </label>

                    <label>
                        <p>Confirm Password <sup>*</sup></p>
                        <input
                            required
                            type={showPassword ? "password" : "text"} // Toggle between text and password type
                            onChange={changeHandler}
                            placeholder='Confirm password'
                            value={formData.confirmPassword}
                            name='confirmPassword'
                        />

                        <span onClick={() => setShowPassword((prev) => !prev)}>
                            {showPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
                        </span>
                    </label>
                </div>

                {/* Submit Button */}
                <button type='submit'>Create Account</button>
            </form>
        </div>
    );
};

export default SignupForm;
