import React from 'react'
import './Services.css'

function Services () {
    
    return (
        <div>
           <div className="container-fluid pt-5 ">
    <div className="text-center mt-5">
        <h1>Our Services</h1>
    </div>
    <div className="row">
        <div className="col-md-4">
            <div className="box">
                <div className="our-services settings">
                    <div className="icon"> <img className='html' src="images/html.png"/> </div>
                    <h4>HTML</h4>
                    <p>HTML is the standard markup language for creating Web pages.</p>
                </div>
            </div>
        </div>
        <div className="col-md-4">
            <div className="box">
                <div className="our-services speedup">
                    <div className="icon"> <img className='html' src="images/css.png"/> </div>
                    <h4>CSS</h4>
                    <p>CSS is the language we use to style an HTML document.</p>
                </div>
            </div>
        </div>
        <div className="col-md-4">
            <div className="box">
                <div className="our-services privacy">
                    <div className="icon"> <img className='html' src="images/js.png"/> </div>
                    <h4>JAVASCRIPT</h4>
                    <p>JavaScript is the programming language of the Web.</p>
                </div>
            </div>
        </div>
    </div>
    <div className="row">
        <div className="col-md-4">
            <div className="box">
                <div className="our-services backups">
                    <div className="icon"> <img className='html' src="images/py.png"/> </div>
                    <h4>PYTHON</h4>
                    <p>Python can be used on a server to create web applications. </p>
                </div>
            </div>
        </div>
        <div className="col-md-4">
            <div className="box">
                <div className="our-services ssl">
                    <div className="icon"> <img className='html' src="images/react.png"/> </div>
                    <h4>REACT</h4>
                    <p>React allows us to create reusable UI components.</p>
                </div>
            </div>
        </div>
        <div className="col-md-4">
            <div className="box">
                <div className="our-services database">
                    <div className="icon"> <img className='html' src="images/sql.png"/> </div>
                    <h4>SQL</h4>
                    <p>SQL is a standard language for storing, manipulating and retrieving data in databases.</p>
                </div>
            </div>
        </div>
    </div>
</div>
            
        </div>
    )
}
export default Services;