import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle2, Server, Cloud, Database, Code, LayoutDashboard, Globe, Zap, Network } from "lucide-react";

export default function Services() {
  useEffect(() => {
    document.title = "Services - ReglobeAI IT Staffing & Technology";
  }, []);

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  return (
    <main className="flex min-h-screen flex-col pb-20">
      {/* Header */}
      <section className="bg-primary/5 py-16 md:py-24 border-b border-primary/10">
        <div className="container mx-auto px-4 md:px-8">
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            className="max-w-3xl"
          >
            <div className="inline-flex items-center rounded-full border border-primary/20 bg-white px-3 py-1 text-sm font-medium text-primary mb-6 shadow-sm">
              Our Capabilities
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold text-foreground mb-6">
              Expert Technology <span className="text-primary">Solutions</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground">
              From dedicated engineering teams to full-scale enterprise delivery, we provide the technical firepower to accelerate your business.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Primary Service: Staff Augmentation */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-accent/5 rounded-l-[100px] -z-10"></div>
        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeIn}
            className="mb-16"
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="h-10 w-2 bg-primary rounded-full"></div>
              <h2 className="text-4xl font-bold text-foreground">Staff Augmentation</h2>
            </div>
            <p className="text-xl text-muted-foreground max-w-3xl">
              Scale your engineering capacity on-demand with elite Indian tech talent. 
              Our dedicated developers integrate seamlessly into your existing workflows.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              className="lg:col-span-5 space-y-8"
            >
              <div className="bg-gray-50 rounded-2xl p-8 border">
                <h3 className="text-2xl font-bold mb-6 text-foreground">Engagement Models</h3>
                <ul className="space-y-4">
                  {[
                    "Short-term & long-term contracts",
                    "Full-time & part-time availability",
                    "Junior, Mid-Level, and Senior expertise",
                    "Timezone-aligned collaboration",
                    "Dedicated account management"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 mr-3 shrink-0" />
                      <span className="text-foreground font-medium">{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-8 pt-8 border-t">
                  <Button size="lg" className="w-full h-12 text-base" asChild>
                    <Link href="/contact">Hire Developers Now</Link>
                  </Button>
                </div>
              </div>
            </motion.div>

            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6"
            >
              {[
                { icon: Code, title: "React & Node.js", desc: "Full-stack JavaScript expertise for modern web applications." },
                { icon: Server, title: ".NET & Java", desc: "Enterprise-grade backend systems and legacy modernization." },
                { icon: LayoutDashboard, title: "Power Platform", desc: "Low-code business automation and custom tooling." },
                { icon: Database, title: "Oracle Systems", desc: "Specialized in Oracle Utility, HCM, and Finance." }
              ].map((tech, i) => (
                <motion.div key={i} variants={fadeIn}>
                  <Card className="h-full border-muted shadow-sm hover:shadow-md transition-all hover:border-primary/30">
                    <CardContent className="p-6">
                      <tech.icon className="h-8 w-8 text-primary mb-4" />
                      <h4 className="text-xl font-bold mb-2">{tech.title}</h4>
                      <p className="text-muted-foreground text-sm">{tech.desc}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Secondary Services Grid */}
      <section className="py-24 bg-accent text-white">
        <div className="container mx-auto px-4 md:px-8">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid grid-cols-1 lg:grid-cols-2 gap-16"
          >
            {/* Project-Based Development */}
            <motion.div variants={fadeIn} className="space-y-6">
              <div className="h-14 w-14 bg-white/10 rounded-xl flex items-center justify-center">
                <Network className="h-7 w-7 text-white" />
              </div>
              <h2 className="text-3xl font-bold">Project-Based Development</h2>
              <p className="text-gray-300 text-lg leading-relaxed">
                End-to-end delivery of complex software solutions. We take ownership of the entire development lifecycle, from architecture to deployment.
              </p>
              <ul className="space-y-3 pt-4">
                {[
                  "Fixed price & hourly engagement models",
                  "Custom web applications & enterprise portals",
                  "Complex system integrations & API development",
                  "Rigorous QA & automated testing"
                ].map((item, i) => (
                  <li key={i} className="flex items-center text-gray-200">
                    <div className="h-1.5 w-1.5 rounded-full bg-primary mr-3"></div>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Tech Consulting */}
            <motion.div variants={fadeIn} className="space-y-6 lg:border-l lg:border-white/10 lg:pl-16">
              <div className="h-14 w-14 bg-white/10 rounded-xl flex items-center justify-center">
                <Cloud className="h-7 w-7 text-white" />
              </div>
              <h2 className="text-3xl font-bold">Tech Consulting</h2>
              <p className="text-gray-300 text-lg leading-relaxed">
                Strategic technical guidance to future-proof your business. We help you navigate complex architecture decisions and cloud migrations.
              </p>
              <ul className="space-y-3 pt-4">
                {[
                  "Enterprise architecture reviews",
                  "Technology roadmap planning",
                  "Cloud & DevOps consulting (Azure specialists)",
                  "Performance optimization & security audits"
                ].map((item, i) => (
                  <li key={i} className="flex items-center text-gray-200">
                    <div className="h-1.5 w-1.5 rounded-full bg-primary mr-3"></div>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          </motion.div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="mt-20 text-center pt-10 border-t border-white/10"
          >
            <h3 className="text-2xl font-bold mb-6">Ready to discuss your requirements?</h3>
            <Button size="lg" variant="outline" asChild className="h-14 px-10 text-lg bg-transparent text-white border-white/30 hover:bg-white hover:text-accent">
              <Link href="/contact">Book a Technical Consultation</Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
