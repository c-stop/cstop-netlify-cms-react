import React from 'react'
import PageHeader from '../components/PageHeader'
import "./Services.sass"

export default ({ fields }) => {
  const { title, subTitle, featuredImage, section1 } = fields

  const  {section1Title, section1Body} = section1

  console.log(fields)
  return (
    <div className="Service">
      <PageHeader
        title={title}
        subtitle={subTitle}
        backgroundImage={featuredImage}
      />

      <div class="container">
        <div class="story-wrap">
          <div class="heading-jumbo-small">{section1Title}</div>
          <p class="paragraph-dark">{section1Body}</p>
        </div>
        <div class="divider" />
      </div>

      <div class="section">
        <div class="container">
          <div class="section-heading-wrap">
            <div class="label">KEEPING YOU SAFE</div>
            <h2>Valuable Services</h2>
          </div>

          <div class="our-services-grid">
            <div>
              <img
                src="images/Icon-1.svg"
                width="50"
                alt=""
                class="service-icon"
              />
              <div class="paragraph-bigger">Highly Trained & Experienced</div>
              <div class="paragraph-light">
                We have been on the front lines. We have been in the trenches
                around the world. We are local 80 set medics. We are trained in
                Infection Prevention and Control (IPC) for COVID-19 Virus, Covid
                compliance in production, contract tracing and more.
              </div>
            </div>

            <div>
              <img
                src="images/Icon-1.svg"
                width="50"
                alt=""
                class="service-icon"
              />
              <div class="paragraph-bigger">Medical Gear & PPE</div>
              <div class="paragraph-light">
                Our on set medic personnel come with fully loaded kits:{' '}
                {/* <ul> */}
                <li>AED </li>
                <li>Oxygen system with multiple tanks </li>
                <li>Spinal immobilization and all splints </li>
                <li> full trauma bag </li>
                <li> full burn kit </li>
                <li> full diagnostics </li>
                <li>over-the-counter </li>
                <li>Infrared thermometers </li>
                <li>Pulse Oximeters </li>
                <li>and more.</li>
                {/* </ul> */}
              </div>
            </div>

            <div >
              <img
                src="images/Icon-3.svg"
                width="50"
                alt=""
                class="service-icon"
              />
              <div class="paragraph-bigger">All PPE products as needed</div>
              <div class="paragraph-light">
                <li>KN95 face masks </li>
                <li>face shields </li>
                <li> goggles </li>
                <li>3 ply face masks</li>
                <li>nitrile gloves </li>
                <li>gowns</li>
                <li>hand sanitizer </li>
                <li>disinfectant wipes</li>
                <li>coveralls</li>
                <li>and more.</li>
              </div>
            </div>

            <div>
              <img
                src="images/Icon-1.svg"
                width="50"
                alt=""
                class="service-icon"
              />
              <div class="paragraph-bigger">Sanitizing & Disinfecting</div>
              <div class="paragraph-light">
                <li>Small cleaning & disinfecting teams</li>
                <li>
                  Eco friendly cleaning partnerships for larger jobs and
                  locations
                </li>
                <li>
                  Electrostatic Foggers (backpack) perfect for large areas and
                  spaces{' '}
                </li>
                <li>Victory Electrostatic foggers (handheld)</li>
                <li>EPA products </li>
                <li>and more.</li>
              </div>
            </div>

            <div>
              <img
                src="images/Icon-3.svg"
                width="50"
                alt=""
                class="service-icon"
              />
              <div class="paragraph-bigger">
                Project Specific Teams
                <br />
              </div>
              <div class="paragraph-light">
                <li>On Set Union Medics </li>
                <li>Union Life Guards</li>
                <li> Union Safety Divers</li>
                <li>Dive Masters</li>
                <li>Marine Coordinators</li>
                <li>Trained in Hyperbaric Medicine</li>
                <li>
                  Multiple course completion certifications: Covid Compliance
                  officers (C19CO)
                </li>
                <li>Health & Safety Supervisors</li>
                <li>Safety Monitors</li>
                <li>Screeners</li>
                <li>Covid-19 Compliance Officers (CCO)</li>
                <li>Covid-19 Compliance Directors</li>
                <li>On-Call Nurses & Doctors</li>
              </div>
            </div>

            <div>
              <img
                src="images/Icon-2.svg"
                width="50"
                alt=""
                class="service-icon"
              />
              <div class="paragraph-bigger">
                On Site Displays & Systems
                <br />
              </div>
              <div class="paragraph-light">
                <li>Implement and maintain set protocols </li>
                <li>
                  Morning crew check-in stations (including paperwork and
                  reports)
                </li>
                <li>open & discrete lines of communication</li>
                <li>daily action plans designed for each unique production</li>
                <li>PODs</li>
                <li>Zones</li>
                <li>Laminated signage</li>
                <li>privacy folders</li>
                <li>marking equipment</li>
                <li>color coded wrist bands</li>
                <li>and more.</li>
              </div>
            </div>

            <div>
              <img
                src="images/icon-2.svg"
                width="50"
                alt=""
                class="service-icon"
              />
              <div class="paragraph-bigger">
                Production Support
                <br />
              </div>
              <div class="paragraph-light">
                Because of our strong production background we are able to
                communicate and work well with studio executives, producers,
                production managers, production coordinators, location scouts,
                AD's, and staff. We are here to assist in any way needed
                including sourcing companies for testing during pre-production.
                <li>OSHA Accident Investigation Reports</li>
                <li>County of Los Angeles Public Health Protocol checklist</li>
                <li>
                  General Safety Guidelines for all crew & talent (including
                  extras)
                </li>
                <li>Safe Way Forward protocols </li>
                <li>
                  Model Injury and Illness Prevention Program for Employers with
                  Seasonal or Intermittent Workers (including IIPP contact lists
                  & logs)
                </li>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
