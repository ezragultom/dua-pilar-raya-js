"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Float, Text, PerspectiveCamera } from "@react-three/drei";
import { useRef, useState, Suspense } from "react";
import * as THREE from "three";

// Building shape for BAS
function BuildingShape({ position, color }: { position: [number, number, number], color: string }) {
    const groupRef = useRef<THREE.Group>(null!);
    const [hovered, setHover] = useState(false);

    useFrame((state) => {
        if (groupRef.current) {
            groupRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.3) * 0.2;
        }
    });

    return (
        <Float speed={1.5} rotationIntensity={0.3} floatIntensity={0.8}>
            <group
                ref={groupRef}
                position={position}
                onPointerOver={() => setHover(true)}
                onPointerOut={() => setHover(false)}
            >
                {/* Main building */}
                <mesh position={[0, 0, 0]} castShadow>
                    <boxGeometry args={[1, 1.5, 1]} />
                    <meshStandardMaterial
                        color={color}
                        wireframe={!hovered}
                        transparent
                        opacity={0.85}
                        emissive={color}
                        emissiveIntensity={hovered ? 0.6 : 0.25}
                        metalness={0.3}
                        roughness={0.4}
                    />
                </mesh>
                {/* Roof */}
                <mesh position={[0, 0.9, 0]} castShadow>
                    <boxGeometry args={[1.1, 0.2, 1.1]} />
                    <meshStandardMaterial
                        color={color}
                        wireframe={!hovered}
                        transparent
                        opacity={0.85}
                        emissive={color}
                        emissiveIntensity={hovered ? 0.6 : 0.25}
                    />
                </mesh>
                <Text
                    position={[0, -1.5, 0]}
                    fontSize={0.35}
                    color="white"
                    anchorX="center"
                    anchorY="middle"
                    outlineWidth={0.02}
                    outlineColor="#000000"
                >
                    BAS
                </Text>
            </group>
        </Float>
    );
}

// Flame shape for Fire Alarm
function FlameShape({ position, color }: { position: [number, number, number], color: string }) {
    const groupRef = useRef<THREE.Group>(null!);
    const [hovered, setHover] = useState(false);

    useFrame((state) => {
        if (groupRef.current) {
            groupRef.current.rotation.y += 0.01;
            groupRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * 3) * 0.15;
        }
    });

    return (
        <Float speed={2.5} rotationIntensity={0.5} floatIntensity={1}>
            <group
                ref={groupRef}
                position={position}
                onPointerOver={() => setHover(true)}
                onPointerOut={() => setHover(false)}
            >
                {/* Flame base */}
                <mesh position={[0, -0.3, 0]} castShadow>
                    <coneGeometry args={[0.6, 1.2, 8]} />
                    <meshStandardMaterial
                        color={color}
                        wireframe={!hovered}
                        transparent
                        opacity={0.85}
                        emissive={color}
                        emissiveIntensity={hovered ? 0.8 : 0.4}
                    />
                </mesh>
                {/* Flame tip */}
                <mesh position={[0, 0.5, 0]} castShadow>
                    <coneGeometry args={[0.3, 0.8, 6]} />
                    <meshStandardMaterial
                        color="#fbbf24"
                        wireframe={!hovered}
                        transparent
                        opacity={0.9}
                        emissive="#fbbf24"
                        emissiveIntensity={hovered ? 1 : 0.5}
                    />
                </mesh>
                <Text
                    position={[0, -1.7, 0]}
                    fontSize={0.3}
                    color="white"
                    anchorX="center"
                    anchorY="middle"
                    outlineWidth={0.02}
                    outlineColor="#000000"
                >
                    Fire Alarm
                </Text>
            </group>
        </Float>
    );
}

