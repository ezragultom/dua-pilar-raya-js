"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Float, PerspectiveCamera } from "@react-three/drei";
import { useRef, Suspense } from "react";
import * as THREE from "three";

// Interlocking Gears - Represents Precision, Quality Work, and Teamwork
function QualityGears() {
    const gear1Ref = useRef<THREE.Group>(null!);
    const gear2Ref = useRef<THREE.Group>(null!);
    const gear3Ref = useRef<THREE.Group>(null!);
    const gear4Ref = useRef<THREE.Group>(null!);
    const gear5Ref = useRef<THREE.Group>(null!);

    useFrame((state) => {
        if (gear1Ref.current && gear2Ref.current && gear3Ref.current && gear4Ref.current && gear5Ref.current) {
            // Different rotation speeds to prevent teeth synchronization
            gear1Ref.current.rotation.z = state.clock.elapsedTime * 0.4;
            gear2Ref.current.rotation.z = -state.clock.elapsedTime * 0.55;
            gear3Ref.current.rotation.z = state.clock.elapsedTime * 0.35;
            gear4Ref.current.rotation.z = -state.clock.elapsedTime * 0.48;
            gear5Ref.current.rotation.z = state.clock.elapsedTime * 0.42;
        }
    });

    // Create gear teeth with smooth geometry
    const createGear = (radius: number, teeth: number) => {
        const shape = new THREE.Shape();
        const toothHeight = 0.25;
        const toothAngle = (Math.PI * 2) / teeth;
        const toothTopAngle = toothAngle * 0.3; // 30% of tooth angle for the top
        const toothBaseAngle = toothAngle * 0.15; // 15% for the base transition

        for (let i = 0; i < teeth; i++) {
            const baseAngle = i * toothAngle;

            // Start at inner radius
            const startAngle = baseAngle - toothBaseAngle;
            const toothStartAngle = baseAngle - toothTopAngle / 2;
            const toothEndAngle = baseAngle + toothTopAngle / 2;
            const endAngle = baseAngle + toothBaseAngle;

            if (i === 0) {
                shape.moveTo(
                    Math.cos(startAngle) * radius,
                    Math.sin(startAngle) * radius
                );
            }

            // Base to tooth start (inner radius)
            shape.lineTo(
                Math.cos(toothStartAngle) * radius,
                Math.sin(toothStartAngle) * radius
            );

            // Rise to tooth top
            shape.lineTo(
                Math.cos(toothStartAngle) * (radius + toothHeight),
                Math.sin(toothStartAngle) * (radius + toothHeight)
            );

            // Tooth top
            shape.lineTo(
                Math.cos(toothEndAngle) * (radius + toothHeight),
                Math.sin(toothEndAngle) * (radius + toothHeight)
            );

            // Fall back to inner radius
            shape.lineTo(
                Math.cos(toothEndAngle) * radius,
                Math.sin(toothEndAngle) * radius
            );

            // Continue along inner radius to next tooth
            const nextStartAngle = (i + 1) * toothAngle - toothBaseAngle;
            shape.lineTo(
                Math.cos(nextStartAngle) * radius,
                Math.sin(nextStartAngle) * radius
            );
        }

        shape.closePath();
        return shape;
    };

    const gear1Shape = createGear(1.8, 12);
    const gear2Shape = createGear(1.5, 10);
    const gear3Shape = createGear(1.2, 8);
    const gear4Shape = createGear(1.0, 10);
    const gear5Shape = createGear(1.4, 12);

    return (
        <Float speed={1} rotationIntensity={0.1} floatIntensity={0.4}>
            <group>
                {/* Gear 1 - Light Gray */}
                <group ref={gear1Ref} position={[-6.0, 0.8, 0]}>
                    <mesh castShadow>
                        <extrudeGeometry args={[gear1Shape, { depth: 0.6, bevelEnabled: false }]} />
                        <meshStandardMaterial
                            color="#d1d5db"
                            metalness={0.8}
                            roughness={0.3}
                            emissive="#9ca3af"
                            emissiveIntensity={0.2}
                        />
                    </mesh>
                    {/* Center hub */}
                    <mesh position={[0, 0, 0.3]} rotation={[Math.PI / 2, 0, 0]}>
                        <cylinderGeometry args={[0.75, 0.75, 0.75, 32]} />
                        <meshStandardMaterial
                            color="#6b7280"
                            metalness={0.9}
                            roughness={0.2}
                        />
                    </mesh>
                </group>

                {/* Gear 2 - Medium Gray */}
                <group ref={gear2Ref} position={[-2.5, -1, 0]}>
                    <mesh castShadow>
                        <extrudeGeometry args={[gear2Shape, { depth: 0.6, bevelEnabled: false }]} />
                        <meshStandardMaterial
                            color="#9ca3af"
                            metalness={0.8}
                            roughness={0.3}
                            emissive="#6b7280"
                            emissiveIntensity={0.2}
                        />
                    </mesh>
                    {/* Center hub */}
                    <mesh position={[0, 0, 0.3]} rotation={[Math.PI / 2, 0, 0]}>
                        <cylinderGeometry args={[0.6, 0.6, 0.75, 32]} />
                        <meshStandardMaterial
                            color="#4b5563"
                            metalness={0.9}
                            roughness={0.2}
                        />
                    </mesh>
                </group>

                {/* Gear 3 - Dark Gray */}
                <group ref={gear3Ref} position={[0.5, 0.5, 0]}>
                    <mesh castShadow>
                        <extrudeGeometry args={[gear3Shape, { depth: 0.6, bevelEnabled: false }]} />
                        <meshStandardMaterial
                            color="#6b7280"
                            metalness={0.8}
                            roughness={0.3}
                            emissive="#4b5563"
                            emissiveIntensity={0.2}
                        />
                    </mesh>
                    {/* Center hub */}
                    <mesh position={[0, 0, 0.3]} rotation={[Math.PI / 2, 0, 0]}>
                        <cylinderGeometry args={[0.5, 0.5, 0.75, 32]} />
                        <meshStandardMaterial
                            color="#374151"
                            metalness={0.9}
                            roughness={0.2}
                        />
                    </mesh>
                </group>

                {/* Gear 4 - Medium Dark Gray */}
                <group ref={gear4Ref} position={[3.2, -0.8, 0]}>
                    <mesh castShadow>
                        <extrudeGeometry args={[gear4Shape, { depth: 0.6, bevelEnabled: false }]} />
                        <meshStandardMaterial
                            color="#9ca3af"
                            metalness={0.8}
                            roughness={0.3}
                            emissive="#6b7280"
                            emissiveIntensity={0.2}
                        />
                    </mesh>
                    {/* Center hub */}
                    <mesh position={[0, 0, 0.3]} rotation={[Math.PI / 2, 0, 0]}>
                        <cylinderGeometry args={[0.45, 0.45, 0.75, 32]} />
                        <meshStandardMaterial
                            color="#4b5563"
                            metalness={0.9}
                            roughness={0.2}
                        />
                    </mesh>
                </group>

                {/* Gear 5 - Light Medium Gray */}
                <group ref={gear5Ref} position={[6, 0.6, 0]}>
                    <mesh castShadow>
                        <extrudeGeometry args={[gear5Shape, { depth: 0.6, bevelEnabled: false }]} />
                        <meshStandardMaterial
                            color="#d1d5db"
                            metalness={0.8}
                            roughness={0.3}
                            emissive="#9ca3af"
                            emissiveIntensity={0.2}
                        />
                    </mesh>
                    {/* Center hub */}
                    <mesh position={[0, 0, 0.3]} rotation={[Math.PI / 2, 0, 0]}>
                        <cylinderGeometry args={[0.65, 0.65, 0.75, 32]} />
                        <meshStandardMaterial
                            color="#6b7280"
                            metalness={0.9}
                            roughness={0.2}
                        />
                    </mesh>
                </group>
            </group>
        </Float>
    );
}

function Scene() {
    return (
        <>
            <ambientLight intensity={0.6} />
            <pointLight position={[10, 10, 10]} intensity={1.5} castShadow />
            <pointLight position={[-10, -10, -10]} intensity={0.8} />
            <pointLight position={[0, 10, -10]} intensity={0.6} color="#ffffff" />
            <spotLight position={[0, 15, 0]} intensity={0.8} angle={0.4} penumbra={1} castShadow />

            <QualityGears />

            <OrbitControls
                enableZoom={false}
                autoRotate
                autoRotateSpeed={0.5}
                enablePan={false}
                minPolarAngle={Math.PI / 3}
                maxPolarAngle={Math.PI / 1.8}
            />
        </>
    );
}

export function ServiceScene() {
    return (
        <div className="h-[500px] w-full bg-transparent rounded-xl overflow-hidden">
            <Canvas shadows>
                <PerspectiveCamera makeDefault position={[0, 2, 12]} fov={50} />
                <Suspense fallback={null}>
                    <Scene />
                </Suspense>
            </Canvas>
        </div>
    );
}
