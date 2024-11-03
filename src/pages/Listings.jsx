import React, { useEffect, useState } from 'react';
import { supabase } from '../client.js';
import { Link } from 'react-router-dom';
import HouseListing from '../Components/HouseListing.jsx';
import './Listings.css';

function Listings() {
    const [listings, setListings] = useState([]);
    const [filteredListings, setFilteredListings] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [favorites, setFavorites] = useState(new Set());
    const [agents, setAgents] = useState([]); 
    const [selectedAgent, setSelectedAgent] = useState(''); 
    const [showFavorites, setShowFavorites] = useState(false); 
    
    useEffect(() => {
        fetchListings();
        fetchAgents(); 
    }, []);

    const fetchListings = async () => {
        const { data, error } = await supabase
            .from('houses')
            .select('*');

        if (error) {
            console.error('Error fetching listings:', error);
        } else {
            setListings(data);
            setFilteredListings(data);
        }
    };

    const fetchAgents = async () => {
        const { data, error } = await supabase
            .from('agents')
            .select('*');

        if (error) {
            console.error('Error fetching agents:', error);
        } else {
            setAgents(data);
        }
    };

    const handleHouseAdded = () => {
        fetchListings();
        setIsModalOpen(false);
        setSelectedAgent(''); 
    };

    const handleSearch = (event) => {
        const term = event.target.value.toLowerCase();
        setSearchTerm(term);

        const filtered = listings.filter((listing) =>
            listing.title.toLowerCase().includes(term) ||
            listing.price.toString().includes(term)
        );

        setFilteredListings(filtered);
    };

    const toggleFavorite = (id) => {
        const updatedFavorites = new Set(favorites);
        if (updatedFavorites.has(id)) {
            updatedFavorites.delete(id);
        } else {
            updatedFavorites.add(id);
        }
        setFavorites(updatedFavorites);
    };

    const toggleShowFavorites = () => {
        setShowFavorites(!showFavorites);
    };

    const displayedListings = showFavorites
        ? listings.filter(listing => favorites.has(listing.id))
        : filteredListings;

    return (
        <div className="listing-container">
            <div className="listing-header">
                <h2>Listing with RealHome</h2>
                <h3>Your trusted real estate partner.</h3>
                <button onClick={() => setIsModalOpen(true)}>Add House</button>
                <button onClick={toggleShowFavorites}>
                    {showFavorites ? 'Show All' : 'Show Wishlist ❤️'}
                </button>
            </div>

            <input
                type="text"
                placeholder="Search by title or price"
                value={searchTerm}
                onChange={handleSearch}
                className="search-bar"
            />

            {isModalOpen && (
                <div className="modal">
                    <div className="modal-content">
                        <span className="close" onClick={() => setIsModalOpen(false)}>&times;</span>
                        <HouseListing 
                            listings={[]} 
                            onHouseAdded={handleHouseAdded} 
                            selectedAgent={selectedAgent} 
                        />
                        <label htmlFor="agent-select">Pick Agent:</label>
                        <select
                            id="agent-select"
                            value={selectedAgent}
                            onChange={(e) => setSelectedAgent(e.target.value)}
                        >
                            <option value="">Select an agent</option>
                            {agents.map(agent => (
                                <option key={agent.agent_id} value={agent.agent_id}>
                                    {agent.email} {/* Display email */}
                                </option>
                            ))}
                        </select>
                    </div>
                </div>
            )}

            <div className="listing-listings">
                {displayedListings.map(listing => (
                    <div key={listing.id} className="house-listing">
                        <Link to={`/house/${listing.id}`}>
                            <img src={listing.image} alt={listing.title} className="house-image" />
                            <h3>{listing.title}</h3>
                            <p>Price: {listing.price}</p>
                            <p>Location: {listing.location}</p>
                        </Link>
                        <button onClick={() => toggleFavorite(listing.id)}>
                            {favorites.has(listing.id) ? '❤️' : '♡'}
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Listings;



