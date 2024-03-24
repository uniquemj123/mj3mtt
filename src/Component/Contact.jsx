import React, { useState } from 'react'

function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
    });
    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData({
            ...formData,
            [name]: value
        });
    }
    const validateForm = () => {
        const errors = {};
        if (!formData.name.trim()) {
            errors.name = 'Name is required';
        }

        if (!formData.email.trim()) {
            errors.email = 'Email is required';
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            errors.email = 'Invalid Format';
        }


        if (!formData.subject.trim()) {
            errors.subject = 'Subject is required';
        }

        if (!formData.message.trim()) {
            errors.message = 'Message is required';
        }
        setErrors(errors);
        return Object.keys(errors).length === 0;
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateForm()) {
            //processing the information
            alert('Message sent successfully');
            console.log(formData)

            // to redirect to another page
            window.location.href = '/contact';

        }
    };
    return (
        <div>
            <div className='background' >
                <div className='container text-light text-center pt-5'>
                    <h1>CONTACT US</h1>
                </div>
            </div>
            <form action="" onSubmit={handleSubmit}>
                <div className="d-flex mt-3">
                    <div className="flex-grow-1 me-2">
                        <input type="text" name='name' value={formData.name} placeholder='Name' className={`form-control ${errors.name && 'is-invalid'}`} onChange={handleChange} />
                        {errors.name && <div className='invalid-feedback'>{errors.name}</div>}
                    </div>
                    <div className="flex-grow-1 ms-2">
                        <input type="email" name='email' value={formData.email} placeholder='Email' className={`form-control ${errors.name && 'is-invalid'}`} onChange={handleChange} />
                        {errors.email && <div className='invalid-feedback'>{errors.email}</div>}
                    </div>
                </div>
                <div className="d-flex mt-3 container-fluid rounded">
                    <div className="flex-grow-1 me-2">
                        <input type="number" name='phone' value={formData.phone} placeholder='Phone' className={`form-control ${errors.name && 'is-invalid'}`} onChange={handleChange} />
                        {errors.phone && <div className='invalid-feedback'>{errors.phone}</div>}
                    </div>
                    <div className="flex-grow-1 ms-2">
                        <input type="address" name='address' value={formData.address} placeholder='Address' className={`form-control ${errors.name && 'is-invalid'}`} onChange={handleChange} />
                        {errors.address && <div className='invalid-feedback'>{errors.address}</div>}
                    </div>
                </div>
                <div className="flex-grow-1 ms-2">
                    <input type="location" name='location' value={formData.address} placeholder='Where is your location?' className={`form-control ${errors.name && 'is-invalid'}`} onChange={handleChange} />
                    {errors.location && <div className='invalid-feedback'>{errors.location}</div>}
                </div>

                <textarea id="" cols="30" rows="10" className={`form-control mt-3 ${errors.name && 'is-invalid'}`} onChange={handleChange} name='message' value={formData.message} placeholder='Tell us about your situation'></textarea>
                {errors.message && <div className='invalid-feedback'>{errors.message}</div>}

                <button className='btn btn-danger mt-3'>Submit</button>
            </form>
        </div>
    )
}

export default Contact