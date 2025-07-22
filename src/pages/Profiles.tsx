import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Navigation from "@/components/Navigation";
import ParticleBackground from "@/components/ParticleBackground";
import { ExternalLink, Award, Code, Trophy, Star, TrendingUp } from "lucide-react";

const Profiles = () => {
  const codingProfiles = [
    {
      platform: "LeetCode",
      username: "logesh_s",
      stats: {
        problemsSolved: 245,
        rank: "Top 15%",
        rating: 1650,
        streak: "45 days"
      },
      achievements: ["Solved 100+ Easy", "50+ Medium Problems", "Contest Participant"],
      description: "Actively solving algorithmic problems and participating in weekly contests",
      color: "from-orange-500 to-yellow-500",
      icon: "💻",
      link: "#"
    },
    {
      platform: "HackerRank",
      username: "logesh_data",
      stats: {
        problemsSolved: 180,
        rank: "5 Star",
        badges: 12,
        certificates: 5
      },
      achievements: ["Python Gold Badge", "SQL Gold Badge", "Problem Solving 5★"],
      description: "Certified in Python, SQL, and Problem Solving with 5-star ratings",
      color: "from-green-500 to-emerald-500", 
      icon: "🏆",
      link: "#"
    },
    {
      platform: "Codeforces",
      username: "logesh_cf",
      stats: {
        problemsSolved: 156,
        rank: "Pupil",
        rating: 1275,
        contests: 25
      },
      achievements: ["Consistent Participant", "200+ Rating Gain", "Div 2 Solver"],
      description: "Regular contest participant with focus on competitive programming",
      color: "from-blue-500 to-indigo-500",
      icon: "⚡",
      link: "#"
    },
    {
      platform: "GitHub",
      username: "logesh-s",
      stats: {
        repositories: 45,
        stars: 128,
        followers: 85,
        contributions: "500+ this year"
      },
      achievements: ["Arctic Code Vault", "Pull Shark", "Quickdraw"],
      description: "Active contributor with focus on data science and web development projects",
      color: "from-gray-600 to-gray-800",
      icon: "📂",
      link: "#"
    },
    {
      platform: "Kaggle",
      username: "logeshdata",
      stats: {
        competitions: 8,
        datasets: 5,
        notebooks: 15,
        rank: "Contributor"
      },
      achievements: ["Competition Expert", "Notebooks Expert", "5 Bronze Medals"],
      description: "Data science competitions and sharing analysis notebooks with community",
      color: "from-cyan-500 to-blue-600",
      icon: "📊",
      link: "#"
    },
    {
      platform: "CodeChef",
      username: "logesh_cook",
      stats: {
        problemsSolved: 95,
        rank: "3 Star",
        rating: 1580,
        contests: 18
      },
      achievements: ["3★ Coder", "Monthly Challenge Participant", "50+ Problems"],
      description: "Participating in long challenges and improving algorithmic thinking",
      color: "from-amber-500 to-orange-600",
      icon: "👨‍🍳",
      link: "#"
    }
  ];

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
              Coding Profiles
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              My journey across various coding platforms and competitive programming sites
            </p>
          </motion.div>

          {/* Overall Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="grid md:grid-cols-4 gap-6"
          >
            {[
              { label: "Problems Solved", value: "1,000+", icon: "💡" },
              { label: "Platforms Active", value: "6", icon: "🌐" },
              { label: "Contest Participations", value: "75+", icon: "🏁" },
              { label: "Achievements Earned", value: "25+", icon: "🏅" }
            ].map((stat, index) => (
              <Card key={index} className="glass-card p-6 text-center">
                <div className="text-3xl mb-3">{stat.icon}</div>
                <div className="text-2xl font-bold text-primary mb-1">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </Card>
            ))}
          </motion.div>

          {/* Coding Profiles Grid */}
          <div className="grid lg:grid-cols-2 gap-8">
            {codingProfiles.map((profile, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="glass-card p-6 h-full hover:shadow-glow transition-all duration-300 hover:-translate-y-2">
                  {/* Platform Header */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-4">
                      <div className={`w-12 h-12 bg-gradient-to-r ${profile.color} rounded-full flex items-center justify-center text-2xl`}>
                        {profile.icon}
                      </div>
                      <div>
                        <h3 className="text-xl font-bold">{profile.platform}</h3>
                        <p className="text-muted-foreground">@{profile.username}</p>
                      </div>
                    </div>
                    <Button 
                      size="sm" 
                      className="btn-glow"
                      onClick={() => window.open(profile.link, '_blank')}
                    >
                      <ExternalLink className="w-4 h-4" />
                    </Button>
                  </div>

                  {/* Platform Description */}
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {profile.description}
                  </p>

                  {/* Stats Grid */}
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    {Object.entries(profile.stats).map(([key, value], idx) => (
                      <div key={idx} className="text-center p-3 rounded-lg bg-card/50">
                        <div className="text-lg font-bold text-primary mb-1">{value}</div>
                        <div className="text-xs text-muted-foreground capitalize">
                          {key.replace(/([A-Z])/g, ' $1').trim()}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Achievements */}
                  <div className="space-y-3">
                    <h4 className="font-semibold flex items-center gap-2">
                      <Award className="w-4 h-4 text-primary" />
                      Key Achievements
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {profile.achievements.map((achievement, idx) => (
                        <Badge key={idx} variant="secondary" className="text-xs">
                          {achievement}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Action Button */}
                  <div className="mt-6">
                    <Button 
                      className="w-full btn-glow"
                      onClick={() => window.open(profile.link, '_blank')}
                    >
                      View Profile
                      <ExternalLink className="w-4 h-4 ml-2" />
                    </Button>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Coding Journey Timeline */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <Card className="glass-card p-8">
              <h2 className="text-2xl font-bold mb-8 text-center flex items-center justify-center gap-2">
                <TrendingUp className="w-6 h-6 text-primary" />
                My Coding Journey
              </h2>
              
              <div className="space-y-6">
                {[
                  {
                    period: "2024",
                    title: "Advanced Problem Solver",
                    description: "Reached 1000+ problems solved across platforms. Focus on optimization and advanced algorithms.",
                    milestone: "1000+ Problems"
                  },
                  {
                    period: "2023", 
                    title: "Contest Regular",
                    description: "Started participating in weekly contests and competitions. Improved rating significantly.",
                    milestone: "Regular Contests"
                  },
                  {
                    period: "2022",
                    title: "Platform Explorer",
                    description: "Joined multiple coding platforms and started solving problems systematically.",
                    milestone: "Multi-platform Active"
                  },
                  {
                    period: "2021",
                    title: "Coding Beginner",
                    description: "Started with basic programming problems and learned fundamental algorithms.",
                    milestone: "First Steps"
                  }
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.2 }}
                    className="flex items-center gap-6"
                  >
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center">
                        <Code className="w-8 h-8 text-white" />
                      </div>
                    </div>
                    
                    <div className="flex-1 p-4 rounded-lg bg-card/50">
                      <div className="flex items-center gap-4 mb-2">
                        <span className="text-primary font-bold text-lg">{item.period}</span>
                        <Badge variant="outline" className="text-xs">
                          {item.milestone}
                        </Badge>
                      </div>
                      <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                      <p className="text-muted-foreground">{item.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </Card>
          </motion.section>

          {/* Skills Developed */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <Card className="glass-card p-8">
              <h2 className="text-2xl font-bold mb-8 text-center">Skills Developed Through Coding</h2>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  {
                    skill: "Problem Solving",
                    description: "Breaking down complex problems into manageable parts",
                    icon: "🧩"
                  },
                  {
                    skill: "Algorithm Design", 
                    description: "Creating efficient solutions with optimal time complexity",
                    icon: "⚙️"
                  },
                  {
                    skill: "Data Structures",
                    description: "Mastering arrays, trees, graphs, and advanced structures",
                    icon: "🏗️"
                  },
                  {
                    skill: "Competitive Programming",
                    description: "Quick thinking and implementation under time pressure",
                    icon: "⏱️"
                  },
                  {
                    skill: "Code Optimization",
                    description: "Writing clean, efficient, and maintainable code",
                    icon: "🚀"
                  },
                  {
                    skill: "Debugging",
                    description: "Identifying and fixing issues systematically",
                    icon: "🔍"
                  },
                  {
                    skill: "Mathematical Thinking",
                    description: "Applying mathematical concepts to solve problems",
                    icon: "🔢"
                  },
                  {
                    skill: "Pattern Recognition",
                    description: "Identifying common patterns and applying solutions",
                    icon: "🎯"
                  }
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="text-center p-4 rounded-lg border border-primary/20 hover:border-primary/40 transition-colors"
                  >
                    <div className="text-3xl mb-3">{item.icon}</div>
                    <h3 className="font-semibold mb-2">{item.skill}</h3>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </motion.div>
                ))}
              </div>
            </Card>
          </motion.section>

          {/* Connect CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <Card className="glass-card p-12 max-w-2xl mx-auto">
              <Trophy className="w-16 h-16 text-primary mx-auto mb-6" />
              <h2 className="text-2xl font-bold mb-4">Let's Code Together!</h2>
              <p className="text-muted-foreground mb-8">
                Always excited to collaborate on coding challenges, participate in contests, 
                or discuss algorithmic solutions. Connect with me on your favorite platform!
              </p>
              <div className="flex gap-4 justify-center flex-wrap">
                <Button className="btn-glow">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  View GitHub
                </Button>
                <Button variant="outline" className="glass-card border-primary/30">
                  <Star className="w-4 h-4 mr-2" />
                  Follow on LeetCode
                </Button>
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Profiles;