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
            "Hi! I am a full stack web developer with a background in crypto, web development, and startup industries. I graduated from the University of Maryland in May 2022 with a Bachelor's Degree in Computer Science. I have 4 years of experience in the crypto industry and startup space."
        },
        {
          id: "ai-p-about",
          content:
            "I am highly skilled in a range of AI tools and modern development platforms. I use Replicate for image upscaling, Fox Fetch for AI-powered web scraping, GPT for advanced search and API integration, Claude for coding and automation, and Gemini for Veo3 video creation. My expertise allows me to build intelligent, efficient solutions for a variety of technical challenges."
        },
        {
          id: "third-p-about",
          content:
          "In my freetime I enjoy coding, hiking, traveling, playing tennis, building businesses, and spending time with my family and friends. If you would like to get in touch with me, please feel free to reach out to me on LinkedIn or send me an email."
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
