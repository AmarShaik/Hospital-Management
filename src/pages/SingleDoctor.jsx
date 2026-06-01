import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link, useParams } from 'react-router-dom'
import './Doctors.css'

const doctorAvatar = 'https://images.vexels.com/media/users/3/151709/isolated/preview/098c4aad185294e67a3f695b3e64a2ec-doctor-avatar-icon.png'

export default function SingleDoctor() {
	const [doctors, setDoctors] = useState([])
	const [loading, setLoading] = useState(true)
	const { id } = useParams()
	const v = doctors.find((item) => String(item.id) === String(id))
	async function fetchData() {
		try {
			const response = await axios.get('https://doc-back.onrender.com/doctors')
			setDoctors(response.data)
		} catch (error) {
			console.error('Error fetching data:', error)
			setDoctors([])
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

	if (!v) {
		return (
			<div className="container py-5">
				<div className="alert alert-light border text-center mb-0">Doctor not found</div>
			</div>
		)
	}
	return (
		<div className="container py-5 doctors-page">
			<div className="text-center mb-4">
				<h1 className="h2 mb-2">Doctor Profile</h1>
				<p className="text-muted mb-0">A focused view for the selected practitioner.</p>
			</div>
			<div className="row justify-content-center">
				<div className="col-12 col-lg-8 col-xl-7">
					<div className="card shadow-sm border-0 doctor-detail-card">
						<div className="card-body p-4 p-md-5 d-flex flex-column flex-md-row align-items-center gap-4 text-center text-md-start">
							<img src={v.img || doctorAvatar} alt={v.name} className="doctor-avatar doctor-detail-avatar rounded-circle" />
							<div className="flex-grow-1">
								<h2 className="h4 mb-2">{v.name}</h2>
								<p className="mb-1 text-muted">Age: {v.age}</p>
								<p className="mb-3 text-muted">Specialization: {v.specialization}</p>
								<div className="d-flex justify-content-center justify-content-md-start">
									<Link to="/doctors" className="btn btn-outline-primary">Back to Doctors</Link>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
