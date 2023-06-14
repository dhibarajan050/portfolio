import React from 'react';
import covid from '../../image/covid.PNG';
import recipe from '../../image/recipe.PNG';
import moster from '../../image/moster.PNG';
import comming_soon from '../../image/comming.PNG';

function Project() {
    return (
        <div className="section" id="project">
            <div className="project"> 
                <div className="container">
                    <div className="row">
                    <h3 className="heading-primary">Project</h3>
                        <div className="col-md-3" data-aos="zoom-in-up">
                        <div className="card" style={{width: "18rem"}}>
                            <img src={covid} className="card-img-top" alt="..."/>
                            <div className="card-body">
                                <h5 className="card-title">Covid-19 live tracking </h5>
                                <p className="card-text">HTML, CSS, Bootstrap, Javascript(ES6)</p>
                                <a href="https://naughty-bhabha-c205c8.netlify.app/" className="btn btn-outline-info"  target="_blank" rel="noopener noreferrer">View Project</a>
                            </div>
                        </div>
                        </div>

                        <div className="col-md-3" data-aos="zoom-in-down">
                        <div className="card" style={{width: "18rem"}}>
                            <img src={recipe} className="card-img-top" alt="..."/>
                            <div className="card-body">
                                <h5 className="card-title">Recipe app</h5>
                                <p className="card-text">React js, Javascript(ES6), Nodejs, CSS, Material UI</p>
                                <a href="https://affectionate-feynman-315b23.netlify.app/" className="btn btn-outline-info"  target="_blank" rel="noopener noreferrer">View Project</a>
                            </div>
                        </div>
                        </div>

                        <div className="col-md-3" data-aos="zoom-in-left">
                        <div className="card" style={{width: "18rem"}}>
                            <img src={moster} className="card-img-top" alt="..."/>
                            <div className="card-body">
                                <h5 className="card-title">Moster Search app</h5>
                                <p className="card-text">React js, scss, Javascript(ES6), REST API(third-party)</p>
                                <a href="https://dhibarajan.github.io/monstorworld/" className="btn btn-outline-info"  target="_blank" rel="noopener noreferrer">View Project</a>
                            </div>
                        </div>
                        </div>

                        <div className="col-md-3" data-aos="zoom-in-right">
                        <div className="card" style={{width: "18rem"}}>
                            <img src={comming_soon} className="card-img-top" alt="..."/>
                            <div className="card-body">
                                <h5 className="card-title">Netflix clone</h5>
                                <p className="card-text">React js, Bootstrap, Node js, Express js, mongoodb</p>
                                <a href="https://netflix-clone-eec81.firebaseapp.com/" className="btn btn-outline-info">View Project</a>
                            </div>
                        </div>
                        </div>
                    </div>
                    <center><a href="/view_project" className="default-secondary_btn mt-5"  target="_blank" rel="noopener noreferrer">View More</a></center>
                </div>
            </div>
        </div>
    )
}

export default Project
