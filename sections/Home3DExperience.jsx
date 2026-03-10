"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Line, OrbitControls } from "@react-three/drei";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { useRouter } from "next/navigation";

const HUBS = [
  { label: "Educators", href: "/pathway-educators", position: [-1.6, -2.2, -0.4], color: "#c084fc" },
  { label: "Leaders", href: "/pathway-leaders", position: [1.6, -2.4, 0.2], color: "#f59e0b" },
  { label: "Parents", href: "/pathway-parents", position: [-0.6, -2.9, 1.2], color: "#22d3ee" },
  { label: "Learners", href: "/pathway-learners", position: [0.9, -2.8, -1.2], color: "#34d399" },
];

function Scene({ progress }) {
  const router = useRouter();

  const rootPaths = useMemo(
    () => [
      [[0, -0.2, 0], [-0.8, -1.2, -0.2], [-1.6, -2.2, -0.4]],
      [[0, -0.2, 0], [0.9, -1.1, 0.1], [1.6, -2.4, 0.2]],
      [[0, -0.2, 0], [-0.3, -1.7, 0.5], [-0.6, -2.9, 1.2]],
      [[0, -0.2, 0], [0.5, -1.8, -0.7], [0.9, -2.8, -1.2]],
    ],
    []
  );

  useFrame((state) => {
    const p = Math.min(1, Math.max(0, progress));
    state.camera.position.set(0, 1.2 - p * 3.4, 5.5 - p * 1.8);
    state.camera.lookAt(0, 0.5 - p * 2, 0);
  });

  const stemScale = 0.1 + Math.min(progress * 1.8, 1);
  const networkOpacity = Math.max(0, (progress - 0.25) / 0.75);

  return (
    <>
      <color attach="background" args={["#07070a"]} />
      <ambientLight intensity={0.5} />
      <pointLight position={[0, 1.5, 3]} intensity={6} color="#f8fafc" />
      <pointLight position={[0, -2.5, 1]} intensity={4} color="#a78bfa" />

      <mesh position={[0, -3.3, 0]}>
        <boxGeometry args={[12, 4.5, 12]} />
        <meshStandardMaterial color="#120d15" transparent opacity={0.85} />
      </mesh>

      <mesh position={[0, -0.3 + stemScale * 0.8, 0]}>
        <cylinderGeometry args={[0.04, 0.06, 1.8 * stemScale, 12]} />
        <meshStandardMaterial color="#84cc16" emissive="#365314" emissiveIntensity={0.6} />
      </mesh>

      <mesh position={[0, 0.3 + stemScale * 1.2, 0]}>
        <sphereGeometry args={[0.12, 18, 18]} />
        <meshStandardMaterial color="#d9f99d" emissive="#bef264" emissiveIntensity={1.2} />
      </mesh>

      <mesh position={[0.16, stemScale * 0.7, 0]} rotation={[0, 0, -0.5]}>
        <sphereGeometry args={[0.12, 10, 10]} />
        <meshStandardMaterial color="#65a30d" />
      </mesh>
      <mesh position={[-0.16, stemScale * 0.8, 0]} rotation={[0, 0, 0.5]}>
        <sphereGeometry args={[0.1, 10, 10]} />
        <meshStandardMaterial color="#65a30d" />
      </mesh>

      {rootPaths.map((points, i) => (
        <Line
          key={i}
          points={points}
          color="#a78bfa"
          lineWidth={1.3}
          transparent
          opacity={0.15 + networkOpacity * 0.85}
        />
      ))}

      {HUBS.map((hub) => (
        <group key={hub.href}>
          <mesh
            position={hub.position}
            onPointerDown={() => router.push(hub.href)}
            onPointerOver={(e) => (e.stopPropagation(), (document.body.style.cursor = "pointer"))}
            onPointerOut={() => (document.body.style.cursor = "default")}
          >
            <sphereGeometry args={[0.16, 18, 18]} />
            <meshStandardMaterial color={hub.color} emissive={hub.color} emissiveIntensity={1.6} transparent opacity={0.55 + networkOpacity * 0.45} />
          </mesh>
          <mesh position={hub.position} scale={1.8}>
            <sphereGeometry args={[0.16, 14, 14]} />
            <meshBasicMaterial color={hub.color} transparent opacity={0.08 + networkOpacity * 0.16} />
          </mesh>
        </group>
      ))}

      <OrbitControls enabled={false} />
    </>
  );
}

export default function Home3DExperience() {
  const [progress, setProgress] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const onResize = () => setIsMobile(window.innerWidth < 768);
    const onScroll = () => {
      const section = document.getElementById("home-3d");
      if (!section) return;
      const rect = section.getBoundingClientRect();
      const total = section.offsetHeight - window.innerHeight;
      const travelled = Math.min(Math.max(-rect.top, 0), total);
      setProgress(total > 0 ? travelled / total : 0);
    };

    onResize();
    onScroll();
    window.addEventListener("resize", onResize);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("resize", onResize);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <section id="home-3d" className="relative h-[260vh] bg-black text-white">
      <div className="sticky top-0 h-screen">
        {!isMobile ? (
          <Canvas dpr={[1, 1.6]} gl={{ antialias: true, powerPreference: "high-performance" }} camera={{ position: [0, 1.2, 5.5], fov: 50 }}>
            <Scene progress={progress} />
          </Canvas>
        ) : (
          <video className="w-full h-full object-cover" src="/hero.mp4" autoPlay muted loop playsInline />
        )}

        <div className="absolute inset-0 bg-gradient-to-b from-black/35 via-transparent to-black/45 pointer-events-none" />

        <div className="absolute inset-x-0 top-0 p-6 md:p-10 pointer-events-none">
          <h1 className="font-heading text-3xl md:text-6xl font-semibold max-w-4xl mb-3">
            A Scroll-Controlled Journey Through Growth
          </h1>
          <p className="max-w-2xl text-white/90 text-sm md:text-lg">
            Start with a seedling. Scroll to grow upward while travelling underground into a glowing root network.
            Select a node to enter a service hub.
          </p>
        </div>

        <div className="absolute inset-x-0 bottom-8 px-6 md:px-10 flex flex-wrap gap-2 md:gap-3">
          {HUBS.map((hub) => (
            <Link key={hub.href} href={hub.href} className="btn border border-white/40 text-white bg-black/30 backdrop-blur-sm hover:bg-white hover:text-black">
              {hub.label}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
