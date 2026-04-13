import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { MapPin, Mail, Building } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger, DialogFooter } from "@/components/ui/dialog";
import { useToast } from "@/hooks/use-toast";

const formSchema = z.object({
  name: z.string().min(2, "Name is required"),
  company: z.string().min(2, "Company is required"),
  email: z.string().email("Invalid email address"),
  service: z.string().min(1, "Please select a service"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type FormValues = z.infer<typeof formSchema>;

export default function Contact() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [providerOpen, setProviderOpen] = useState(false);
  const [mailProvider, setMailProvider] = useState("default");

  useEffect(() => {
    document.title = "Contact Us - Reglobe IT Solutions";
  }, []);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      company: "",
      email: "",
      service: "",
      message: "",
    },
  });

  function onSubmit(data: FormValues) {
    const subject = encodeURIComponent(`Reglobe inquiry from ${data.name}`);
    const body = encodeURIComponent(
      `Name: ${data.name}\nCompany: ${data.company}\nEmail: ${data.email}\nService Interested In: ${data.service}\n\nMessage:\n${data.message}`,
    );
    const recipients = "popurichaitanyadev@gmail.com,pavankamjula98@gmail.com";
    const composeUrl =
      mailProvider === "gmail"
        ? `https://mail.google.com/mail/?view=cm&fs=1&to=${recipients}&su=${subject}&body=${body}`
        : mailProvider === "outlook"
          ? `https://outlook.office.com/mail/deeplink/compose?to=${recipients}&subject=${subject}&body=${body}`
          : `mailto:${recipients}?subject=${subject}&body=${body}`;
    window.open(composeUrl, "_blank", "noopener,noreferrer");
    toast({
      title: "Opening email provider",
      description: "Your selected mail app will open with the message ready.",
    });
  }

  function onProviderSubmit() {
    setProviderOpen(false);
    form.handleSubmit(onSubmit)();
  }

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <main className="flex min-h-screen flex-col pb-20">
      {/* Header */}
      <section className="bg-accent text-white py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-8 text-center max-w-3xl">
          <motion.h1 
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            className="text-4xl md:text-5xl font-extrabold mb-6"
          >
            Let's build something <span className="text-primary">great</span>
          </motion.h1>
          <motion.p 
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.1 } }
            }}
            className="text-lg md:text-xl text-gray-300"
          >
            Whether you need dedicated developers or end-to-end project delivery, our team is ready to help your enterprise scale.
          </motion.p>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            
            {/* Contact Info */}
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              className="space-y-10"
            >
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-6">Contact Information</h2>
                <p className="text-muted-foreground text-lg mb-8">
                  Reach out to us to discuss your IT staffing needs or technology projects. Our team typically responds within 24 hours.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mr-4">
                    <Building className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground text-lg mb-1">Reglobe Private Limited</h4>
                    <p className="text-muted-foreground">Premium IT Services & Staffing</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mr-4">
                    <MapPin className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground text-lg mb-1">Location</h4>
                    <p className="text-muted-foreground">Hyderabad, Telangana, India<br/>(Global Delivery Center)</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mr-4">
                    <Mail className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground text-lg mb-1">Email</h4>
                    <div className="flex flex-col gap-1">
                      <a href="mailto:popurichaitanyadev@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">popurichaitanyadev@gmail.com</a>
                      <a href="mailto:pavankamjula98@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">pavankamjula98@gmail.com</a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-10 rounded-xl overflow-hidden shadow-md border h-64">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d121825.96102131976!2d78.36155458032765!3d17.412497672661557!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb99daeaebd2c7%3A0xae93b78392bafbc2!2sHyderabad%2C%20Telangana!5e0!3m2!1sen!2sin!4v1709653894451!5m2!1sen!2sin" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Reglobe Location"
                ></iframe>
              </div>
            </motion.div>

            {/* Form */}
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{
                hidden: { opacity: 0, x: 20 },
                visible: { opacity: 1, x: 0, transition: { duration: 0.6 } }
              }}
            >
              <div className="bg-white rounded-2xl shadow-xl border p-8 md:p-10">
                <h3 className="text-2xl font-bold text-foreground mb-8">Send us a message</h3>
                
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Full Name</FormLabel>
                            <FormControl>
                              <Input placeholder="John Doe" {...field} data-testid="input-name" />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="company"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Company</FormLabel>
                            <FormControl>
                              <Input placeholder="Acme Corp" {...field} data-testid="input-company" />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Email Address</FormLabel>
                            <FormControl>
                              <Input placeholder="john@example.com" type="email" {...field} data-testid="input-email" />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <FormField
                      control={form.control}
                      name="service"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Service Interested In</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger data-testid="select-service">
                                <SelectValue placeholder="Select a service" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="staff_augmentation">Staff Augmentation</SelectItem>
                              <SelectItem value="project_development">Project-Based Development</SelectItem>
                              <SelectItem value="tech_consulting">Tech Consulting</SelectItem>
                              <SelectItem value="general">General Enquiry</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Message</FormLabel>
                          <FormControl>
                            <Textarea 
                              placeholder="Tell us about your requirements..." 
                              className="min-h-[120px] resize-y" 
                              {...field} 
                              data-testid="input-message"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <Dialog open={providerOpen} onOpenChange={setProviderOpen}>
                      <DialogTrigger asChild>
                        <Button type="button" className="w-full h-12 text-base" disabled={isSubmitting} data-testid="button-submit">
                          {isSubmitting ? "Sending..." : "Send Message"}
                        </Button>
                      </DialogTrigger>
                      <DialogContent>
                        <DialogHeader>
                          <DialogTitle>Choose email provider</DialogTitle>
                        </DialogHeader>
                        <div className="space-y-2">
                          <Select value={mailProvider} onValueChange={setMailProvider}>
                            <SelectTrigger data-testid="select-mail-provider">
                              <SelectValue placeholder="Choose email provider" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="default">Default mail app</SelectItem>
                              <SelectItem value="gmail">Gmail</SelectItem>
                              <SelectItem value="outlook">Outlook</SelectItem>
                            </SelectContent>
                          </Select>
                          <p className="text-sm text-muted-foreground">
                            We’ll try the browser first, then open the selected app if needed.
                          </p>
                        </div>
                        <DialogFooter>
                          <Button type="button" onClick={onProviderSubmit} data-testid="button-launch-provider">
                            Continue
                          </Button>
                        </DialogFooter>
                      </DialogContent>
                    </Dialog>
                  </form>
                </Form>
              </div>
            </motion.div>

          </div>
        </div>
      </section>
    </main>
  );
}
