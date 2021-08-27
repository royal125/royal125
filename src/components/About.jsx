import React from 'react'
import './About.css';

 function About () {
    return (

        <div>
            
       
    <div className="container mt-5 pt-4">
	<div className="row">
		<div className="col-md-6">
		    <h1 className='text-success'>Welcome!</h1>
		    <h2>The Codingworld Story</h2>
		   
		    <p>Online education is what we do. We took blockchain and used it to connect students with teachers and employers. We will help you start from zero by teaching skills that land you a job.</p>
		    <p>Codingworld is partnering with Vilnius University to research the impact of economic incentives on students’ motivation for online learning.</p>
		    <button type="button" className="btn btn-success">Let's Know More</button>

		</div>
		<div className="col-md-6 ">
		    <img className='imf' src="images/abot.png "alt=""/>
		</div>
	</div>
</div>

</div>
        
    )
}
export default About;