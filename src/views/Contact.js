import React from 'react'
import { MapPin, Smartphone, Mail } from 'react-feather'

import PageHeader from '../components/PageHeader'
import EnquiryFormSimpleAjax from '../components/EnquiryFormSimpleAjax'
import Content from '../components/Content'
import './Contact.sass'

export default ({ fields }) => {
  const {
    body,
    title,
    subtitle,
    featuredImage,
    address,
    phone,
    email,
    workHours,
  } = fields
  return (
    <div className="Contact">
      <PageHeader
        title={title}
        subtitle={subtitle}
        backgroundImage={featuredImage}
      />

      <div className="container">
        <div className="w-layout-grid contact-form-grid">
          <div id="w-node-509be70585a6-184c63d4" className="contact-info">
            <div className="details-wrap">
              <div className="label">Our offices </div>
              <div className="paragraph-light">
                We welcome your inquiries. Reach out to us directly
                <a
                  href="mailto:dereketman@gmail.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  {email}
                </a>
              </div>
            </div>
            <div className="details-wrap">
              <div className="label">WORKING HOURS</div>
              <div className="paragraph-light">{workHours}</div>
            </div>
          </div>

          <div id="w-node-509be705858e-184c63d4" className="contact-form-wrap">
            <div className="contact-form-heading-wrap">
              <h2 className="contact-heading">Contact us</h2>
              <div className="paragraph-light">
                We welcome your inquiries. Reach out to us directly
              </div>
            </div>

            <div className="contact-form w-form">
              <form
                data-name="Get In Touch Form"
                name="wf-form-Get-In-Touch-Form"
                className="get-in-touch-form"
              >
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  className="text-field cc-contact-field input"
                  maxLength="256"
                  name="name"
                  data-name="Name"
                  placeholder="Enter your name"
                  id="Name"
                />
                <label htmlFor="Email-2">Email Address</label>
                <input
                  type="email"
                  className="text-field cc-contact-field input"
                  maxLength="256"
                  name="Email"
                  data-name="Email"
                  placeholder="Enter your email"
                  id="Email"
                  required=""
                />
                <label htmlFor="Message">Message</label>
                <textarea
                  id="Message"
                  name="Message"
                  placeholder="Hi there, I’m reaching out because I think we can collaborate…"
                  maxLength="5000"
                  data-name="Message"
                  className="text-field cc-textarea cc-contact-field input"
                ></textarea>
                <input
                  type="submit"
                  value="Submit"
                  data-wait="Please wait..."
                  className="Button"
                />
              </form>
              {/* <div className="status-message cc-success-message w-form-done">
                <div>Thank you! Your submission has been received!</div>
              </div>
              <div className="status-message cc-error-message w-form-fail">
                <div>Oops! Something went wrong while submitting the form.</div>
              </div> */}
            </div>
          </div>

          <div id="w-node-509be705858e-184c63d4" className="contact-form-wrap">
            <div className="contact-form-heading-wrap">
              <h2 className="contact-heading">Join The Team </h2>
              <div className="paragraph-light">
                We welcome your inquiries. Reach out to us directly
              </div>
            </div>

            <div className="contact-form w-form">
              <Content source={body} />
              <button className="Button"> Link to Job form</button>
            </div>
          </div>
        </div>
      </div>

      <div className="section">
        <div className="container">{/* <Jobs /> */}</div>
      </div>

      {/*  Starter example */}
      {/* 
      <div className="section Contact--Section1">
        <div className="container Contact--Section1--Container">
          <div>
            <Content source={body} />

            <div className="Contact--Details">
              {address && (
                <a
                  className="Contact--Details--Item"
                  href={`https://www.google.com.au/maps/search/${encodeURI(
                    address
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MapPin /> {address}
                </a>
              )}
              {phone && (
                <a className="Contact--Details--Item" href={`tel:${phone}`}>
                  <Smartphone /> {phone}
                </a>
              )}
              {email && (
                <a className="Contact--Details--Item" href={`mailto:${email}`}>
                  <Mail /> {email}
                </a>
              )}
            </div>
          </div>

          <div>
            <EnquiryFormSimpleAjax name="Simple Form Ajax" />
          </div>
        </div>
      </div> */}
    </div>
  )
}
