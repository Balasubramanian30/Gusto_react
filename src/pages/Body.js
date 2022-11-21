import React, { Component } from 'react'

class Body extends Component {
  render() {
    return (
      <div>
      <nav id="menu" className="navbar navbar-default navbar-fixed-top">
  <div className="container"> 
    {/* <!-- Brand and toggle get grouped for better mobile display --> */}
    <div className="navbar-header">
      <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1"> <span className="sr-only">Toggle navigation</span> <span className="icon-bar"></span> <span className="icon-bar"></span> <span className="icon-bar"></span> </button>
    </div>
    
    {/* <!-- Collect the nav links, forms, and other content for toggling --> */}
    <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
      <ul className="nav navbar-nav">
        <li><a href="#features" className="page-scroll">Specials</a></li>
        <li><a href="#about" className="page-scroll">About</a></li>
        <li><a href="#restaurant-menu" className="page-scroll">Menu</a></li>
        <li><a href="#team" className="page-scroll">Chef</a></li>
        <li><a href="#contact" className="page-scroll">Contact</a></li>
      </ul>
    </div>
    {/* <!-- /.navbar-collapse -->  */}
  </div>
</nav>
{/* <!-- Header --> */}
<header id="header">
  <div className="intro">
    <div className="overlay">
      <div className="container">
        <div className="row">
          <div className="intro-text">
            <h1>Gusto</h1>
            <p>Reservations: (887) 654-3210</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</header>
{/* <!-- Features Section --> */}
<div id="features" className="text-center">
  <div className="container">
    <div className="section-title">
      <h2>Our Specials</h2>
    </div>
    <div className="row">
      <div className="col-xs-12 col-sm-4">
        <div className="features-item">
          <h3>Lorem ipsum dolor</h3>
          <img src="asscets/img/specials/1.jpg" className="img-responsive" alt=""/>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diam sed commodo.</p>
        </div>
      </div>
      <div className="col-xs-12 col-sm-4">
        <div className="features-item">
          <h3>Consectetur adipiscing</h3>
          <img src="asscets/img/specials/2.jpg" className="img-responsive" alt=""/>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diam sed commodo.</p>
        </div>
      </div>
      <div className="col-xs-12 col-sm-4">
        <div className="features-item">
          <h3>Duis sed dapibus</h3>
          <img src="asscets/img/specials/3.jpg" className="img-responsive" alt=""/>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diam sed commodo.</p>
        </div>
      </div>
    </div>
  </div>
</div>
{/* <!-- About Section --> */}
<div id="about">
  <div className="container-fluid">
    <div className="row">
      <div className="col-xs-12 col-md-6 about-img"> </div>
      <div className="col-xs-12 col-md-3 col-md-offset-1">
        <div className="about-text">
          <div className="section-title">
            <h2>Our Story</h2>
          </div>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diam. Sed commodo nibh ante facilisis bibendum dolor feugiat at. Duis sed dapibus leo nec ornare diam commodo nibh.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diam. Sed commodo nibh ante facilisis bibendum dolor feugiat at. Duis sed dapibus leo nec ornare.</p>
        </div>
      </div>
    </div>
  </div>
</div>
{/* <!-- Restaurant Menu Section --> */}
<div id="restaurant-menu">
  <div className="container">
    <div className="section-title text-center">
      <h2>Menu</h2>
    </div>
    <div className="row">
      <div className="col-xs-12 col-sm-6">
        <div className="menu-section">
          <h2 className="menu-section-title">Breakfast & Starters</h2>
          <div className="menu-item">
            <div className="menu-item-name">Tortellini Skewers</div>
            <div className="menu-item-price"> $9 </div>
            <div className="menu-item-description"> Lorem ipsum dolor sit amet, consectetur adipiscing elit, duis sed dapibus leo nec ornare diam. </div>
          </div>
          <div className="menu-item">
            <div className="menu-item-name">Fried Ravioli</div>
            <div className="menu-item-price"> $7 </div>
            <div className="menu-item-description"> Lorem ipsum dolor sit amet, consectetur adipiscing elit, duis sed dapibus leo nec ornare diam. </div>
          </div>
          <div className="menu-item">
            <div className="menu-item-name">Wild Mushroom Arancini</div>
            <div className="menu-item-price"> $9 </div>
            <div className="menu-item-description"> Lorem ipsum dolor sit amet, consectetur adipiscing elit, duis sed dapibus leo nec ornare diam. </div>
          </div>
          <div className="menu-item">
            <div className="menu-item-name">Mozzarella Sticks</div>
            <div className="menu-item-price"> $10 </div>
            <div className="menu-item-description"> Lorem ipsum dolor sit amet, consectetur adipiscing elit, duis sed dapibus leo nec ornare diam. </div>
          </div>
        </div>
      </div>
      <div className="col-xs-12 col-sm-6">
        <div className="menu-section">
          <h2 className="menu-section-title">Main Course</h2>
          <div className="menu-item">
            <div className="menu-item-name">Roast Stuffed Chicken</div>
            <div className="menu-item-price"> $18 </div>
            <div className="menu-item-description"> Lorem ipsum dolor sit amet, consectetur adipiscing elit, duis sed dapibus leo nec ornare diam. </div>
          </div>
          <div className="menu-item">
            <div className="menu-item-name">Chicken & Mushroom Pasta</div>
            <div className="menu-item-price"> $20 </div>
            <div className="menu-item-description"> Lorem ipsum dolor sit amet, consectetur adipiscing elit, duis sed dapibus leo nec ornare diam. </div>
          </div>
          <div className="menu-item">
            <div className="menu-item-name">Beef Lasagne</div>
            <div className="menu-item-price"> $14 </div>
            <div className="menu-item-description"> Lorem ipsum dolor sit amet, consectetur adipiscing elit, duis sed dapibus leo nec ornare diam. </div>
          </div>
          <div className="menu-item">
            <div className="menu-item-name">Chicken Goujons</div>
            <div className="menu-item-price"> $19 </div>
            <div className="menu-item-description"> Lorem ipsum dolor sit amet, consectetur adipiscing elit, duis sed dapibus leo nec ornare diam. </div>
          </div>
        </div>
      </div>
    </div>
    <div className="row">
      <div className="col-xs-12 col-sm-6">
        <div className="menu-section">
          <h2 className="menu-section-title">Dinner</h2>
          <div className="menu-item">
            <div className="menu-item-name">Sesame-Ginger Beef</div>
            <div className="menu-item-price"> $15 </div>
            <div className="menu-item-description"> Lorem ipsum dolor sit amet, consectetur adipiscing elit, duis sed dapibus leo nec ornare diam. </div>
          </div>
          <div className="menu-item">
            <div className="menu-item-name">Crispy Fried Chicken</div>
            <div className="menu-item-price"> $17 </div>
            <div className="menu-item-description"> Lorem ipsum dolor sit amet, consectetur adipiscing elit, duis sed dapibus leo nec ornare diam. </div>
          </div>
          <div className="menu-item">
            <div className="menu-item-name">Mongolian Shrimp & Broccoli</div>
            <div className="menu-item-price"> $18 </div>
            <div className="menu-item-description"> Lorem ipsum dolor sit amet, consectetur adipiscing elit, duis sed dapibus leo nec ornare diam.. </div>
          </div>
          <div className="menu-item">
            <div className="menu-item-name">Spicy Coconut Salmon</div>
            <div className="menu-item-price"> $20 </div>
            <div className="menu-item-description"> Lorem ipsum dolor sit amet, consectetur adipiscing elit, duis sed dapibus leo nec ornare diam. </div>
          </div>
        </div>
      </div>
      <div className="col-xs-12 col-sm-6">
        <div className="menu-section">
          <h2 className="menu-section-title">Desserts</h2>
          <div className="menu-item">
            <div className="menu-item-name">Chocolate Mud Cake</div>
            <div className="menu-item-price"> $11 </div>
            <div className="menu-item-description"> Lorem ipsum dolor sit amet, consectetur adipiscing elit, duis sed dapibus leo nec ornare diam. </div>
          </div>
          <div className="menu-item">
            <div className="menu-item-name">Bourbon-Pecan Tart</div>
            <div className="menu-item-price"> $14 </div>
            <div className="menu-item-description"> Lorem ipsum dolor sit amet, consectetur adipiscing elit, duis sed dapibus leo nec ornare diam. </div>
          </div>
          <div className="menu-item">
            <div className="menu-item-name">Texas Sheet Cake</div>
            <div className="menu-item-price"> $15 </div>
            <div className="menu-item-description"> Lorem ipsum dolor sit amet, consectetur adipiscing elit, duis sed dapibus leo nec ornare diam. </div>
          </div>
          <div className="menu-item">
            <div className="menu-item-name">Vanilla Cheesecake</div>
            <div className="menu-item-price"> $18 </div>
            <div className="menu-item-description"> Lorem ipsum dolor sit amet, consectetur adipiscing elit, duis sed dapibus leo nec ornare diam. </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
{/* <!-- Gallery Section --> */}
<div id="gallery">
  <div className="container-fluid">
    <div className="row">
      <div className="col-xs-6 col-md-3">
        <div className="gallery-item"> <img src="asscets/img/gallery/01.jpg" className="img-responsive" alt=""/></div>
      </div>
      <div className="col-xs-6 col-md-3">
        <div className="gallery-item"> <img src="asscets/img/gallery/02.jpg" className="img-responsive" alt=""/></div>
      </div>
      <div className="col-xs-6 col-md-3">
        <div className="gallery-item"> <img src="asscets/img/gallery/03.jpg" className="img-responsive" alt=""/></div>
      </div>
      <div className="col-xs-6 col-md-3">
        <div className="gallery-item"> <img src="asscets/img/gallery/04.jpg" className="img-responsive" alt=""/></div>
      </div>
    </div>
  </div>
</div>
{/* <!-- Team Section --> */}
<div id="team">
  <div className="container">
    <div id="row">
      <div className="col-md-6">
        <div className="col-md-10 col-md-offset-1">
          <div className="section-title">
            <h2>Meet Our Chef</h2>
          </div>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diam. Sed commodo nibh ante facilisis bibendum dolor feugiat at. Duis sed dapibus leo nec ornare diam commodo nibh.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diam. Sed commodo nibh ante facilisis bibendum dolor feugiat at. Duis sed dapibus leo nec ornare.</p>
        </div>
      </div>
      <div className="col-md-6">
        <div className="team-img"><img src="asscets/img/chef.jpg" alt="..."/></div>
      </div>
    </div>
  </div>
</div>
{/* <!-- Contact Section --> */}
<div id="contact" className="text-center">
  <div className="container text-center">
    <div className="col-md-4">
      <h3>Reservations</h3>
      <div className="contact-item">
        <p>Please call</p>
        <p>(887) 654-3210</p>
      </div>
    </div>
    <div className="col-md-4">
      <h3>Address</h3>
      <div className="contact-item">
        <p>4321 California St,</p>
        <p>San Francisco, CA 12345</p>
      </div>
    </div>
    <div className="col-md-4">
      <h3>Opening Hours</h3>
      <div className="contact-item">
        <p>Mon-Thurs: 10:00 AM - 11:00 PM</p>
        <p>Fri-Sun: 11:00 AM - 02:00 AM</p>
      </div>
    </div>
  </div>
  <div className="container">
    <div className="section-title text-center">
      <h3>Send us a message</h3>
    </div>
    <div className="col-md-8 col-md-offset-2">
      <form name="sentMessage" id="contactForm" novalidate>
        <div className="row">
          <div className="col-md-6">
            <div className="form-group">
              <input type="text" id="name" className="form-control" placeholder="Name" required="required"/>
              <p className="help-block text-danger"></p>
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-group">
              <input type="email" id="email" className="form-control" placeholder="Email" required="required"/>
              <p className="help-block text-danger"></p>
            </div>
          </div>
        </div>
        <div className="form-group">
          <textarea name="message" id="message" className="form-control" rows="4" placeholder="Message" required></textarea>
          <p className="help-block text-danger"></p>
        </div>
        <div id="success"></div>
        <button type="submit" className="btn btn-custom btn-lg">Send Message</button>
      </form>
    </div>
  </div>
</div>
<div id="footer">
  <div className="container text-center">
    <div className="col-md-6">
      <p>&copy; 2017 Gusto. All rights reserved. Design by <a href="http://www.templatewire.com" rel="nofollow">TemplateWire</a></p>
    </div>
    <div className="col-md-6">
      <div className="social">
        <ul>
          <li><a href="#"><i className="fa fa-facebook"></i></a></li>
          <li><a href="#"><i className="fa fa-twitter"></i></a></li>
          <li><a href="#"><i className="fa fa-youtube"></i></a></li>
        </ul>
      </div>
    </div>
  </div>
</div>




      </div>
    )
  }
}

export default Body