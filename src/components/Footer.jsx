import React from 'react'
import './Footer.css';

function Footer() {
    return(

        <>

			
	<section id="footer">
		<div className="container pt-4 fr">
			<div className="row text-center text-xs-center text-sm-left text-md-left">
				<div className="col-xs-12 col-sm-4 col-md-4">
					<h5>Quick links</h5>
					<ul className="list-unstyled quick-links">
						<li><a href=""><i className="fa fa-angle-double-right"></i>Home</a></li>
						<li><a href=""><i className="fa fa-angle-double-right"></i>About</a></li>
						<li><a href=""><i className="fa fa-angle-double-right"></i>News</a></li>
						<li><a href=""><i className="fa fa-angle-double-right"></i>Portal</a></li>
						<li><a href=""><i className="fa fa-angle-double-right"></i>Services</a></li>
					</ul>
				</div>
				<div className="col-xs-12 col-sm-4 col-md-4">
					<h5>FEATURES</h5>
					<ul className="list-unstyled quick-links">
						<li><a href=""><i className="fa fa-angle-double-right"></i>Get Startedr</a></li>
						<li><a href=""><i className="fa fa-angle-double-right"></i>Content Inventory</a></li>
						<li><a href=""><i className="fa fa-angle-double-right"></i>Sitemaps</a></li>
						<li><a href=""><i className="fa fa-angle-double-right"></i>UI</a></li>
						<li><a href=""><i className="fa fa-angle-double-right"></i>Business</a></li>
					</ul>
				</div>
				<div className="col-xs-12 col-sm-4 col-md-4">
					<h5>CONTACT US</h5>
					<ul className="list-unstyled quick-links">
						<li><a href=""><i className="fa fa-angle-double-right"></i>Tarntaran</a></li>
						<li><a href=""><i className="fa fa-angle-double-right"></i>143416</a></li>
						<li><a href=""><i className="fa fa-angle-double-right"></i>+919781714985</a></li>
						<li><a href=""><i className="fa fa-angle-double-right"></i>FAQ</a></li>
						
					</ul>
				</div>
			</div>
			<div className="row">
				<div className="col-xs-12 col-sm-12 col-md-12 mt-2 mt-sm-5">
					<ul className="list-unstyled list-inline social text-center">
						<li className="list-inline-item"><a href="https://www.facebook.com/harinderpal.singhbhullar.5"target="_blank"><i className="fa fa-facebook"></i></a></li>
						<li className="list-inline-item"><a href="https://www.instagram.com/royal.bhular/"target="_blank"><i className="fa fa-instagram"></i></a></li>
						<li className="list-inline-item"><a href="https://www.linkedin.com/in/harinderpal-singh-8695a4101"target="_blank"><i className="fa fa-linkedin"></i></a></li>
						<li className="list-inline-item"><a href="https://wa.me/+919781714985" target="_blank"><i className="fa fa-whatsapp"></i></a></li>
					</ul>
				</div>
				<hr/>
			</div>	
			<div className="row">
				<div className="col-xs-12 col-sm-12 col-md-12 mt-2 mt-sm-2 text-center text-white">
					<p className="h6 pl-3">© All right Reversed.
                    </p><p><a className="text-green ml-2" href="" target="_blank">CodingWorld</a></p>
				</div>
				<hr/>
			</div>	
		</div>
	</section>

</>
    )
}

export default Footer;