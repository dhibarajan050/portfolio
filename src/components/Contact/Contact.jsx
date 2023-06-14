import React from 'react';
import axios from 'axios';
import {AiFillGithub, AiFillFacebook, AiFillLinkedin} from 'react-icons/ai'

function Contact() {
    const [btnAction, setBtnAction] = React.useState(false)
    const onSubmit = async(e)=>{
        e.preventDefault();
        setBtnAction(true)
        const contact = {
          name:e.target.elements.name.value,
          company_name:e.target.elements.company_name.value,
          email:e.target.elements.email.value,
          message:e.target.elements.message.value
        }
        await axios.post(`https://myportfoliowebsitebackend.herokuapp.com/contact_us`,contact)
        .then(()=>alert(`Thank you!, I will get back to you soon`))
        .catch(()=>alert("Form submition fail!"))
        setBtnAction(false)
        e.target.reset();
        
    
      }
    return (
        <div className="section" id="contact">
            <div className="container" data-aos="fade-up" >
                <div className="row">
                    <div className="col-md">
                    <h3 className="heading-primary">Contact us</h3>
                    <form onSubmit={onSubmit}>
                        <div className="form-group mb-3">
                            <label>Name</label>
                            <input type="text" className="form-control" name="name" required/>
                        </div>

                        <div className="form-group mb-3">
                            <label>Company Name</label>
                            <input type="text" className="form-control" name="company_name"/>
                        </div>

                        <div className="form-group mb-3">
                            <label>Email</label>
                            <input type="email" className="form-control" name="email" required/>
                        </div>

                        <div className="form-group mb-3">
                            <label>Message</label>
                            <textarea className="form-control" rows="3" name="message" required></textarea>
                        </div>
                        <button type="submit" disabled={btnAction} className="btn btn-outline-info default-third_btn">submit</button>
                        
                    </form>
                    </div>
                    <div className="col-md">
                    <div className="social-connection">
                        <div>
                        <h3 className="heading-primary social-text mt-3 mb-3">I'd love to hear from you</h3>
                        <div className="social-icon">

                        <a href="https://github.com/Dhibarajan/" target="_blank" rel="noopener noreferrer"><AiFillGithub className="icon"/></a>
                            <a href="https://www.linkedin.com/in/dhibarajan-r-r-6a19061b7/" target="_blank" rel="noopener noreferrer"><AiFillLinkedin className="icon"/></a>
                            <AiFillFacebook className="icon"/>
                        </div>
                        <h3 className="heading-primary social-text mt-3">Thank's for your visit</h3>  
                        
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact
