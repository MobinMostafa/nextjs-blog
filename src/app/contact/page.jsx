import React from 'react'
import { Button } from "react-bootstrap";
import Input from '../components/Input'

const Contact = () => {
  return (
    <div className="container py-5 d-flex justify-content-center">
        <form>
        <div className="card p-4" style={{width: "35rem"}}>
         <h2 className='card-header mb-3 text-center'>Contact us</h2>
       <div className="row mb-2">
          <div className="col">
            <Input type={"text"} placeholder={"First name"} />
          </div>
          <div className="col">
            <Input type={"text"} placeholder={"Last name"} />
          </div>
        </div>
        <div className="row mb-2">
          <div className="col">
            <Input type={"email"} placeholder={"Enter your email"}/>
          </div>
        </div>
        <div className="row mb-2">
          <div className="col">
            <Input type={"password"} placeholder={"password"} />
          </div>
        </div>
        <div className="row mb-2">
          <div className="col">
            <textarea className="form-control" rows="3" placeholder="Your message"/>
          </div>
        </div>
        <div className="row">
          <div className="col">
          <Button className="primaryColor">Submit</Button>
          </div>
        </div>
       </div>
        </form>
    </div>
  )
}

export default Contact