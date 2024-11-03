import React, { useState } from 'react';
import { supabase } from '../client.js';

function HouseListing({ listings, onHouseAdded, selectedAgent }) { 
    const [formData, setFormData] = useState({
        image: '',
        title: '',
        description: '',
        price: '',
        location: '',
    });

    const handleChange = (event) => {
        setFormData({ ...formData, [event.target.name]: event.target.value });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        const { data, error } = await supabase
            .from('houses')
            .insert([{
                ...formData,
                agent_id: selectedAgent 
            }]);

        if (error) {
            alert('Error adding house: ' + error.message);
        } else {
            alert('House added successfully!');
            onHouseAdded(); 
            setFormData({
                image: '',
                title: '',
                description: '',
                price: '',
                location: '',
            }); 
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" name="image" placeholder="Image URL" value={formData.image} onChange={handleChange} required />
                <input type="text" name="title" placeholder="Title" value={formData.title} onChange={handleChange} required />
                <textarea name="description" placeholder="Description" value={formData.description} onChange={handleChange} required />
                <input type="text" name="price" placeholder="Price" value={formData.price} onChange={handleChange} required />
                <input type="text" name="location" placeholder="Location" value={formData.location} onChange={handleChange} required />
                <button type="submit">Add House</button>
            </form>

            <div className="house-listings">
                {listings.map(listing => (
                    <div key={listing.id} className="listing-item">
                        <img src={listing.image} alt={listing.title} />
                        <h3>{listing.title}</h3>
                        <p>{listing.description}</p>
                        <p>Price: {listing.price}</p>
                        <p>Location: {listing.location}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default HouseListing;

