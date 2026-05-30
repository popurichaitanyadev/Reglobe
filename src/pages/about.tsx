import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Target, Compass, Shield } from "lucide-react";

export default function About() {
  useEffect(() => {
    document.title = "About Us - ReglobeAI";
  }, []);

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <main className="flex min-h-screen flex-col pb-20">
      {/* Header */}
      <section className="bg-muted/50 py-16 md:py-24 border-b">
        <div className="container mx-auto px-4 md:px-8">
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            className="max-w-3xl"
          >
            <h1 className="text-4xl md:text-5xl font-extrabold text-foreground mb-6">
              Empowering Global Enterprise with <span className="text-primary">Elite Talent</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground">
              REGLOBE PRIVATE LIMITED is a boutique IT services firm based in Guntur, Andhra Pradesh, India. We specialize in connecting US and UK businesses with top-tier Indian tech professionals.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story & Mission */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
            >
              <h2 className="text-3xl font-bold mb-6">Our Story</h2>
              <div className="space-y-4 text-muted-foreground text-lg leading-relaxed">
                <p>
                  Founded on the principle that quality technical talent should not be bound by geography, ReglobeAI was established to serve as a reliable bridge between global enterprises and the rich tech ecosystem of India.
                </p>
                <p>
                  We are not a volume-driven megacorp, nor a fledgling startup. We are a boutique consultancy that prides itself on precision, quality, and quiet confidence. We deliver results without fanfare.
                </p>
                <p>
                  Based in Guntur, Andhra Pradesh—a growing tech hub in South India—we have cultivated a deep network of specialized developers, architects, and consultants ready to integrate seamlessly into your operations.
                </p>
              </div>
            </motion.div>

            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{
                hidden: { opacity: 0, scale: 0.95 },
                visible: { opacity: 1, scale: 1, transition: { duration: 0.6 } }
              }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-6"
            >
              <Card className="bg-primary text-primary-foreground border-none">
                <CardContent className="p-8">
                  <Target className="h-10 w-10 mb-6 opacity-80" />
                  <h3 className="text-xl font-bold mb-3">Our Mission</h3>
                  <p className="opacity-90">To provide unparalleled IT staffing and project solutions that drive innovation for our global clients.</p>
                </CardContent>
              </Card>
              <Card className="bg-accent text-accent-foreground border-none sm:translate-y-8">
                <CardContent className="p-8">
                  <Compass className="h-10 w-10 mb-6 opacity-80" />
                  <h3 className="text-xl font-bold mb-3">Our Vision</h3>
                  <p className="opacity-90">To be the most trusted technology partner for mid-market and enterprise businesses worldwide.</p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-gray-50 border-y">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl font-bold mb-4">Core Values</h2>
            <p className="text-muted-foreground text-lg">The principles that guide our work and relationships.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Excellence", desc: "We maintain uncompromising standards in the talent we source and the code we write." },
              { title: "Transparency", desc: "Clear communication, honest assessments, and no hidden surprises." },
              { title: "Reliability", desc: "We deliver on our promises, meeting deadlines and exceeding expectations consistently." }
            ].map((value, i) => (
              <Card key={i} className="border-none shadow-sm">
                <CardContent className="p-8 text-center">
                  <Shield className="h-12 w-12 mx-auto mb-6 text-primary opacity-80" />
                  <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                  <p className="text-muted-foreground">{value.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl font-bold mb-4">Our Team</h2>
            <p className="text-muted-foreground text-lg">Senior engineers and a dedicated team driving real results for global clients.</p>
          </div>

          {/* Senior Developers */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-14">
            {[
              { name: "Pavan Reddy", initials: "PR", email: "pavan.kamjula@reglobeai.com", image: "/Pavan.jpeg" },
              { name: "Vamshi", initials: "V", email: "vamshiduddu@reglobeai.com", image: "/Vamshi.jpg" },
              { name: "Puneeth Vikram", initials: "PV", email: null, image: null },
            ].map((dev) => (
              <motion.div
                key={dev.name}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
                className="flex flex-col items-center text-center group"
              >
                <div className="w-28 h-28 rounded-full bg-primary/10 border-2 border-primary/20 flex items-center justify-center mb-5 group-hover:border-primary transition-colors overflow-hidden">
                  {dev.image ? (
                    <img src={dev.image} alt={dev.name} className="w-full h-full object-cover" />
                  ) : (
                    <span className="text-2xl font-bold text-primary">{dev.initials}</span>
                  )}
                </div>
                <h4 className="text-xl font-bold text-foreground mb-1">{dev.name}</h4>
                <p className="text-primary font-semibold text-sm mb-1">Senior Developer</p>
                {dev.email && (
                  <a href={`mailto:${dev.email}`} className="text-xs text-muted-foreground hover:text-primary transition-colors mb-3 break-all">{dev.email}</a>
                )}
                {!dev.email && <div className="mb-3" />}
                <div className="flex flex-wrap justify-center gap-1.5">
                  {[".NET", "Java", "Node.js", "React", "Next.js", "Azure", "AWS"].map((skill) => (
                    <span key={skill} className="text-xs bg-gray-100 text-gray-600 px-2 py-0.5 rounded-full font-medium">
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Extended Team */}
          <div className="text-center">
            <div className="inline-flex items-center gap-4 bg-gray-50 border border-border/60 rounded-2xl px-8 py-6">
              <div className="flex -space-x-3">
                {["D1", "D2", "D3", "D4", "D5"].map((d) => (
                  <div key={d} className="w-10 h-10 rounded-full bg-accent/20 border-2 border-white flex items-center justify-center text-xs font-bold text-accent-foreground">
                    {d[1]}
                  </div>
                ))}
              </div>
              <div className="text-left">
                <p className="font-bold text-foreground text-lg">+ 5–6 More Developers</p>
                <p className="text-muted-foreground text-sm">Specialists across full-stack, cloud, QA, and DevOps</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
