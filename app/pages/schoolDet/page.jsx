'use client'
import './css/proposal.css'
import { useState } from 'react'
import { toast } from 'sonner'

export default function SchoolPledge() {
  const [form, setForm] = useState({
    institute_name: '',
    institute_motto: '',
    institute_location_name: '',
    institute_location_link: '',
    institute_history: '',
    institute_status: '',
    institute_category: '',
  })

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const HandleSubmit = async (e) => {
    e.preventDefault()

    const res = await fetch('/api/schoolData', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        institute_name: form.institute_name,
        institute_motto: form.institute_motto,
        institute_location_name: form.institute_location_name,
        institute_location_link: form.institute_location_link,
        institute_history: { historyAndConception: form.institute_history },
        institute_status: { currentStatus: form.institute_status },
        institute_category: form.institute_category,
        status: false
      })
    })

    const data = await res.json()

    if (!res.ok) {
      toast.error('Failed to submit school')
    } else {
      toast.success('School submitted successfully')
      setForm({
        institute_name: '',
        institute_motto: '',
        institute_location_name: '',
        institute_location_link: '',
        institute_history: '',
        institute_status: '',
        institute_category: '',
      })
    }
  }

  return (
    <div className="petition">
      <div className="petImage"></div>
      <div className="petBody">
        <h2>Help Us Complete the List. Add a School.</h2>
        <p>
          Submit a school that is not  listed yet and help build a
          more complete, fair academic overview.
        </p>
        <form onSubmit={HandleSubmit}>
          <h2>School Details</h2>
          <div className="formText">
            <label>School Name: </label>
            <input
              type="text"
              name="institute_name"
              value={form.institute_name}
              onChange={handleChange}
              placeholder="Enter the name of the school"
            />
          </div>
          <div className="formText">
            <label>School Motto: </label>
            <input
              type="text"
              name="institute_motto"
              value={form.institute_motto}
              onChange={handleChange}
              placeholder="Enter the motto of the school"
            />
          </div>
          <div className="formText">
            <label>School Location Name: </label>
            <input
              type="text"
              name="institute_location_name"
              value={form.institute_location_name}
              onChange={handleChange}
              placeholder="Enter the location name"
            />
          </div>
          <div className="formText">
            <label>School Location Link: </label>
            <textarea
              name="institute_location_link"
              value={form.institute_location_link}
              onChange={handleChange}
              placeholder="Enter the location embed link"
            />
          </div>

          <h2>School Biography</h2>
          <div className="formText">
            <label>History And Conception: </label>
            <textarea
              name="institute_history"
              value={form.institute_history}
              onChange={handleChange}
              placeholder="Enter the history of the school"
            />
          </div>
          <div className="formText">
            <label>Current Status: </label>
            <textarea
              name="institute_status"
              value={form.institute_status}
              onChange={handleChange}
              placeholder="Enter the current status of the school"
            />
          </div>

          <h2>School Faculties</h2>
          <button type="button">+ Add a faculty or a School</button>

          <h2>Contact Message</h2>
          <div className="formText">
            <label>Title: </label>
            <input
              type="text"
              name="institute_category"
              value={form.institute_category}
              onChange={handleChange}
              placeholder="Enter category e.g university, tvet"
            />
          </div>

          <button type="submit" className="submitBtn">
            Send →
          </button>
        </form>
      </div>
    </div>
  )
}