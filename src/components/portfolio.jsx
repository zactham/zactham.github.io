import React, { useState, useCallback } from "react"; 
import ImageSlider from "./ImageSlider";

// Move project data outside component to prevent re-creation on every render
const projectData = [
  {
    title: "🌐 Aurora Proxies",
    description: "Founded a business specializing in the distribution of private residential and data center proxies. Worked in a fullstack MERN role developing a dashboard & checkout site with API calls to Stripe, Discord, MongoDB, and Oxylabs",
    technologies: ["ReactJS", "HTML", "Node", "Express", "MongoDB", "Stripe API"],
    slides: [
      {url: 'https://i.imgur.com/jDw7fx0.png', title: 'Image 1'},
      {url: 'https://i.imgur.com/UF6Jg3Q.png', title: 'Image 2'},
      {url: 'https://i.imgur.com/f4K4f7F.png', title: 'Image 3'},
      {url: 'https://i.imgur.com/YBjQka7.png', title: 'Image 4'},
      {url: 'https://i.imgur.com/QkhE1BK.png', title: 'Image 5'},
      {url: 'https://i.imgur.com/8WYDU2o.jpg', title: 'Image 6'},
    ],
    link: "https://github.com/zactham/AuroraProxyDashboardNoKeys",
    gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
    accent: "#667eea"
  },
  {
    title: "🧠 Daily AI Digest",
    description: "An automated AI news aggregation system that runs daily via GitHub Actions. Collects the latest AI headlines from major tech outlets, tracks AI stock movements, monitors trending AI tools, and delivers formatted digests through intelligent content processing.",
    technologies: ["Python", "GitHub Actions", "OpenAI API", "Fetch Fox API"],
    slides: [
      {url: `${process.env.PUBLIC_URL}/img/ai-news/this-script-checks-daily-for.png`, title: 'AI News Script Overview'},
      {url: `${process.env.PUBLIC_URL}/img/ai-news/obvio-uses-aj-to-identify-unsafe-drivers-through-stop-sign-cameras.png`, title: 'AI News Example Output'},
      {url: `${process.env.PUBLIC_URL}/img/ai-news/pasted-graphic-11.png`, title: 'AI News Dashboard'},
      {url: `${process.env.PUBLIC_URL}/img/ai-news/pasted-graphic-9.png`, title: 'AI News Analytics'},
    ],
    link: "#",
    gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
    accent: "#667eea"
  },
  {
    title: "🏷️ TagClub",
    description: "I created both the TagClub mobile app (the main product) and the website (which advertises the app). TagClub is a mobile-first platform connecting models/influencers with venues/brands for collaborations. The app is built with React Native/Expo for mobile and Vite for web, powered by Supabase backend with PostgreSQL, featuring real-time chat, collaboration requests, push notifications, and secure authentication.",
    technologies: ["React Native", "Expo SDK 53", "React 19", "Vite", "Supabase", "PostgreSQL", "React Navigation"],
    slides: [
      {url: `${process.env.PUBLIC_URL}/img/tagclub/unlock-exclusive-experiences-with.png`, title: 'TagClub Homepage'},
      {url: `${process.env.PUBLIC_URL}/img/tagclub/pasted-graphic-3.png`, title: 'TagClub Platform Overview'},
      {url: `${process.env.PUBLIC_URL}/img/tagclub/pasted-graphic-4.png`, title: 'TagClub Features'},
      {url: `${process.env.PUBLIC_URL}/img/tagclub/tc1.png`, title: 'TagClub Mobile Interface'},
      {url: `${process.env.PUBLIC_URL}/img/tagclub/tc2.png`, title: 'TagClub User Experience'},
      {url: `${process.env.PUBLIC_URL}/img/tagclub/tc3.png`, title: 'TagClub Collaboration Platform'},
    ],
    link: "https://tagclub.app",
    gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
    accent: "#667eea"
  },
  {
    title: "🎬 Zeshi AI",
    description: "A cutting-edge AI advertising agency specializing in creating viral TikTok ads for products and businesses. Using Google's VEO 3 AI video generation technology, we transform your brand into engaging TikTok content that drives conversions and brand awareness through AI-generated videos.",
    technologies: ["Gemini VEO3", "HTML5/CSS3", "Vanilla JavaScript", "Vite", "Formspree", "Netlify"],
    slides: [
      {url: `${process.env.PUBLIC_URL}/img/zeshi/transform-your.png`, title: 'Zeshi AI Homepage'},
      {url: `${process.env.PUBLIC_URL}/img/zeshi/our-al-tiktok-services.png`, title: 'AI TikTok Services'},
      {url: `${process.env.PUBLIC_URL}/img/zeshi/sample-videos.png`, title: 'Sample AI Generated Videos'},
      {url: `${process.env.PUBLIC_URL}/img/zeshi/how-we-create-al-tiktok-magic.png`, title: 'AI TikTok Creation Process'},
    ],
    link: "https://zeshi.ai",
    gradient: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
    accent: "#4facfe"
  },
  {
    title: "🎨 PosterGenAI",
    description: "An AI-powered poster generation platform (currently in beta) that will allow users to generate AI images with prompts and order them as physical posters. Coming soon! The process: users submit a prompt and payment via Stripe, the image is generated using the OpenAI API, then upscaled with Replicate API, and after successful Stripe checkout, the final images are sent to a printing service for fulfillment.",
    technologies: ["React", "TypeScript", "Python", "AI/ML", "OpenAI API", "Stripe API", "Replicate API"],
    slides: [
      {url: `${process.env.PUBLIC_URL}/img/postergenai/create-your-perfect-poster.png`, title: 'Create Your Perfect Poster'},
      {url: `${process.env.PUBLIC_URL}/img/postergenai/creating-your-posters.png`, title: 'Creating Your Posters'},
      {url: `${process.env.PUBLIC_URL}/img/postergenai/describe-your-poster.png`, title: 'Describe Your Poster'},
      {url: `${process.env.PUBLIC_URL}/img/postergenai/your-generated-posters.png`, title: 'Your Generated Posters'},
    ],
    link: "#",
    gradient: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
    accent: "#f093fb"
  },
  {
    title: "⚡ Osmosis",
    description: "Helped create an iOS paid application ($49.99) developed to purchase in-demand clothing from a limited release fashion store at high speeds. Worked in a front end role developing customizable profiles, item keywords, live clock, google login for captcha bypass, and multiple checkout methods",
    technologies: ["XCode", "Swift", "JavaScript", "iOS Development"],
    slides: [
      {url: 'https://i.imgur.com/qQHLVRi.png', title: 'Image 1'},
      {url: 'https://i.imgur.com/14eUgQV.jpg', title: 'Image 2'},
      {url: 'https://i.imgur.com/T2AWZr9.jpg', title: 'Image 3'},
      {url: 'https://i.imgur.com/tkIDYWL.png', title: 'Image 4'},
      {url: 'https://i.imgur.com/LOuPEVi.png', title: 'Image 5'},
    ],
    link: "https://twitter.com/search?q=@osmosis_app&src=typed_query",
    gradient: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
    accent: "#f093fb"
  }
];

