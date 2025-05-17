import React, { useState } from "react";
import "./ContactFormStyles.css";
import toast, { Toaster } from "react-hot-toast";



function ContactForm() {
  const notifySuccess = () => toast.success('Message sent successfully!');
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: ""
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        setFormData({
            name: "",
            email: "",
            subject: "",
            message: ""
        });
    };

    return (
        <div className="form-container">
            <Toaster  position="top-center" reverseOrder={false}/>
            <h1>Send a message to us!</h1>
            <form onSubmit={handleSubmit} action="">
                <input
                    name="name"
                    placeholder="Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                />
                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                />
                <input
                    name="subject"
                    placeholder="Subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                />
                <textarea
                    name="message"
                    placeholder="Message"
                    rows="4"
                    value={formData.message}
                    onChange={handleChange}
                    required
                ></textarea>
                <button type="submit" className="msg" onClick={notifySuccess}>Send Message</button>
            </form>
        </div>
    );
}

export default ContactForm;