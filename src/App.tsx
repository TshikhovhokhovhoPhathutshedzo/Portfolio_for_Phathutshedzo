import { motion } from "motion/react";
import { 
  Github, 
  Linkedin, 
  Mail, 
  MapPin, 
  ExternalLink, 
  Download, 
  Code2, 
  Database, 
  BrainCircuit, 
  Terminal,
  Moon,
  Sun,
  ChevronRight,
  BarChart3,
  Cpu,
  Globe
} from "lucide-react";
import { useState, useEffect, ReactNode } from "react";

// --- Types ---
interface Project {
  title: string;
  tech: string[];
  problem: string;
  action: string;
  result: string;
  github?: string;
  image?: string;
}

interface SkillCategory {
  title: string;
  icon: ReactNode;
  skills: string[];
}

// --- Data ---
const SKILLS: SkillCategory[] = [
  {
    title: "Languages",
    icon: <Terminal className="w-5 h-5" />,
    skills: ["Python", "Java", "SQL", "JavaScript", "TypeScript"]
  },
  {
    title: "Data Science",
    icon: <BrainCircuit className="w-5 h-5" />,
    skills: ["Scikit-learn", "Pandas", "NumPy", "Sampling Theory", "Predictive Modeling"]
  },
  {
    title: "Tools & DBs",
    icon: <Database className="w-5 h-5" />,
    skills: ["PostgreSQL", "Power BI", "Git", "Jupyter Notebook", "Vercel"]
  }
];

const PROJECTS: Project[] = [
  {
    title: "Finance Tracker",
    tech: ["Python", "SQL", "Power BI"],
    problem: "Manual tracking of financial transactions was prone to errors and missed anomalies.",
    action: "Developed an automated pipeline to ingest transaction data and implemented anomaly detection algorithms.",
    result: "Achieved 92% detection precision in financial anomalies and provided real-time visualization via Power BI.",
    github: "#"
  },
  {
    title: "Real Estate Prediction",
    tech: ["Scikit-learn", "Python", "Pandas"],
    problem: "Inaccurate property valuations leading to poor investment decisions.",
    action: "Built a regression model with extensive hyperparameter tuning and feature engineering.",
    result: "Attained an R² Score of 0.87, significantly improving valuation accuracy for local markets.",
    github: "#"
  },
  {
    title: "Facial Recognition System",
    tech: ["OpenCV", "Python", "Deep Learning"],
    problem: "Low accuracy in low-light conditions for existing security systems.",
    action: "Optimized image preprocessing and implemented a robust facial landmark detection algorithm.",
    result: "Improved recognition accuracy from 72% to 89% across diverse lighting scenarios.",
    github: "#"
  }
];

// --- Components ---

