import React from "react";
import myImage from "../img/male1.png";

class About extends React.Component {
  constructor() {
    super();
    this.state = {
      about_me: [
        {
          id: "first-p-about",
          content:
            "Hello! I'm a dedicated full-stack web developer with a rich history in both the video game and web development sectors. I earned my Bachelor's Degree in Computer Science from the University of Maryland in May 2022."
        },
        {
          id: "second-p-about",
          content:
            "While I have a penchant for working with React, Node, and Express, I maintain an ever-evolving mindset, always ready to embrace and master new technologies. What excites me most is diving into challenging projects that stretch my skills, especially when collaborated with a robust team. I bring a flexible, proactive attitude to the table and genuinely cherish team dynamics."
        },
        {
          id: "third-p-about",
          content:
          "Outside of the professional sphere, I have varied interests ranging from traveling and watching anime to hiking and tennis. I'm also passionate about entrepreneurial ventures and cherish moments spent with family and friends."
        },
        {
          
        }
      ]
    };
  }

  render() {
    return (
      <section id="about" className="about-mf sect-pt4 route">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="box-shadow-full">
                <div className="row">
                  <div className="about-me pt-4 pt-md-0">
                    <div className="title-box-2">
                      <h5 className="title-left">About Me</h5>
                    </div>
                    {this.state.about_me.map(content => {
                      return (
                        <p className="lead" key={content.id}>
                          {content.content}
                        </p>
                      );
                    })}
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

export default About;
