import React from 'react'
import { Link } from 'react-router-dom'
import './Home.css'

export default function Home() {
  return (
    <div className="home-root">
      <section className="hero-shell container py-5">
        <div className="row align-items-center g-4">
          <div className="col-12 col-lg-6">
            <div className="hero-panel">
              <span className="eyebrow">Hospital care, simplified</span>
              <h1>Book trusted doctors and manage care in one place.</h1>
              <p className="subtitle">
                A calm, modern front door for appointments, specialist discovery, and a better patient experience.
              </p>
              <div className="hero-cta">
                <Link className="btn primary" to="/doctors">Find Doctors</Link>
              </div>
              <div className="hero-badges d-flex flex-wrap gap-2 mt-4">
                <span className="badge-pill">Trusted specialists</span>
                <span className="badge-pill">Fast booking</span>
                <span className="badge-pill">Modern facilities</span>
              </div>
            </div>
          </div>

          <div className="col-12 col-lg-6">
            <div className="hero-visual-grid">
              <img
                className="hero-image hero-image-large"
                src="https://images.unsplash.com/photo-1626315869436-d6781ba69d6e?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8aG9zcGl0YWwlMjBidWlsZGluZ3xlbnwwfHwwfHx8MA%3D%3D"
                alt="Modern hospital room"
              />
              <div className="hero-image-stack">
                <img
                  className="hero-image hero-image-small"
                  src="https://jeewanmalahospital.com/img/hospital.jpg"
                  alt="Hospital corridor"
                />
                <img
                  className="hero-image hero-image-small"
                  src="https://media.istockphoto.com/id/2160662813/photo/medical-office-without-people.jpg?s=612x612&w=0&k=20&c=FnqBFrCCLKCQ404cp3gzE-e3kb7XVwb9ggtLVXXMGGg="
                  alt="Doctor consultation room"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="features container py-4">
        <div className="section-head text-center mb-4">
          <span className="eyebrow">Why choose us</span>
          <h2 className="h3 mb-0">Designed for simple, reliable care</h2>
        </div>
        <div className="row g-4 features-grid">
          <div className="col-12 col-md-4">
            <div className="feature card h-100 border-0 shadow-sm">
              <div className="card-body">
                <h3 className="h5">Verified Doctors</h3>
                <p>Every doctor listed here is available from the backend and easy to reach.</p>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-4">
            <div className="feature card h-100 border-0 shadow-sm">
              <div className="card-body">
                <h3 className="h5">Smooth Booking</h3>
                <p>Jump into a doctor profile quickly and move straight toward an appointment.</p>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-4">
            <div className="feature card h-100 border-0 shadow-sm">
              <div className="card-body">
                <h3 className="h5">Modern Facilities</h3>
                <p>Use the landing page to set the tone with room and hospital imagery instead of patient data.</p>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-4">
            <div className="feature card h-100 border-0 shadow-sm">
              <div className="card-body">
                <h3 className="h5">Quick Appointments</h3>
                <p>Move from browsing to booking with fewer steps and a clearer path to care.</p>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-4">
            <div className="feature card h-100 border-0 shadow-sm">
              <div className="card-body">
                <h3 className="h5">Friendly Support</h3>
                <p>Get help when you need it from a patient-first team focused on responsiveness.</p>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-4">
            <div className="feature card h-100 border-0 shadow-sm">
              <div className="card-body">
                <h3 className="h5">Clear Doctor Profiles</h3>
                <p>See names, specializations, and details at a glance before choosing a doctor.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
