import React from 'react'
import './Contact.css';


function Contact () {
    return (
        <>
            <section className="form-section" style={{ backgroundImage: "url(" + "images/volv.png" + ")",}}>
	  <div className="overlay"></div>
	   <div className="container p-1">
	     <div className="row">
		   <div className="heading-title"> Get in touch with us</div>
		 
		   <div className="col-md-6">
		     <div className="form-box-inner">
			    <form action="" method="">
				   <div className="form-group">
				     <input type="text" className="form-control" for="" name="" value="" placeholder="Your name"/>
				   </div>
				   <div className="form-group">
				     <input type="email" className="form-control" for="" name="" value="" placeholder="Your email"/>
				   </div>
				   <div className="form-group">
				     <input type="text" className="form-control" for="" name="" value="" placeholder="Your number"/>
				   </div>
				    <div className="form-group">
				    <textarea rows="4" cols="50" className="form-control" placeholder="Describe yourself here..."></textarea>
				   </div>
				   <button className="btn custom-button"> Submit Now </button>
				</form>
			 </div>
		   </div>
		   
		   <div className="col-md-6">
		     <div className="map-box">
             <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d108704.20942125122!2d74.80007990228349!3d31.633671194000456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391964aa569e7355%3A0xeea2605bee84ef7d!2sAmritsar%2C%20Punjab!5e0!3m2!1sen!2sin!4v1629535393924!5m2!1sen!2sin" width="600" height="450" style={{border:0}}allowfullscreen="" loading="lazy"></iframe>
			 </div>
		   </div>
		   </div>
		</div>
	  
      
	</section>
            
        </>
    )
}
export default Contact;