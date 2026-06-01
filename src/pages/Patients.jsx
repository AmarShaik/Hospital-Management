import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './Patients.css'
import { Link } from 'react-router-dom'

export default function Patients() {
    const [patients, setPatients] = useState([])
    const [search, setSearch] = useState('')

    const filteredPatients = patients.filter((patient) =>
        patient?.name?.toLowerCase().includes(search.toLowerCase())
    )

    async function fetchData() {
        try {
            const response = await axios.get('https://doc-back.onrender.com/patients')
            setPatients(response.data)
        } catch (error) {
            console.error('Error fetching data:', error)
            setPatients([])
        }
    }

    useEffect(() => {
        fetchData()
    }, [])

    return (
        <div className="container py-4 patients-root">
            <div className="d-flex justify-content-center mb-4 patients-search-wrap">
                <input
                    type="text"
                    placeholder="Search patients..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="form-control patients-search"
                />
            </div>

            <div className="patients-container">
                {filteredPatients.length === 0 ? (
                    <div className="alert alert-light border text-center no-results mb-0">No patients found.</div>
                ) : (
                    <div className="row g-4 patients-grid">
                        {filteredPatients.map((v, i) => (
                            <div key={v.id || i} className="col-12 col-md-6">
                                <div className="card h-100 shadow-sm border-0 patient-card">
                                    <div className="card-body d-flex flex-column flex-md-row align-items-center gap-3 text-center text-md-start">
                                        <div className="patient-left d-flex flex-column align-items-center gap-2">
                                            <img src="https://cdn-icons-png.flaticon.com/512/3359/3359081.png" alt={v.name} className="patient-avatar" />
                                            <Link to={`/patients/${v.id}`} className="btn btn-primary btn-sm patient-details-link">View Details</Link>
                                        </div>
                                        <div className="patient-right flex-grow-1">
                                            <h3 className="h5 mb-2 p-name"><Link to={`/patients/${v.id}`} className="patient-name-link">{v.name}</Link></h3>
                                            <p className="mb-1 text-muted p-age">Age: {v.age}</p>
                                            <p className="mb-0 text-muted p-doctor">Doctor: {v.doctor?.name}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    )
}
