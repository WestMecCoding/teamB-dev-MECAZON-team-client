import styles from "../styles/Singin.module.css"
import React, { useState } from 'react';

const SignUp = () => {
    const [formData, setFormData] = useState({
        Username: '',
        email: '',
        password:''
    });

    const handleSubmit = (e) => {
        e.prevent
    }

}