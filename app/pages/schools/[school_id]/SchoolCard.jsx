'use client'
import { MapPin } from 'lucide-react'
import { useState, useEffect } from 'react'
import dynamic from 'next/dynamic'
import '../css/school.css'

export default function SchoolCard({ school_id }) {
   const [ school, setSchool ] = useState(null)
   const [ loading, setLoading ] = useState(true)

   const Player = dynamic(
      () => import('@lottiefiles/react-lottie-player').then(mod => mod.Player),
      { ssr: false }
   )

   useEffect(() => {
      async function fetchSchool() {
         try {
            const res = await fetch(`/api/schoolData/${school_id}`)
            const data = await res.json()

            if (!res.ok) {
               console.error('API error:', data.error)
               setSchool(null)
            } else {
               setSchool(data)
            }
         } catch (err) {
            console.error('Fetch failed:', err)
            setSchool(null)
         } finally {
            setLoading(false)
         }
      }
      fetchSchool()
   }, [ school_id ])

   if (loading) return (
      <div style={{
         display: 'flex',
         justifyContent: 'center',
         alignItems: 'center',
         minHeight: '100vh'
      }}>
         <Player
            autoplay
            loop
            src="/loader.json"
            style={{ width: '200px', height: '200px' }}
         />
      </div>
   )

   return (
      <div className="schoolBody">
         <div
            className="schoolImage"
            style={{ backgroundImage: `url(${school.institute_image})` }}
         >
            <div className="hero-text">
               <h1 className="hero-name">{school.institute_name}</h1>
               <p className="hero-motto">{school.institute_motto}</p>
               <p className="hero-location">
                  <MapPin size={14} />
                  {school.institute_location_name}
               </p>
            </div>
         </div>

         <div className="location-bar">
            <iframe
               width="100%"
               height="100%"
               style={{ border: 0, display: 'block' }}
               loading="lazy"
               allowFullScreen
               src={school.institute_location_link}
            />
         </div>

         <div className="schoolText">

            <section className="section">
               <h2 className="section-title">Ratings</h2>
               <h3 className="sub-title">General Rating</h3>
               <table className="rating-table">
                  <thead>
                     <tr><th>Name</th><th>Rating</th></tr>
                  </thead>
                  <tbody>
                     {/* ratings coming soon */}
                  </tbody>
               </table>
               <button className="cta-btn">Rate The Institution</button>
            </section>

            <div className="divider" />

            <section className="section">
               <h2 className="section-title">School Biography</h2>
               <h3 className="sub-title">History and Conception</h3>
               <p className="bio-text">{school.institute_history?.historyAndConception}</p>
               <h3 className="sub-title">Current Status</h3>
               <p className="bio-text">{school.institute_status?.currentStatus}</p>
            </section>

            <div className="divider" />

            <section className="section">
               <h2 className="section-title">Faculty</h2>
               <table className="rating-table">
                  <thead>
                     <tr><th>Name</th><th>Rating</th></tr>
                  </thead>
                  <tbody>
                     {/* faculty coming soon */}
                  </tbody>
               </table>
               <button className="cta-btn">Rate The Institution</button>
            </section>

         </div>
      </div>
   )
}