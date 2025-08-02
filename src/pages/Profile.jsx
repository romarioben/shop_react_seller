import { Button } from 'bootstrap'
import React from 'react'
import api from '../axios';
import { useAuth } from '../auth/AuthContext';
import MainLayout from '../layouts/MainLayout';

function Profile() {
    const [profileData, setProfileData] = React.useState(null);
    
    const currentPage = "/profile";

    const { getProfileData } = useAuth();

    return (
        <MainLayout currentPage={currentPage}></MainLayout>
    )
}

export default Profile
