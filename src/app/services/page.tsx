"use client";

import { Container } from "@/components/ui/Container";
import { ServiceScene } from "@/components/services/ServiceScene";
import { Card } from "@/components/ui/Card";
import { Building2, FireExtinguisher, Phone, Package } from "lucide-react";
import { motion } from "framer-motion";

const services = [
    {
        title: "Building Automation Systems (B.A.S)",
        description: "Integrated control systems for HVAC, lighting, security, and other building systems. We ensure optimal energy efficiency and operational performance.",
        icon: Building2,
        features: ["Energy Management", "HVAC Control", "Lighting Control", "Security Integration"],
    },
    {
        title: "Fire Alarm Systems",
        description: "State-of-the-art fire detection and alarm systems designed to protect lives and property. Compliant with international safety standards.",
        icon: FireExtinguisher,
        features: ["Smoke Detection", "Heat Detection", "Emergency Voice Alarm", "Maintenance Services"],
    },
    {
        title: "PABX Systems",
        description: "Robust Private Automatic Branch Exchange systems for seamless internal and external communication within your organization.",
        icon: Phone,
        features: ["IP Telephony", "Unified Communications", "Call Center Solutions", "Hybrid Systems"],
    },
    {
        title: "General Trading",
        description: "Sourcing and supplying high-quality equipment and materials for various industrial and commercial needs.",
        icon: Package,
        features: ["Industrial Equipment", "Electrical Components", "Safety Gear", "Custom Procurement"],
    },
];

export default function ServicesPage() {
    return (
        <div className="py-24">
            <Container>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <motion.h1
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="text-4xl md:text-5xl font-bold mb-6"
                    >
                        Our Services
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-xl text-muted-foreground max-w-2xl mx-auto mb-12"
                    >
                        Comprehensive solutions for modern infrastructure. Explore our expertise in automation, safety, and communication.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                    >
                        <ServiceScene />
                    </motion.div>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-24">
                    {services.map((service, index) => (
                        <motion.div
                            key={service.title}
                            initial={{ opacity: 0, y: 30, scale: 0.95 }}
                            whileInView={{ opacity: 1, y: 0, scale: 1 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{
                                duration: 0.5,
                                delay: index * 0.1,
                                type: "spring",
                                stiffness: 100,
                                damping: 15,
                            }}
                            whileHover={{
                                scale: 1.02,
                                transition: { duration: 0.2 }
                            }}
                        >
                            <Card className="p-8 h-full hover:bg-white/10 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10">
                                <div className="flex items-start gap-4">
                                    <motion.div
                                        initial={{ rotate: -10, scale: 0.8 }}
                                        whileInView={{ rotate: 0, scale: 1 }}
                                        viewport={{ once: true }}
                                        transition={{
                                            type: "spring",
                                            stiffness: 200,
                                            damping: 15,
                                            delay: index * 0.1 + 0.2
                                        }}
                                        className="p-3 rounded-lg bg-primary/10 text-primary"
                                    >
                                        <service.icon size={32} />
                                    </motion.div>
                                    <div className="flex-1">
                                        <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
                                        <p className="text-muted-foreground mb-6">{service.description}</p>
                                        <ul className="grid grid-cols-2 gap-2">
                                            {service.features.map((feature, featureIndex) => (
                                                <motion.li
                                                    key={feature}
                                                    initial={{ opacity: 0, x: -10 }}
                                                    whileInView={{ opacity: 1, x: 0 }}
                                                    viewport={{ once: true }}
                                                    transition={{
                                                        delay: index * 0.1 + featureIndex * 0.05 + 0.4,
                                                        duration: 0.3
                                                    }}
                                                    className="flex items-center text-sm text-muted-foreground"
                                                >
                                                    <span className="w-1.5 h-1.5 rounded-full bg-primary mr-2" />
                                                    {feature}
                                                </motion.li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </Container>
        </div>
    );
}
