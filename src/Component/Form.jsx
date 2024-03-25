import React, { useState } from 'react'
import axios from 'axios';

function Form() {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        location: '',
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

        
        if (!formData.phone.trim()) {
            errors.phone = 'Phone is required';
        }
        if (!formData.location.trim()) {
            errors.location = 'location is required';
        }

        if (!formData.message.trim()) {
            errors.message = 'Message is required';
        }
        setErrors(errors);
        return Object.keys(errors).length === 0;
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (validateForm()) {
    
          try {
            const response = await axios.post('https://sheet.best/api/sheets/b84ee7b5-2122-4322-985e-cd89d1d67302', formData);
            console.log('Form submitted:', response.data);
            // Assuming the form submission was successful, you can handle it here
            alert('Message sent Successfully');
            // page reload
            window.location.reload();
          } catch (error) {
            console.error('Error submitting form:', error);
            // Handle error accordingly
          }
        }
      };
    return (
        <div>
            <form action="" onSubmit={handleSubmit}>
                <div className="d-flex mt-3">
                    <div className="flex-grow-1 me-2">
                        <input type="text" name='name' value={formData.name} placeholder='Name' className={`form-control ${errors.name && 'is-invalid'}`} onChange={handleChange} />
                        {errors.name && <div className='invalid-feedback'>{errors.name}</div>}
                    </div>

                    <div className="flex-grow-1 me-2">
                        <input type="text" name='phone' value={formData.phone} placeholder='Phone' className={`form-control ${errors.name && 'is-invalid'}`} onChange={handleChange} />
                        {errors.phone && <div className='invalid-feedback'>{errors.phone}</div>}
                    </div>
                    
                </div>
                
                <div className="mt-3">
                    <input type="location" name='location' value={formData.location} placeholder='Where is your location?' className={`form-control ${errors.name && 'is-invalid'}`} onChange={handleChange} />
                    {errors.location && <div className='invalid-feedback'>{errors.location}</div>}
                </div>

                <textarea id="" cols="30" rows="10" className={`form-control mt-3 ${errors.name && 'is-invalid'}`} onChange={handleChange} name='message' value={formData.message} placeholder='Tell us about your situation'></textarea>
                {errors.message && <div className='invalid-feedback'>{errors.message}</div>}

                <button className='btn btn-danger mt-3'>Submit</button>
            </form>
        </div>
    )
}

export default Form