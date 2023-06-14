import React from 'react'

function Login() {
    return (
        <div>
            <div className="LoginForm" >
            <div className="centering">
            <h3 className="heading-primary">Master Login</h3>
                <form>
                        <div className="form-group mb-3">
                            <label>useranme</label>
                            <input type="text" className="form-control" name="name" required/>
                        </div>

                        <div className="form-group mb-3">
                            <label>password</label>
                            <input type="text" className="form-control" name="name" required/>
                        </div>

                        <div className="form-group mb-3">
                            <label>confirm password</label>
                            <input type="text" className="form-control" name="name" required/>
                        </div>
                        <br/>
                        
                        <button type="submit"className="default-secondary_btn" style={{borderColor:"#f0f8ff"}} >submit</button>
                    </form>
            </div>
            </div>
        </div>
    )
}

export default Login
