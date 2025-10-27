import { Button } from '@/components/ui/button';
import { ArrowRight, Github, Linkedin, Mail } from 'lucide-react'; // removed Download import
import profileImage from '@/assets/profile-hero.jpg';

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="hero-container">
      {/* Floating decorative elements */}
      <div className="floating-element w-32 h-32 bg-primary/10 top-20 left-20 animate-float" style={{ animationDelay: '0s' }} />
      <div className="floating-element w-20 h-20 bg-accent/10 top-40 right-32 animate-float" style={{ animationDelay: '2s' }} />
      <div className="floating-element w-16 h-16 bg-primary/5 bottom-32 left-32 animate-float" style={{ animationDelay: '4s' }} />
      
      <div className="hero-content">
        <div className="space-y-8 animate-fade-in-up">
          <div className="space-y-4">
            <p className="text-lg text-muted-foreground">Hi, I'm</p>
            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              Shashank Reddy{' '}
              <span className="text-gradient">Annarapu</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground font-medium">
              AI & ML Engineer | Building AI Agents | Open to SDE & Data Engineering Roles
            </p>
          </div>
          
          <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed">
            Master’s student in Computer Science at Cal State Fullerton and current AI/ML Engineer Intern at ReplyQuick AI. I’m passionate about developing scalable machine learning systems, intelligent agents, and data-driven backend solutions. With hands-on experience in building production-ready ML APIs and data pipelines, I’m eager to contribute to innovative teams advancing real-world AI applications in 2025.
          </p>
          
          <div className="flex flex-wrap gap-4">
            <Button 
              onClick={() => scrollToSection('portfolio')}
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-6 py-3 glow-effect"
            >
              View My Work
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
          
          <div className="flex gap-4 pt-4">
            <Button variant="ghost" size="icon" className="hover:text-primary hover:bg-primary/10">
              <Github className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="hover:text-primary hover:bg-primary/10">
              <Linkedin className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="hover:text-primary hover:bg-primary/10">
              <Mail className="h-5 w-5" />
            </Button>
          </div>
        </div>
        
        <div className="flex justify-center lg:justify-end animate-scale-in" style={{ animationDelay: '0.3s' }}>
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent rounded-full blur-3xl opacity-20 scale-110" />
            <img
              src={profileImage}
              alt="Shashank Reddy Annarapu"
              className="relative w-80 h-80 lg:w-96 lg:h-96 rounded-full object-cover object-top border-4 border-primary/20 shadow-2xl"
            />
            <div className="absolute -top-4 -right-4 w-8 h-8 bg-accent rounded-full animate-pulse" />
            <div className="absolute -bottom-2 -left-2 w-6 h-6 bg-primary rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
