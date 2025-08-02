import React from 'react'
// import api from '../axios';
import { useAuth } from '../auth/AuthContext';
function Login() {
    const [username, setUsername] = React.useState('');
    const [password, setPassword] = React.useState('');

	const { login, loading, error } = useAuth();

    const  handleSubmit = (e) => {
        e.preventDefault();
        // Handle login logic here
        // const payload = {
        //     username: username,
        //     password: password  
        // };
        // console.log('Login payload:', payload);
        // You can add your login API call here

		let clientSecret = 'client_secret_password'; 
		let clientId = 'client_id_password'; 
		let grant_type = 'password'; // Assuming you are using password grant type
		const params = new URLSearchParams();
		params.append('grant_type', grant_type);
		// params.append('code', code);
		// params.append('redirect_uri', redirectUri);
		params.append('username', username);
		params.append('password', password);
		// If your API requires client_id and client_secret, include them
		params.append('client_id', clientId);
		params.append('client_secret', clientSecret);
		
		// api.post('/oauth/token/',
		// params, 
		// {
		// 	headers: {
		// 		// You generally don't need to explicitly set Content-Type here for URLSearchParams,
		// 		// Axios handles it. But it doesn't hurt to be explicit.
		// 		'Content-Type': 'application/x-www-form-urlencoded'
		// 	},
		// 	// If you are sending cookies or authorization headers (e.g., Basic Auth for client_secret)
		// 	withCredentials: true, // Important for CORS if using cookies/session with your backend
		// }).then(response => {
		// 	localStorage.setItem('access_token', JSON.stringify(response.data.access_token));
		// 	localStorage.setItem('refresh_token', JSON.stringify(response.data.refresh_token));
		// 	console.log('Login successful:', response.data);
		// 	// Handle successful login, e.g., store token, redirect user, etc.
		// }).catch(error => {
		// 	console.error('Login failed:', error);
		// 	// Handle login failure, e.g., show error message to user
		// });

		login(params);
		// After login, you can redirect the user or show a success message


	};

  return (
    <>
        <div className="container">
			<div className="row justify-content-center">
				<div className="col-xl-4 col-lg-5 col-sm-6 col-12">
					<form action="index.html" className="my-5">
						<div className="border rounded-2 p-4 mt-5">
							<div className="login-form">
								<a href="index.html" className="mb-4 d-flex">
									<img src="assets/images/logo.svg" className="img-fluid login-logo" alt="Earth Admin Dashboard" />
								</a>
								<h5 className="fw-light mb-5">Connectez-vous ici.</h5>
								<div className="mb-3">
									<label className="form-label">Nom d'utilisateur</label>
									<input type="text" onChange={(e) => setUsername(e.target.value)} className="form-control" placeholder="Entrer votre nom d'utilisateur" />
								</div>
								<div className="mb-3">
									<label className="form-label">Votre mot de passe</label>
									<input type="password" onChange={(e) => setPassword(e.target.value)} className="form-control" placeholder="Entrer votre mot de passe" />
								</div>
								<div className="d-flex align-items-center justify-content-between">
									<div className="form-check m-0">
										<input className="form-check-input" type="checkbox" value="" id="rememberPassword" />
										<label className="form-check-label" htmlFor="rememberPassword">Remember</label>
									</div>
									<a href="forgot-password.html" className="text-blue text-decoration-underline">Mot de passe oublié?</a>
								</div>
								<div className="d-grid py-3 mt-4">
									<button type="submit" onClick={handleSubmit} className="btn btn-lg btn-primary">
										Se connecter
									</button>
								</div>
								{/* <div className="text-center py-3">or Login with</div>
								<div className="d-flex gap-2 justify-content-center">
									<button type="submit" className="btn btn-outline-danger">
										<i className="bi bi-google me-2"></i>Gmail
									</button>
									<button type="submit" className="btn btn-outline-info">
										<i className="bi bi-facebook me-2"></i>Facebook
									</button>
								</div> */}
								<div className="text-center pt-4">
									<span>Vous n'avez pas de compte?</span>
									<a href="signup.html" className="text-blue text-decoration-underline ms-2">
										Enregistrer vous ici</a>
								</div>
							</div>
						</div>
					</form>
				</div>
			</div>
		</div>
    </>
  )
}

export default Login
