import React from 'react';
import welcomeImage from './images/O.jpg';

function App() {

  let name = "Lekshmy";

  console.log("React app started");

  return (
    <div className="container-fluid">
      <div className="row justify-content-center">

        <div className="col-md-6">

          <div className="card shadow p-4 text-center">
            {/* Heading */}
            <h1
              style={{
                color: "blue",
                fontSize: "30px",
                fontWeight: "bold"
              }}
            >
              Welcome to React Learning, {name}
            </h1>

            <div className="mb-2">
              <img
                src={welcomeImage}
                alt="Internal"
                className="img-fluid"
                style={{ width: "200px" }}
              />
            </div>
            <div className="mb-2">
              <img
                src="https://picsum.photos/400/250"
                alt="External"
                className="img-fluid"
              />
            </div>
            <p className="text-muted">
              This is your first card with images and styles!
            </p>


          </div>
        </div>
      </div>

    </div>
  );
}

export default App;