import React, { useState } from 'react';

export default function SignUp() {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle the sign-up logic (e.g., send data to a server or local storage)
        console.log('Sign-Up data:', formData);
    };
}
