import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import SideBar from '../Components/SideBar';

const JournalDetails = () => {
    const { slug } = useParams();
    return (
        <div className="details">
            <h1>Journal Details Page - {slug}</h1>
        </div>
    );
}

export default JournalDetails;