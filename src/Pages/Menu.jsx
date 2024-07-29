import React from 'react';
import { Link } from 'react-router-dom';

function Menu() {
  return (
    <div>
         {/* Start Header/Navigation */}
		<nav className="custom-navbar navbar navbar navbar-expand-md navbar-dark bg-dark" 
             arial-label="Furni navigation bar">

			<div className="container">
                
				<a className="navbar-brand" >Furni<span>.</span></a>

				<button className="navbar-toggler" type="button" data-bs-toggle="collapse" 
                     data-bs-target="#navbarsFurni" aria-controls="navbarsFurni" aria-expanded="false"  
                     aria-label="Toggle navigation">
					<span className="navbar-toggler-icon"></span>
				</button>

				<div className="collapse navbar-collapse" id="navbarsFurni">
					<ul className="custom-navbar-nav navbar-nav ms-auto mb-2 mb-md-0">
						<li className="nav-item active">
							<Link to="/">Home</Link>
						</li>
                        
						<Link className='nav-link'  to='/shop'>Shop</Link>
                        <br/>
						<Link  className='nav-link' to='/about'>About us</Link>
                        <br/>
						<Link  className='nav-link' to='/Services'>Services</Link>
                        <br/>
						<Link  className='nav-link' to='/Blog'>Blog</Link>
                        <br/>
						<Link  className='nav-link' to='/Contact'>Contact us</Link>
                        
						
					</ul>

					<ul className="custom-navbar-cta navbar-nav mb-2 mb-md-0 ms-5">
						<li><a className="nav-link" href="#"><img src="images/user.svg"/></a></li>
						<li><a className="nav-link" href="Cart.jsx"><img src="images/cart.svg"/></a></li>
					</ul>
				</div>
			</div>
				
		</nav>
		{/* End Header/Navigation */}
    </div>
  )
}

export default Menu;