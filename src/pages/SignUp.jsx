import React, { useState } from 'react';
import { supabase } from '../client';
import bcrypt from 'bcryptjs';
import { useNavigate } from 'react-router-dom';
import './SignUp.css';

function SignUp() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({ username: '', password: '', email: '', cellphone: '', image: '' });
    const [isAgent, setIsAgent] = useState(false); 

    const handleChange = (event) => {
        setFormData({ ...formData, [event.target.name]: event.target.value });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        const hashedPassword = await bcrypt.hash(formData.password, 10);

        const { data, error: userError } = await supabase
            .from('users')
            .insert([{ username: formData.username, password: hashedPassword }]);

        if (userError) {
            alert('Error signing up: ' + userError.message);
            return;
        }

        if (isAgent) {
            const { error: agentError } = await supabase
                .from('agents')
                .insert([{ email: formData.email, cellphone: formData.cellphone, image: formData.image }]);

            if (agentError) {
                alert('Error signing up as agent: ' + agentError.message);
                return;
            }

            alert('Sign up successful as an agent! Welcome, ' + formData.username + '!');
        } else {
            alert('Sign up successful! Welcome, ' + formData.username + '!');
        }
        
        navigate('/signin');
    };

    return (
        <div className="sign-up-container">
            <div className="sign-up">
                <h2>Sign Up</h2>
                <label>
                    <input 
                        type="checkbox" 
                        checked={isAgent} 
                        onChange={() => setIsAgent(!isAgent)} 
                    />
                    Sign up as an agent
                </label>
                <form onSubmit={handleSubmit}>
                    <input 
                        type='text'
                        placeholder='Username'
                        name='username'
                        onChange={handleChange}
                        required
                    />
                    <input 
                        type='password'
                        placeholder='Password'
                        name='password'
                        onChange={handleChange}
                        required
                    />
                    {isAgent && (
                        <>
                            <input 
                                type='text'
                                placeholder='Email'
                                name='email'
                                onChange={handleChange}
                                required
                            />
                            <input 
                                type='text'
                                placeholder='Cellphone'
                                name='cellphone'
                                onChange={handleChange}
                                required
                            />
                            <input 
                                type='text'
                                placeholder='Image URL'
                                name='image'
                                onChange={handleChange}
                                required
                            />
                        </>
                    )}
                    <button type='submit'>Sign Up</button>
                </form>
            </div>
        </div>
    );
}

export default SignUp;

