"use client";

import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { motion } from "framer-motion";
import { Package, Building2, Phone, FireExtinguisher } from "lucide-react";

const services = [
    {
        title: "Building Automation",
        description: "Smart control systems for HVAC, lighting, and security to optimize efficiency.",
        icon: Building2,
    },
    {
        title: "Fire Alarm Systems",
        description: "Advanced detection and alarm systems to ensure safety and compliance.",
        icon: FireExtinguisher,
    },
    {
        title: "PABX Systems",
        description: "Reliable Private Automatic Branch Exchange solutions for seamless communication.",
        icon: Phone,
    },
    {
        title: "General Trading",
        description: "Comprehensive trading services to support your operational needs.",
        icon: Package,
    },
];

export function BusinessOverview() {
    return (
        <section className="py-24 relative">
            <Container>
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Core Expertise</h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto">
                        Delivering excellence across multiple disciplines to power your business infrastructure.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {services.map((service, index) => (
                        <motion.div
                            key={service.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <Card className="h-full flex flex-col items-center text-center p-8 hover:bg-white/10 transition-all duration-300 group">
                                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                                    <service.icon className="w-6 h-6 text-primary" />
                                </div>
                                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                                <p className="text-sm text-muted-foreground">{service.description}</p>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </Container>
        </section>
    );
}
