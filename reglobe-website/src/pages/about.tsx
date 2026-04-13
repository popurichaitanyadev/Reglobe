import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Target, Compass, Shield } from "lucide-react";

export default function About() {
  useEffect(() => {
    document.title = "About Us - Reglobe";
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
              Reglobe Private Limited is a boutique IT services firm based in Hyderabad, India. We specialize in connecting US and UK businesses with top-tier Indian tech professionals.
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
                  Founded on the principle that quality technical talent should not be bound by geography, Reglobe was established to serve as a reliable bridge between global enterprises and the rich tech ecosystem of India.
                </p>
                <p>
                  We are not a volume-driven megacorp, nor a fledgling startup. We are a boutique consultancy that prides itself on precision, quality, and quiet confidence. We deliver results without fanfare.
                </p>
                <p>
                  Based in Hyderabad—one of India's premier technology hubs—we have cultivated a deep network of specialized developers, architects, and consultants ready to integrate seamlessly into your operations.
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

      {/* Leadership / Team (Placeholder) */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl font-bold mb-4">Leadership</h2>
            <p className="text-muted-foreground text-lg">Experienced professionals dedicated to your success.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="group">
                <div className="aspect-square bg-muted rounded-xl mb-4 overflow-hidden relative">
                  <div className="absolute inset-0 bg-gray-200 flex items-center justify-center text-gray-400">
                    <span className="text-sm font-medium">Photo</span>
                  </div>
                </div>
                <h4 className="text-lg font-bold">Leader Name</h4>
                <p className="text-primary font-medium text-sm">Position / Title</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
