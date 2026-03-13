"use client";

import React, { Suspense, useEffect, useMemo, useRef, useState } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Tube, Html, Float } from "@react-three/drei";
import { EffectComposer, Bloom, Vignette } from "@react-three/postprocessing";
import { useRouter } from "next/navigation";
import * as THREE from "three";
import { motion } from "framer-motion";

/* ─── Shared scroll context ─── */
const scrollCtx = { offset: 0, target: 0 };

/* ═══════════════════════════════════════════════════════════════════════════
   PAGE COMPONENT
   ═══════════════════════════════════════════════════════════════════════════ */

export default function ThreeDExperience() {
    const wrapperRef = useRef(null);

    useEffect(() => {
        const onScroll = () => {
            if (!wrapperRef.current) return;
            const rect = wrapperRef.current.getBoundingClientRect();
            const wrapperHeight = wrapperRef.current.offsetHeight;
            const vh = window.innerHeight;
            scrollCtx.target = Math.max(0, Math.min(1, -rect.top / (wrapperHeight - vh)));
        };
        window.addEventListener("scroll", onScroll, { passive: true });
        onScroll(); // initial measurement
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    // We removed the forced mobile fallback so 3D works on mobile.
    // If you want a fallback for reduced motion, you can bring it back here.

    return (
        <section ref={wrapperRef} className="relative w-full" style={{ height: "600vh" }}>
            <div className="sticky top-0 left-0 w-full h-screen z-0">
                <Canvas
                    dpr={[1, 1.5]}
                    camera={{ position: [0, 1.2, 3.5], fov: 45 }}
                    gl={{
                        antialias: true,
                        powerPreference: "high-performance",
                        toneMapping: THREE.ACESFilmicToneMapping,
                        toneMappingExposure: 1.2,
                    }}
                    shadows
                >
                    <color attach="background" args={["#f0fdf4"]} />
                    <fog attach="fog" args={["#f0fdf4", 4, 18]} />

                    {/* Highly atmospheric lighting for bright theme */}
                    <ambientLight intensity={0.9} color="#ffffff" />

                    <directionalLight
                        position={[4, 6, 3]} intensity={2.0} color="#fff4d0"
                        castShadow shadow-mapSize-width={1024} shadow-mapSize-height={1024}
                    />
                    <directionalLight position={[-4, 3, 2]} intensity={0.6} color="#8ab8a0" />
                    <directionalLight position={[0, -2, -4]} intensity={0.4} color="#d8ae72" />

                    {/* Nodes emit light underground */}
                    <pointLight position={[-1.6, -3.0, 0.3]} intensity={1.2} color="#6bcf8e" distance={8} decay={2} />
                    <pointLight position={[1.5, -3.8, 0.2]} intensity={1.2} color="#58c4d4" distance={8} decay={2} />
                    <pointLight position={[-0.8, -4.6, 0.6]} intensity={1.0} color="#a88ee0" distance={8} decay={2} />
                    <pointLight position={[1.0, -5.2, 0.5]} intensity={1.0} color="#e0b85e" distance={8} decay={2} />

                    <spotLight position={[0.5, 4, 2]} angle={0.4} penumbra={0.8} intensity={2.5} color="#fffcf0" castShadow />
                    <hemisphereLight args={["#d4edd6", "#1c2e20", 0.5]} />

                    <Suspense fallback={null}>
                        <Scene />
                        <EffectComposer disableNormalPass>
                            <Bloom luminanceThreshold={1.2} mipmapBlur intensity={1.5} />
                            <Vignette eskil={false} offset={0.15} darkness={0.5} />
                        </EffectComposer>
                    </Suspense>
                </Canvas>

            </div>

            {/* Non-sticky HUD (Scrolls up and away naturally) */}
            <div className="pointer-events-none absolute top-0 left-0 w-full h-screen z-20 flex items-end justify-between p-6 pb-24 md:p-14 md:pb-20">
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
                    className="max-w-2xl"
                >
                    <motion.p
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.9 }}
                        className="text-[10px] md:text-[12px] uppercase tracking-[0.3em] text-primary font-semibold mb-4 drop-shadow-sm"
                    >
                        Sarvata
                    </motion.p>
                    <h1 className="text-3xl font-bold leading-[1.15] text-foreground md:text-5xl lg:text-7xl tracking-tight drop-shadow-md">
                        Transforming <br /> Educators &<br />
                        <span className="font-extrabold text-primary">Schools, Every Day</span>
                    </h1>
                    <p className="mt-4 md:mt-6 max-w-[90%] md:max-w-xl text-[15px] md:text-[17px] leading-relaxed text-white font-secondary drop-shadow-sm">
                        We partner with schools, educators, and parents to create truly
                        inclusive, learner-centered educational environments.
                    </p>
                </motion.div>

            </div>
        </section>
    );
}

/* ═══════════════════════════════════════════════════════════════════════════
   SCENE & CAMERA
   ═══════════════════════════════════════════════════════════════════════════ */

