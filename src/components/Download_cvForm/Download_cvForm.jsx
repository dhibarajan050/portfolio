import React from 'react';
import axios from 'axios';

function Download_cvForm() {
    const [btnAction, setBtnAction] = React.useState(false)
    const onSubmit = async(e)=>{
        e.preventDefault();
        setBtnAction(true)
        const download_cvForm = {
          name:e.target.elements.name.value,
          email:e.target.elements.email.value,
          purpose:e.target.elements.purpose.value
        }

        await axios.post(`https://myportfoliowebsitebackend.herokuapp.com/download_cv`,download_cvForm)
        setBtnAction(false)
        e.target.reset();
        window.location='https://drive.google.com/file/d/1zHUP9RmpTUnyIxMilq5E9ywba9ZcORz2/view?usp=sharing';
        
    
      }
    return (
        <div>
            <div className="download_cvForm" >
            <div className="centering">
            <h3 className="heading-primary">Please Register to view Curriculum vitae</h3>
                <form onSubmit={onSubmit}>
                        <div className="form-group">
                            <label>Name</label>
                            <input type="text" className="form-control" name="name" required/>
                        </div>

                        <div className="form-group">
                            <label>Email</label>
                            <input type="email" className="form-control" name="email" required/>
                        </div>

                        <div className="form-group">
                            <label>Purpose</label>
                            <textarea className="form-control" rows="3" name="purpose" required></textarea>
                        </div>
                        <br/>
                        <button type="submit" disabled={btnAction} className="btn btn-outline-info default-third_btn">submit</button>
                    </form>
            </div>
            </div>
        </div>
    )
}

export default Download_cvForm
