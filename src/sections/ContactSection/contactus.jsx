import './contact.css'; // Custom styles
import {useState} from "react";
const ContactUsSection = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission here, e.g., send data to API
        console.log(formData);
    };
    return (
        <div className="contact-us-section">
            <div className="contact-info">
                <p>frepegolakeviewresort@gmail.com /</p>
                <p>Frepego Lakeview Resort, Mbita, Homabay /</p>
                <p>
                    +254 789 869 554<br/>
                    +254 798 181 054<br/>
                    +254 772 696 805
                </p>
            </div>
            <div className="form-container">
                <form onSubmit={handleSubmit}>
                    <div className="name">
                        <div>
                            <label htmlFor="name">Enter Your Name</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                placeholder="Name"
                                value={formData.name}
                                onChange={handleChange}
                            /></div>
                        <div>
                            <label htmlFor="email">Enter Your Email *</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                placeholder="Email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            /></div>
                    </div>

                    <label htmlFor="subject">Enter Your Subject</label>
                    <input
                        type="text"
                        id="subject"
                        name="subject"
                        placeholder="Subject"
                        value={formData.subject}
                        onChange={handleChange}
                    />

                    <label htmlFor="message">Enter Your Message</label>
                    <textarea
                        id="message"
                        name="message"
                        placeholder="Message"
                        value={formData.message}
                        onChange={handleChange}
                    ></textarea>

                    <button type="submit">Submit</button>
                </form>
            </div>

        </div>


    )
        ;
};

export default ContactUsSection;
