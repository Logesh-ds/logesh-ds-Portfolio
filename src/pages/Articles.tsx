import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Navigation from "@/components/Navigation";
import ParticleBackground from "@/components/ParticleBackground";
import { ExternalLink, Calendar, Clock, Eye, Heart } from "lucide-react";

const Articles = () => {
  const articles = [
    {
      title: "10 Essential Python Libraries Every Data Scientist Should Master",
      excerpt: "A comprehensive guide to the most important Python libraries for data science, from Pandas to TensorFlow, with practical examples and use cases.",
      readTime: "8 min read",
      date: "2024-01-15",
      views: "2.3K",
      likes: 45,
      tags: ["Python", "Data Science", "Libraries", "Tutorial"],
      platform: "Medium",
      image: "📊",
      link: "#"
    },
    {
      title: "Building Your First Machine Learning Pipeline: A Beginner's Guide",
      excerpt: "Step-by-step tutorial on creating an end-to-end ML pipeline, covering data preprocessing, model training, evaluation, and deployment.",
      readTime: "12 min read", 
      date: "2023-12-20",
      views: "1.8K",
      likes: 38,
      tags: ["Machine Learning", "Pipeline", "Tutorial", "Beginner"],
      platform: "Dev.to",
      image: "🤖",
      link: "#"
    },
    {
      title: "Data Visualization Best Practices: Making Your Charts Tell a Story",
      excerpt: "Learn how to create compelling data visualizations that communicate insights effectively using Power BI, Tableau, and Python visualization libraries.",
      readTime: "10 min read",
      date: "2023-11-30",
      views: "3.1K",
      likes: 67,
      tags: ["Data Visualization", "Power BI", "Tableau", "Storytelling"],
      platform: "LinkedIn",
      image: "📈",
      link: "#"
    },
    {
      title: "SQL for Data Scientists: Advanced Techniques and Optimization",
      excerpt: "Deep dive into advanced SQL concepts including window functions, CTEs, and query optimization techniques for better data analysis performance.",
      readTime: "15 min read",
      date: "2023-10-25",
      views: "2.7K",
      likes: 52,
      tags: ["SQL", "Database", "Optimization", "Advanced"],
      platform: "Medium",
      image: "🗃️",
      link: "#"
    },
    {
      title: "The Future of Data Science: Trends and Technologies to Watch",
      excerpt: "Exploring emerging trends in data science including AutoML, explainable AI, and edge computing, and what they mean for data professionals.",
      readTime: "7 min read",
      date: "2023-09-15",
      views: "4.2K",
      likes: 89,
      tags: ["Future", "Trends", "AI", "Technology"],
      platform: "Towards Data Science",
      image: "🔮",
      link: "#"
    },
    {
      title: "Debugging Machine Learning Models: Common Pitfalls and Solutions",
      excerpt: "Comprehensive guide to identifying and fixing common issues in ML models, from data leakage to overfitting, with practical debugging strategies.",
      readTime: "11 min read",
      date: "2023-08-10",
      views: "1.9K",
      likes: 41,
      tags: ["Machine Learning", "Debugging", "Best Practices", "Tips"],
      platform: "Analytics Vidhya",
      image: "🐛",
      link: "#"
    }
  ];

  const platforms = ["All", "Medium", "Dev.to", "LinkedIn", "Towards Data Science", "Analytics Vidhya"];

  return (
    <div className="min-h-screen relative">
      <ParticleBackground />
      <Navigation />
      
      <div className="pt-24 px-4 pb-20">
        <div className="max-w-6xl mx-auto space-y-12">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center space-y-4"
          >
            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              Featured Articles
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Sharing knowledge and insights about data science, machine learning, and analytics
            </p>
          </motion.div>

          {/* Writing Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="grid md:grid-cols-4 gap-6"
          >
            {[
              { label: "Articles Published", value: "25+", icon: "✍️" },
              { label: "Total Views", value: "50K+", icon: "👁️" },
              { label: "Platforms", value: "5", icon: "🌐" },
              { label: "Followers", value: "1.2K+", icon: "👥" }
            ].map((stat, index) => (
              <Card key={index} className="glass-card p-6 text-center">
                <div className="text-3xl mb-3">{stat.icon}</div>
                <div className="text-2xl font-bold text-primary mb-1">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </Card>
            ))}
          </motion.div>

          {/* Platform Filter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-wrap justify-center gap-3"
          >
            {platforms.map((platform, index) => (
              <Button
                key={index}
                variant={index === 0 ? "default" : "outline"}
                className={`rounded-full ${
                  index === 0 
                    ? "bg-gradient-primary" 
                    : "glass-card border-primary/30 hover:border-primary"
                }`}
              >
                {platform}
              </Button>
            ))}
          </motion.div>

          {/* Articles Grid */}
          <div className="grid lg:grid-cols-2 gap-8">
            {articles.map((article, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="glass-card p-6 h-full hover:shadow-glow transition-all duration-300 hover:-translate-y-1">
                  {/* Article Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="text-4xl">{article.image}</div>
                    <Badge variant="secondary" className="shrink-0">
                      {article.platform}
                    </Badge>
                  </div>

                  {/* Article Content */}
                  <div className="space-y-4">
                    <h3 className="text-xl font-bold leading-tight hover:text-primary transition-colors">
                      <a href={article.link} target="_blank" rel="noopener noreferrer">
                        {article.title}
                      </a>
                    </h3>
                    
                    <p className="text-muted-foreground leading-relaxed">
                      {article.excerpt}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2">
                      {article.tags.map((tag, idx) => (
                        <Badge key={idx} variant="outline" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>

                    {/* Article Meta */}
                    <div className="flex items-center justify-between pt-4 border-t border-primary/20">
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          <span>{new Date(article.date).toLocaleDateString()}</span>
                        </div>
                        
                        <div className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          <span>{article.readTime}</span>
                        </div>
                      </div>

                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Eye className="w-4 h-4" />
                          <span>{article.views}</span>
                        </div>
                        
                        <div className="flex items-center gap-1">
                          <Heart className="w-4 h-4" />
                          <span>{article.likes}</span>
                        </div>
                      </div>
                    </div>

                    {/* Read More Button */}
                    <div className="pt-4">
                      <Button 
                        className="w-full btn-glow" 
                        onClick={() => window.open(article.link, '_blank')}
                      >
                        Read Full Article
                        <ExternalLink className="w-4 h-4 ml-2" />
                      </Button>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Writing Topics */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <Card className="glass-card p-8">
              <h2 className="text-2xl font-bold mb-8 text-center">Topics I Write About</h2>
              
              <div className="grid md:grid-cols-3 gap-6">
                {[
                  {
                    icon: "🤖",
                    title: "Machine Learning",
                    topics: ["Supervised Learning", "Unsupervised Learning", "Deep Learning", "Model Deployment"]
                  },
                  {
                    icon: "📊",
                    title: "Data Visualization",
                    topics: ["Power BI", "Tableau", "Python Plotting", "Dashboard Design"]
                  },
                  {
                    icon: "🔍",
                    title: "Data Analysis",
                    topics: ["Statistical Analysis", "Exploratory Data Analysis", "A/B Testing", "Hypothesis Testing"]
                  },
                  {
                    icon: "💼",
                    title: "Career Advice",
                    topics: ["Data Science Career", "Skill Development", "Portfolio Building", "Interview Tips"]
                  },
                  {
                    icon: "🛠️",
                    title: "Tools & Technologies",
                    topics: ["Python", "SQL", "R", "Cloud Platforms"]
                  },
                  {
                    icon: "📈",
                    title: "Industry Trends",
                    topics: ["AI Ethics", "Future of Data", "Emerging Technologies", "Best Practices"]
                  }
                ].map((category, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                  >
                    <div className="text-center p-4 rounded-lg border border-primary/20 hover:border-primary/40 transition-colors">
                      <div className="text-3xl mb-3">{category.icon}</div>
                      <h3 className="font-semibold mb-3">{category.title}</h3>
                      <ul className="space-y-1 text-sm text-muted-foreground">
                        {category.topics.map((topic, idx) => (
                          <li key={idx}>• {topic}</li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                ))}
              </div>
            </Card>
          </motion.section>

          {/* Newsletter CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <Card className="glass-card p-12 max-w-2xl mx-auto">
              <div className="text-4xl mb-4">📬</div>
              <h2 className="text-2xl font-bold mb-4">Stay Updated</h2>
              <p className="text-muted-foreground mb-8">
                Follow me on various platforms to get the latest articles and insights 
                about data science, machine learning, and analytics.
              </p>
              <div className="flex gap-4 justify-center flex-wrap">
                <Button className="btn-glow">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Follow on Medium
                </Button>
                <Button variant="outline" className="glass-card border-primary/30">
                  Connect on LinkedIn
                </Button>
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Articles;