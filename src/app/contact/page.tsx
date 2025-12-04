"use client";

import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { MapPin, Mail, Phone } from "lucide-react";
import { motion } from "framer-motion";

export default function ContactPage() {
    return (
        <div className="py-24">
            <Container>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="mb-12"
                >
                    <h1 className="text-4xl md:text-5xl font-bold mb-6">Get in Touch</h1>
                    <p className="text-xl text-muted-foreground">
                        Ready to upgrade your building's intelligence? Contact us today for a consultation.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    <div className="space-y-6">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                        >
                            <Card className="p-6 flex items-start gap-4">
                                <MapPin className="w-6 h-6 text-primary mt-1" />
                                <div>
                                    <h3 className="font-semibold mb-1">Visit Us</h3>
                                    <p className="text-muted-foreground">
                                        Ginta Building<br />
                                        Teratai Putih Raya 1A/14C Kel. Malaka Sari, Kec. Duren Sawit, East Jakarta Indonesia
                                    </p>
                                </div>
                            </Card>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                        >
                            <Card className="p-6 flex items-start gap-4">
                                <Mail className="w-6 h-6 text-primary mt-1" />
                                <div>
                                    <h3 className="font-semibold mb-1">Email Us</h3>
                                    <p className="text-muted-foreground">info@duapilarraya.com</p>
                                </div>
                            </Card>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                        >
                            <Card className="p-6 flex items-start gap-4">
                                <Phone className="w-6 h-6 text-primary mt-1" />
                                <div>
                                    <h3 className="font-semibold mb-1">Call Us</h3>
                                    <p className="text-muted-foreground">+(62) 812 1234 5678</p>
                                </div>
                            </Card>
                        </motion.div>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        <Card className="p-8">
                            <form className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label htmlFor="firstName" className="text-sm font-medium">First Name</label>
                                        <input
                                            id="firstName"
                                            className="w-full h-10 rounded-md border border-white/10 bg-black/20 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50"
                                            placeholder="John"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label htmlFor="lastName" className="text-sm font-medium">Last Name</label>
                                        <input
                                            id="lastName"
                                            className="w-full h-10 rounded-md border border-white/10 bg-black/20 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50"
                                            placeholder="Doe"
                                        />
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="email" className="text-sm font-medium">Email</label>
                                    <input
                                        id="email"
                                        type="email"
                                        className="w-full h-10 rounded-md border border-white/10 bg-black/20 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50"
                                        placeholder="john@example.com"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="message" className="text-sm font-medium">Message</label>
                                    <textarea
                                        id="message"
                                        className="w-full min-h-[150px] rounded-md border border-white/10 bg-black/20 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50"
                                        placeholder="How can we help you?"
                                    />
                                </div>
                                <Button className="w-full" size="lg">
                                    Send Message
                                </Button>
                            </form>
                        </Card>
                    </motion.div>
                </div>
            </Container>
        </div>
    );
}
