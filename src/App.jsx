import { useState } from 'react'
import { BrowserRouter as Router, Route , Routes} from 'react-router-dom';
import Login from './pages/Login'
import Signup from './pages/Signup'
import Profile from './pages/Profile'
import Dashboard from './pages/Dashboard'
import { AuthProvider, useAuth } from './auth/AuthContext'
import Commande from './pages/Commande';
import Product from './pages/Product';


function MainApp() {
    const { user, loading, error, getProfileData } = useAuth();
    if (!user) {
        let user0 = getProfileData();
        if (!user0) {
            return <Login />;
        }
    }
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/commandes" element={<Commande />} />
                <Route path="/products" element={<Product />} />
            </Routes>
            
            {/* Add more routes as needed */}
        </Router>
    )
}



function App() {
    
    return (
        <AuthProvider>
            <MainApp />
        </AuthProvider>
    )
}

export default App
