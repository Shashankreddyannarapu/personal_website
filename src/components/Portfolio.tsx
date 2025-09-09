import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Github, Brain, Activity, Camera, MessageSquare, BarChart3 } from 'lucide-react';

type Project = {
  title: string;
  description: string;
  icon: any;
  technologies: string[];
  features: string[];
  color: string;
  github?: string;
};

const Portfolio = () => {
  const projects: Project[] = [
    {
      title: "Learning Graph Assistant",
      description:
        "AI-powered knowledge graph platform using LangChain, Neo4j, and Ollama with GraphRAG Q&A capabilities and PyVis visualization.",
      icon: Brain,
      technologies: ["LangChain", "Neo4j", "Ollama", "GraphRAG", "PyVis", "Python", "Cloud"],
      features: ["Knowledge Graph Creation", "AI-Powered Q&A", "Interactive Visualization", "Cloud-Native Deployment"],
      color: "text-primary",
      github: "https://github.com/Shashankreddyannarapu/Learning-Graph-Assistant"
    },
    {
      title: "Alzheimer's Detection System",
      description:
        "ML-powered healthcare application using PCA, Bayesian modeling, and ensemble classifiers for early detection from handwriting data.Developed collaboratively with Pavana Manjunath",
      icon: Activity,
      technologies: ["Python", "scikit-learn", "PCA", "Bayesian Models", "Flask", "Machine Learning"],
      features: ["Handwriting Analysis", "Ensemble Classifiers", "Web Interface", "Healthcare AI"],
      color: "text-accent",
      github: "https://github.com/pavana-m/alzheimers-handwriting-ml"
    },
    {
      title: "Stress Detection Using Image Processing",
      description:
        "Real-time stress classification system using OpenCV and KNN algorithms, deployed as an interactive web application.",
      icon: Camera,
      technologies: ["OpenCV", "KNN", "Image Processing", "Python", "Flask", "Computer Vision"],
      features: ["Real-time Processing", "Computer Vision", "Web Deployment", "Classification Model"],
      color: "text-primary",
      github: "https://github.com/Shashankreddyannarapu/stress-detection-in-IT-employees"
    },
    {
      title: "Semantic-based Chatbot",
      description:
        "NLP chatbot achieving 85%+ accuracy using Flask framework with WordNet and regex-based semantic matching.",
      icon: MessageSquare,
      technologies: ["NLP", "Flask", "WordNet", "Python", "Regex", "Semantic Analysis"],
      features: ["High Accuracy", "Semantic Understanding", "Natural Language Processing", "Web Interface"],
      color: "text-accent",
      github: "https://github.com/Shashankreddyannarapu/Semantic-chatbot"
    },
    {
      title: "Flight Price Analysis with PySpark",
      description:
        "Big data analysis platform on GCP Dataproc using Random Forest and Gradient Boosted Trees with interactive visualizations.Developed collaboratively with Aneesh and Pranay",
      icon: BarChart3,
      technologies: ["PySpark", "GCP Dataproc", "Random Forest", "Big Data", "Data Visualization"],
      features: ["Big Data Processing", "Cloud Computing", "Predictive Modeling", "Interactive Dashboards"],
      color: "text-primary",
      github: "https://github.com/Shashankreddyannarapu/<flight-price-pyspark-repo>"
    }
  ];

  return (
    <section id="portfolio" className="section-padding bg-secondary/5">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A showcase of machine learning, data engineering, and software development projects
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => {
            const IconComponent = project.icon;
            return (
              <Card key={index} className="project-card group h-full">
                <div className="space-y-6 h-full flex flex-col">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-lg bg-gradient-to-br from-primary/10 to-accent/10 flex-shrink-0">
                      <IconComponent className={`w-6 h-6 ${project.color}`} />
                    </div>
                    <div>
                      <h3 className="font-bold text-xl mb-2">{project.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {project.description}
                      </p>
                    </div>
                  </div>

                  <div className="space-y-4 flex-grow">
                    <div>
                      <h4 className="font-semibold mb-2 text-sm uppercase tracking-wide text-primary">
                        Technologies Used
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="skill-badge text-xs"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4 className="font-semibold mb-2 text-sm uppercase tracking-wide text-accent">
                        Key Features
                      </h4>
                      <ul className="space-y-1">
                        {project.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="text-sm text-muted-foreground flex items-center gap-2">
                            <div className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="flex gap-3 pt-4 border-t border-border">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noreferrer"
                        className="flex-1"
                      >
                        <Button size="sm" className="w-full bg-primary hover:bg-primary/90">
                          <Github className="w-4 h-4 mr-2" />
                          View Code
                        </Button>
                      </a>
                    )}
                    {/* Live Demo removed as requested */}
                  </div>
                </div>
              </Card>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <a
            href="https://github.com/Shashankreddyannarapu"
            target="_blank"
            rel="noreferrer"
          >
            <Button
              variant="outline"
              className="border-primary/50 text-primary hover:bg-primary/10 font-semibold px-8 py-3"
            >
              <Github className="mr-2 h-4 w-4" />
              View All Projects on GitHub
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
