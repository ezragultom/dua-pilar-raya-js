"use client";

import { Container } from "@/components/ui/Container";
import { Card } from "@/components/ui/Card";
import { motion } from "framer-motion";

const projects = [
    {
        name: "Grand Tower Jakarta",
        category: "Building Automation System",
        year: "2023",
        description: "Complete overhaul of the HVAC control system, resulting in 20% energy savings.",
    },
    {
        name: "City Central Mall",
        category: "Fire Alarm System",
        year: "2022",
        description: "Installation of a fully addressable fire alarm network covering 50,000 sq meters.",
    },
    {
        name: "Tech Valley Office Park",
        category: "PABX & Networking",
        year: "2023",
        description: "Deployment of a hybrid IP-PABX system connecting 5 separate office buildings.",
    },
    {
        name: "Industrial Zone A",
        category: "General Trading / Supply",
        year: "2021",
        description: "Supply of high-voltage electrical components for a new manufacturing plant.",
    },
];

export default function ExperiencePage() {
    return (
        <div className="py-24">
            <Container>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-16"
                >
                    <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Experience</h1>
                    <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                        A track record of excellence. Here are some of the projects where we've made a difference.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.name}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <Card className="p-6 hover:border-primary/50 transition-colors">
                                <div className="flex justify-between items-start mb-4">
                                    <div>
                                        <h3 className="text-xl font-bold">{project.name}</h3>
                                        <p className="text-sm text-primary">{project.category}</p>
                                    </div>
                                    <span className="text-sm text-muted-foreground bg-white/5 px-2 py-1 rounded">
                                        {project.year}
                                    </span>
                                </div>
                                <p className="text-muted-foreground">
                                    {project.description}
                                </p>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </Container>
        </div>
    );
}
