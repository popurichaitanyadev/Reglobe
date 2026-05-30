import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

type Category = "All" | "Web" | "Enterprise" | "Integration";

interface Project {
  id: number;
  title: string;
  category: Category;
  description: string;
  tags: string[];
  image: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Oracle HCM Integration",
    category: "Integration",
    description: "Seamless integration between legacy HR systems and Oracle HCM for a major healthcare provider, automating employee lifecycle management.",
    tags: ["Oracle HCM", "Java", "REST APIs", "Middleware"],
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: 2,
    title: "FinTech Analytics Dashboard",
    category: "Web",
    description: "High-performance real-time analytics dashboard for a UK-based FinTech startup, handling millions of daily transactions.",
    tags: ["React", "Node.js", "PostgreSQL", "WebSockets"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: 3,
    title: "Azure DevOps Migration",
    category: "Enterprise",
    description: "Complete migration from on-premise infrastructure to Azure cloud with fully automated CI/CD pipelines for an e-commerce giant.",
    tags: ["Azure", "DevOps", "Docker", "Terraform"],
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: 4,
    title: "Supply Chain Enterprise Portal",
    category: "Enterprise",
    description: "B2B portal allowing real-time tracking of global shipments, integrated with various third-party logistics APIs.",
    tags: [".NET Core", "Angular", "SQL Server", "Redis"],
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: 5,
    title: "Power Platform Automation Suite",
    category: "Integration",
    description: "Digitization of manual paper-based workflows across 15 departments using Microsoft Power Apps and Power Automate.",
    tags: ["Power Apps", "Power Automate", "SharePoint", "Office 365"],
    image: "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: 6,
    title: "Embedded Networking & Web Integration",
    category: "Integration",
    description: "End-to-end solution bridging embedded IoT devices and firmware systems with a real-time web dashboard, enabling remote monitoring, diagnostics, and OTA updates for industrial hardware.",
    tags: ["Embedded C", "MQTT", "Node.js", "React", "WebSockets"],
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: 7,
    title: "CareerOS — Career Management Platform",
    category: "Web",
    description: "Full-featured career management web application offering job tracking, resume builder, interview prep pipelines, and AI-powered application insights — all in one unified OS-style workspace.",
    tags: ["Next.js", "React", "Node.js", "PostgreSQL", "AI/ML"],
    image: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: 8,
    title: "Hospital Pre-Authorization Automation",
    category: "Integration",
    description: "Automated pre-authorization workflow system for hospitals, reducing manual insurance approval cycles from days to hours through intelligent form routing, payer API integrations, and real-time status tracking.",
    tags: ["Java", ".NET", "HL7 FHIR", "Azure", "REST APIs"],
    image: "https://images.unsplash.com/photo-1504439468489-c8920d796a29?auto=format&fit=crop&w=1200&q=80"
  }
];

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState<Category>("All");

  useEffect(() => {
    document.title = "Portfolio - ReglobeAI";
  }, []);

  const filteredProjects = projects.filter(
    (p) => activeCategory === "All" || p.category === activeCategory
  );

  const categories: Category[] = ["All", "Web", "Enterprise", "Integration"];

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <main className="flex min-h-screen flex-col pb-24">
      {/* Header */}
      <section className="bg-gray-50 py-16 md:py-24 border-b">
        <div className="container mx-auto px-4 md:px-8 text-center max-w-3xl">
          <motion.h1 
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            className="text-4xl md:text-5xl font-extrabold text-foreground mb-6"
          >
            Proven <span className="text-primary">Results</span>
          </motion.h1>
          <motion.p 
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.1 } }
            }}
            className="text-lg md:text-xl text-muted-foreground"
          >
            Explore how we've helped global enterprises modernize their infrastructure, build scalable applications, and integrate complex systems.
          </motion.p>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          
          {/* Filters */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                  activeCategory === cat 
                    ? "bg-accent text-white shadow-md" 
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
                data-testid={`filter-${cat.toLowerCase()}`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Grid */}
          <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence>
              {filteredProjects.map((project) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                >
                  <Card className="h-full flex flex-col border-border/60 hover:shadow-lg transition-shadow bg-white overflow-hidden group">
                    <div className="h-48 bg-muted relative overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/25 via-transparent to-transparent"></div>
                    </div>
                    <CardHeader className="pb-3">
                      <div className="flex justify-between items-start mb-2">
                        <span className="text-xs font-semibold text-primary uppercase tracking-wider">{project.category}</span>
                      </div>
                      <h3 className="text-xl font-bold text-foreground leading-tight">{project.title}</h3>
                    </CardHeader>
                    <CardContent className="flex-1">
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {project.description}
                      </p>
                    </CardContent>
                    <CardFooter className="pt-4 border-t border-border/40 mt-auto bg-gray-50/50">
                      <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag) => (
                          <Badge key={tag} variant="secondary" className="bg-gray-200/60 text-gray-700 hover:bg-gray-200 font-normal">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </CardFooter>
                  </Card>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

        </div>
      </section>
    </main>
  );
}
