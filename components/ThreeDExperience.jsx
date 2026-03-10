"use client";

import React, { Suspense, useEffect, useMemo, useRef, useState } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Tube, Html, Float } from "@react-three/drei";
import { useRouter } from "next/navigation";
import * as THREE from "three";

/* ─── Shared scroll progress context via a ref ─── */
const scrollCtx = { offset: 0 };

/* ═══════════════════════════════════════════════════════════════════════════
   PAGE COMPONENT
   ═══════════════════════════════════════════════════════════════════════════ */

export default function Page() {
    const [isMobileFallback, setIsMobileFallback] = useState(false);
    const wrapperRef = useRef(null);

    useEffect(() => {
        const mobile = window.innerWidth < 768;
        const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
        setIsMobileFallback(mobile || reduced);
    }, []);

    /* Track native scroll position relative to the 3D wrapper */
    useEffect(() => {
        const onScroll = () => {
            if (!wrapperRef.current) return;
            const rect = wrapperRef.current.getBoundingClientRect();
            const wrapperHeight = wrapperRef.current.offsetHeight;
            const vh = window.innerHeight;
            // offset goes 0→1 as the viewport scrolls through the wrapper
            const raw = -rect.top / (wrapperHeight - vh);
            scrollCtx.offset = Math.max(0, Math.min(1, raw));
        };
        window.addEventListener("scroll", onScroll, { passive: true });
        onScroll();
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    if (isMobileFallback) {
        return (
            <section className="relative h-screen w-full overflow-hidden bg-[#070d08] text-white">
                <video
                    className="absolute inset-0 h-full w-full object-cover"
                    src="/videos/home-organic-fallback.mp4"
                    autoPlay muted loop playsInline
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
                <div className="absolute inset-0 z-10 flex items-end">
                    <div className="px-6 pb-14 md:px-10">
                        <p className="text-[10px] uppercase tracking-[0.35em] text-[#9cc5a8]/80">
                            Organic Learning
                        </p>
                        <h1 className="mt-3 text-4xl font-light leading-[1.1] md:text-6xl">
                            Quiet growth.<br />Deep connection.
                        </h1>
                    </div>
                </div>
            </section>
        );
    }

    return (
        <section ref={wrapperRef} className="relative w-full bg-[#070d08]" style={{ height: "500vh" }}>
            {/* Sticky canvas — fills viewport while scrolling through this section */}
            <div className="sticky top-0 left-0 w-full h-screen z-0">
                <Canvas
                    dpr={[1, 1.5]}
                    camera={{ position: [0, 0.6, 3.8], fov: 42 }}
                    gl={{
                        antialias: true,
                        alpha: false,
                        powerPreference: "high-performance",
                        toneMapping: THREE.ACESFilmicToneMapping,
                        toneMappingExposure: 1.4,
                    }}
                    shadows
                >
                    <color attach="background" args={["#070d08"]} />
                    <fog attach="fog" args={["#070d08", 8, 24]} />

                    <ambientLight intensity={0.35} color="#d0e8d4" />
                    <directionalLight
                        position={[3, 4, 4]} intensity={1.2} color="#f5efe0"
                        castShadow shadow-mapSize-width={1024} shadow-mapSize-height={1024}
                    />
                    <directionalLight position={[-3, 2, 2]} intensity={0.35} color="#b8d8c0" />
                    <directionalLight position={[0, 1, -3]} intensity={0.3} color="#d4a86c" />

                    <pointLight position={[0, -3.5, 1]} intensity={1.2} color="#4dbd6a" distance={10} decay={2} />
                    <pointLight position={[-2, -5, 0.5]} intensity={0.6} color="#3da867" distance={8} decay={2} />
                    <pointLight position={[2, -5.5, 0.5]} intensity={0.5} color="#4aae6c" distance={8} decay={2} />

                    <spotLight
                        position={[0, 4, 2]} angle={0.4} penumbra={0.8}
                        intensity={1.5} color="#ffffff" castShadow
                    />
                    <hemisphereLight args={["#c8e4d0", "#1a2b1e", 0.4]} />

                    <Suspense fallback={null}>
                        <Scene />
                    </Suspense>
                </Canvas>

                {/* HUD overlay — positioned inside the sticky container */}
                <div className="pointer-events-none absolute inset-0 z-20 flex items-end justify-between p-6 pb-16 md:p-10 md:pb-20">
                    <div className="max-w-2xl">
                        <p className="text-[10px] uppercase tracking-[0.35em] text-[#9cc5a8]/60 font-light">
                            Sarvata
                        </p>
                        <h1 className="mt-3 text-3xl font-light leading-[1.12] text-white/90 md:text-5xl lg:text-6xl">
                            Transforming Educators<br />and Schools, Every Day
                        </h1>
                        <p className="mt-4 max-w-xl text-[13px] leading-relaxed text-white/45 font-light md:text-[16px]">
                            We partner with schools, educators, and parents to create truly
                            inclusive, learner-centered educational environments.
                        </p>
                    </div>
                    <div className="hidden text-right text-[13px] text-white/25 md:block font-light self-end">
                        <p className="tracking-wider">Scroll ↓</p>
                        <p className="mt-1 text-[11px] text-white/15">Explore our ecosystem</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

/* ═══════════════════════════════════════════════════════════════════════════
   SCENE  — reads scrollCtx.offset each frame (0→1)
   ═══════════════════════════════════════════════════════════════════════════ */

function Scene() {
    useFrame((state, delta) => {
        const t = scrollCtx.offset;
        const camY = THREE.MathUtils.lerp(0.6, -5.6, easeInOut(t));
        const camZ = THREE.MathUtils.lerp(3.8, 3.2, easeInOut(Math.min(t * 1.1, 1)));
        const lookY = THREE.MathUtils.lerp(0.3, -4.8, easeInOut(t));
        const driftX = Math.sin(t * Math.PI) * 0.12;

        state.camera.position.x = THREE.MathUtils.damp(state.camera.position.x, driftX, 3, delta);
        state.camera.position.y = THREE.MathUtils.damp(state.camera.position.y, camY, 3, delta);
        state.camera.position.z = THREE.MathUtils.damp(state.camera.position.z, camZ, 3, delta);
        state.camera.lookAt(0, lookY, 0);
    });

    return (
        <group>
            <Ground />
            <Seedling />
            <RootSystem />
            <Fireflies />
            <UndergroundGlow />
        </group>
    );
}

/* ═══════════════════════════════════════════════════════════════════════════
   GROUND
   ═══════════════════════════════════════════════════════════════════════════ */

function Ground() {
    const soilTex = useMemo(() => {
        const s = 512, c = document.createElement("canvas");
        c.width = s; c.height = s;
        const ctx = c.getContext("2d");

        ctx.fillStyle = "#1a2218";
        ctx.fillRect(0, 0, s, s);

        for (let i = 0; i < 6000; i++) {
            const x = Math.random() * s, y = Math.random() * s;
            const b = 20 + Math.random() * 35;
            ctx.fillStyle = `rgba(${b + 8},${b + 3},${b - 2},${Math.random() * 0.18 + 0.03})`;
            ctx.fillRect(x, y, Math.random() * 3 + 0.5, Math.random() * 3 + 0.5);
        }
        for (let i = 0; i < 400; i++) {
            const x = Math.random() * s, y = Math.random() * s;
            ctx.beginPath();
            ctx.arc(x, y, Math.random() * 5 + 1, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(45,72,40,${Math.random() * 0.12 + 0.02})`;
            ctx.fill();
        }
        const g = ctx.createRadialGradient(s / 2, s / 2, 10, s / 2, s / 2, 80);
        g.addColorStop(0, "rgba(60, 90, 55, 0.15)");
        g.addColorStop(1, "rgba(0,0,0,0)");
        ctx.fillStyle = g;
        ctx.fillRect(0, 0, s, s);

        const tex = new THREE.CanvasTexture(c);
        tex.wrapS = tex.wrapT = THREE.RepeatWrapping;
        tex.repeat.set(2, 2);
        return tex;
    }, []);

    return (
        <group>
            <mesh position={[0, -0.01, 0]} rotation={[-Math.PI / 2, 0, 0]} receiveShadow>
                <circleGeometry args={[6, 72]} />
                <meshStandardMaterial
                    map={soilTex} color="#2a3826" roughness={0.95}
                    emissive="#1a2818" emissiveIntensity={0.08}
                />
            </mesh>
            <mesh position={[0, 0.001, 0]} rotation={[-Math.PI / 2, 0, 0]}>
                <ringGeometry args={[0.15, 0.6, 64]} />
                <meshStandardMaterial color="#3a5035" transparent opacity={0.25} roughness={0.6} />
            </mesh>
            <Pebbles />
            <mesh position={[0, -1.5, 0]} rotation={[-Math.PI / 2, 0, 0]}>
                <circleGeometry args={[7, 72]} />
                <meshStandardMaterial color="#0f1a12" roughness={1} emissive="#0a140c" emissiveIntensity={0.04} />
            </mesh>
            <mesh position={[0, -4, 0]} rotation={[-Math.PI / 2, 0, 0]}>
                <circleGeometry args={[8, 72]} />
                <meshStandardMaterial color="#0a120c" roughness={1} emissive="#0c1a10" emissiveIntensity={0.06} />
            </mesh>
        </group>
    );
}

function Pebbles() {
    const items = useMemo(() => {
        const arr = [];
        for (let i = 0; i < 22; i++) {
            const a = Math.random() * Math.PI * 2, d = 0.25 + Math.random() * 2;
            arr.push({
                pos: [Math.cos(a) * d, -0.005, Math.sin(a) * d],
                sc: [0.015 + Math.random() * 0.035, 0.008 + Math.random() * 0.015, 0.015 + Math.random() * 0.035],
                rot: [Math.random() * 0.4, Math.random() * 6.28, Math.random() * 0.4],
                col: `hsl(${28 + Math.random() * 12},${10 + Math.random() * 8}%,${12 + Math.random() * 10}%)`,
            });
        }
        return arr;
    }, []);

    return (
        <group>
            {items.map((p, i) => (
                <mesh key={i} position={p.pos} rotation={p.rot} scale={p.sc} castShadow receiveShadow>
                    <dodecahedronGeometry args={[1, 0]} />
                    <meshStandardMaterial color={p.col} roughness={0.92} />
                </mesh>
            ))}
        </group>
    );
}

/* ═══════════════════════════════════════════════════════════════════════════
   SEEDLING
   ═══════════════════════════════════════════════════════════════════════════ */

function Seedling() {
    const groupRef = useRef();
    const stemRef = useRef();
    const tipRef = useRef();
    const seedRef = useRef();
    const leafL = useRef();
    const leafR = useRef();
    const leafB = useRef();

    const leafGeo = useMemo(() => {
        const shape = new THREE.Shape();
        shape.moveTo(0, 0);
        shape.bezierCurveTo(0.15, 0.1, 0.22, 0.35, 0.18, 0.6);
        shape.bezierCurveTo(0.12, 0.8, 0.04, 0.95, 0, 1.0);
        shape.bezierCurveTo(-0.04, 0.95, -0.12, 0.8, -0.18, 0.6);
        shape.bezierCurveTo(-0.22, 0.35, -0.15, 0.1, 0, 0);
        return new THREE.ExtrudeGeometry(shape, {
            depth: 0.008, bevelEnabled: true,
            bevelThickness: 0.003, bevelSize: 0.003, bevelSegments: 2,
        });
    }, []);

    useFrame((state, delta) => {
        const t = scrollCtx.offset;
        const grow = smoothstep(0.0, 0.35, t);
        const time = state.clock.elapsedTime;
        const breathe = Math.sin(time * 0.7) * 0.008;
        const sway = Math.sin(time * 0.5) * 0.02 * (0.5 + grow);
        const h = 0.15 + grow * 1.8;

        if (stemRef.current) {
            stemRef.current.scale.y = THREE.MathUtils.damp(stemRef.current.scale.y, h, 5, delta);
            stemRef.current.position.y = h * 0.5;
            stemRef.current.rotation.z = THREE.MathUtils.damp(stemRef.current.rotation.z, sway, 3, delta);
        }
        if (tipRef.current) {
            tipRef.current.position.y = THREE.MathUtils.damp(tipRef.current.position.y, h + 0.02, 5, delta);
        }
        const ls = 0.08 + grow * 0.52;
        if (leafL.current) {
            leafL.current.scale.setScalar(THREE.MathUtils.damp(leafL.current.scale.x, ls, 4, delta));
            leafL.current.position.set(-0.06 - grow * 0.08, 0.12 + grow * 0.9 + breathe, 0.02);
            leafL.current.rotation.set(0.1, 0.2, -0.6 - grow * 0.4 + sway * 0.4);
        }
        if (leafR.current) {
            leafR.current.scale.setScalar(THREE.MathUtils.damp(leafR.current.scale.x, ls * 0.92, 4, delta));
            leafR.current.position.set(0.05 + grow * 0.07, 0.18 + grow * 1.05 + breathe, -0.01);
            leafR.current.rotation.set(-0.08, -0.15, 0.55 + grow * 0.35 - sway * 0.4);
        }
        if (leafB.current) {
            leafB.current.scale.setScalar(THREE.MathUtils.damp(leafB.current.scale.x, ls * 0.65, 4, delta));
            leafB.current.position.set(0.0, 0.08 + grow * 0.55 + breathe * 0.5, 0.06);
            leafB.current.rotation.set(0.5, 0, -0.1 + sway * 0.3);
        }
        if (seedRef.current) {
            seedRef.current.position.y = 0.04 - grow * 0.02;
            seedRef.current.material.emissiveIntensity = 0.06 + (1 - grow) * 0.1;
        }
        if (groupRef.current) {
            groupRef.current.scale.x = 1 + breathe;
            groupRef.current.scale.z = 1 + breathe;
        }
    });

    return (
        <group ref={groupRef}>
            <mesh ref={seedRef} position={[0, 0.04, 0]} castShadow>
                <sphereGeometry args={[0.08, 24, 24]} />
                <meshStandardMaterial color="#4a3520" roughness={0.95} emissive="#3a2812" emissiveIntensity={0.08} />
            </mesh>
            <mesh ref={stemRef} castShadow>
                <cylinderGeometry args={[0.008, 0.022, 1, 12]} />
                <meshStandardMaterial color="#5d8855" roughness={0.85} emissive="#2a4528" emissiveIntensity={0.04} />
            </mesh>
            <mesh ref={tipRef} position={[0, 0.2, 0]} castShadow>
                <sphereGeometry args={[0.015, 12, 12]} />
                <meshStandardMaterial color="#7db870" roughness={0.8} emissive="#4a7a42" emissiveIntensity={0.06} />
            </mesh>
            <Leaf refObj={leafL} geometry={leafGeo} color="#5a9050" />
            <Leaf refObj={leafR} geometry={leafGeo} color="#4f8545" />
            <Leaf refObj={leafB} geometry={leafGeo} color="#55924c" />
        </group>
    );
}

function Leaf({ refObj, geometry, color }) {
    const tex = useMemo(() => {
        const s = 128, c = document.createElement("canvas");
        c.width = s; c.height = s;
        const ctx = c.getContext("2d");
        ctx.fillStyle = color;
        ctx.fillRect(0, 0, s, s);
        ctx.strokeStyle = "rgba(30, 50, 25, 0.4)";
        ctx.lineWidth = 0.8;
        ctx.beginPath(); ctx.moveTo(s / 2, 0); ctx.lineTo(s / 2, s); ctx.stroke();
        for (let y = 12; y < s; y += 16) {
            ctx.beginPath(); ctx.moveTo(s / 2, y);
            ctx.bezierCurveTo(s / 2 + 18, y - 5, s / 2 + 35, y - 3, s / 2 + 50, y - 7);
            ctx.stroke();
            ctx.beginPath(); ctx.moveTo(s / 2, y);
            ctx.bezierCurveTo(s / 2 - 18, y - 5, s / 2 - 35, y - 3, s / 2 - 50, y - 7);
            ctx.stroke();
        }
        return new THREE.CanvasTexture(c);
    }, [color]);

    return (
        <mesh ref={refObj} geometry={geometry} castShadow>
            <meshStandardMaterial
                map={tex} color={color} roughness={0.82}
                emissive="#15240f" emissiveIntensity={0.03} side={THREE.DoubleSide}
            />
        </mesh>
    );
}

/* ═══════════════════════════════════════════════════════════════════════════
   ROOT SYSTEM + HUB NODES
   ═══════════════════════════════════════════════════════════════════════════ */

function RootSystem() {
    const mainCurves = useMemo(() => buildMainRoots(), []);
    const fineCurves = useMemo(() => buildFineRoots(), []);
    const webCurves = useMemo(() => buildMycelium(), []);

    const nodes = [
        { title: "Hub One", href: "/hub-one", pos: [-1.6, -3.2, 0.3], color: "#6bcf8e" },
        { title: "Hub Two", href: "/hub-two", pos: [1.5, -4.0, 0.2], color: "#58c4d4" },
        { title: "Hub Three", href: "/hub-three", pos: [-0.8, -5.0, 0.6], color: "#a88ee0" },
        { title: "Hub Four", href: "/hub-four", pos: [1.0, -5.6, 0.5], color: "#e0b85e" },
    ];

    return (
        <group>
            {mainCurves.map((c, i) => <Root key={`m${i}`} curve={c} i={i} r={0.022} />)}
            {fineCurves.map((c, i) => <Root key={`f${i}`} curve={c} i={i} r={0.006} fine />)}
            <MyceliumWeb curves={webCurves} />
            {nodes.map((n, i) => <HubNode key={i} {...n} delay={i * 0.04} />)}
        </group>
    );
}

function Root({ curve, i, r, fine = false }) {
    const barkRef = useRef();
    const glowRef = useRef();

    useFrame(() => {
        const reveal = smoothstep(0.1, 0.75, scrollCtx.offset);
        if (barkRef.current) barkRef.current.opacity = (fine ? 0.05 : 0.1) + reveal * (fine ? 0.45 : 0.85);
        if (glowRef.current) {
            glowRef.current.opacity = 0.01 + reveal * (fine ? 0.06 : 0.15);
            glowRef.current.emissiveIntensity = 0.02 + reveal * (fine ? 0.05 : 0.1);
        }
    });

    const ts = fine ? 20 : 40, rs = fine ? 4 : 8;

    return (
        <group>
            <Tube args={[curve, ts, r + (i % 3) * 0.004, rs, false]}>
                <meshStandardMaterial ref={barkRef} color={fine ? "#382e22" : "#4a3d30"} roughness={0.96} transparent opacity={0.8} />
            </Tube>
            <Tube args={[curve, ts, r * 0.3 + (i % 2) * 0.001, Math.max(rs - 2, 3), false]}>
                <meshStandardMaterial ref={glowRef} color="#0f1e14" emissive="#5dbd78" emissiveIntensity={0.04} roughness={1} transparent opacity={0.05} />
            </Tube>
        </group>
    );
}

function MyceliumWeb({ curves }) {
    const gRef = useRef();
    useFrame(() => {
        const reveal = smoothstep(0.25, 0.85, scrollCtx.offset);
        if (!gRef.current) return;
        gRef.current.children.forEach((c) => {
            if (c.material) {
                c.material.opacity = reveal * 0.22;
                c.material.emissiveIntensity = reveal * 0.1;
            }
        });
    });

    return (
        <group ref={gRef}>
            {curves.map((c, i) => (
                <Tube key={i} args={[c, 14, 0.002, 3, false]}>
                    <meshStandardMaterial color="#1a2e1e" emissive="#88dda2" emissiveIntensity={0} roughness={1} transparent opacity={0} />
                </Tube>
            ))}
        </group>
    );
}

function HubNode({ pos, title, href, delay, color }) {
    const router = useRouter();
    const [hover, setHover] = useState(false);
    const shellRef = useRef();
    const coreRef = useRef();
    const ringRef = useRef();

    useFrame((state, delta) => {
        const t = scrollCtx.offset;
        const appear = smoothstep(0.28 + delay, 0.82 + delay, t);
        const pulse = 1 + Math.sin(state.clock.elapsedTime * 1.4 + pos[0] * 2) * 0.035;

        if (shellRef.current) {
            const s = (0.15 + appear * 0.55 + (hover ? 0.05 : 0)) * pulse;
            shellRef.current.scale.setScalar(THREE.MathUtils.damp(shellRef.current.scale.x, s, 4, delta));
            shellRef.current.material.opacity = THREE.MathUtils.damp(shellRef.current.material.opacity, 0.1 + appear * 0.5, 3, delta);
        }
        if (coreRef.current) {
            const s = 0.1 + appear * 0.42 + (hover ? 0.05 : 0);
            coreRef.current.scale.setScalar(THREE.MathUtils.damp(coreRef.current.scale.x, s, 4, delta));
            coreRef.current.rotation.y += delta * 0.25;
            coreRef.current.rotation.x += delta * 0.1;
        }
        if (ringRef.current) {
            ringRef.current.material.opacity = THREE.MathUtils.damp(
                ringRef.current.material.opacity, appear * (hover ? 0.35 : 0.08), 3, delta
            );
            ringRef.current.rotation.z += delta * 0.15;
        }
    });

    return (
        <Float speed={0.6} rotationIntensity={0.02} floatIntensity={0.06}>
            <group position={pos}>
                <mesh ref={shellRef}>
                    <icosahedronGeometry args={[0.38, 1]} />
                    <meshStandardMaterial
                        color="#101812" roughness={0.92} metalness={0.03}
                        emissive={color} emissiveIntensity={0.03}
                        transparent opacity={0.4}
                    />
                </mesh>
                <mesh ref={coreRef}
                    onClick={() => router.push(href)}
                    onPointerEnter={() => { setHover(true); document.body.style.cursor = "pointer"; }}
                    onPointerLeave={() => { setHover(false); document.body.style.cursor = "auto"; }}
                >
                    <octahedronGeometry args={[0.16, 0]} />
                    <meshStandardMaterial
                        color={color} roughness={0.25} metalness={0.12}
                        emissive={color} emissiveIntensity={hover ? 0.65 : 0.25}
                    />
                </mesh>
                <mesh ref={ringRef} rotation={[Math.PI / 2, 0, 0]}>
                    <ringGeometry args={[0.4, 0.44, 40]} />
                    <meshBasicMaterial color={color} transparent opacity={0} side={THREE.DoubleSide} />
                </mesh>
                {hover && (
                    <Html center distanceFactor={6}>
                        <div
                            className="rounded-full border px-3 py-1 text-[11px] text-white backdrop-blur-sm shadow-lg whitespace-nowrap pointer-events-none"
                            style={{
                                borderColor: `${color}44`,
                                background: `linear-gradient(135deg, rgba(10,18,12,0.9), rgba(16,26,18,0.85))`,
                                boxShadow: `0 0 16px ${color}22`,
                            }}
                        >
                            {title}
                        </div>
                    </Html>
                )}
            </group>
        </Float>
    );
}

/* ═══════════════════════════════════════════════════════════════════════════
   PARTICLES
   ═══════════════════════════════════════════════════════════════════════════ */

function Fireflies() {
    const data = useMemo(() =>
        Array.from({ length: 30 }).map(() => ({
            x: THREE.MathUtils.randFloatSpread(5),
            y: THREE.MathUtils.randFloat(0.1, 2.5),
            z: THREE.MathUtils.randFloatSpread(4),
            size: THREE.MathUtils.randFloat(0.006, 0.018),
            speed: THREE.MathUtils.randFloat(0.12, 0.35),
            phase: Math.random() * Math.PI * 2,
        })), []);

    return <group>{data.map((p, i) => <Fly key={i} {...p} />)}</group>;
}

function Fly({ x, y, z, size, speed, phase }) {
    const ref = useRef();
    useFrame(({ clock }) => {
        if (!ref.current) return;
        const t = clock.getElapsedTime() * speed;
        ref.current.position.x = x + Math.sin(t + phase) * 0.07;
        ref.current.position.y = y + Math.sin(t * 0.6 + phase * 2) * 0.05;
        ref.current.position.z = z + Math.cos(t * 0.4 + phase) * 0.04;
        ref.current.material.opacity = 0.04 + Math.sin(t * 2 + phase) * 0.04;
    });
    return (
        <mesh ref={ref} position={[x, y, z]}>
            <sphereGeometry args={[size, 6, 6]} />
            <meshBasicMaterial color="#d8f0dc" transparent opacity={0.06} />
        </mesh>
    );
}

function UndergroundGlow() {
    const gRef = useRef();
    const data = useMemo(() =>
        Array.from({ length: 45 }).map(() => ({
            x: THREE.MathUtils.randFloatSpread(6),
            y: THREE.MathUtils.randFloat(-6.5, -1.0),
            z: THREE.MathUtils.randFloatSpread(4),
            size: THREE.MathUtils.randFloat(0.01, 0.03),
            speed: THREE.MathUtils.randFloat(0.15, 0.45),
            phase: Math.random() * Math.PI * 2,
        })), []);

    useFrame(({ clock }) => {
        if (!gRef.current) return;
        const reveal = smoothstep(0.15, 0.65, scrollCtx.offset);
        gRef.current.children.forEach((ch, i) => {
            if (!ch.material) return;
            ch.material.opacity = reveal * 0.1;
            const p = data[i];
            if (!p) return;
            const t = clock.getElapsedTime() * p.speed;
            ch.position.x = p.x + Math.sin(t + p.phase) * 0.05;
            ch.position.y = p.y + Math.cos(t * 0.7 + p.phase * 1.5) * 0.06;
        });
    });

    return (
        <group ref={gRef}>
            {data.map((p, i) => (
                <mesh key={i} position={[p.x, p.y, p.z]}>
                    <sphereGeometry args={[p.size, 6, 6]} />
                    <meshBasicMaterial color="#6dd898" transparent opacity={0} />
                </mesh>
            ))}
        </group>
    );
}

/* ═══════════════════════════════════════════════════════════════════════════
   CURVE BUILDERS
   ═══════════════════════════════════════════════════════════════════════════ */

function makeCurve(pts) {
    return new THREE.CatmullRomCurve3(pts.map(p => new THREE.Vector3(...p)), false, "catmullrom", 0.45);
}

function buildMainRoots() {
    return [
        [[0, -0.02, 0], [-0.1, -0.5, 0.02], [-0.3, -1.1, 0.02], [-0.7, -1.8, 0.04], [-1.1, -2.5, 0.1], [-1.6, -3.2, 0.3]],
        [[0, -0.02, 0], [0.1, -0.55, 0.02], [0.3, -1.15, 0.0], [0.7, -1.9, 0.02], [1.1, -2.9, 0.06], [1.5, -4.0, 0.2]],
        [[-0.35, -1.0, 0.02], [-0.65, -1.6, 0.18], [-0.8, -2.3, 0.35], [-0.85, -3.2, 0.5], [-0.82, -4.1, 0.55], [-0.8, -5.0, 0.6]],
        [[0.3, -1.1, 0.02], [0.55, -1.7, 0.14], [0.75, -2.4, 0.3], [0.9, -3.3, 0.4], [0.95, -4.4, 0.48], [1.0, -5.6, 0.5]],
        [[-0.7, -1.8, 0.04], [-1.1, -2.4, -0.04], [-1.35, -3.1, 0.02], [-1.3, -3.8, 0.2], [-1.05, -4.4, 0.4], [-0.8, -5.0, 0.6]],
        [[0.7, -1.9, 0.02], [1.1, -2.5, -0.02], [1.35, -3.3, 0.04], [1.35, -4.1, 0.18], [1.15, -4.8, 0.38], [1.0, -5.6, 0.5]],
        [[0.02, -0.4, 0.0], [0.0, -1.0, -0.1], [0.05, -1.8, -0.15], [0.35, -2.6, -0.08], [0.9, -3.3, 0.04], [1.5, -4.0, 0.2]],
        [[-0.04, -0.4, 0.02], [-0.06, -1.1, 0.08], [-0.18, -1.9, 0.2], [-0.38, -2.8, 0.35], [-0.62, -3.8, 0.5], [-0.8, -5.0, 0.6]],
    ].map(makeCurve);
}

function buildFineRoots() {
    return [
        [[-0.7, -1.8, 0.04], [-1.0, -2.1, 0.25], [-1.3, -2.4, 0.4], [-1.4, -2.8, 0.3]],
        [[0.7, -1.9, 0.02], [0.9, -2.3, -0.1], [1.1, -2.7, -0.22], [1.2, -3.1, -0.1]],
        [[-1.1, -2.5, 0.1], [-1.4, -2.8, -0.08], [-1.7, -3.1, -0.18], [-1.9, -3.4, -0.06]],
        [[1.1, -2.9, 0.06], [1.35, -3.2, 0.2], [1.55, -3.6, 0.32], [1.65, -3.9, 0.25]],
        [[-0.65, -1.6, 0.18], [-0.9, -1.85, 0.35], [-1.1, -2.1, 0.45], [-1.2, -2.4, 0.35]],
        [[0.55, -1.7, 0.14], [0.4, -2.0, 0.3], [0.28, -2.3, 0.38], [0.16, -2.6, 0.3]],
        [[-0.85, -3.2, 0.5], [-0.68, -3.5, 0.68], [-0.5, -3.8, 0.78], [-0.35, -4.1, 0.65]],
        [[0.9, -3.3, 0.4], [1.1, -3.6, 0.55], [1.2, -3.9, 0.65], [1.25, -4.2, 0.55]],
        [[-1.6, -3.2, 0.3], [-1.85, -3.5, 0.12], [-2.05, -3.8, -0.02], [-2.15, -4.1, 0.1]],
        [[1.5, -4.0, 0.2], [1.75, -4.3, 0.05], [1.92, -4.6, -0.08], [1.98, -4.9, 0.06]],
    ].map(makeCurve);
}

function buildMycelium() {
    return [
        [[-1.6, -3.2, 0.3], [-1.2, -3.4, 0.3], [-0.5, -3.7, 0.4], [0.2, -3.8, 0.35], [0.8, -3.9, 0.25], [1.5, -4.0, 0.2]],
        [[-0.8, -5.0, 0.6], [-0.3, -4.9, 0.55], [0.2, -5.1, 0.5], [0.6, -5.2, 0.5], [1.0, -5.6, 0.5]],
        [[-1.6, -3.2, 0.3], [-1.4, -3.7, 0.4], [-1.1, -4.3, 0.5], [-0.8, -5.0, 0.6]],
        [[1.5, -4.0, 0.2], [1.35, -4.4, 0.3], [1.2, -5.0, 0.4], [1.0, -5.6, 0.5]],
        [[-1.2, -3.3, 0.35], [-0.4, -4.0, 0.45], [0.3, -4.6, 0.4], [1.2, -4.2, 0.28]],
    ].map(makeCurve);
}

/* ═══════════════════════════════════════════════════════════════════════════
   MATH
   ═══════════════════════════════════════════════════════════════════════════ */

function smoothstep(min, max, val) {
    const x = Math.max(0, Math.min(1, (val - min) / (max - min)));
    return x * x * (3 - 2 * x);
}

function easeInOut(x) {
    return x < 0.5 ? 4 * x * x * x : 1 - Math.pow(-2 * x + 2, 3) / 2;
}