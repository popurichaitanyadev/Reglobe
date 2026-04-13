import React, { useEffect } from "react";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle2, Globe, Users, Zap, Building2, Code2, LineChart } from "lucide-react";

export default function Home() {
  useEffect(() => {
    document.title = "Reglobe - IT Staffing & Technology Services";
  }, []);

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-blue-50 to-white pt-24 pb-32 md:pt-32 md:pb-40 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2569&auto=format&fit=crop')] bg-cover bg-center opacity-5 mix-blend-multiply"></div>
        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            className="max-w-4xl mx-auto text-center"
          >
            <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-sm font-medium text-primary mb-8">
              <Globe className="mr-2 h-4 w-4" /> Trusted by global enterprise clients
            </div>
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-foreground mb-6 leading-tight">
              Your Trusted IT Staffing & <span className="text-primary">Technology Partner</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
              Bridging US and UK businesses with elite Indian tech talent. We deliver dedicated developers, specialized consultants, and full-project teams with precision and reliability.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button size="lg" asChild className="text-base h-12 px-8">
                <Link href="/services">Hire Developers</Link>
              </Button>
              <Button size="lg" variant="outline" asChild className="text-base h-12 px-8 bg-white">
                <Link href="/contact">Get In Touch</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Trust Banner */}
      <section className="border-y bg-white py-10">
        <div className="container mx-auto px-4 md:px-8 text-center">
          <p className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-6">Trusted by global clients in healthcare, fintech, and enterprise</p>
          <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-60 grayscale">
            {[1, 2, 3, 4, 5].map((i) => (
              <div key={i} className="h-8 w-32 bg-muted rounded flex items-center justify-center">
                <span className="text-xs text-muted-foreground font-medium">CLIENT LOGO</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Snapshot */}
      <section className="py-20 md:py-28 bg-gray-50">
        <div className="container mx-auto px-4 md:px-8">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeIn}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Enterprise-Grade Services</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">Scalable solutions tailored to your business needs, delivered by top-tier professionals.</p>
          </motion.div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            <motion.div variants={fadeIn}>
              <Card className="h-full border-none shadow-md hover:shadow-lg transition-shadow">
                <CardContent className="p-8">
                  <div className="h-12 w-12 bg-primary/10 text-primary rounded-lg flex items-center justify-center mb-6">
                    <Users className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">Staff Augmentation</h3>
                  <p className="text-muted-foreground mb-6">Scale your team rapidly with dedicated developers on contract. Junior to Senior level expertise in modern tech stacks.</p>
                  <Link href="/services" className="text-primary font-medium hover:underline inline-flex items-center">
                    Learn more <span className="ml-1">→</span>
                  </Link>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={fadeIn}>
              <Card className="h-full border-none shadow-md hover:shadow-lg transition-shadow relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-full -mr-16 -mt-16"></div>
                <CardContent className="p-8">
                  <div className="h-12 w-12 bg-primary/10 text-primary rounded-lg flex items-center justify-center mb-6">
                    <Code2 className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">Project Development</h3>
                  <p className="text-muted-foreground mb-6">End-to-end delivery of web applications, enterprise solutions, and complex integrations.</p>
                  <Link href="/services" className="text-primary font-medium hover:underline inline-flex items-center">
                    Learn more <span className="ml-1">→</span>
                  </Link>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={fadeIn}>
              <Card className="h-full border-none shadow-md hover:shadow-lg transition-shadow">
                <CardContent className="p-8">
                  <div className="h-12 w-12 bg-primary/10 text-primary rounded-lg flex items-center justify-center mb-6">
                    <LineChart className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">Tech Consulting</h3>
                  <p className="text-muted-foreground mb-6">Strategic guidance on architecture, cloud migrations, DevOps, and technology roadmaps.</p>
                  <Link href="/services" className="text-primary font-medium hover:underline inline-flex items-center">
                    Learn more <span className="ml-1">→</span>
                  </Link>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeIn}
              className="lg:w-1/2"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">The Reglobe Advantage</h2>
              <p className="text-lg text-muted-foreground mb-8">
                We understand the challenges of remote staffing. Our model is built on transparency, quality, and seamless communication.
              </p>
              
              <div className="space-y-6">
                {[
                  { title: "Vetted Elite Talent", desc: "Rigorous technical and cultural screening ensures only the top 5% of candidates join your team." },
                  { title: "Seamless Communication", desc: "Fluent English speakers who overlap with your core business hours for real-time collaboration." },
                  { title: "Fast Turnaround", desc: "From requirement gathering to candidate placement in days, not weeks." },
                  { title: "Enterprise Reliability", desc: "Secure infrastructure, compliance standards, and dedicated account management." }
                ].map((item, i) => (
                  <div key={i} className="flex">
                    <div className="flex-shrink-0 mt-1">
                      <CheckCircle2 className="h-6 w-6 text-primary" />
                    </div>
                    <div className="ml-4">
                      <h4 className="text-lg font-semibold">{item.title}</h4>
                      <p className="text-muted-foreground">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
            
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={{
                hidden: { opacity: 0, scale: 0.95 },
                visible: { opacity: 1, scale: 1, transition: { duration: 0.6 } }
              }}
              className="lg:w-1/2 w-full"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-square md:aspect-[4/3] bg-muted">
                <img 
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop" 
                  alt="Modern office meeting" 
                  className="object-cover w-full h-full"
                />
                <div className="absolute inset-0 bg-accent/20"></div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-accent py-20 text-white">
        <div className="container mx-auto px-4 md:px-8 text-center max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to scale your tech capabilities?</h2>
          <p className="text-lg text-gray-300 mb-10">
            Let's discuss how Reglobe can provide the specialized talent and solutions your enterprise needs to thrive.
          </p>
          <Button size="lg" variant="default" asChild className="h-14 px-10 text-lg bg-primary hover:bg-primary/90">
            <Link href="/contact">Schedule a Consultation</Link>
          </Button>
        </div>
      </section>
    </main>
  );
}