// Memoized project card component
const ProjectCard = React.memo(({ project, index, hoveredCard, onHover, onLeave }) => {
  return (
    <div 
      className={`project-card ${hoveredCard === index ? 'hovered' : ''}`}
      onMouseEnter={() => onHover(index)}
      onMouseLeave={onLeave}
      style={{
        '--project-gradient': project.gradient,
        '--project-accent': project.accent
      }}
    >
      <div className="project-card-inner">
        <div className="project-header">
          {project.link !== "#" ? (
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
          ) : (
            <h3 className="project-name">{project.title}</h3>
          )}
        </div>
        
        <div className="project-image-container">
          <ImageSlider slides={project.slides} lazy={true} />
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
  );
});

ProjectCard.displayName = 'ProjectCard';

const Portfolio = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  const handleCardHover = useCallback((index) => {
    setHoveredCard(index);
  }, []);

  const handleCardLeave = useCallback(() => {
    setHoveredCard(null);
  }, []);

  return (
    <section id="work" className="portfolio-modern">
      <div className="portfolio-container">
        <div className="portfolio-header">
          <h2 className="portfolio-title">Featured Projects</h2>
          <p className="portfolio-subtitle">A showcase of my development journey and technical expertise</p>
        </div>
        
        <div className="projects-grid">
          {projectData.map((project, index) => (
            <ProjectCard
              key={index}
              project={project}
              index={index}
              hoveredCard={hoveredCard}
              onHover={handleCardHover}
              onLeave={handleCardLeave}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default React.memo(Portfolio);
