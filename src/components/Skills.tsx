import { Card } from '@/components/ui/card';
import { Code, Database, Brain, Cloud, Settings, Globe } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      icon: Code,
      title: "Programming & Development",
      color: "text-primary",
      skills: ["Python", "Java", "C++", "SQL", "JavaScript", "React.js", "Node.js", "Flask", "Django"]
    },
    {
      icon: Brain,
      title: "Machine Learning & AI",
      color: "text-accent",
      skills: ["Predictive Modeling", "Deep Learning", "NLP", "Causal Inference", "Time Series", "Bayesian Modeling", "TensorFlow", "PyTorch", "scikit-learn"]
    },
    {
      icon: Database,
      title: "Data Engineering & Infrastructure",
      color: "text-primary",
      skills: ["ETL Pipelines", "Distributed Systems", "Apache Spark", "APIs", "Cloud-Native Applications"]
    },
    {
      icon: Settings,
      title: "Databases & Tools",
      color: "text-accent",
      skills: ["PostgreSQL", "MySQL", "MongoDB", "Neo4j", "LangChain"]
    },
    {
      icon: Cloud,
      title: "Cloud Platforms",
      color: "text-primary",
      skills: ["AWS", "GCP", "Azure", "Cloud Architecture", "Microservices"]
    },
    {
      icon: Globe,
      title: "Other Technologies",
      color: "text-accent",
      skills: ["Git", "CI/CD", "RESTful APIs", "GraphQL"]
    }
  ];

  return (
    <section id="skills" className="section-padding">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Technical <span className="text-gradient">Skills</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A comprehensive toolkit spanning software engineering, machine learning, and data engineering
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <Card key={index} className="project-card group">
                <div className="space-y-6">
                  <div className="flex items-center gap-3">
                    <div className={`p-3 rounded-lg bg-gradient-to-br from-primary/10 to-accent/10`}>
                      <IconComponent className={`w-6 h-6 ${category.color}`} />
                    </div>
                    <h3 className="font-semibold text-lg">{category.title}</h3>
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="skill-badge"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </Card>
            );
          })}
        </div>

        {/* Additional Skills Summary */}
        <div className="mt-16 text-center">
          <Card className="project-card max-w-4xl mx-auto">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold">Core Competencies</h3>
              <div className="grid md:grid-cols-3 gap-6 text-left">
                <div>
                  <h4 className="font-semibold text-primary mb-2">Software Engineering</h4>
                  <p className="text-sm text-muted-foreground">
                    Full-stack development, system design, scalable architecture, and clean code practices
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-accent mb-2">Machine Learning</h4>
                  <p className="text-sm text-muted-foreground">
                    Model development, deployment, MLOps, and production-ready AI solutions
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-primary mb-2">Data Engineering</h4>
                  <p className="text-sm text-muted-foreground">
                    Pipeline design, data processing, ETL workflows, and big data technologies
                  </p>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Skills;
