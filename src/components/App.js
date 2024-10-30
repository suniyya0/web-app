import './App.css';
import React from 'react';
import Navbar from './navbar'; // Ensure correct casing for import
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home';
import FindSuppliers from './FindSuppliers';
import FindServices from './FindServices';
import Footer from './Footer'; // Import Footer component

function App() {
  return (
    <Router>
      <Navbar />
      <div className="search-container">
        <input
          type="text"
          className="search-input"
          placeholder="Search your required service here"
        />
        <input
          type="text"
          className="location-input"
          placeholder="Search your desired location here"
        />
        <button className="search-button">Search</button>
      </div>

      <div className="info-container">
        <div className="info-text">
          <h2>Ready to dive into HABOT?</h2>
          <p>
            Signing up with HABOT opens the door to a world of new opportunities
            and potential for business growth. Gain access to a vibrant community
            of like-minded individuals, unlock valuable resources, and take the first
            step towards realizing your entrepreneurial dreams.
          </p>
          <button className="signup-button">Sign Up Today →</button>
        </div>
        <div className="country-container">
          {['USA', 'Canada', 'UK', 'Australia', 'Germany', 'India'].map(country => (
            <div className="country-box" key={country}>
              {country}
            </div>
          ))}
        </div>
      </div>

      <div className="video-container">
        <iframe 
          className="youtube-video" 
          src="https://www.youtube.com/embed/IZLp-TZyDkQ" 
          title="YouTube Video"
          allowFullScreen 
        />
        <div className="text-container">
          <div className="role">
            <span className="role-text">Buyer</span>
            <div className="points">
              <div className="point-item">
                <span className="point">&#10003;</span>
                <span className="point-text">Post your requirements.</span>
              </div>
              <div className="point-item">
                <span className="point">&#10003;</span>
                <span className="point-text">Sit back for multiple suppliers to contact you.</span>
              </div>
              <div className="point-item">
                <span className="point">&#10003;</span>
                <span className="point-text">Choose among the suppliers based on the<br/>ratings and reviews.</span>
              </div>
            </div>
          </div>
          <div className="role">
            <span className="role-text">Supplier</span>
            <div className="points">
              <div className="point-item">
                <span className="point">&#10003;</span>
                <span className="point-text">Complete your profile to attract buyers.</span>
              </div>
              <div className="point-item">
                <span className="point">&#10003;</span>
                <span className="point-text">Get notified for opportunities.</span>
              </div>
              <div className="point-item">
                <span className="point">&#10003;</span>
                <span className="point-text">Contact buyers and share your quotes.</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="find-you-container">
        <span className="find-you-text">
          Let Suppliers <span className="highlight">Find You</span>
        </span>
        <button className="get-verified-button">Get Verified</button>
      </div>

      <div className="centered-container">
        <h2 className="centered-heading">How it works?</h2>
        <p className="centered-text">
          Buyers post their needs and review top suppliers, while suppliers complete profiles, connect with
          <br /> potential buyers, and build successful business relationships, sharing valuable feedback.
        </p>
      </div>

      <div className="boxes-container">
        <div className="box light-blue">
          <div className="icon-container">
            <span role="img" aria-label="Select Your Role" className="icon">➕</span>
          </div>
          <p className="box-text">Select Your Role and Sign Up</p>
        </div>
        <div className="box white">
          <div className="icon-container">
            <span role="img" aria-label="Buyers Post" className="icon">➕</span>
          </div>
          <p className="box-text">Buyers Post Your Requirements</p>
        </div>
        <div className="box light-blue">
          <div className="icon-container">
            <span role="img" aria-label="Review and Select" className="icon">➕</span>
          </div>
          <p className="box-text">Review, Select, and Contact the Best Suppliers</p>
        </div>
        <div className="box white">
          <div className="icon-container">
            <span role="img" aria-label="Suppliers Profile" className="icon">➕</span>
          </div>
          <p className="box-text">Suppliers Complete Your Profile</p>
        </div>
        <div className="box light-blue">
          <div className="icon-container">
            <span role="img" aria-label="Contact Buyers" className="icon">➕</span>
          </div>
          <p className="box-text">Contact Buyers and Share Your Quote</p>
        </div>
        <div className="box white">
          <div className="icon-container">
            <span role="img" aria-label="Connect and Feedback" className="icon">➕</span>
          </div>
          <p className="box-text">Both Parties Can Connect and Leave Feedback</p>
        </div>
      </div>

      {/* Main Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/find-suppliers" element={<FindSuppliers />} />
        <Route path="/find-services" element={<FindServices />} />
      </Routes>

      {/* Place the Footer here */}
      <Footer />
    </Router>
  );
}

export default App;
