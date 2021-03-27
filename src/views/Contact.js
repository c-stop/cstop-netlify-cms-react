import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import Content from '../components/Content'
import Cta from '../components/Cta'
import PageHeader from '../components/PageHeader'
import './Contact.sass'
import * as emailjs from 'emailjs-com'

export default ({ fields }) => {
  const {
    title,
    subtitle,
    featuredImage,
    email,
    // workHours,
    applySection,
    contactCallToAction,
  } = fields

  const { applyTitle, applySubtitle, applyBody, applyButton } = applySection
  const { ctaTitle, ctaBody, ctaButtonText, ctaBackgroundImage } =
    contactCallToAction ?? ''

  const [formData, setFormData] = useState({})

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
    console.log('Handle Change: ', formData)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    sendEmail()
    setFormData({
      name: '',
      email: '',
      message: '',
    })
  }

  const sendEmail = () => {
    const { name, email, message } = formData
    console.log('Sending Email', formData)

    const templateParams = {
      from_name: name,
      from_email: email,
      to_name: 'c-Stop',
      message_html: message,
    }
    emailjs
      .send(
        'service_umpcy5n',
        'cstop_contact_template',
        templateParams,
        'user_0Als4WUjD4qGCDjIOuF1L'
      )
      .then((resp) => console.log(resp))
      .catch((err) => console.log(err));

    // axios
    //   .post(
    //     'https://us-central1-your-app-name.cloudfunctions.net/submit',
    //     formData,
    //     () => {
    //       console.log('posting')
    //     }
    //   )
    //   .then((res) => {
    //     console.log(res)
    //     if (res.data.status === 'success') {
    //       alert('Message Sent.')
    //       resetForm()
    //     } else if (res.data.status === 'fail') {
    //       alert('Message failed to send.')
    //     }
    //     db.collection('emails').add({
    //       name: formData.name,
    //       email: formData.email,
    //       message: formData.message,
    //     })
    //   })
    //   .catch((error) => {
    //     console.log(error)
    //   })
  }

  const resetForm = () => {
    setFormData({ name: '', email: '', message: '' })
  }

  return (
    <div className="Contact">
      <PageHeader
        title={title}
        subtitle={subtitle}
        backgroundImage={featuredImage}
        opacity="0.6"
      />

      <div className="container">
        <div className="w-layout-grid contact-form-grid">
          <div id="w-node-509be705858e-184c63d4" className="contact-form-wrap">
            <div className="contact-form-heading-wrap">
              <h2 className="contact-heading">Contact us</h2>
              <div className="paragraph-light">
                We welcome your inquiries, fill out the form below or reach out
                to us directly.
                <a
                  href="mailto:solutions@c-stop.services"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {email}
                </a>
              </div>
            </div>

            <div className="contact-form w-form">
              <form
                data-name="Get In Touch Form"
                name="wf-form-Get-In-Touch-Form"
                className="get-in-touch-form"
                id="contactForm"
                onSubmit={handleSubmit}
              >
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  className="text-field cc-contact-field input"
                  maxLength="256"
                  name="name"
                  data-name="Name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                  id="name"
                  required
                />
                <label htmlFor="Email-2">Email Address</label>
                {/* TO DO: SWITCH BACK TO EMAIL */}
                <input
                  type="text"
                  className="text-field cc-contact-field input"
                  maxLength="256"
                  name="email"
                  data-name="Email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  id="email"
                  required
                />
                <label htmlFor="Message">Message</label>
                <textarea
                  className="text-field cc-textarea cc-contact-field input"
                  maxLength="5000"
                  name="message"
                  data-name="Message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Hi there, I’m reaching out because I think we can collaborate…"
                  id="message"
                  required
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
              <h2 className="contact-heading">{applyTitle}</h2>
              <div className="paragraph-light">{applySubtitle}</div>
            </div>

            <div className="contact-form w-form">
              <Content source={applyBody} />
              <Link to="/apply" className="Button contact-apply-button">
                {applyButton}
              </Link>
            </div>
          </div>
        </div>

        <Cta
          title={ctaTitle}
          body={ctaBody}
          buttonText={ctaButtonText}
          backgroundImage={ctaBackgroundImage}
        />
      </div>
    </div>
  )
}
