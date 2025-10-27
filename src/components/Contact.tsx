import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Mail, Linkedin, Github, MapPin, Send, CalendarDays, Briefcase } from 'lucide-react';
import { useState } from 'react';

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "shashank9949@gmail.com",
      link: "mailto:shashank9949@gmail.com",
      color: "text-primary"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "linkedin.com/in/shashank-reddy-annarapu-96052a232",
      link: "https://linkedin.com/in/shashank-reddy-annarapu/",
      color: "text-accent"
    },
    {
      icon: Github,
      label: "GitHub",
      value: "github.com/Shashankreddyannarapu",
      link: "https://github.com/Shashankreddyannarapu",
      color: "text-primary"
    }
  ];

  // simple client-side form state (for UX only)
  const [sending, setSending] = useState(false);

  return (
    <section id="contact" className="section-padding relative">
      {/* subtle background accent */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-24 left-1/2 -translate-x-1/2 h-72 w-72 rounded-full bg-primary/10 blur-3xl" />
      </div>

      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Let’s <span className="text-gradient">Connect</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to contribute to innovative teams and tackle challenging projects. Let’s discuss opportunities!
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* LEFT: contact info & CTA */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold mb-6">Get In Touch</h3>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  I’m actively seeking full-time opportunities in software engineering, machine learning, and data engineering.
                  Whether you have a role that matches my skills or just want to connect, I’d love to hear from you!
                </p>
              </div>

              <div className="space-y-4">
                {contactInfo.map((contact, index) => {
                  const Icon = contact.icon;
                  return (
                    <Card key={index} className="project-card group hover:border-primary/50">
                      <a
                        href={contact.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-4 p-2 -m-2 rounded-lg transition-colors group-hover:bg-primary/5"
                      >
                        <div className="p-3 rounded-lg bg-gradient-to-br from-primary/10 to-accent/10">
                          <Icon className={`w-5 h-5 ${contact.color}`} />
                        </div>
                        <div className="flex-grow">
                          <p className="font-semibold">{contact.label}</p>
                          <p className="text-sm text-muted-foreground group-hover:text-primary transition-colors">
                            {contact.value}
                          </p>
                        </div>
                        <Send className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                      </a>
                    </Card>
                  );
                })}
              </div>

              <div className="flex items-center gap-2 text-muted-foreground">
                <MapPin className="w-4 h-4" />
                <span>Based in California | Open to relocation countrywide</span>
              </div>

              {/* LinkedIn CTA */}
              <div className="pt-6">
                <a
                  href="https://linkedin.com/in/shashank-reddy-annarapu-96052a232"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                </a>
              </div>
            </div>

            {/* RIGHT: stacked cards to fill space nicely */}
            <div className="flex flex-col gap-8">
              {/* Available For */}
              <Card className="project-card">
                <div className="space-y-4">
                  <h3 className="text-lg font-bold">Available For</h3>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full" />
                      <span className="text-sm">Full-time Software Engineering roles</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-accent rounded-full" />
                      <span className="text-sm">Machine Learning Engineer positions</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full" />
                      <span className="text-sm">Data Engineering opportunities</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-accent rounded-full" />
                      <span className="text-sm">Technical consulting projects</span>
                    </div>
                  </div>
                </div>
              </Card>

              {/* Quick Facts */}
              <Card className="project-card">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex items-center gap-3">
                    <MapPin className="w-4 h-4 text-primary" />
                    <div>
                      <p className="text-xs text-muted-foreground">Location</p>
                      <p className="text-sm font-medium">California, USA</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <CalendarDays className="w-4 h-4 text-accent" />
                    <div>
                      <p className="text-xs text-muted-foreground">Graduated</p>
                      <p className="text-sm font-medium">July 2025</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Briefcase className="w-4 h-4 text-primary" />
                    <div>
                      <p className="text-xs text-muted-foreground">Start Date</p>
                      <p className="text-sm font-medium">Available Aug 2025</p>
                    </div>
                  </div>
                </div>
              </Card>

            
              <Card className="project-card">
                <div className="space-y-4">
                  <h3 className="text-lg font-bold">Send a Message</h3>
                  <form
                    action="https://formspree.io/f/your-form-id" /* replace with your Formspree ID */
                    method="POST"
                    onSubmit={() => setSending(true)}
                    className="space-y-3"
                  >
                    <input
                      type="text"
                      name="name"
                      placeholder="Your name"
                      required
                      className="w-full rounded-md bg-background border border-border px-3 py-2 text-sm outline-none focus:border-primary"
                    />
                    <input
                      type="email"
                      name="email"
                      placeholder="Your email"
                      required
                      className="w-full rounded-md bg-background border border-border px-3 py-2 text-sm outline-none focus:border-primary"
                    />
                    <textarea
                      name="message"
                      placeholder="Your message"
                      rows={4}
                      required
                      className="w-full rounded-md bg-background border border-border px-3 py-2 text-sm outline-none focus:border-primary"
                    />
                    <Button
                      type="submit"
                      className="w-full bg-primary hover:bg-primary/90 font-semibold"
                      disabled={sending}
                    >
                      {sending ? 'Sending…' : 'Send Message'}
                    </Button>
                  </form>
                  <p className="text-xs text-muted-foreground">
                    Prefer email? <a className="text-primary underline" href="mailto:shashank9949@gmail.com">shashank9949@gmail.com</a>
                  </p>
                </div>
              </Card>

              <div className="text-center">
                <p className="text-sm text-muted-foreground">
                  Graduated: <span className="text-primary font-semibold">July 2025</span>
                </p>
                <p className="text-xs text-muted-foreground mt-1">
                  Available for full-time positions starting August 2025
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-20 text-center border-t border-border pt-8">
          <p className="text-muted-foreground">
            © 2025 Shashank Reddy Annarapu. Built with React, TypeScript, and Tailwind CSS.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