function Scene() {
    useFrame((state, delta) => {
        // Smoothly interpolate the scroll offset instead of hard snapping
        scrollCtx.offset = THREE.MathUtils.damp(scrollCtx.offset, scrollCtx.target, 3, delta);

        const t = scrollCtx.offset;

        // On mobile/portrait screens, we look slightly higher to balance the vertical stack
        const aspect = state.viewport.aspect;
        const yPush = aspect < 1 ? 0.6 : 0;
        const zPush = aspect < 1 ? 0.8 : 0; // Much gentler Z-push now that seeds are centered

        // Deep descent path  -  camera starts high so ground is at the bottom. 
        const camY = THREE.MathUtils.lerp(1.2, -5.6 + yPush, easeInOut(t));
        const camZ = THREE.MathUtils.lerp(3.5, 3.4 + zPush, easeInOut(Math.min(t * 1.2, 1)));
        const lookY = THREE.MathUtils.lerp(-0.3, -4.8 + yPush, easeInOut(t));

        // Very subtle side drift for panoramic feel
        const driftX = Math.sin(t * Math.PI) * 0.15;

        // Pointer parallax effect
        const pointerX = state.pointer.x * 0.4;
        const pointerY = state.pointer.y * 0.2;

        state.camera.position.x = THREE.MathUtils.damp(state.camera.position.x, driftX + pointerX, 2.5, delta);
        state.camera.position.y = THREE.MathUtils.damp(state.camera.position.y, camY + pointerY, 2.5, delta);
        state.camera.position.z = THREE.MathUtils.damp(state.camera.position.z, camZ, 2.5, delta);
        state.camera.lookAt(driftX * 0.5 + pointerX * 0.5, lookY + pointerY * 0.5, 0);
    });

    return (
        <group>
            <SkyGradient />
            <Ground />
            <RealisticPlant />
            <RootSystem />
            <AtmosphericParticles />
        </group>
    );
}

/* ═══════════════════════════════════════════════════════════════════════════
   SKY BACKGROUND
   ═══════════════════════════════════════════════════════════════════════════ */

function SkyGradient() {
    const skyTex = useMemo(() => {
        const s = 512;
        const c = document.createElement("canvas");
        c.width = s; c.height = s;
        const ctx = c.getContext("2d");

        const grad = ctx.createLinearGradient(0, 0, 0, s);
        grad.addColorStop(0, "#7abced");    // Bright sunny sky blue
        grad.addColorStop(0.3, "#a8d8e0");   // Lighter horizon blue
        grad.addColorStop(0.5, "#d4cdab");   // Warm sunlit ground surface
        grad.addColorStop(0.7, "#8a7556");   // Upper sandy soil layer
        grad.addColorStop(1, "#3d2a15");     // Deep earth
        ctx.fillStyle = grad;
        ctx.fillRect(0, 0, s, s);

        // Strong bright sun burst from above
        const sunLight = ctx.createRadialGradient(s * 0.5, s * 0.1, 10, s * 0.5, 0, s * 0.6);
        sunLight.addColorStop(0, "rgba(255, 250, 220, 0.4)");
        sunLight.addColorStop(0.5, "rgba(255, 240, 180, 0.15)");
        sunLight.addColorStop(1, "rgba(0, 0, 0, 0)");
        ctx.fillStyle = sunLight;
        ctx.fillRect(0, 0, s, s);

        return new THREE.CanvasTexture(c);
    }, []);

    return (
        <mesh>
            <sphereGeometry args={[16, 32, 32]} />
            <meshBasicMaterial map={skyTex} side={THREE.BackSide} />
        </mesh>
    );
}

/* ═══════════════════════════════════════════════════════════════════════════
   GROUND & SOIL
   ═══════════════════════════════════════════════════════════════════════════ */

