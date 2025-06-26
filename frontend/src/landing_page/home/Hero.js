import React from 'react';

function Hero() {
  return (
    <div className="container p-5">
      <div className="row justify-content-center text-center">
        <div className="col-12">
          <img
            src="media/images/homeHero.png"
            alt="Hero"
            className="img-fluid mb-5"
          />
          <h1 className="mt-4">Invest In Everything</h1>
          <p className="lead">
            Online platform to invest in stocks, derivatives, mutual funds, and more
          </p>
          <div className="d-flex justify-content-center mt-3">
            <button className="btn btn-primary btn-lg px-5">Signup now</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