// Phone/Communication shape for PABX
function PhoneShape({ position, color }: { position: [number, number, number], color: string }) {
    const groupRef = useRef<THREE.Group>(null!);
    const ringRef = useRef<THREE.Mesh>(null!);
    const [hovered, setHover] = useState(false);

    useFrame((state) => {
        if (groupRef.current) {
            groupRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.4) * 0.3;
        }
        if (ringRef.current) {
            ringRef.current.scale.setScalar(1 + Math.sin(state.clock.elapsedTime * 2) * 0.1);
        }
    });

    return (
        <Float speed={2} rotationIntensity={0.4} floatIntensity={1}>
            <group
                ref={groupRef}
                position={position}
                onPointerOver={() => setHover(true)}
                onPointerOut={() => setHover(false)}
            >
                {/* Phone body */}
                <mesh position={[0, 0, 0]} castShadow>
                    <boxGeometry args={[0.6, 1.2, 0.15]} />
                    <meshStandardMaterial
                        color={color}
                        wireframe={!hovered}
                        transparent
                        opacity={0.85}
                        emissive={color}
                        emissiveIntensity={hovered ? 0.6 : 0.25}
                    />
                </mesh>
                {/* Signal waves */}
                <mesh ref={ringRef} position={[0.5, 0.5, 0]} rotation={[0, 0, Math.PI / 4]} castShadow>
                    <torusGeometry args={[0.3, 0.05, 8, 16]} />
                    <meshStandardMaterial
                        color={color}
                        wireframe={!hovered}
                        transparent
                        opacity={0.7}
                        emissive={color}
                        emissiveIntensity={hovered ? 0.7 : 0.35}
                    />
                </mesh>
                <Text
                    position={[0, -1.4, 0]}
                    fontSize={0.35}
                    color="white"
                    anchorX="center"
                    anchorY="middle"
                    outlineWidth={0.02}
                    outlineColor="#000000"
                >
                    PABX
                </Text>
            </group>
        </Float>
    );
}

// Box/Package shape for Trading
function PackageShape({ position, color }: { position: [number, number, number], color: string }) {
    const groupRef = useRef<THREE.Group>(null!);
    const [hovered, setHover] = useState(false);

    useFrame((state) => {
        if (groupRef.current) {
            groupRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.3) * 0.2;
            groupRef.current.rotation.y = Math.cos(state.clock.elapsedTime * 0.25) * 0.2;
        }
    });

    return (
        <Float speed={1.8} rotationIntensity={0.5} floatIntensity={0.9}>
            <group
                ref={groupRef}
                position={position}
                onPointerOver={() => setHover(true)}
                onPointerOut={() => setHover(false)}
            >
                {/* Package box */}
                <mesh castShadow>
                    <boxGeometry args={[1, 1, 1]} />
                    <meshStandardMaterial
                        color={color}
                        wireframe={!hovered}
                        transparent
                        opacity={0.85}
                        emissive={color}
                        emissiveIntensity={hovered ? 0.6 : 0.25}
                    />
                </mesh>
                {/* Tape cross */}
                <mesh position={[0, 0.51, 0]}>
                    <boxGeometry args={[1.05, 0.05, 0.15]} />
                    <meshStandardMaterial
                        color="#a16207"
                        wireframe={!hovered}
                        transparent
                        opacity={0.9}
                    />
                </mesh>
                <mesh position={[0, 0.51, 0]}>
                    <boxGeometry args={[0.15, 0.05, 1.05]} />
                    <meshStandardMaterial
                        color="#a16207"
                        wireframe={!hovered}
                        transparent
                        opacity={0.9}
                    />
                </mesh>
                <Text
                    position={[0, -1.4, 0]}
                    fontSize={0.35}
                    color="white"
                    anchorX="center"
                    anchorY="middle"
                    outlineWidth={0.02}
                    outlineColor="#000000"
                >
                    Trading
                </Text>
            </group>
        </Float>
    );
}

function Scene() {
    return (
        <>
            <ambientLight intensity={0.6} />
            <pointLight position={[10, 10, 10]} intensity={1.2} castShadow />
            <pointLight position={[-10, -10, -10]} intensity={0.6} />
            <spotLight position={[0, 10, 0]} intensity={0.5} angle={0.3} penumbra={1} castShadow />

            <BuildingShape position={[-3.5, 0, 0]} color="#5e6ad2" />
            <FlameShape position={[-1, 0.5, -1.5]} color="#ef4444" />
            <PhoneShape position={[1.5, -0.5, 0]} color="#22c55e" />
            <PackageShape position={[3.5, 0.5, -1]} color="#eab308" />

            <OrbitControls
                enableZoom={false}
                autoRotate
                autoRotateSpeed={0.8}
                enablePan={false}
                minPolarAngle={Math.PI / 3}
                maxPolarAngle={Math.PI / 1.5}
            />
        </>
    );
}

export function ServiceScene() {
    return (
        <div className="h-[500px] w-full bg-gradient-to-b from-black/30 to-black/10 rounded-xl overflow-hidden border border-white/10 shadow-2xl">
            <Canvas shadows>
                <PerspectiveCamera makeDefault position={[0, 0, 10]} fov={50} />
                <Suspense fallback={null}>
                    <Scene />
                </Suspense>
            </Canvas>
        </div>
    );
}
