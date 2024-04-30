import React from 'react';
import { useNavigate } from 'react-router-dom';

function FormPage() {
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault(); 
        navigate('/dashboard'); 
    };

    return (
        <div>
            <h1>Submit Form</h1>
            <form onSubmit={handleSubmit}>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default FormPage;
