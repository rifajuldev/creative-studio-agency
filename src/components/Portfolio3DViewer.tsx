'use client'

import { Float, MeshDistortMaterial, OrbitControls, PerspectiveCamera, Stage } from '@react-three/drei'
import { Canvas, useFrame } from '@react-three/fiber'
import { Suspense, useRef } from 'react'
import * as THREE from 'three'

function AnimatedSphere() {
  const mesh = useRef<THREE.Mesh>(null)

  useFrame((state) => {
    if (mesh.current) {
      mesh.current.rotation.x = state.clock.getElapsedTime() * 0.2
      mesh.current.rotation.y = state.clock.getElapsedTime() * 0.3
    }
  })

  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={1}>
      <mesh ref={mesh}>
        <sphereGeometry args={[1, 64, 64]} />
        <MeshDistortMaterial
          color="#bca374"
          attach="material"
          distort={0.4}
          speed={3}
          roughness={0.1}
          metalness={0.8}
        />
      </mesh>
    </Float>
  )
}

import { useLanguage } from '../context/LanguageContext'

export default function Portfolio3DViewer() {
  const { t } = useLanguage()

  return (
    <div className="bg-secondary/10 border-border-primary/30 group relative h-[400px] w-full cursor-grab overflow-hidden rounded-[3rem] border active:cursor-grabbing md:h-[600px]">
      <div className="pointer-events-none absolute top-8 left-8 z-10">
        <span className="mb-1 block font-mono text-[9px] font-bold tracking-[0.3em] text-[#bca374] uppercase">
          {t('portfolio.viewer_tag')}
        </span>
        <h3 className="font-display text-xl tracking-tight text-white">{t('portfolio.viewer_title')}</h3>
      </div>

      <div className="pointer-events-none absolute right-8 bottom-8 z-10 text-right">
        <span className="text-secondary/40 block font-mono text-[8px] tracking-widest uppercase">
          {t('portfolio.viewer_interactive')}
        </span>
        <span className="text-secondary text-[10px] font-light">{t('portfolio.viewer_instructions')}</span>
      </div>

      <Suspense
        fallback={
          <div className="flex h-full w-full items-center justify-center">
            <div className="h-8 w-8 animate-spin rounded-full border-2 border-[#bca374] border-t-transparent" />
          </div>
        }
      >
        <Canvas shadows dpr={[1, 2]}>
          <PerspectiveCamera makeDefault position={[0, 0, 5]} fov={50} />
          <Stage environment="city" intensity={0.5} shadows="contact">
            <AnimatedSphere />
          </Stage>
          <OrbitControls
            enableZoom={false}
            autoRotate
            autoRotateSpeed={0.5}
            makeDefault
            minPolarAngle={Math.PI / 4}
            maxPolarAngle={Math.PI / 1.5}
          />
        </Canvas>
      </Suspense>

      {/* Decorative corners */}
      <div className="absolute top-0 left-0 h-[1px] w-20 bg-gradient-to-r from-white/20 to-transparent" />
      <div className="absolute top-0 left-0 h-20 w-[1px] bg-gradient-to-b from-white/20 to-transparent" />
    </div>
  )
}
