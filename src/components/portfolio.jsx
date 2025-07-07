import React from "react"; 
import ImageSlider from "./ImageSlider";

class Portfolio extends React.Component {
  constructor() {
    super();
    this.state = {
      hoveredCard: null
    };
  }

  handleCardHover = (index) => {
    this.setState({ hoveredCard: index });
  }

  handleCardLeave = () => {
    this.setState({ hoveredCard: null });
  }

  render() {
    const slidesAurora = [
      {url: 'https://i.imgur.com/jDw7fx0.png', title: 'Image 1'},
      {url: 'https://i.imgur.com/UF6Jg3Q.png', title: 'Image 2'},
      {url: 'https://i.imgur.com/f4K4f7F.png', title: 'Image 3'},
      {url: 'https://i.imgur.com/YBjQka7.png', title: 'Image 4'},
      {url: 'https://i.imgur.com/QkhE1BK.png', title: 'Image 5'},
      {url: 'https://i.imgur.com/8WYDU2o.jpg', title: 'Image 6'},
    ]
    const slidesOsmosis = [
      {url: 'https://i.imgur.com/qQHLVRi.png', title: 'Image 1'},
      {url: 'https://i.imgur.com/14eUgQV.jpg', title: 'Image 2'},
      {url: 'https://i.imgur.com/T2AWZr9.jpg', title: 'Image 3'},
      {url: 'https://i.imgur.com/tkIDYWL.png', title: 'Image 4'},
      {url: 'https://i.imgur.com/LOuPEVi.png', title: 'Image 5'},
    ]



    // New project slides - using clean lowercase hyphenated file names with proper base path
    const slidesTagClub = [
      {url: `${process.env.PUBLIC_URL}/img/tagclub/unlock-exclusive-experiences-with.png`, title: 'TagClub Homepage'},
      {url: `${process.env.PUBLIC_URL}/img/tagclub/pasted-graphic-3.png`, title: 'TagClub Platform Overview'},
      {url: `${process.env.PUBLIC_URL}/img/tagclub/pasted-graphic-4.png`, title: 'TagClub Features'},
      {url: `${process.env.PUBLIC_URL}/img/tagclub/tc1.png`, title: 'TagClub Mobile Interface'},
      {url: `${process.env.PUBLIC_URL}/img/tagclub/tc2.png`, title: 'TagClub User Experience'},
      {url: `${process.env.PUBLIC_URL}/img/tagclub/tc3.png`, title: 'TagClub Collaboration Platform'},
    ]

    const slidesZeshi = [
      {url: `${process.env.PUBLIC_URL}/img/zeshi/transform-your.png`, title: 'Zeshi AI Homepage'},
      {url: `${process.env.PUBLIC_URL}/img/zeshi/our-al-tiktok-services.png`, title: 'AI TikTok Services'},
      {url: `${process.env.PUBLIC_URL}/img/zeshi/sample-videos.png`, title: 'Sample AI Generated Videos'},
      {url: `${process.env.PUBLIC_URL}/img/zeshi/how-we-create-al-tiktok-magic.png`, title: 'AI TikTok Creation Process'},
    ]

    const slidesPosterGenAI = [
      {url: `${process.env.PUBLIC_URL}/img/postergenai/create-your-perfect-poster.png`, title: 'Create Your Perfect Poster'},
      {url: `${process.env.PUBLIC_URL}/img/postergenai/creating-your-posters.png`, title: 'Creating Your Posters'},
      {url: `${process.env.PUBLIC_URL}/img/postergenai/describe-your-poster.png`, title: 'Describe Your Poster'},
      {url: `${process.env.PUBLIC_URL}/img/postergenai/your-generated-posters.png`, title: 'Your Generated Posters'},
    ]

    const slidesAINews = [
      {url: `${process.env.PUBLIC_URL}/img/ai-news/this-script-checks-daily-for.png`, title: 'AI News Script Overview'},
      {url: `${process.env.PUBLIC_URL}/img/ai-news/obvio-uses-aj-to-identify-unsafe-drivers-through-stop-sign-cameras.png`, title: 'AI News Example Output'},
      {url: `${process.env.PUBLIC_URL}/img/ai-news/pasted-graphic-11.png`, title: 'AI News Dashboard'},
      {url: `${process.env.PUBLIC_URL}/img/ai-news/pasted-graphic-9.png`, title: 'AI News Analytics'},
    ]

    const projects = [
      {
        title: "🌐 Aurora Proxies",
        description: "Founded a business specializing in the distribution of private residential and data center proxies. Worked in a fullstack MERN role developing a dashboard & checkout site with API calls to Stripe, Discord, MongoDB, and Oxylabs",
        technologies: ["ReactJS", "HTML", "Node", "Express", "MongoDB", "Stripe API"],
        slides: slidesAurora,
        link: "https://github.com/zactham/AuroraProxyDashboardNoKeys",
        gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
        accent: "#667eea"
      },
      {
        title: "🧠 Daily AI Digest",
        description: "An automated AI news aggregation system that runs daily via GitHub Actions. Collects the latest AI headlines from major tech outlets, tracks AI stock movements, monitors trending AI tools, and delivers formatted digests through intelligent content processing.",
        technologies: ["Python", "GitHub Actions", "OpenAI API", "Fetch Fox API"],
        slides: slidesAINews,
        gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
        accent: "#667eea"
      },
      {
        title: "🏷️ TagClub",
        description: "I created both the TagClub mobile app (the main product) and the website (which advertises the app). TagClub is a mobile-first platform connecting models/influencers with venues/brands for collaborations. The app is built with React Native/Expo for mobile and Vite for web, powered by Supabase backend with PostgreSQL, featuring real-time chat, collaboration requests, push notifications, and secure authentication.",
        technologies: ["React Native", "Expo SDK 53", "React 19", "Vite", "Supabase", "PostgreSQL", "React Navigation"],
        slides: slidesTagClub,
        link: "https://tagclub.app",
        gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
        accent: "#667eea"
      },
      {
        title: "🎬 Zeshi AI",
        description: "A cutting-edge AI advertising agency specializing in creating viral TikTok ads for products and businesses. Using Google's VEO 3 AI video generation technology, we transform your brand into engaging TikTok content that drives conversions and brand awareness through AI-generated videos.",
        technologies: ["Gemini VEO3", "HTML5/CSS3", "Vanilla JavaScript", "Vite", "Formspree", "Netlify"],
        slides: slidesZeshi,
        link: "https://zeshi.ai",
        gradient: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
        accent: "#4facfe"
      },
      {
        title: "🎨 PosterGenAI",
        description: "An AI-powered poster generation platform for users to pay to generate AI images with prompts, and order those images into physical posters. The process: users submit a prompt and payment via Stripe, the image is generated using the OpenAI API, then upscaled with Replicate API, and after successful Stripe checkout, the final images are sent to a printing service for fulfillment.",
        technologies: ["React", "TypeScript", "Python", "AI/ML", "OpenAI API", "Stripe API", "Replicate API"],
        slides: slidesPosterGenAI,
        link: "#", // Update this with the actual link when available
        gradient: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
        accent: "#f093fb"
      },

      {
        title: "⚡ Osmosis",
        description: "Helped create an iOS paid application ($49.99) developed to purchase in-demand clothing from a limited release fashion store at high speeds. Worked in a front end role developing customizable profiles, item keywords, live clock, google login for captcha bypass, and multiple checkout methods",
        technologies: ["XCode", "Swift", "JavaScript", "iOS Development"],
        slides: slidesOsmosis,
        link: "https://twitter.com/search?q=@osmosis_app&src=typed_query",
        gradient: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
        accent: "#f093fb"
      }
    ];

    return (
      <section id="work" className="portfolio-modern">
        <div className="portfolio-container">
          <div className="portfolio-header">
            <h2 className="portfolio-title">Featured Projects</h2>
            <p className="portfolio-subtitle">A showcase of my development journey and technical expertise</p>
          </div>
          
          <div className="projects-grid">
            {projects.map((project, index) => (
              <div 
                key={index}
                className={`project-card ${this.state.hoveredCard === index ? 'hovered' : ''}`}
                onMouseEnter={() => this.handleCardHover(index)}
                onMouseLeave={this.handleCardLeave}
                style={{
                  '--project-gradient': project.gradient,
                  '--project-accent': project.accent
                }}
              >
                <div className="project-card-inner">
                  <div className="project-header">
                    <a href={project.link} target="_blank" rel="noreferrer noopener" className="project-link">
                      <h3 className="project-name">{project.title}</h3>
                      <div className="external-link-icon">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                          <polyline points="15,3 21,3 21,9"></polyline>
                          <line x1="10" y1="14" x2="21" y2="3"></line>
                        </svg>
                      </div>
                    </a>
                  </div>
                  
                  <div className="project-image-container">
                    <ImageSlider slides={project.slides}/>
                  </div>
                  
                  <div className="project-content">
                    <p className="project-description">{project.description}</p>
                    
                    <div className="project-technologies">
                      {project.technologies.map((tech, techIndex) => (
                        <span key={techIndex} className="tech-tag">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                
                <div className="project-glow"></div>
              </div>
            ))}
          </div>
        </div>
      </section>
    )
  }
}

export default Portfolio;
