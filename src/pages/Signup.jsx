import React from 'react'

function Signup() {
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
								<h5 className="fw-light mb-5">Créer un compte.</h5>
                                <div className="mb-3">
									<label className="form-label">Nom d'utilisateur</label>
									<input type="text" className="form-control" placeholder="Entrer votre nom d'utilisateur" />
								</div>
								<div className="mb-3">
									<label className="form-label">Email</label>
									<input type="text" className="form-control" placeholder="Entrer votre email" />
								</div>
								<div className="mb-3">
									<label className="form-label">Votre mot de passe</label>
									<input type="password" className="form-control" placeholder="Entrer votre mot de passe" />
								</div>
								<div className="mb-3">
									<label className="form-label">Confirmer votre mot de passe</label>
									<input type="password" className="form-control" placeholder="Votre mot de passe encore" />
								</div>
								<div className="d-flex align-items-center justify-content-between">
									<div className="form-check m-0">
										<input className="form-check-input" type="checkbox" value="" id="termsConditions" />
										<label className="form-check-label" htmlFor="termsConditions">Je suis d'accord avec les termes et conditions d'utilisations</label>
									</div>
								</div>
								<div className="d-grid py-3 mt-4">
									<button type="submit" className="btn btn-lg btn-primary">
										S'inscrire
									</button>
								</div>
								{/* <div className="text-center py-3">or Signup with</div>
								<div className="d-flex gap-2 justify-content-center">
									<button type="submit" className="btn btn-outline-danger">
										<i className="bi bi-google"></i>
									</button>
									<button type="submit" className="btn btn-outline-info">
										<i className="bi bi-facebook"></i>
									</button>
								</div> */}
								<div className="text-center pt-4">
									<span>Avez-vous déjà un compte?</span>
									<a href="login.html" className="text-blue text-decoration-underline ms-2">
										Connectez-vous ici</a>
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

export default Signup
