import React, { createContext, useContext, useState } from "react";
import api from '../axios';

const AuthContext = createContext();

 

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    const getProfileData = () => {
        const token = JSON.parse(localStorage.getItem('access_token'));
        const header = {
            headers: {
                'Authorization': `Bearer ${token}`, // Assuming you are using Bearer token for authorization
                'Content-Type': 'application/json'
            }
        }

        // Logic to fetch profile data
        // console.log('Fetching profile data...');
        api.get('user/profile/', header).then(response => {
            //console.log('Profile data:', response.data);
            // Handle the profile data, e.g., display it in the UI
            setUser(response.data);
            return response.data;
        }).catch(error => {
            console.error('Error fetching profile data:', error);
            // Handle error, e.g., show an error message to the user
        });
        return null; // Return null if no profile data is available
    };

  
  

    const login = async (credentials) => {
        
        try {
            const response = await api.post("/oauth/token/", credentials, {headers: {
                    // You generally don't need to explicitly set Content-Type here for URLSearchParams,
                    // Axios handles it. But it doesn't hurt to be explicit.
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
            // If you are sending cookies or authorization headers (e.g., Basic Auth for client_secret)
            withCredentials: true, // Important for CORS if using cookies/session with your backend);
            });
            localStorage.setItem('access_token', JSON.stringify(response.data.access_token));
            localStorage.setItem('refresh_token', JSON.stringify(response.data.refresh_token));

            let user_data = getProfileData();
            setUser(user_data);  
            setLoading(false);
            } catch (error) {
            console.error("Login failed:", error);
            setError(error.response?.data?.message || "Login failed");
            setLoading(false);
            } finally {
            setLoading(false);
            }
    };

    const logout = () => {
        setUser(null);
        localStorage.removeItem('access_token');
        localStorage.removeItem('refresh_token');
        setLoading(false);
    };

    // let access_token = JSON.parse(localStorage.getItem('access_token'));
    // if (access_token) { 
    //     setUser(getProfileData());
    //     setLoading(false);
    // }

    return (
        <AuthContext.Provider value={{ user, loading, login, logout, getProfileData, error }}>
            {children}
        </AuthContext.Provider>
    );
}


export const useAuth = () => useContext(AuthContext);