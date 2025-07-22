import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import Navigation from "@/components/Navigation";
import ParticleBackground from "@/components/ParticleBackground";
import { Database, BarChart3, Code, Layers, Brain } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: Code,
      color: "from-blue-500 to-cyan-500",
      skills: [
        { name: "Python", level: 90, description: "Data analysis, ML, automation" },
        { name: "SQL", level: 95, description: "Database queries, optimization" },
        { name: "R", level: 75, description: "Statistical analysis, visualization" },
        { name: "JavaScript", level: 80, description: "Web development, D3.js" }
      ]
    },
    {
      title: "Data Visualization",
      icon: BarChart3,
      color: "from-purple-500 to-pink-500",
      skills: [
        { name: "Power BI", level: 92, description: "Interactive dashboards, DAX" },
        { name: "Tableau", level: 88, description: "Advanced visualizations, storytelling" },
        { name: "Matplotlib/Seaborn", level: 85, description: "Python data visualization" },
        { name: "D3.js", level: 70, description: "Custom web visualizations" }
      ]
    },
    {
      title: "Machine Learning",
      icon: Brain,
      color: "from-green-500 to-emerald-500",
      skills: [
        { name: "Scikit-learn", level: 88, description: "Classification, regression, clustering" },
        { name: "Pandas", level: 95, description: "Data manipulation, analysis" },
        { name: "NumPy", level: 90, description: "Numerical computing" },
        { name: "TensorFlow", level: 75, description: "Deep learning, neural networks" }
      ]
    },
    {
      title: "Database & Tools",
      icon: Database,
      color: "from-orange-500 to-red-500",
      skills: [
        { name: "MySQL", level: 90, description: "Relational database management" },
        { name: "MongoDB", level: 80, description: "NoSQL database operations" },
        { name: "Excel", level: 95, description: "Advanced formulas, pivot tables" },
        { name: "Git", level: 85, description: "Version control, collaboration" }
      ]
    },
    {
      title: "Full Stack Development",
      icon: Layers,
      color: "from-indigo-500 to-purple-500",
      skills: [
        { name: "React", level: 85, description: "Frontend development, hooks" },
        { name: "Node.js", level: 80, description: "Backend development, APIs" },
        { name: "HTML/CSS", level: 90, description: "Web markup, styling" },
        { name: "FastAPI", level: 75, description: "Python web APIs" }
      ]
    }
  ];

  return (
    <div className="min-h-screen relative">
      <ParticleBackground />
      <Navigation />
      
      <div className="pt-24 px-4 pb-20">
        <div className="max-w-6xl mx-auto space-y-16">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center space-y-4"
          >
            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              Skills & Expertise
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              The technologies and tools that power my data science journey
            </p>
          </motion.div>
          
          {/* Skills Overview */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="grid md:grid-cols-3 gap-6"
          >
            {[
              { label: "Years of Learning", value: "3+", icon: "📚" },
              { label: "Technologies Mastered", value: "15+", icon: "🛠️" },
              { label: "Projects Completed", value: "20+", icon: "🎯" }
            ].map((stat, index) => (
              <Card key={index} className="glass-card p-6 text-center">
                <div className="text-4xl mb-4">{stat.icon}</div>
                <div className="text-3xl font-bold text-primary mb-2">{stat.value}</div>
                <div className="text-muted-foreground">{stat.label}</div>
              </Card>
            ))}
          </motion.div>
          
          {/* Skills Categories */}
          <div className="space-y-12">
            {skillCategories.map((category, categoryIndex) => (
              <motion.section
                key={categoryIndex}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: categoryIndex * 0.1 }}
              >
                <Card className="glass-card p-8">
                  <div className="flex items-center gap-4 mb-8">
                    <div className={`w-12 h-12 bg-gradient-to-r ${category.color} rounded-full flex items-center justify-center`}>
                      <category.icon className="w-6 h-6 text-white" />
                    </div>
                    <h2 className="text-2xl font-bold">{category.title}</h2>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.div
                        key={skillIndex}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: (categoryIndex * 0.1) + (skillIndex * 0.1) }}
                        className="space-y-3"
                      >
                        <div className="flex justify-between items-center">
                          <h3 className="font-semibold text-lg">{skill.name}</h3>
                          <span className="text-primary font-medium">{skill.level}%</span>
                        </div>
                        
                        <Progress 
                          value={skill.level} 
                          className="h-2"
                        />
                        
                        <p className="text-sm text-muted-foreground">
                          {skill.description}
                        </p>
                      </motion.div>
                    ))}
                  </div>
                </Card>
              </motion.section>
            ))}
          </div>
          
          {/* Certifications & Learning */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <Card className="glass-card p-8">
              <h2 className="text-2xl font-bold mb-8 text-center">Continuous Learning</h2>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  { title: "Data Science Specialization", provider: "Coursera", status: "Completed" },
                  { title: "Machine Learning A-Z", provider: "Udemy", status: "Completed" },
                  { title: "Power BI Certification", provider: "Microsoft", status: "In Progress" },
                  { title: "Advanced SQL", provider: "HackerRank", status: "Completed" },
                  { title: "Python for Data Science", provider: "Kaggle", status: "Completed" },
                  { title: "Tableau Desktop Specialist", provider: "Tableau", status: "Planning" }
                ].map((cert, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="p-4 border border-primary/20 rounded-lg hover:border-primary/40 transition-colors"
                  >
                    <h3 className="font-semibold mb-2">{cert.title}</h3>
                    <p className="text-sm text-muted-foreground mb-2">{cert.provider}</p>
                    <span className={`inline-block px-2 py-1 rounded-full text-xs ${
                      cert.status === 'Completed' 
                        ? 'bg-success/20 text-success' 
                        : cert.status === 'In Progress'
                        ? 'bg-warning/20 text-warning'
                        : 'bg-primary/20 text-primary'
                    }`}>
                      {cert.status}
                    </span>
                  </motion.div>
                ))}
              </div>
            </Card>
          </motion.section>
        </div>
      </div>
    </div>
  );
};

export default Skills;