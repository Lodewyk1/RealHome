import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { supabase } from '../client.js';
import './HouseDetail.css'; 
function HouseDetail() {
    const { id } = useParams(); 
    const [house, setHouse] = useState(null);
    const [agent, setAgent] = useState(null); 

    useEffect(() => {
        fetchHouseDetails();
    }, [id]);

    const fetchHouseDetails = async () => {
        const { data, error } = await supabase
            .from('houses')
            .select(`
                *,
                agent:agents (agent_id, cellphone, email, image)  // Join with agents table
            `)
            .eq('id', id)
            .single(); 

        if (error) {
            console.error('Error fetching house details:', error);
        } else {
            setHouse(data);
            setAgent(data.agent);
        }
    };

    if (!house) return <div>Loading...</div>;

    return (
        <div className="house-detail">
            <h2>{house.title}</h2>
            <img src={house.image} alt={house.title} />
            <p>{house.description}</p>
            <p>Price: {house.price}</p>
            <p>Location: {house.location}</p>

            {agent && ( 
                <div className="agent-details">
                    <h3>Agent Details</h3>
                    <img src={agent.image} alt={`${agent.email}'s photo`} />
                    <p><strong>Email: </strong> {agent.email}</p>
                    <p><strong>Cellphone: </strong> {agent.cellphone}</p>
                </div>
            )}
        </div>
    );
}

export default HouseDetail;