function Ground() {
    const { diffuse, normal } = useMemo(() => {
        const s = 1024, c = document.createElement("canvas");
        c.width = s; c.height = s;
        const ctx = c.getContext("2d");

        // Bright sunlit sand/soil base
        ctx.fillStyle = "#d5c3a3";
        ctx.fillRect(0, 0, s, s);

        // Procedural dirt noise
        for (let i = 0; i < 25000; i++) {
            const x = Math.random() * s, y = Math.random() * s;
            const lum = 150 + Math.random() * 60; // Brighter sand grains
            ctx.fillStyle = `rgba(${lum + 20},${lum},${lum - 30},${Math.random() * 0.3})`;
            ctx.fillRect(x, y, Math.random() * 2 + 0.5, Math.random() * 2 + 0.5);
        }

        // Moss clusters
        for (let i = 0; i < 1500; i++) {
            const x = Math.random() * s, y = Math.random() * s;
            ctx.beginPath();
            ctx.arc(x, y, Math.random() * 8 + 2, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(60,95,50,${Math.random() * 0.15})`;
            ctx.fill();
        }

        const difTex = new THREE.CanvasTexture(c);
        difTex.wrapS = difTex.wrapT = THREE.RepeatWrapping;
        difTex.repeat.set(3, 3);

        // Normal map generator for bumpiness
        const ns = 512, nc = document.createElement("canvas");
        nc.width = ns; nc.height = ns;
        const nCtx = nc.getContext("2d");
        nCtx.fillStyle = "#8080ff"; // Flat normal
        nCtx.fillRect(0, 0, ns, ns);
        for (let i = 0; i < 8000; i++) {
            const x = Math.random() * ns, y = Math.random() * ns;
            nCtx.fillStyle = `rgb(${128 + (Math.random() - 0.5) * 80},${128 + (Math.random() - 0.5) * 80},255)`;
            nCtx.fillRect(x, y, Math.random() * 3 + 1, Math.random() * 3 + 1);
        }
        const nrmTex = new THREE.CanvasTexture(nc);
        nrmTex.wrapS = nrmTex.wrapT = THREE.RepeatWrapping;
        nrmTex.repeat.set(3, 3);

        return { diffuse: difTex, normal: nrmTex };
    }, []);

    return (
        <group>
            {/* Main Forest Floor */}
            <mesh position={[0, -0.01, 0]} rotation={[-Math.PI / 2, 0, 0]} receiveShadow>
                <circleGeometry args={[8, 128]} />
                <meshStandardMaterial
                    map={diffuse} normalMap={normal}
                    normalScale={new THREE.Vector2(0.8, 0.8)}
                    color="#f0e2c8" roughness={0.95}
                    emissive="#5a4d3c" emissiveIntensity={0.1}
                />
            </mesh>

            {/* Subterranean Layers (creates depth sensation when moving down) */}
            <mesh position={[0, -2, 0]} rotation={[-Math.PI / 2, 0, 0]}>
                <circleGeometry args={[9, 64]} />
                <meshStandardMaterial color="#8a7556" roughness={1} emissive="#3d2a15" emissiveIntensity={0.1} />
            </mesh>
            <mesh position={[0, -4.5, 0]} rotation={[-Math.PI / 2, 0, 0]}>
                <circleGeometry args={[10, 64]} />
                <meshStandardMaterial color="#2d1c0c" roughness={1} emissive="#1a1005" emissiveIntensity={0.1} />
            </mesh>

            <ForestDebris />
        </group>
    );
}

function ForestDebris() {
    const debris = useMemo(() => {
        const arr = [];
        // Pebbles and bark scraps
        for (let i = 0; i < 35; i++) {
            const angle = Math.random() * Math.PI * 2;
            const dist = 0.15 + Math.random() * 2.5; // Avoid dead center
            arr.push({
                pos: [Math.cos(angle) * dist, -0.002, Math.sin(angle) * dist],
                rot: [Math.random() * 3, Math.random() * 3, Math.random() * 3],
                scale: [0.01 + Math.random() * 0.04, 0.005 + Math.random() * 0.01, 0.01 + Math.random() * 0.04],
                color: `hsl(${25 + Math.random() * 20}, ${15 + Math.random() * 15}%, ${18 + Math.random() * 15}%)`
            });
        }
        return arr;
    }, []);

    return (
        <group>
            {debris.map((item, i) => (
                <mesh key={i} position={item.pos} rotation={item.rot} scale={item.scale} castShadow receiveShadow>
                    <dodecahedronGeometry args={[1, 0]} />
                    <meshStandardMaterial color={item.color} roughness={0.9} />
                </mesh>
            ))}
        </group>
    );
}

/* ═══════════════════════════════════════════════════════════════════════════
   HYPER-REALISTIC PLANT
   ═══════════════════════════════════════════════════════════════════════════ */

// Leaf placements: height multiplier (0-1), angle around stem, scale, outward tilt
const LEAF_DATA = [
    { height: 0.35, angle: Math.PI * 0.5, scale: 0.9, tilt: 1.1, flex: 0.3 },       // Right 1
    { height: 0.45, angle: Math.PI * 1.5, scale: 0.95, tilt: 1.0, flex: 0.4 },      // Left 1
    { height: 0.70, angle: Math.PI * 0.5 + 0.15, scale: 0.75, tilt: 0.9, flex: 0.5 }, // Right 2
    { height: 0.80, angle: Math.PI * 1.5 - 0.15, scale: 0.8, tilt: 0.8, flex: 0.6 }   // Left 2
];

function RealisticPlant() {
    const groupRef = useRef();
    const stemRef = useRef();
    const leafRefs = useRef([]);

    // 1. Generate Organic Bent Leaf Geometry (high-detail)
    const leafGeo = useMemo(() => {
        const geo = new THREE.PlaneGeometry(1, 1, 48, 48);
        geo.translate(0, 0.5, 0);
        const pos = geo.attributes.position;

        for (let i = 0; i < pos.count; i++) {
            const x = pos.getX(i);
            const y = pos.getY(i);

            // Asymmetric width envelope  -  real leaves aren't perfectly symmetric
            const asymmetry = 1 + Math.sin(y * 7.3 + 0.5) * 0.06;
            const baseWidth = Math.sin(y * Math.PI) * 0.45 + (1 - y) * 0.03;
            const width = baseWidth * (x > 0 ? asymmetry : (2 - asymmetry));

            // Serrated edge: subtle teeth along the margin
            const edgeDist = Math.abs(x) / 0.5;
            const serration = edgeDist > 0.7 ? Math.sin(y * 60) * 0.015 * edgeDist : 0;

            // Organic Z-bending
            let z = 0;
            z += Math.pow(edgeDist, 2.2) * 0.16;          // Edges curl UP deeply
            z -= Math.pow(y, 1.6) * 0.28;                 // Tip droops DOWN
            z += Math.sin(y * 4.5) * 0.03;                // Gentle wave along length
            z += serration;

            // Subtle twist along the leaf
            const twist = y * 0.08 * Math.sin(y * Math.PI);
            const tx = x * Math.cos(twist) - z * Math.sin(twist);
            const tz = x * Math.sin(twist) + z * Math.cos(twist);

            pos.setXYZ(i, tx * width, y, tz);
        }
        geo.computeVertexNormals();
        return geo;
    }, []);

    // 2. High-res Procedural Canvas Textures (photorealistic)
    const { leafMap, leafNormal, stemMap } = useMemo(() => {
        const s = 2048;
        const cl = document.createElement("canvas"); cl.width = s; cl.height = s;
        const ctxL = cl.getContext("2d");

        // Base color gradient: rich, multi-toned green
        const lGrad = ctxL.createLinearGradient(0, s, 0, 0);
        lGrad.addColorStop(0, "#1d3c18");
        lGrad.addColorStop(0.25, "#2a5a22");
        lGrad.addColorStop(0.5, "#3d7a30");
        lGrad.addColorStop(0.75, "#4a8c3a");
        lGrad.addColorStop(1, "#5da848");
        ctxL.fillStyle = lGrad;
        ctxL.fillRect(0, 0, s, s);

        // Cell-like texture overlay (makes it look microscopically real)
        for (let i = 0; i < 15000; i++) {
            const cx = Math.random() * s, cy = Math.random() * s;
            const r = 3 + Math.random() * 6;
            ctxL.beginPath();
            ctxL.arc(cx, cy, r, 0, Math.PI * 2);
            const shade = Math.random() > 0.5 ? "rgba(80,140,60," : "rgba(20,50,15,";
            ctxL.fillStyle = shade + (Math.random() * 0.08) + ")";
            ctxL.fill();
        }

        // Central midrib (thick spine)
        ctxL.lineWidth = 6;
        ctxL.strokeStyle = "rgba(15,40,12,0.8)";
        ctxL.beginPath();
        ctxL.moveTo(s / 2, s);
        ctxL.bezierCurveTo(s / 2 - 5, s * 0.7, s / 2 + 3, s * 0.3, s / 2, 0);
        ctxL.stroke();

        // Lighter midrib highlight
        ctxL.lineWidth = 2;
        ctxL.strokeStyle = "rgba(100,170,80,0.3)";
        ctxL.beginPath();
        ctxL.moveTo(s / 2 + 1, s);
        ctxL.bezierCurveTo(s / 2 - 4, s * 0.7, s / 2 + 4, s * 0.3, s / 2 + 1, 0);
        ctxL.stroke();

        // Primary veins (thick, curving outward)
        for (let y = 80; y < s - 40; y += 70) {
            const veinLen = 0.38 + Math.random() * 0.12;
            ctxL.lineWidth = 2.5;
            ctxL.strokeStyle = `rgba(25,55,20,${0.4 + Math.random() * 0.2})`;
            // Right vein
            ctxL.beginPath(); ctxL.moveTo(s / 2, y);
            ctxL.bezierCurveTo(s / 2 + s * 0.1, y - 15, s / 2 + s * 0.2, y - 8, s / 2 + s * veinLen, y - 70 - Math.random() * 30);
            ctxL.stroke();
            // Left vein
            ctxL.beginPath(); ctxL.moveTo(s / 2, y);
            ctxL.bezierCurveTo(s / 2 - s * 0.1, y - 15, s / 2 - s * 0.2, y - 8, s / 2 - s * veinLen, y - 70 - Math.random() * 30);
            ctxL.stroke();

            // Secondary veins branching off
            ctxL.lineWidth = 1;
            ctxL.strokeStyle = `rgba(50,90,40,${0.15 + Math.random() * 0.1})`;
            for (let b = 0; b < 3; b++) {
                const bx = s / 2 + (Math.random() - 0.5) * s * 0.3;
                ctxL.beginPath(); ctxL.moveTo(bx, y - b * 15);
                ctxL.lineTo(bx + (Math.random() - 0.5) * 80, y - b * 15 - 30 - Math.random() * 30);
                ctxL.stroke();
            }
        }

        // Subtle edge darkening
        const edgeGrad = ctxL.createRadialGradient(s / 2, s / 2, s * 0.2, s / 2, s / 2, s * 0.55);
        edgeGrad.addColorStop(0, "rgba(0,0,0,0)");
        edgeGrad.addColorStop(1, "rgba(0,0,0,0.1)");
        ctxL.fillStyle = edgeGrad;
        ctxL.fillRect(0, 0, s, s);

        const leafTex = new THREE.CanvasTexture(cl);

        // Leaf Normal Map for surface bumpiness
        const ns = 1024;
        const nc = document.createElement("canvas"); nc.width = ns; nc.height = ns;
        const nCtx = nc.getContext("2d");
        nCtx.fillStyle = "#8080ff";
        nCtx.fillRect(0, 0, ns, ns);
        // Cell bump pattern
        for (let i = 0; i < 6000; i++) {
            const cx = Math.random() * ns, cy = Math.random() * ns;
            nCtx.beginPath();
            nCtx.arc(cx, cy, 2 + Math.random() * 4, 0, Math.PI * 2);
            nCtx.fillStyle = `rgb(${128 + (Math.random() - 0.5) * 40},${128 + (Math.random() - 0.5) * 40},255)`;
            nCtx.fill();
        }
        // Vein ridges on normal map
        nCtx.lineWidth = 3;
        nCtx.strokeStyle = "rgb(100,128,255)";
        for (let y = 40; y < ns; y += 35) {
            nCtx.beginPath(); nCtx.moveTo(ns / 2, y);
            nCtx.lineTo(ns / 2 + 200, y - 40);
            nCtx.stroke();
            nCtx.beginPath(); nCtx.moveTo(ns / 2, y);
            nCtx.lineTo(ns / 2 - 200, y - 40);
            nCtx.stroke();
        }
        const leafNrm = new THREE.CanvasTexture(nc);

        // Stem mapping
        const cs = document.createElement("canvas"); cs.width = 256; cs.height = 512;
        const ctxS = cs.getContext("2d");
        // Base green
        ctxS.fillStyle = "#5c8a4c";
        ctxS.fillRect(0, 0, 256, 512);
        // Fibrous streaks
        for (let i = 0; i < 80; i++) {
            ctxS.fillStyle = `rgba(${25 + Math.random() * 20}, ${40 + Math.random() * 30}, ${15 + Math.random() * 15}, ${Math.random() * 0.18})`;
            ctxS.fillRect(Math.random() * 256, 0, Math.random() * 2 + 0.5, 512);
        }
        // Tiny dots (lenticels)
        for (let i = 0; i < 120; i++) {
            ctxS.beginPath();
            ctxS.arc(Math.random() * 256, Math.random() * 512, 1 + Math.random() * 1.5, 0, Math.PI * 2);
            ctxS.fillStyle = `rgba(90,120,70,${0.1 + Math.random() * 0.15})`;
            ctxS.fill();
        }

        return {
            leafMap: leafTex,
            leafNormal: leafNrm,
            stemMap: new THREE.CanvasTexture(cs)
        };
    }, []);

    // 3. Stem Curvature
    const stemCurve = useMemo(() => new THREE.CatmullRomCurve3([
        new THREE.Vector3(0, 0, 0),
        new THREE.Vector3(0.012, 0.15, 0.008),
        new THREE.Vector3(-0.008, 0.35, -0.012),
        new THREE.Vector3(0.015, 0.6, 0.006),
        new THREE.Vector3(-0.005, 0.8, -0.008),
        new THREE.Vector3(0.003, 1.0, 0.002)
    ]), []);

    // 4. Animation Frame Loop
    useFrame((state, delta) => {
        const time = state.clock.elapsedTime;
        const scroll = scrollCtx.offset;

        const growTarget = smoothstep(0.0, 0.35, scroll);

        if (!groupRef.current.userData.grow) groupRef.current.userData.grow = 0;
        const currentGrow = THREE.MathUtils.damp(groupRef.current.userData.grow, growTarget, 4, delta);
        groupRef.current.userData.grow = currentGrow;

        const maxHeight = 2.4;
        const h = 0.15 + (currentGrow * maxHeight);

        if (stemRef.current) {
            stemRef.current.scale.set(1 + currentGrow * 0.6, h, 1 + currentGrow * 0.6);
        }

        // Wind sway
        const windX = Math.sin(time * 0.9) * 0.04 * currentGrow;
        const windZ = Math.cos(time * 0.7 + 1) * 0.04 * currentGrow;
        groupRef.current.rotation.x = windX;
        groupRef.current.rotation.z = windZ;

        // Animate each leaf
        leafRefs.current.forEach((leaf, idx) => {
            if (!leaf) return;
            const data = LEAF_DATA[idx];

            const startGrowAt = data.height * 0.7;
            const localGrow = smoothstep(startGrowAt, startGrowAt + 0.3, currentGrow);

            const easeScale = easeInOut(localGrow);
            leaf.scale.setScalar(Math.max(0.0001, data.scale * easeScale * (0.1 + currentGrow * 0.45)));

            leaf.position.y = data.height * h * 0.98;

            const flutter = Math.sin(time * 2.5 + idx * 2) * 0.04 * localGrow * data.flex;

            leaf.rotation.y = data.angle;

            const foldDir = -(Math.PI / 2);
            leaf.rotation.x = foldDir + (data.tilt * localGrow) + flutter;
        });
    });

    return (
        <group ref={groupRef}>
            {/* Cluster of 3 highly organic seeds at the base */}
            <group position={[0, 0.02, 0]}>
                <OrganicSeed position={[-0.04, 0.03, 0.03]} rotation={[0.4, 0.2, -0.3]} scale={[1, 1.2, 0.9]} color="#4a2e1b" seedId={1} />
                <OrganicSeed position={[0.05, 0.01, 0.02]} rotation={[-0.2, 0.5, 0.4]} scale={[0.9, 1.1, 1]} color="#543620" seedId={2} />
                <OrganicSeed position={[0.0, 0.04, -0.04]} rotation={[1.1, -0.3, 0.2]} scale={[1.1, 0.9, 1.05]} color="#402615" seedId={3} />
            </group>

            {/* The curved stem */}
            <Tube ref={stemRef} args={[stemCurve, 32, 0.013, 12, false]} castShadow receiveShadow>
                <meshStandardMaterial
                    map={stemMap} color="#84b868" roughness={0.6}
                    emissive="#457030" emissiveIntensity={0.06}
                />
            </Tube>

            {/* Render the dynamically animated leaves */}
            {LEAF_DATA.map((_, i) => (
                <mesh
                    key={i}
                    ref={el => leafRefs.current[i] = el}
                    geometry={leafGeo}
                    castShadow
                    receiveShadow
                >
                    <meshStandardMaterial
                        map={leafMap}
                        normalMap={leafNormal}
                        normalScale={new THREE.Vector2(0.5, 0.5)}
                        color="#ffffff"
                        roughness={0.55}
                        side={THREE.DoubleSide}
                        emissive="#254215"
                        emissiveIntensity={0.04}
                    />
                </mesh>
            ))}
        </group>
    );
}

function OrganicSeed({ position, rotation, scale, color, seedId }) {
    const { geo, seedTex } = useMemo(() => {
        const geometry = new THREE.SphereGeometry(0.06, 64, 64);
        const pos = geometry.attributes.position;

        for (let i = 0; i < pos.count; i++) {
            let x = pos.getX(i);
            let y = pos.getY(i);
            let z = pos.getZ(i);

            // Elongated bean shape
            y *= 1.5;
            z *= 0.55;

            // Taper one end to a point
            if (y > 0) {
                const taper = Math.max(0.2, 1 - y * 5);
                x *= taper;
                z *= taper;
            } else {
                // Slightly rounder bottom
                const bulge = 1 + Math.abs(y) * 1.5;
                x *= Math.min(bulge, 1.15);
                z *= Math.min(bulge, 1.15);
            }

            // Prominent crease/seam
            const seamWidth = 0.012;
            if (Math.abs(z) < seamWidth) {
                const depth = (seamWidth - Math.abs(z)) / seamWidth;
                x -= Math.sign(x) * depth * 0.008;
            }

            // Surface undulations
            const freq = 80 + seedId * 20;
            const bump = Math.sin(x * freq) * Math.cos(y * freq * 0.7) * Math.sin(z * freq * 1.3);
            x += bump * 0.002;
            y += bump * 0.001;
            z += bump * 0.002;

            pos.setXYZ(i, x, y, z);
        }
        geometry.computeVertexNormals();

        // Procedural seed texture
        const s = 512;
        const c = document.createElement("canvas"); c.width = s; c.height = s;
        const ctx = c.getContext("2d");

        // Base warm brown
        const baseGrad = ctx.createLinearGradient(0, 0, 0, s);
        baseGrad.addColorStop(0, "#5a3d22");
        baseGrad.addColorStop(0.3, "#4a2e18");
        baseGrad.addColorStop(0.7, "#3d2210");
        baseGrad.addColorStop(1, "#4e3018");
        ctx.fillStyle = baseGrad;
        ctx.fillRect(0, 0, s, s);

        // Wood-grain longitudinal streaks
        for (let i = 0; i < 100; i++) {
            const xp = Math.random() * s;
            ctx.strokeStyle = `rgba(${60 + Math.random() * 40},${30 + Math.random() * 25},${10 + Math.random() * 15},${0.05 + Math.random() * 0.12})`;
            ctx.lineWidth = 0.5 + Math.random() * 1.5;
            ctx.beginPath();
            ctx.moveTo(xp, 0);
            ctx.bezierCurveTo(xp + (Math.random() - 0.5) * 15, s * 0.33, xp + (Math.random() - 0.5) * 15, s * 0.66, xp + (Math.random() - 0.5) * 10, s);
            ctx.stroke();
        }

        // Seam line
        ctx.strokeStyle = "rgba(25,15,5,0.6)";
        ctx.lineWidth = 3;
        ctx.beginPath();
        ctx.moveTo(s / 2, 0);
        ctx.bezierCurveTo(s / 2 - 3, s * 0.3, s / 2 + 3, s * 0.7, s / 2, s);
        ctx.stroke();

        // Speckles
        for (let i = 0; i < 2000; i++) {
            const sx = Math.random() * s, sy = Math.random() * s;
            ctx.fillStyle = `rgba(${Math.random() > 0.5 ? 80 : 20},${Math.random() * 20},${5},${Math.random() * 0.08})`;
            ctx.fillRect(sx, sy, 1 + Math.random(), 1 + Math.random());
        }

        return { geo: geometry, seedTex: new THREE.CanvasTexture(c) };
    }, [seedId]);

    const matRef = useRef();
    const meshRef = useRef();

    useFrame(({ clock }) => {
        if (matRef.current && meshRef.current) {
            const t = clock.getElapsedTime();
            // Sharp bio-luminescent blink effect shifted slightly per seed
            const blink = Math.pow(Math.abs(Math.sin(t * 1.8 + seedId * 2.5)), 30);
            matRef.current.emissiveIntensity = 0.15 + blink * 4.5;

            // Subtle organic breathing scale effect for realism
            const breath = 1 + Math.sin(t * 1.2 + seedId * 1.5) * 0.03;
            meshRef.current.scale.set(scale[0] * breath, scale[1] * breath, scale[2] * breath);
        }
    });

    return (
        <mesh ref={meshRef} position={position} rotation={rotation} scale={scale} castShadow geometry={geo}>
            <meshStandardMaterial
                ref={matRef}
                map={seedTex}
                color={color}
                roughness={0.85}
                emissive="#94d07b"
                emissiveIntensity={0.15}
            />
        </mesh>
    );
}

/* ═══════════════════════════════════════════════════════════════════════════
   PROCEDURAL ROOT SYSTEM
   ═══════════════════════════════════════════════════════════════════════════ */

// Tightly packed target coordinates for the 3 hub nodes to ensure mobile visibility
const HUB_NODES = [
    { title: "for Educators ", href: "/services/for-educators", pos: [-0.95, -3.2, 0.4], color: "#6bcf8e" },
    { title: "for Leaders ", href: "/services/for-leaders", pos: [0.95, -4.1, 0.2], color: "#58c4d4" },
    { title: "for Parents ", href: "/services/for-parents", pos: [-0.4, -5.0, 0.8], color: "#a88ee0" },
];

function makeSquigglyCurve(start, end, segments, noiseStr = 0.5) {
    const pts = [new THREE.Vector3(...start)];
    const sVec = new THREE.Vector3(...start);
    const eVec = new THREE.Vector3(...end);

    for (let i = 1; i < segments; i++) {
        const t = i / segments;
        const cur = new THREE.Vector3().lerpVectors(sVec, eVec, t);

        // Bulge in the middle, pin at start and end
        const env = Math.sin(t * Math.PI);
        cur.x += (Math.random() - 0.5) * noiseStr * env;
        cur.y += (Math.random() - 0.5) * noiseStr * env * 0.5;
        cur.z += (Math.random() - 0.5) * noiseStr * env;
        pts.push(cur);
    }
    pts.push(eVec);
    return new THREE.CatmullRomCurve3(pts, false, "catmullrom", 0.6);
}

function generateRoots() {
    const mains = [];
    const fines = [];

    // Create thick roots explicitly reaching towards the hub nodes
    HUB_NODES.forEach(node => {
        // 2 main veins per node
        for (let j = 0; j < 2; j++) {
            const ang = Math.random() * Math.PI * 2;
            const r = 0.05 + Math.random() * 0.05;
            const start = [Math.cos(ang) * r, -0.05, Math.sin(ang) * r];
            const end = [
                node.pos[0] + (Math.random() - 0.5) * 0.3,
                node.pos[1] + (Math.random() - 0.5) * 0.2,
                node.pos[2] + (Math.random() - 0.5) * 0.3
            ];
            mains.push(makeSquigglyCurve(start, end, 8 + Math.floor(Math.random() * 4), 0.6));
        }
    });

    // Create chaotic fine roots shooting everywhere downwards
    for (let i = 0; i < 20; i++) {
        const ang = (i / 20) * Math.PI * 2;
        const start = [Math.cos(ang) * 0.1, -0.2 - Math.random() * 0.3, Math.sin(ang) * 0.1];
        const end = [
            Math.cos(ang) * (1 + Math.random() * 1.5),
            -2 - Math.random() * 4,
            Math.sin(ang) * (1 + Math.random() * 1.5)
        ];
        fines.push(makeSquigglyCurve(start, end, 6, 0.8));
    }

    return { mains, fines };
}

function RootSystem() {
    const { mains, fines } = useMemo(() => generateRoots(), []);

    return (
        <group>
            {mains.map((c, i) => <RootTube key={`m${i}`} curve={c} i={i} radius={0.022} />)}
            {fines.map((c, i) => <RootTube key={`f${i}`} curve={c} i={i} radius={0.005} fine />)}

            {HUB_NODES.map((n, i) => <HubNode key={i} {...n} delay={i * 0.03} />)}
        </group>
    );
}

function RootTube({ curve, i, radius, fine = false }) {
    const matRef = useRef();

    useFrame(() => {
        // Roots reveal progressively as user scrolls down
        const reveal = smoothstep(0.1, 0.8, scrollCtx.offset);
        if (matRef.current) {
            matRef.current.opacity = (fine ? 0.02 : 0.08) + reveal * (fine ? 0.4 : 0.85);
            matRef.current.emissiveIntensity = 0.02 + reveal * (fine ? 0.4 : 1.8); // High intensity for bloom
        }
    });

    return (
        <Tube args={[curve, fine ? 16 : 32, radius + (i % 3) * 0.003, fine ? 4 : 8, false]}>
            <meshStandardMaterial
                ref={matRef}
                color={fine ? "#322a1e" : "#453828"}
                emissive="#4ea864"
                roughness={0.9}
                transparent opacity={0.8}
                toneMapped={false}
            />
        </Tube>
    );
}

function HubNode({ pos, title, href, delay, color }) {
    const router = useRouter();
    const [hover, setHover] = useState(false);
    const scaleRef = useRef();

    useFrame((state, delta) => {
        const t = scrollCtx.offset;
        const appear = smoothstep(0.25 + delay, 0.8 + delay, t);

        // Gentle breathing pulse
        const pulse = 1 + Math.sin(state.clock.elapsedTime * 1.5 + pos[0]) * 0.04;

        if (scaleRef.current) {
            const targetScale = (0.2 + appear * 0.8 + (hover ? 0.1 : 0)) * pulse;
            scaleRef.current.scale.setScalar(THREE.MathUtils.damp(scaleRef.current.scale.x, targetScale, 4, delta));
            scaleRef.current.rotation.y += delta * 0.3;
            scaleRef.current.rotation.x += delta * 0.15;

            // Fade in material
            scaleRef.current.children.forEach(ch => {
                if (ch.material) ch.material.opacity = THREE.MathUtils.damp(ch.material.opacity, 0.1 + appear * 0.8, 3, delta);
            });
        }
    });

    return (
        <Float speed={0.8} rotationIntensity={0.02} floatIntensity={0.05}>
            <group position={pos} ref={scaleRef}>
                {/* Translucent hard shell */}
                <mesh>
                    <icosahedronGeometry args={[0.3, 1]} />
                    <meshStandardMaterial color="#111812" roughness={0.8} metalness={0.1} transparent opacity={0.3} emissive={color} emissiveIntensity={0.05} />
                </mesh>

                {/* Glowing dense core (Clickable) */}
                <mesh
                    onClick={() => router.push(href)}
                    onPointerEnter={() => { setHover(true); document.body.style.cursor = "pointer"; }}
                    onPointerLeave={() => { setHover(false); document.body.style.cursor = "auto"; }}
                >
                    <octahedronGeometry args={[0.12, 0]} />
                    <meshStandardMaterial color={color} roughness={0.2} emissive={color} emissiveIntensity={hover ? 6.0 : 2.5} toneMapped={false} />
                </mesh>

                {hover && (
                    <Html center distanceFactor={5} zIndexRange={[100, 0]}>
                        <div className="rounded-full border border-border px-4 py-1.5 text-[12px] font-bold text-foreground backdrop-blur-md shadow-lg pointer-events-none transition-all duration-300 bg-white/90"
                            style={{
                                boxShadow: `0 8px 32px ${color}33`,
                            }}
                        >{title}</div>
                    </Html>
                )}
            </group>
        </Float>
    );
}

/* ═══════════════════════════════════════════════════════════════════════════
   ATMOSPHERIC PARTICLES
   ═══════════════════════════════════════════════════════════════════════════ */

function AtmosphericParticles() {
    // Generate fireflies above ground and spores below ground
    const { sky, earth } = useMemo(() => {
        const s = [], e = [];
        for (let i = 0; i < 40; i++) {
            s.push({
                x: THREE.MathUtils.randFloatSpread(8),
                y: THREE.MathUtils.randFloat(0.1, 3.5),
                z: THREE.MathUtils.randFloatSpread(5),
                sz: THREE.MathUtils.randFloat(0.01, 0.025),
                sp: THREE.MathUtils.randFloat(0.1, 0.3),
                ph: Math.random() * Math.PI * 2,
            });
        }
        for (let i = 0; i < 60; i++) {
            e.push({
                x: THREE.MathUtils.randFloatSpread(8),
                y: THREE.MathUtils.randFloat(-6.5, -0.5),
                z: THREE.MathUtils.randFloatSpread(5),
                sz: THREE.MathUtils.randFloat(0.008, 0.03),
                sp: THREE.MathUtils.randFloat(0.1, 0.4),
                ph: Math.random() * Math.PI * 2,
            });
        }
        return { sky: s, earth: e };
    }, []);

    const skyRef = useRef();
    const earthRef = useRef();

    useFrame(({ clock }) => {
        const t = clock.getElapsedTime();
        const reveal = smoothstep(0.15, 0.65, scrollCtx.offset);

        if (skyRef.current) {
            skyRef.current.children.forEach((mesh, i) => {
                const p = sky[i];
                mesh.position.x = p.x + Math.sin(t * p.sp + p.ph) * 0.1;
                mesh.position.y = p.y + Math.sin(t * p.sp * 0.8 + p.ph * 2) * 0.08;
                mesh.material.opacity = 0.05 + Math.sin(t * 1.5 + p.ph) * 0.3; // Much brighter
            });
        }
        if (earthRef.current) {
            earthRef.current.children.forEach((mesh, i) => {
                const p = earth[i];
                mesh.position.x = p.x + Math.sin(t * p.sp + p.ph) * 0.06;
                mesh.position.y = p.y + Math.cos(t * p.sp * 1.2 + p.ph) * 0.06;
                mesh.material.opacity = reveal * (0.05 + Math.sin(t * 2 + p.ph) * 0.4); // Much brighter
            });
        }
    });

    return (
        <group>
            <group ref={skyRef}>
                {sky.map((p, i) => (
                    <mesh key={`s${i}`} position={[p.x, p.y, p.z]}>
                        <sphereGeometry args={[p.sz, 6, 6]} />
                        <meshBasicMaterial color={[4.0, 4.5, 2.0]} toneMapped={false} transparent opacity={0.1} />
                    </mesh>
                ))}
            </group>
            <group ref={earthRef}>
                {earth.map((p, i) => (
                    <mesh key={`e${i}`} position={[p.x, p.y, p.z]}>
                        <sphereGeometry args={[p.sz, 6, 6]} />
                        <meshBasicMaterial color={[1.5, 4.0, 2.5]} toneMapped={false} transparent opacity={0} />
                    </mesh>
                ))}
            </group>
        </group>
    );
}

/* ═══════════════════════════════════════════════════════════════════════════
   MATH UTILS
   ═══════════════════════════════════════════════════════════════════════════ */

function smoothstep(min, max, val) {
    const x = Math.max(0, Math.min(1, (val - min) / (max - min)));
    return x * x * (3 - 2 * x);
}

function easeInOut(x) {
    return x < 0.5 ? 4 * x * x * x : 1 - Math.pow(-2 * x + 2, 3) / 2;
}