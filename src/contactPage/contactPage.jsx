import React, { useState, useEffect } from 'react';
import { FaUser, FaEnvelope, FaPhone, FaGlobe, FaTag, FaCommentDots } from 'react-icons/fa';
import socailcontact from '../asset/conatct_socail.png';

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        countryCode: '',
        mobile: '',
        subject: '',
        message: '',
    });

    const [errors, setErrors] = useState({});
    const [successMessage, setSuccessMessage] = useState('');
    const [showNotification, setShowNotification] = useState(false);


    const validateForm = () => {
        let formErrors = {};
        if (!formData.name) formErrors.name = 'Name is required';
        if (!formData.email) formErrors.email = 'Email is required';
        if (!formData.mobile) formErrors.mobile = 'Mobile number is required';
        if (!formData.subject) formErrors.subject = 'Subject is required';
        if (!formData.message) formErrors.message = 'Message is required';
        setErrors(formErrors);
        return Object.keys(formErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateForm()) {
            setSuccessMessage('Form submitted successfully!');
            setShowNotification(true);
            console.log('Form submitted successfully:', formData);


            setFormData({
                name: '',
                email: '',
                countryCode: '',
                mobile: '',
                subject: '',
                message: '',
            });
            setErrors({});
        }
    };

   
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    
    useEffect(() => {
        if (showNotification) {
            const timer = setTimeout(() => {
                setShowNotification(false);
            }, 5000);
            return () => clearTimeout(timer);
        }
    }, [showNotification]);

    return (
        <div className="w-full max-w-[1440px] mx-auto px-4 lg:px-8 py-10 relative">

           
            {showNotification && (
                <div className="absolute top-0 left-0 right-0 bg-green-500 text-white text-center py-3 rounded-md shadow-lg transition-opacity duration-300">
                    <span>{successMessage}</span>
                </div>
            )}

           
            <div className="flex flex-col lg:text-left text-center">
                <div className="lg:text-[22px] text-base font-semibold text-customorange">
                    Need more answers?
                </div>
                <div className="lg:text-[42px] text-2xl font-extrabold text-darkBlue py-3">
                    Contact us
                </div>
                <div className="lg:text-lg text-base font-medium text-customgray pb-3">
                    We're here for you! Reach us through email or our chat box
                </div>
            </div>

           
            <div className="flex flex-col-reverse lg:flex-row">
                <div className="w-full lg:w-6/12 mb-8 lg:mb-0">
                    <form className="bg-white p-8 shadow-lg rounded-lg" onSubmit={handleSubmit}>
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-4">
                            <div>
                                <label className="block text-darkBlue font-medium text-base mb-2" htmlFor="name">
                                    Name
                                </label>
                                <div className="flex items-center border rounded-md py-2 px-3">
                                    <FaUser className="text-gray-400 mr-2" />
                                    <input
                                        className="w-full bg-transparent focus:outline-none"
                                        type="text"
                                        id="name"
                                        name="name"
                                        placeholder="Alex"
                                        value={formData.name}
                                        onChange={handleChange}
                                    />
                                </div>
                                {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
                            </div>
                            <div>
                                <label className="block text-darkBlue font-medium text-base mb-2" htmlFor="email">
                                    Email
                                </label>
                                <div className="flex items-center border rounded-md py-2 px-3">
                                    <FaEnvelope className="text-gray-400 mr-2" />
                                    <input
                                        className="w-full bg-transparent focus:outline-none"
                                        type="email"
                                        id="email"
                                        name="email"
                                        placeholder="Enter your email"
                                        value={formData.email}
                                        onChange={handleChange}
                                    />
                                </div>
                                {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                            </div>
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-4">
                            <div>
                                <label className="block text-darkBlue font-medium text-base mb-2" htmlFor="countryCode">
                                    Country Code
                                </label>
                                <div className="flex items-center border rounded-md py-2 px-3">
                                    <FaGlobe className="text-gray-400 mr-2" />
                                    <input
                                        className="w-full bg-transparent focus:outline-none"
                                        type="text"
                                        id="countryCode"
                                        name="countryCode"
                                        placeholder="+91"
                                        value={formData.countryCode}
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>
                            <div>
                                <label className="block text-darkBlue font-medium text-base mb-2" htmlFor="mobile">
                                    Mobile number
                                </label>
                                <div className="flex items-center border rounded-md py-2 px-3">
                                    <FaPhone className="text-gray-400 mr-2" />
                                    <input
                                        className="w-full bg-transparent focus:outline-none"
                                        type="text"
                                        id="mobile"
                                        name="mobile"
                                        placeholder="1234-567-890"
                                        value={formData.mobile}
                                        onChange={handleChange}
                                    />
                                </div>
                                {errors.mobile && <p className="text-red-500 text-sm mt-1">{errors.mobile}</p>}
                            </div>
                        </div>

                        <div className="mb-4">
                            <label className="block text-darkBlue font-medium text-base mb-2" htmlFor="subject">
                                Subject
                            </label>
                            <div className="flex items-center border rounded-md py-2 px-3">
                                <FaTag className="text-gray-400 mr-2" />
                                <input
                                    className="w-full bg-transparent focus:outline-none"
                                    type="text"
                                    id="subject"
                                    name="subject"
                                    placeholder="Enter subject"
                                    value={formData.subject}
                                    onChange={handleChange}
                                />
                            </div>
                            {errors.subject && <p className="text-red-500 text-sm mt-1">{errors.subject}</p>}
                        </div>

                        <div className="mb-4">
                            <label className="block text-darkBlue font-medium text-base mb-2" htmlFor="message">
                                Message
                            </label>
                            <div className="flex items-start border rounded-md py-2 px-3">
                                <FaCommentDots className="text-gray-400 mr-2 mt-1" />
                                <textarea
                                    className="w-full bg-transparent focus:outline-none"
                                    id="message"
                                    name="message"
                                    placeholder="Typing..."
                                    rows="7"
                                    value={formData.message}
                                    onChange={handleChange}
                                />
                            </div>
                            {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
                        </div>

                        <div className="flex justify-center">
                            <button
                                type="submit"
                                className="bg-customorange hover:bg-green-700 text-white font-semibold text-base py-2 px-4 rounded-md w-[189px]"
                            >
                                Send Message
                            </button>
                        </div>
                    </form>
                </div>

                <div className="w-full lg:w-6/12 flex justify-center">
                    <div>
                        <img src={socailcontact} alt="Social Contact" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactForm;
