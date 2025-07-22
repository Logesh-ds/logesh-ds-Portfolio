import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Navigation from "@/components/Navigation";
import ParticleBackground from "@/components/ParticleBackground";
import { ExternalLink, Github, Calendar, Tag } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Customer Churn Prediction Model",
      description: "Built a machine learning model to predict customer churn using Python, scikit-learn, and advanced feature engineering. Achieved 94% accuracy with ensemble methods.",
      image: "🤖",
      technologies: ["Python", "Scikit-learn", "Pandas", "Power BI"],
      category: "Machine Learning",
      date: "2024",
      github: "#",
      demo: "#",
      highlights: [
        "94% prediction accuracy",
        "Reduced churn by 23%",
        "Interactive dashboard"
      ]
    },
    {
      title: "Sales Analytics Dashboard",
      description: "Created comprehensive sales analytics dashboard in Power BI with real-time data connections, KPI tracking, and predictive forecasting models.",
      image: "📊",
      technologies: ["Power BI", "SQL Server", "DAX", "Excel"],
      category: "Business Intelligence",
      date: "2024",
      github: "#",
      demo: "#",
      highlights: [
        "Real-time data updates",
        "15+ interactive visuals",
        "Automated reporting"
      ]
    },
    {
      title: "E-commerce Data Pipeline",
      description: "Designed and implemented an automated data pipeline for e-commerce analytics using Python, MySQL, and Tableau for visualization and insights.",
      image: "🛒",
      technologies: ["Python", "MySQL", "Tableau", "Apache Airflow"],
      category: "Data Engineering",
      date: "2024",
      github: "#",
      demo: "#",
      highlights: [
        "Automated ETL process",
        "99.9% uptime",
        "Scalable architecture"
      ]
    },
    {
      title: "Stock Market Sentiment Analysis",
      description: "Developed a sentiment analysis tool using NLP and Python to analyze social media sentiment and its correlation with stock price movements.",
      image: "📈",
      technologies: ["Python", "NLTK", "Twitter API", "Matplotlib"],
      category: "Natural Language Processing",
      date: "2023",
      github: "#",
      demo: "#",
      highlights: [
        "Real-time sentiment scoring",
        "78% correlation accuracy",
        "Beautiful visualizations"
      ]
    },
    {
      title: "Healthcare Data Visualization",
      description: "Created interactive healthcare dashboards analyzing patient outcomes, treatment effectiveness, and resource utilization using Tableau and SQL.",
      image: "🏥",
      technologies: ["Tableau", "SQL", "R", "Statistical Analysis"],
      category: "Healthcare Analytics",
      date: "2023",
      github: "#",
      demo: "#",
      highlights: [
        "10+ healthcare metrics",
        "Improved patient outcomes",
        "Cost optimization insights"
      ]
    },
    {
      title: "Personal Finance Tracker",
      description: "Built a full-stack web application for personal finance management with React frontend, Node.js backend, and MongoDB database with data visualization.",
      image: "💰",
      technologies: ["React", "Node.js", "MongoDB", "Chart.js"],
      category: "Full Stack Development",
      date: "2023",
      github: "#",
      demo: "#",
      highlights: [
        "Responsive web design",
        "Secure authentication",
        "Budget tracking & alerts"
      ]
    }
  ];

  const categories = ["All", "Machine Learning", "Business Intelligence", "Data Engineering", "Natural Language Processing", "Healthcare Analytics", "Full Stack Development"];
  
  return (
    <div className="min-h-screen relative">
      <ParticleBackground />
      <Navigation />
      
      <div className="pt-24 px-4 pb-20">
        <div className="max-w-7xl mx-auto space-y-12">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center space-y-4"
          >
            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              My Projects
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              A showcase of data science projects, analytics dashboards, and full-stack applications
            </p>
          </motion.div>

          {/* Project Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="grid md:grid-cols-4 gap-6"
          >
            {[
              { label: "Projects Completed", value: "20+", icon: "🚀" },
              { label: "Technologies Used", value: "15+", icon: "🛠️" },
              { label: "GitHub Repositories", value: "25+", icon: "📂" },
              { label: "Lines of Code", value: "10K+", icon: "💻" }
            ].map((stat, index) => (
              <Card key={index} className="glass-card p-6 text-center">
                <div className="text-3xl mb-3">{stat.icon}</div>
                <div className="text-2xl font-bold text-primary mb-1">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </Card>
            ))}
          </motion.div>

          {/* Filter Categories */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-wrap justify-center gap-3"
          >
            {categories.map((category, index) => (
              <Button
                key={index}
                variant={index === 0 ? "default" : "outline"}
                className={`rounded-full ${
                  index === 0 
                    ? "bg-gradient-primary" 
                    : "glass-card border-primary/30 hover:border-primary"
                }`}
              >
                <Tag className="w-4 h-4 mr-2" />
                {category}
              </Button>
            ))}
          </motion.div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="glass-card p-6 h-full hover:shadow-glow transition-all duration-300 hover:-translate-y-2">
                  {/* Project Header */}
                  <div className="space-y-4 mb-6">
                    <div className="flex items-start justify-between">
                      <div className="text-4xl mb-3">{project.image}</div>
                      <div className="flex gap-2">
                        <Button size="sm" variant="ghost" className="p-2">
                          <Github className="w-4 h-4" />
                        </Button>
                        <Button size="sm" variant="ghost" className="p-2">
                          <ExternalLink className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                    
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <Calendar className="w-4 h-4 text-muted-foreground" />
                        <span className="text-sm text-muted-foreground">{project.date}</span>
                        <Badge variant="secondary" className="ml-auto">
                          {project.category}
                        </Badge>
                      </div>
                      
                      <h3 className="text-xl font-bold mb-3">{project.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {project.description}
                      </p>
                    </div>
                  </div>

                  {/* Highlights */}
                  <div className="mb-6">
                    <h4 className="font-semibold mb-3 text-primary">Key Highlights</h4>
                    <ul className="space-y-2">
                      {project.highlights.map((highlight, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-sm">
                          <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies */}
                  <div className="space-y-3">
                    <h4 className="font-semibold text-primary">Technologies Used</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, idx) => (
                        <Badge key={idx} variant="outline" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3 mt-6">
                    <Button className="flex-1 btn-glow">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Live Demo
                    </Button>
                    <Button variant="outline" className="flex-1 glass-card border-primary/30">
                      <Github className="w-4 h-4 mr-2" />
                      Code
                    </Button>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <Card className="glass-card p-12 max-w-2xl mx-auto">
              <h2 className="text-2xl font-bold mb-4">Interested in My Work?</h2>
              <p className="text-muted-foreground mb-8">
                I'm always working on new projects and exploring cutting-edge data science techniques. 
                Let's connect and discuss how we can collaborate!
              </p>
              <div className="flex gap-4 justify-center">
                <Button className="btn-glow">
                  View All Projects on GitHub
                  <Github className="w-4 h-4 ml-2" />
                </Button>
                <Button variant="outline" className="glass-card border-primary/30">
                  Get In Touch
                </Button>
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Projects;