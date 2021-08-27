import React from 'react'
import './Home.css';
import './Animat.scss';




function Home() {
    return (
        <>
        


        <header>

  
  <div className="overlay"></div>

  <div className='container-fluid vids'>
  <video  playsInline="playsinline" autoPlay="autoplay" muted="muted" loop="loop">
    <source src="videos/design.mp4" type="video/mp4"/>
  </video>
  </div>
 
  <div className="container h-100 ">
    <div className="d-flex h-100 text-center align-items-center">
      <div className="w-100 text-white">
      <button className="btn bvt  btn-outline-danger" type="submit" value="Submit">Start Tour</button>
      <button className="btn bvt2 btn-outline-dark " type="submit" value="Submit">Contact Us</button>
        
      </div>
    </div>
  </div>
</header>



            <section className='d-flex align-items-center'>
                <div className="container-fluid flow pt-3">
                    <div className="row">
                        <div className='col-10 mx-auto'>
                            <div className="row">
                                <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 ">
                                    <div className='grow'>
                                        <h2 className='heda'> Grow your skillset in web development with our useful and free coding resources.  </h2>
                                        <p className='para'>
                                            Learn to code while creating real projects
                                            Engage into getting skills to bring your tech-projects to life!
                                        </p>
                                        <a style={{ borderRadius: 100, }} className='btn btn-outline-primary '>Take a tour</a></div>

                                </div>

                                <div className="col-md-6 col-lg-6 pt-5 pt-lg-0 order-2 order-lg-1 ">
                                    <div className='brand'>
                                        <img className='img-fluid' className='main-img' src="/images/img-1.png" alt="image" />

                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>



            <div className='container text-center ani '>

<h1 className='axc'>LETS HAVE A TOUR</h1>


</div>



            <section className='d-flex align-items-center'>
                <div className="container-fluid pt-3 ct2">
                    <div className="row">
                        <div className='col-10 mx-auto'>
                            <div className="row">
                                <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 ">
                                    <div className='head2'>
                                        <strong className='hrt'>How it works</strong><br />
                                        <span className='hed2'>First, we invented</span>
                                        <br />
                                        <span className='hed2'>the best system for</span>
                                        <br />
                                        <span className='hed2'> learning to code.</span><br /><br />

                                        <h1 className='hed2'>Ten years and 50</h1>
                                        <h1 className='hed2'>million learners</h1>
                                        <h1 className='hed2'>  later, we've </h1>
                                        <h1 className='hed2'>perfected it. </h1>




                                    </div>

                                </div>
                                <div className="col-md-6 col-lg-6 pt-5 pt-lg-0 order-2 order-lg-1 ">
                                    <div className='brand'>
                                        <h3 className='hd6'>Learn by doing</h3>
                                        <strong className='par3'>From building websites to analyzing data,the choice </strong> <br/><strong className='par3'>is yours. No matter your experience level, you'll be</strong><br/>
                                        <strong className='par3'>writing real, working code in minutes.</strong>

                                        <div className="gamut-1sb26gv-Box ebnwbv90"><svg aria-hidden="true" className="gamut-10b60ap-Box ebnwbv90"><defs><pattern id="checkerDensepattern-0" x="0" y="0" width="4" height="4" patternUnits="userSpaceOnUse"><rect width="1" height="1" fill="currentColor"></rect><rect x="2" y="2" width="1" height="1" fill="currentColor"></rect></pattern></defs><rect x="0" y="0" width="100%" height="100%" fill="url(#checkerDensepattern-0)"></rect></svg></div>

                                        <h3 className='hd6'>Get instant feedback</h3>
                                        <strong className='par3'>Your code is tested as soon as you submit it, so you </strong> <br/><strong className='par3'>always know if you're on the right track.</strong>
                                        

                                        <div className="gamut-1sb26gv-Box ebnwbv90"><svg aria-hidden="true" className="gamut-10b60ap-Box ebnwbv90"><defs><pattern id="checkerDensepattern-0" x="0" y="0" width="4" height="4" patternUnits="userSpaceOnUse"><rect width="1" height="1" fill="currentColor"></rect><rect x="2" y="2" width="1" height="1" fill="currentColor"></rect></pattern></defs><rect x="0" y="0" width="100%" height="100%" fill="url(#checkerDensepattern-0)"></rect></svg></div>


                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </section>

            <section class="home-newsletter">
    <div className='container-fluid nwe'>

<div className="row">
<div className="col-lg-12">
	<div className="single">
		<h2 className='nws'>Subscribe to our Newsletter</h2>
	<div className="input-group">
         <input type="email" className="form-control" placeholder="Enter your email"/>
         <span className="input-group-btn">
         <button className="btn btn-theme" type="submit">Subscribe</button>
         </span>
          </div>
	</div>
</div>
</div>
</div>
</section>

        </>
    )
}

export default Home;