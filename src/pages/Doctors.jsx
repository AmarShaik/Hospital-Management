import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import './Doctors.css'
const doctorAvatar = 'https://images.vexels.com/media/users/3/151709/isolated/preview/098c4aad185294e67a3f695b3e64a2ec-doctor-avatar-icon.png'
export default function Doctors() {
  const [doctors, setDoctors] = useState([])
  const [query, setQuery] = useState('')
  const filtered = doctors.filter((v) =>
    String(v.name || '').toLowerCase().includes(query.toLowerCase()) ||
    String(v.specialization || '').toLowerCase().includes(query.toLowerCase())
  )
  const visibleDoctors = filtered.slice(0, 4)
  async function fetchData() {
    try {
      const response = await axios.get('https://doc-back.onrender.com/doctors')
      setDoctors(response.data)
    } catch (error) {
      console.error('Error fetching data:', error)
      setDoctors([])
    }
  }
  useEffect(() => {
    fetchData()
  }, [])
  return (
    <div className="container py-4 doctors-page">
      <header className="text-center mb-4 doctors-header">
        <h1 className="h2 mb-3">Our Doctors</h1>
        <div className="d-flex justify-content-center search-row">
          <input
            className="form-control search-input"
            placeholder="Search by name or specialization..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </div>
      </header>
      <main>
        <div className="row g-4 doctors-grid">
          {visibleDoctors.length === 0 ? (
            <div className="col-12">
              <div className="alert alert-light border text-center mb-0 no-results">No doctors found.</div>
            </div>
          ) : (
            visibleDoctors.map((v) => (
              <div key={v.id} className="col-12 col-md-6">
                <article className="card h-100 shadow-sm border-0 doctor-card">
                  <div className="card-body d-flex flex-column flex-md-row align-items-center gap-3 text-center text-md-start">
                    <img src={v.img || doctorAvatar} alt={v.name} className="doctor-avatar rounded-circle" />
                    <div className="doctor-info flex-grow-1">
                      <h2 className="h5 mb-2 doctor-name">{v.name}</h2>
                      <p className="mb-1 text-muted doctor-specialty">Age: {v.age}</p>
                      <p className="mb-0 text-muted doctor-specialty">Specialization: {v.specialization}</p>
                      <div className="d-flex flex-column flex-sm-row gap-2 mt-3 justify-content-center justify-content-md-start card-actions">
                        <button className="btn btn-primary">Book</button>
                        <Link to={`/doctors/${v.id}`} className="btn btn-outline-primary">Profile</Link>
                      </div>
                    </div>
                  </div>
                </article>
              </div>
            ))
          )}
        </div>
      </main>
    </div>
  )
}