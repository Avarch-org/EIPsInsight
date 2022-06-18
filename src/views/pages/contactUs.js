/* eslint-disable prettier/prettier */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable prettier/prettier */
/* eslint-disable react/no-unescaped-entities */

import React, { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'
import './contactUs.styles.css'
import {
  CButton,
  CForm,
  CFormCheck,
  CFormInput,
  CFormLabel,
  CFormText,
  CFormTextarea,
  CModal,
  CModalBody,
  CModalHeader,
  CModalTitle,
} from '@coreui/react'

const Contact = () => {
  const form = useRef()
  const [visibleSm, setVisibleSm] = useState(false)

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs.sendForm('service_kqi3ebj', 'template_1hpufpx', form.current, 'Nj6W0EIDlUtD8ip0-').then(
      (result) => {
        console.log(result.text)
        console.log('message sent')
      },
      (error) => {
        console.log(error.text)
      },
    )
    e.target.reset()
  }

  return (
    <div>
      <div className="container1">Contact Us</div>
      <div className="whle">
        {/* <form ref={form} onSubmit={sendEmail}>
        <label>Name</label>
        <input type="text" name="user_name" />
        <label>Email</label>
        <input type="email" name="user_email" />
        <label>Message</label>
        <textarea name="message" />
        <input type="submit" value="Send" />
      </form> */}
        <CForm ref={form} onSubmit={sendEmail} className="form23">
          <div className="mb-3">
            <CFormLabel htmlFor="exampleInputEmail1">Name</CFormLabel>
            <CFormInput
              type="text"
              name="user_name"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              required
            />
          </div>
          <div className="mb-3">
            <CFormLabel htmlFor="exampleInputPassword1">Email</CFormLabel>
            <CFormInput type="email" id="exampleInputPassword1" name="user_email" required />
            <CFormText id="emailHelp">We'll never share your email with anyone else.</CFormText>
          </div>
          <div className="mb-3">
            <CFormLabel htmlFor="exampleInputPassword1">Message</CFormLabel>
            <CFormTextarea
              type="text"
              id="exampleInputPassword1"
              name="message"
              className="textInput"
              required
            />
          </div>
          <CButton type="submit" onClick={() => setVisibleSm(!visibleSm)} className="buttonSubmit">
            Submit
          </CButton>
        </CForm>
      </div>
      <CModal size="sm" visible={visibleSm} onClose={() => setVisibleSm(false)}>
        <CModalHeader className="model12">
          <CModalTitle className="model1">Recieved your Message!!!</CModalTitle>
        </CModalHeader>
      </CModal>
    </div>
  )
}

export default Contact
