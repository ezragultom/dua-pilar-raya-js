"use client";

import { Container } from "@/components/ui/Container";
import { Card } from "@/components/ui/Card";
import { motion } from "framer-motion";

export default function AboutPage() {
    return (
        <div className="py-24">
            <Container>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="max-w-3xl mx-auto text-center mb-16"
                >
                    <h1 className="text-4xl md:text-5xl font-bold mb-6">About Dua Pilar Raya</h1>
                    <p className="text-xl text-muted-foreground">
                        We are a leading provider of integrated building solutions, dedicated to enhancing the safety, efficiency, and connectivity of modern infrastructure.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-24">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
                        <p className="text-muted-foreground leading-relaxed">
                            To deliver state-of-the-art Building Automation, Fire Alarm, and Communication systems that empower businesses to operate with maximum efficiency and safety. We strive to set new standards in the industry through innovation and unwavering commitment to quality.
                        </p>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                    >
                        <h2 className="text-2xl font-bold mb-4">Our Vision</h2>
                        <p className="text-muted-foreground leading-relaxed">
                            To be the most trusted partner for building intelligence and infrastructure solutions in Indonesia, recognized for our technical expertise, customer-centric approach, and sustainable practices.
                        </p>
                    </motion.div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {["Innovation", "Integrity", "Quality"].map((value, index) => (
                        <motion.div
                            key={value}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <Card className="p-6 text-center">
                                <h3 className="text-xl font-bold mb-2">{value}</h3>
                                <p className="text-sm text-muted-foreground">
                                    {value === "Innovation" && "Constantly adopting the latest technologies to solve complex challenges."}
                                    {value === "Integrity" && "Building trust through transparent and ethical business practices."}
                                    {value === "Quality" && "Delivering superior products and services that stand the test of time."}
                                </p>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </Container>
        </div>
    );
}
