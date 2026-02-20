'use client'
import Image from 'next/image'
import Link from 'next/link'
import { MapPin } from 'lucide-react';
import './page.css'
import { Schools } from './db/data/school.js'
export default function Home() {
  const counties = [
    { value: "", label: "Choose a county" },
    { value: "baringo", label: "Baringo" },
    { value: "bomet", label: "Bomet" },
    { value: "bungoma", label: "Bungoma" },
    { value: "busia", label: "Busia" },
    { value: "elgeyo-marakwet", label: "Elgeyo-Marakwet" },
    { value: "embu", label: "Embu" },
    { value: "garissa", label: "Garissa" },
    { value: "homa-bay", label: "Homa Bay" },
    { value: "isiolo", label: "Isiolo" },
    { value: "kajiado", label: "Kajiado" },
    { value: "kakamega", label: "Kakamega" },
    { value: "kericho", label: "Kericho" },
    { value: "kiambu", label: "Kiambu" },
    { value: "kilifi", label: "Kilifi" },
    { value: "kirinyaga", label: "Kirinyaga" },
    { value: "kisii", label: "Kisii" },
    { value: "kisumu", label: "Kisumu" },
    { value: "kitui", label: "Kitui" },
    { value: "kwale", label: "Kwale" },
    { value: "laikipia", label: "Laikipia" },
    { value: "lamu", label: "Lamu" },
    { value: "machakos", label: "Machakos" },
    { value: "makueni", label: "Makueni" },
    { value: "mandera", label: "Mandera" },
    { value: "marsabit", label: "Marsabit" },
    { value: "meru", label: "Meru" },
    { value: "migori", label: "Migori" },
    { value: "mombasa", label: "Mombasa" },
    { value: "muranga", label: "Murang'a" },
    { value: "nairobi", label: "Nairobi" },
    { value: "nakuru", label: "Nakuru" },
    { value: "nandi", label: "Nandi" },
    { value: "narok", label: "Narok" },
    { value: "nyamira", label: "Nyamira" },
    { value: "nyandarua", label: "Nyandarua" },
    { value: "nyeri", label: "Nyeri" },
    { value: "samburu", label: "Samburu" },
    { value: "siaya", label: "Siaya" },
    { value: "taita-taveta", label: "Taita-Taveta" },
    { value: "tana-river", label: "Tana River" },
    { value: "tharaka-nithi", label: "Tharaka-Nithi" },
    { value: "trans-nzoia", label: "Trans Nzoia" },
    { value: "turkana", label: "Turkana" },
    { value: "uasin-gishu", label: "Uasin Gishu" },
    { value: "vihiga", label: "Vihiga" },
    { value: "wajir", label: "Wajir" },
    { value: "west-pokot", label: "West Pokot" }

  ]

  const categories = [
    { value: "", label: "Choose a institute type" },
    { value: "university", label: "University" },
    { value: "tvet", label: "TVET(Colleges)" },
    { value: "polytechnic", label: "Polytechnic(Contains Nationals)" },
    { value: "vti", label: "Vocational Training Institute(VTIs)" }
  ]
  const schools = Schools
  function calculateAverage(ratingsArray) {
    if (!ratingsArray || ratingsArray.length === 0) return 0

    const total = ratingsArray.reduce((sum, item) => {
      return sum + Number(item.rating)
    }, 0)

    return Number((total / ratingsArray.length).toFixed(2))
  }
  const schoolsWithAverage = schools.map((school) => {
    const average = calculateAverage(school.ratings.general)

    return {
      ...school,
      averageRating: average,
    }
  })

  return (
    <>
      <section>
        <div className="hero">
          <h1>
            Move Beyond Uncertainty.
            See How Others Judge.
          </h1>
          <p>
            Designed for an academic setting,
            this platform evaluates school
            performance using clear educational
            aspects like effort, consistency, and
            engagement. Individual views become
            structured ratings that reveal
            balanced patterns with clarity
            and fairness.
          </p>
          <div className="p-with-lines">
            <span className='spn-message'></span>
            <p id="p-message">Educational insight, made visible.</p>
            <span className='spn-message'></span>
          </div>
          <button>Rate A School</button>
          <small>“Justice is the virtue that gives each their due.” — Aristotle</small>
        </div>
      </section>
      <article>

      </article>
      <div className="filters">
        <form>
          <select>
            {counties.map((county) => (
              <option
                key={county.value}
                label={county.value}
              >
                {county.label}
              </option>
            ))}
          </select>
          <select>
            {categories.map((category) => (
              <option
                key={category.value}
                value={category.value}
              >
                {category.label}
              </option>
            ))}
          </select>
          <input
            type="text"
            placeholder="Enter Institution Name"
          />
        </form>
      </div>

      <div className="schoolCards">
        <div className="school">
          {schoolsWithAverage.map((school) => (
             <Link key={school.id} href={`./pages/schools/${school.id}`}>
               <div className="school-card">
              
                <div className="school-logo-wrapper">
                  <Image
                    width={84}
                    height={84}
                    src={school.logo}
                    alt="School Logo"
                  />
                </div>

               
                <h3 className="school-name">{school.name}</h3>

                <div className="divider" />

             
                <div className="rating-block">
                  <span className="rating-label">Rating</span>
                  <span className="rating-value">{school.averageRating}</span>
                </div>

                <div className="divider" />

           
                <p className="location">
                   <MapPin />
                   {school.location}
                </p>

                
                <button className="rate-btn">
                  Rate Me <span className="arrow">→</span>
                </button>
              </div>
             </Link>
          ))}
        </div>
      </div>
    </>
  )
}