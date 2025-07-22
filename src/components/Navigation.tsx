import { motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Home, User, Code, FolderOpen, FileText, BookOpen, Github, MessageCircle } from "lucide-react";

const Navigation = () => {
  const location = useLocation();

  const navItems = [
    { path: "/", icon: Home, label: "Home" },
    { path: "/about", icon: User, label: "About" },
    { path: "/skills", icon: Code, label: "Skills" },
    { path: "/projects", icon: FolderOpen, label: "Projects" },
    { path: "/resume", icon: FileText, label: "Resume" },
    { path: "/articles", icon: BookOpen, label: "Articles" },
    { path: "/profiles", icon: Github, label: "Profiles" },
    { path: "/contact", icon: MessageCircle, label: "Contact" },
  ];

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="fixed top-0 left-0 right-0 z-50 p-4"
    >
      <div className="max-w-4xl mx-auto">
        <div className="glass-card rounded-full px-6 py-3">
          <div className="flex items-center justify-center space-x-1 md:space-x-2">
            {navItems.map((item) => {
              const isActive = location.pathname === item.path;
              return (
                <Link key={item.path} to={item.path}>
                  <Button
                    variant={isActive ? "default" : "ghost"}
                    size="sm"
                    className={`relative px-3 py-2 rounded-full transition-all duration-300 ${
                      isActive 
                        ? "bg-gradient-primary text-white shadow-primary" 
                        : "hover:bg-card-hover"
                    }`}
                  >
                    <item.icon className="w-4 h-4 md:mr-2" />
                    <span className="hidden md:inline">{item.label}</span>
                    {isActive && (
                      <motion.div
                        layoutId="activeTab"
                        className="absolute inset-0 bg-gradient-primary rounded-full -z-10"
                        initial={false}
                        transition={{ type: "spring", duration: 0.5 }}
                      />
                    )}
                  </Button>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navigation;