const Navbar = ({ isDark, toggleDark }: { isDark: boolean; toggleDark: () => void }) => (
  <nav className="fixed top-0 left-0 right-0 z-50 border-b border-slate-200/50 dark:border-slate-800/50 bg-white/70 dark:bg-slate-950/70 backdrop-blur-xl">
    <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
      <span className="font-bold text-xl tracking-tighter">PT.</span>
      <div className="flex items-center gap-6">
        <a href="#about" className="text-sm font-medium hover:text-blue-600 transition-colors">About</a>
        <a href="#skills" className="text-sm font-medium hover:text-blue-600 transition-colors">Skills</a>
        <a href="#projects" className="text-sm font-medium hover:text-blue-600 transition-colors">Projects</a>
        <a href="#contact" className="text-sm font-medium hover:text-blue-600 transition-colors">Contact</a>
        <button 
          onClick={toggleDark}
          className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
        >
          {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
        </button>
      </div>
    </div>
  </nav>
);

const Hero = () => (
  <section className="relative min-h-screen flex items-center pt-16 overflow-hidden">
    <div className="absolute inset-0 -z-10">
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
    </div>
    
    <div className="section-container">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-3xl"
      >
        <span className="inline-block py-1 px-3 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-xs font-bold uppercase tracking-wider mb-6">
          Available for Opportunities
        </span>
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 leading-[1.1]">
          Phathutshedzo <br />
          <span className="text-blue-600 dark:text-blue-400">Tshikhovhokhovho</span>
        </h1>
        <p className="text-xl text-slate-600 dark:text-slate-400 mb-10 leading-relaxed">
          Data Science & Software Development specialist. 
          Focusing on Machine Learning and predictive modeling to solve complex real-world problems.
        </p>
        <div className="flex flex-wrap gap-4">
          <a 
            href="#projects" 
            className="px-8 py-4 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-xl font-semibold flex items-center gap-2 hover:scale-105 transition-transform"
          >
            View My Work <ChevronRight className="w-4 h-4" />
          </a>
          <button className="px-8 py-4 border border-slate-200 dark:border-slate-800 rounded-xl font-semibold flex items-center gap-2 hover:bg-slate-50 dark:hover:bg-slate-900 transition-colors">
            Download CV <Download className="w-4 h-4" />
          </button>
        </div>
      </motion.div>
    </div>
  </section>
);

const About = () => (
  <section id="about" className="bg-slate-50 dark:bg-slate-900/50">
    <div className="section-container">
      <div className="grid md:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold mb-8">About Me</h2>
          <div className="space-y-6 text-slate-600 dark:text-slate-400 text-lg">
            <p>
              I hold a <span className="text-slate-900 dark:text-white font-medium">BSc in Computer Science</span> from the University of Limpopo, 
              where I developed a strong foundation in computational theory and practical software engineering.
            </p>
            <p>
              My passion lies at the intersection of data and development. I enjoy building systems that not only function 
              seamlessly but also provide actionable insights through advanced analytics.
            </p>
            <div className="pt-4">
              <h3 className="text-sm font-bold uppercase tracking-widest text-slate-400 mb-4">Languages</h3>
              <div className="flex flex-wrap gap-3">
                {["English", "Tshivenda", "Afrikaans", "Sepedi", "Xitsonga"].map(lang => (
                  <span key={lang} className="px-3 py-1 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg text-sm">
                    {lang}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative aspect-square rounded-3xl overflow-hidden bg-slate-200 dark:bg-slate-800"
        >
          <img 
            src="https://picsum.photos/seed/developer/800/800" 
            alt="Profile" 
            className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
            referrerPolicy="no-referrer"
          />
        </motion.div>
      </div>
    </div>
  </section>
);

const Skills = () => (
  <section id="skills">
    <div className="section-container">
      <div className="text-center mb-16">
        <h2 className="text-3xl font-bold mb-4">Technical Skills</h2>
        <p className="text-slate-600 dark:text-slate-400">Organized by specialization for clarity</p>
      </div>
      
      <div className="grid md:grid-cols-3 gap-8">
        {SKILLS.map((cat, idx) => (
          <motion.div 
            key={cat.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            className="glass-card p-8"
          >
            <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-xl flex items-center justify-center mb-6">
              {cat.icon}
            </div>
            <h3 className="text-xl font-bold mb-6">{cat.title}</h3>
            <ul className="space-y-3">
              {cat.skills.map(skill => (
                <li key={skill} className="flex items-center gap-3 text-slate-600 dark:text-slate-400">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                  {skill}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

const Projects = () => (
  <section id="projects" className="bg-slate-50 dark:bg-slate-900/50">
    <div className="section-container">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
        <div>
          <h2 className="text-3xl font-bold mb-4">Featured Projects</h2>
          <p className="text-slate-600 dark:text-slate-400">Real-world applications of data science and development</p>
        </div>
        <a href="#" className="text-blue-600 dark:text-blue-400 font-semibold flex items-center gap-2 hover:underline">
          View GitHub Profile <ExternalLink className="w-4 h-4" />
        </a>
      </div>
      
      <div className="grid lg:grid-cols-3 gap-8">
        {PROJECTS.map((project, idx) => (
          <motion.div 
            key={project.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            className="glass-card overflow-hidden flex flex-col"
          >
            <div className="p-8 flex-1">
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map(t => (
                  <span key={t} className="text-[10px] font-bold uppercase tracking-wider px-2 py-1 bg-slate-100 dark:bg-slate-800 rounded">
                    {t}
                  </span>
                ))}
              </div>
              <h3 className="text-2xl font-bold mb-6">{project.title}</h3>
              
              <div className="space-y-6">
                <div>
                  <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">Problem</h4>
                  <p className="text-sm text-slate-600 dark:text-slate-400">{project.problem}</p>
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">Action</h4>
                  <p className="text-sm text-slate-600 dark:text-slate-400">{project.action}</p>
                </div>
                <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-xl border border-blue-100 dark:border-blue-800/50">
                  <h4 className="text-xs font-bold text-blue-600 dark:text-blue-400 uppercase tracking-widest mb-2">Result</h4>
                  <p className="text-sm font-medium">{project.result}</p>
                </div>
              </div>
            </div>
            <div className="px-8 py-4 border-t border-slate-100 dark:border-slate-800 flex justify-between items-center">
              <a href={project.github} className="text-sm font-bold flex items-center gap-2 hover:text-blue-600 transition-colors">
                <Github className="w-4 h-4" /> View Code
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

const Contact = () => (
  <section id="contact">
    <div className="section-container">
      <div className="glass-card p-12 md:p-20 text-center relative overflow-hidden">
        <div className="absolute top-0 right-0 p-12 opacity-5">
          <Mail className="w-64 h-64" />
        </div>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold mb-6">Let's Build Something Together</h2>
          <p className="text-xl text-slate-600 dark:text-slate-400 mb-12 max-w-2xl mx-auto">
            Currently based in Pretoria, South Africa. Open to remote opportunities 
            and collaborations in Data Science and Software Development.
          </p>
          
          <div className="flex flex-col md:flex-row items-center justify-center gap-8">
            <a 
              href="mailto:phathu301@gmail.com" 
              className="flex items-center gap-3 text-lg font-semibold hover:text-blue-600 transition-colors"
            >
              <div className="w-12 h-12 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center">
                <Mail className="w-5 h-5" />
              </div>
              phathu301@gmail.com
            </a>
            <div className="flex items-center gap-3 text-lg font-semibold">
              <div className="w-12 h-12 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center">
                <MapPin className="w-5 h-5" />
              </div>
              Pretoria, SA
            </div>
          </div>
          
          <div className="mt-12 pt-12 border-t border-slate-100 dark:border-slate-800 flex justify-center gap-6">
            <a href="#" className="p-3 rounded-xl bg-slate-100 dark:bg-slate-800 hover:scale-110 transition-transform">
              <Linkedin className="w-6 h-6" />
            </a>
            <a href="#" className="p-3 rounded-xl bg-slate-100 dark:bg-slate-800 hover:scale-110 transition-transform">
              <Github className="w-6 h-6" />
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default function App() {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  return (
    <div className="min-h-screen">
      <Navbar isDark={isDark} toggleDark={() => setIsDark(!isDark)} />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      
      <footer className="py-12 border-t border-slate-200 dark:border-slate-800 text-center text-sm text-slate-500">
        <div className="max-w-7xl mx-auto px-6">
          <p>© {new Date().getFullYear()} Phathutshedzo Tshikhovhokhovho. All rights reserved.</p>
          <p className="mt-2">Built with React, Tailwind CSS & Motion.</p>
        </div>
      </footer>
    </div>
  );
}
