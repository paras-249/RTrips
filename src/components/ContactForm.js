import React, { useState } from "react";
import "./ContactFormStyles.css";

function ContactForm() {
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
        alert("Message Delivered with a Smile! We've received your message and will get back to you soon! 🙏");
        setFormData({
            name: "",
            email: "",
            subject: "",
            message: ""
        });
    };

    return (
        <div className="form-container">
            <h1>Send a message to us!</h1>
            <form onSubmit={handleSubmit}>
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
                <button type="submit" className="msg">Send Message</button>
            </form>
        </div>
    );
}

export default ContactForm;