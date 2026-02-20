import { MapPin } from 'lucide-react'
import { Schools } from '../../../db/data/school.js'
import '../css/school.css'

export default async function SchoolPage({ school_id }) {
   const school = Schools.find((s) => s.id === school_id)

   if (!school) {
      return <div className="not-found">School not found.</div>
   }

   return (
      <div className="schoolBody">

         {/* Hero Image */}
         <div
            className="schoolImage"
            style={{ backgroundImage: `url(${school.image})` }}
         >
            <div className="hero-text">
               <h1 className="hero-name">{school.name}</h1>
               <p className="hero-motto">{school.motto}</p>
               <p className="hero-location">
                  <MapPin size={14} />
                  {school.location}
               </p>
            </div>
         </div>

         {/* Location Bar */}
         <div className="location-bar">
            <MapPin size={16} />
            <span>{school.location}</span>
         </div>

         <div className="schoolText">

            {/* ── Ratings ── */}
            <section className="section">
               <h2 className="section-title">Ratings</h2>

               <h3 className="sub-title">General Rating</h3>
               <table className="rating-table">
                  <thead>
                     <tr>
                        <th>Name</th>
                        <th>Rating</th>
                     </tr>
                  </thead>
                  <tbody>
                     {school.ratings.general.map((item, i) => (
                        <tr key={i}>
                           <td>{item.name}</td>
                           <td>{item.rating}</td>
                        </tr>
                     ))}
                  </tbody>
               </table>

               <button className="cta-btn">Rate The Institution</button>
            </section>

            <div className="divider" />

            {/* ── Biography ── */}
            <section className="section">
               <h2 className="section-title">School Biography</h2>

               <h3 className="sub-title">History and Conception</h3>
               <p className="bio-text">{school.biography.historyAndConception}</p>

               <h3 className="sub-title">Current Status</h3>
               <p className="bio-text">{school.biography.currentStatus}</p>
            </section>

            <div className="divider" />

            {/* ── Faculty ── */}
            <section className="section">
               <h2 className="section-title">Faculty</h2>

               <table className="rating-table">
                  <thead>
                     <tr>
                        <th>Name</th>
                        <th>Rating</th>
                     </tr>
                  </thead>
                  <tbody>
                     {school.faculty.map((item, i) => (
                        <tr key={i}>
                           <td>{item.name}</td>
                           <td>{item.rating}</td>
                        </tr>
                     ))}
                  </tbody>
               </table>

               <button className="cta-btn">Rate The Institution</button>
            </section>

         </div>
      </div>
   )
}