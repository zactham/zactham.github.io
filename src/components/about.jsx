import React from "react";
import myImage from "../img/male1.png";
import Resume from "../img/Resume.png";

class About extends React.Component {
  constructor() {
    super();
    this.state = {
      resume: Resume,
      about_me: [
        {
          id: "first-p-about",
          content:
            "Hi!  I am a full stack web developer with a background in the the video game and web development industries. I graduated from the University of Maryland in May 2022 with a Bachelor's Degree in Computer Science."
        },
        {
          id: "second-p-about",
          content:
            "I prefer to work with React, Node, and Express, but I am always open to learning new technologies. I enjoy working on projects that are challenging and allow me to learn new skills with a strong team.  I am super flexible and outgoing, and I love to work with others.  I am always looking for new opportunities to learn and grow."
        },
        {
          id: "third-p-about",
          content:
          "In my freetime I enjoy playing video games, coding, hiking, playing tennis, building businesses, and spending time with my family and friends.  If you would like to get in touch with me, please feel free to reach out to me on LinkedIn or send me an email."
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
