import React, { Component } from "react";
import ImageSlider from "./ImageSlider/ImageSlider";
import "./portfolio.css";


class Portfolio extends Component {

  render() {
    const slides = {
      aurora: [
        {url: 'https://i.imgur.com/jDw7fx0.png', title: 'Image 1'},
        {url: 'https://i.imgur.com/UF6Jg3Q.png', title: 'Image 2'},
        {url: 'https://i.imgur.com/0jxZHfH.png', title: 'Image 3'},
        {url: 'https://i.imgur.com/6jJsVKq.png', title: 'Image 4'},
        {url: 'https://i.imgur.com/QkhE1BK.png', title: 'Image 5'},
        {url: 'https://i.imgur.com/8WYDU2o.jpg', title: 'Image 6'},
      ],
      osmosis: [
        {url: 'https://i.imgur.com/qQHLVRi.png', title: 'Image 1'},
        {url: 'https://i.imgur.com/14eUgQV.jpg', title: 'Image 2'},
        {url: 'https://i.imgur.com/T2AWZr9.jpg', title: 'Image 3'},
        {url: 'https://i.imgur.com/tkIDYWL.png', title: 'Image 4'},
        {url: 'https://i.imgur.com/LOuPEVi.png', title: 'Image 5'},
      ],
      resellCalculator: [
        {url: 'https://i.imgur.com/T1voMVJ.jpg', title: 'Image 1'},
      ],
      bananaMarket: [
        {url: 'https://i.imgur.com/IGqxOyz.jpg', title: 'Image 1'},
        {url: 'https://i.imgur.com/OigBYTF.png', title: 'Image 2'},
        {url: 'https://i.imgur.com/si9Ke8G.jpg', title: 'Image 3'},
        {url: 'https://i.imgur.com/MI08T0A.png', title: 'Image 4'},
        {url: 'https://i.imgur.com/MmnFSab.jpg', title: 'Image 5'},
      ],
    };

    const commonContainerStyles = {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      width: '100%',
      margin: '0 auto',
    };

    const mediaStyles = {
      '@media (max-width: 767px)': {
        width: '90%',
        height: 'auto',
      },
      '@media (min-width: 768px) and (max-width: 1024px)': {
        width: '80%',
        height: 'auto',
      },
    };

    const containerStyles = type => ({
      ...commonContainerStyles,
      height: {
        aurora: '480px',
        osmosis: '580px',
        resellCalculator: '680px',
        bananaMarket: '580px',
      }[type],
      ...mediaStyles,
    });

    return (
      <section id="work" className="portfolio-mf sect-pt4 route">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
    
              {/* Earth 2 Section */}
              <div className="box-shadow-full">
                <div className="row">
                  <div className="about-me pt-4 pt-md-0">
                    <div className="title-box-2">
                      <a href="https://app.earth2.io/" target="_blank" rel="noreferrer noopener">
                        <h5 className="title-left">Earth 2</h5>
                      </a>
                    </div>
                    <div className="iframe-container">
                      <iframe
                          src="https://www.youtube.com/embed/5oo1SSZKjrI?start=816"
                          frameBorder="0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                          title="YouTube Video"
                      ></iframe>
                    </div>
                    <div className="work-content">
                      <div className="row">
                          <h2 className="w-title">Created 3D HDRP Unity scenes with custom lighting, raytracing, and assets for a commercial ad.  Programmed movement, UI, animation, interaction, and audio C# scripts as components of a game.</h2>
                          <div className="w-more">
                            <span className="w-ctegory">
                            Unity C#
                            </span>{" "}
                          </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
    
              {/* Aurora Proxies Section */}
              <div className="box-shadow-full">
                <div className="row">
                  <div className="about-me pt-4 pt-md-0">
                    <div className="title-box-2">
                      <a href="https://github.com/zactham/AuroraProxyDashboardNoKeys" target="_blank" rel="noreferrer noopener">
                        <h5 className="title-left">Aurora Proxies</h5>
                      </a>
                    </div>
                    <div style={containerStyles('aurora')}>
                      <ImageSlider slides={slides.aurora} projectType="aurora" />
                    </div>
                    <div className="work-content">
                      <div className="row">
                          <h2 className="w-title">Founded a business specializing in the distribution of private residential and data center proxies.  Worked in a fullstack MERN role developing a dashboard & checkout site with API calls to Stripe, Discord, MongoDB, and Oxylabs</h2>
                          <div className="w-more">
                            <span className="w-ctegory">
                            ReactJS HTML Node Express
                            </span>{" "}
                          </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
    
              {/* Osmosis Section */}
              <div className="box-shadow-full">
                <div className="row">
                  <div className="about-me pt-4 pt-md-0">
                    <div className="title-box-2">
                      <a href="https://twitter.com/search?q=@osmosis_app&src=typed_query" target="_blank" rel="noreferrer noopener">
                        <h5 className="title-left">Osmosis</h5>
                      </a>
                    </div>
                    <div style={containerStyles('osmosis')}>
                      <ImageSlider slides={slides.osmosis} projectType="osmosis"/>
                    </div>
                    <div className="work-content">
                      <div className="row">
                        <h2 className="w-title">Helped create an iOS paid application ($49.99) developed to purchase in-demand clothing from a limited release fashion store at high speeds.  Worked in a front end role developing customizable profiles, item keywords, live clock, google login for captcha bypass, and multiple checkout methods</h2>
                        <div className="w-more">
                          <span className="w-ctegory">
                          XCode Swift JavaScript
                          </span>{" "}
                        </div>
                      </div>
                    </div>   
                  </div>
                </div>
              </div>
    
              {/* Resell Calculator Section */}
              <div className="box-shadow-full">
                <div className="row">
                  <div className="about-me pt-4 pt-md-0">
                    <div className="title-box-2">
                      <a href="https://appadvice.com/app/resell-calculator/1415194685" target="_blank" rel="noreferrer noopener">
                        <h5 className="title-left">Resell Calculator</h5>
                      </a>
                    </div>
                    <div style={containerStyles('resellCalculator')}>
                      <ImageSlider slides={slides.resellCalculator} projectType="resellcalc" />
                    </div>
                    <div className="work-content">
                      <div className="row">
                        <h2 className="w-title">Free IOS Application for e-commerce sellers to easily calculate their profits.  Slide the wheel to pick desired store based on marketplace's fees.</h2>
                        <div className="w-more">
                          <span className="w-ctegory">
                          XCode Swift ported to React Native JS
                          </span>{" "}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
    
              {/* Banana Market Section */}
              <div className="box-shadow-full">
                <div className="row">
                  <div className="about-me pt-4 pt-md-0">
                    <div className="title-box-2">
                      <a href="https://appadvice.com/app/banana-market/1412538188" target="_blank" rel="noreferrer noopener">
                        <h5 className="title-left">Banana Market</h5>
                      </a>
                    </div>
                    <div style={containerStyles('bananaMarket')}>
                      <ImageSlider slides={slides.bananaMarket} projectType="banana"/>
                    </div>
                    <div className="work-content">
                      <div className="row">
                        <h2 className="w-title">Free IOS Application created to teach the basic concepts of investing via a fun Stock market gaming simulator.  The ability to share scores directly to Twitter or Messages is a unique feature that allows users to compete with friends.  Contains ads through the usage of Google Firebase with the ability to pay for removal.
                        </h2>
                        <div className="w-more">
                          <span className="w-ctegory">
                          XCode Swift Google Firebase Ads Twitter API Integration In App Purchases
                          </span>{" "}
                        </div>
                      </div>
                    </div>  
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Portfolio;
