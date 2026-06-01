import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './Patients.css'
import { Link, useParams } from 'react-router-dom'

export default function SinglePatient() {
    const [patients, setPatients] = useState([])
    const [loading, setLoading] = useState(true)
    const { id } = useParams()
    const patient = patients.find((item) => String(item.id) === String(id))

    async function fetchData() {
        try {
            const response = await axios.get('https://doc-back.onrender.com/patients')
            setPatients(response.data)
        } catch (error) {
            console.error('Error fetching data:', error)
            setPatients([])
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        fetchData()
    }, [])

    if (loading) {
        return (
            <div className="container py-5">
                <div className="text-center py-5">Loading...</div>
            </div>
        )
    }
    if (!patient) {
        return (
            <div className="container py-5">
                <div className="alert alert-light border text-center mb-0">Patient not found</div>
            </div>
        )
    }

    return (
        <div className="container py-5 patients-root">
            <div className="text-center mb-4">
                <h1 className="h2 mb-2">Patient Details</h1>
                <p className="text-muted mb-0">A clean summary of the selected patient.</p>
            </div>
            <div className="row justify-content-center">
                <div className="col-12 col-lg-8 col-xl-7">
                    <div className="card shadow-sm border-0 patient-detail-card">
                        <div className="card-body p-4 p-md-5 d-flex flex-column flex-md-row align-items-center gap-4 text-center text-md-start">
                            <img src="https://cdn-icons-png.flaticon.com/512/3359/3359081.png" alt={patient.name} className="patient-avatar patient-detail-avatar" />
                            <div className="flex-grow-1">
                                <h3 className="h4 mb-2">{patient.name}</h3>
                                <p className="mb-1 text-muted">Age: {patient.age}</p>
                                <p className="mb-3 text-muted">Doctor: {patient.doctor?.name}</p>
                                <div className="d-flex justify-content-center justify-content-md-start">
                                    <Link to="/patients" className="btn btn-outline-primary">Back to Patients</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
