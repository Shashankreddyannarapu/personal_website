import { Card } from '@/components/ui/card';
import { GraduationCap, MapPin, Calendar, Briefcase } from 'lucide-react';

const About = () => {
  const education = [
    {
      degree: "M.S. Computer Science",
      school: "California State University, Fullerton",
      period: "Nov 2023 – Jul 2025",
      status: "Completed"
    },
    {
      degree: "B.Tech. Computer Science and Engineering",
      school: "Mallareddy Engineering College",
      period: "Aug 2018 – May 2022",
      status: "Completed"
    }
  ];

  const experience = [
    {
      role: "Software Engineer Intern",
      company: "ReplyQuick AI",
      period: "Sep 2025 – Present",
      description: "Developing and integrating AI-driven dental scan analysis models into ReplyQuick’s platform. Building FastAPI-based ML microservices, preparing large-scale intraoral image datasets, and collaborating with backend teams for API deployment and Supabase integration.",
      current: true
    },
    {
      role: "Student Service Associate",
      company: "CSU Fullerton",
      period: "Nov 2023 – Jul 2025",
      description: "Managing student records, data entry, reporting, and workflow optimization.",
      current: false
    },
    {
      role: "ML/AI Engineer",
      company: "Boven Technologies Pvt Ltd, Bengaluru, India",
      period: "Jun 2022 – Jul 2023",
      description: "Built and deployed ML models, ETL pipelines, and cloud-native SaaS workflows on AWS, GCP, and Azure.",
      current: false
    }
  ];

  return (
    <section id="about" className="section-padding bg-secondary/5">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="text-gradient">Me</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            I’m a passionate Computer Science graduate student at Cal State Fullerton with 
            hands-on experience in developing scalable software systems, machine learning models, 
            and data engineering pipelines. Currently working as an AI/ML Engineer Intern at ReplyQuick AI, 
            I’m gaining practical experience in building production-ready ML APIs and deploying intelligent automation solutions. 
            I’m deeply interested in AI Agents and their potential to transform how intelligent systems interact and collaborate. 
            Based in California, I’m actively seeking opportunities as an AI/ML Engineer, while remaining open to 
            Software Engineering and Data Engineering roles that leverage my diverse technical skill set.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Education */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold flex items-center gap-3">
              <GraduationCap className="text-primary" />
              Education
            </h3>
            <div className="space-y-4">
              {education.map((edu, index) => (
                <Card key={index} className="project-card">
                  <div className="space-y-3">
                    <div className="flex items-start justify-between">
                      <h4 className="font-semibold text-lg">{edu.degree}</h4>
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                        edu.status === 'Current' 
                          ? 'bg-primary/10 text-primary' 
                          : 'bg-accent/10 text-accent'
                      }`}>
                        {edu.status}
                      </span>
                    </div>
                    <p className="text-muted-foreground font-medium">{edu.school}</p>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Calendar className="w-4 h-4" />
                      {edu.period}
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Experience */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold flex items-center gap-3">
              <Briefcase className="text-primary" />
              Experience
            </h3>
            <div className="space-y-4">
              {experience.map((exp, index) => (
                <Card key={index} className="project-card">
                  <div className="space-y-3">
                    <div className="flex items-start justify-between">
                      <h4 className="font-semibold text-lg">{exp.role}</h4>
                      {exp.current && (
                        <span className="px-3 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary">
                          Current
                        </span>
                      )}
                    </div>
                    <p className="text-muted-foreground font-medium">{exp.company}</p>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Calendar className="w-4 h-4" />
                      {exp.period}
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {exp.description}
                    </p>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>

        {/* Personal Info */}
        <div className="mt-16 text-center">
          <Card className="project-card max-w-2xl mx-auto">
            <div className="space-y-4">
              <h3 className="text-xl font-bold">Personal Information</h3>
              <div className="flex items-center justify-center gap-2 text-muted-foreground">
                <MapPin className="w-4 h-4" />
                <span>Based in California | Open to relocation</span>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                Looking for opportunities to contribute to innovative teams building scalable software, 
                ML solutions, and data-driven applications. Passionate about clean code, efficient algorithms, 
                and solving complex technical challenges.
              </p>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;
