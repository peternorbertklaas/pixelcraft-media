'use client'
import { useRef, useMemo, useEffect, useState } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import * as THREE from 'three'
import dynamic from 'next/dynamic'

/* ============================================================
   CONSTANTS
   ============================================================ */
const COLS = 50
const ROWS = 30
const COUNT = COLS * ROWS
const SPACING = 0.4
const REPEL_RADIUS = 1.5
const IDLE_AMPLITUDE = 0.02

/* ============================================================
   PARTICLE MESH — inner component, runs inside <Canvas>
   ============================================================ */
function ParticleMesh() {
  const meshRef = useRef<THREE.InstancedMesh>(null!)
  const mouse3D = useRef(new THREE.Vector3(99999, 99999, 0))
  const { size, camera } = useThree()

  // Pre-compute grid base positions
  const basePositions = useMemo(() => {
    const positions: THREE.Vector3[] = []
    const offsetX = ((COLS - 1) * SPACING) / 2
    const offsetY = ((ROWS - 1) * SPACING) / 2
    for (let r = 0; r < ROWS; r++) {
      for (let c = 0; c < COLS; c++) {
        positions.push(
          new THREE.Vector3(c * SPACING - offsetX, r * SPACING - offsetY, 0)
        )
      }
    }
    return positions
  }, [])

  // Working matrix + color helpers (reused every frame)
  const dummy = useMemo(() => new THREE.Object3D(), [])
  const colorDim = useMemo(() => new THREE.Color('#FF4D00').multiplyScalar(0.3), [])
  const colorBright = useMemo(() => new THREE.Color('#FF4D00'), [])

  // Handle mouse movement → project to world space
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // NDC coords
      const ndcX = (e.clientX / window.innerWidth) * 2 - 1
      const ndcY = -(e.clientY / window.innerHeight) * 2 + 1
      const vec = new THREE.Vector3(ndcX, ndcY, 0.5)
      vec.unproject(camera)
      vec.sub(camera.position).normalize()
      const distance = -camera.position.z / vec.z
      mouse3D.current.copy(camera.position).addScaledVector(vec, distance)
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [camera])

  useFrame(({ clock }) => {
    if (!meshRef.current) return
    const t = clock.getElapsedTime()

    for (let i = 0; i < COUNT; i++) {
      const base = basePositions[i]
      const dx = base.x - mouse3D.current.x
      const dy = base.y - mouse3D.current.y
      const dist = Math.sqrt(dx * dx + dy * dy)

      // Idle breathing
      const idleZ = Math.sin(t * 0.8 + base.x * 0.5 + base.y * 0.3) * IDLE_AMPLITUDE

      let px = base.x
      let py = base.y
      let scale = 1

      if (dist < REPEL_RADIUS) {
        const force = (1 - dist / REPEL_RADIUS) * 0.6
        px += (dx / (dist + 0.001)) * force * -1
        py += (dy / (dist + 0.001)) * force * -1
        scale = 1 + (1 - dist / REPEL_RADIUS) * 1.5
        meshRef.current.setColorAt(i, colorBright)
      } else {
        meshRef.current.setColorAt(i, colorDim)
      }

      dummy.position.set(px, py, idleZ)
      dummy.scale.setScalar(scale)
      dummy.updateMatrix()
      meshRef.current.setMatrixAt(i, dummy.matrix)
    }

    meshRef.current.instanceMatrix.needsUpdate = true
    if (meshRef.current.instanceColor) {
      meshRef.current.instanceColor.needsUpdate = true
    }
  })

  return (
    <instancedMesh ref={meshRef} args={[undefined, undefined, COUNT]}>
      <sphereGeometry args={[0.025, 6, 6]} />
      <meshBasicMaterial vertexColors />
    </instancedMesh>
  )
}

/* ============================================================
   STATIC CSS FALLBACK — for mobile / low-end devices
   ============================================================ */
function StaticDotGrid() {
  return (
    <div
      style={{
        position: 'absolute',
        inset: 0,
        backgroundImage:
          'radial-gradient(circle, rgba(255,77,0,0.20) 1px, transparent 1px)',
        backgroundSize: '32px 32px',
        pointerEvents: 'none',
      }}
      aria-hidden="true"
    />
  )
}

/* ============================================================
   CANVAS WRAPPER
   ============================================================ */
function ParticleGridInner() {
  const [isLowEnd, setIsLowEnd] = useState(false)

  useEffect(() => {
    // Detect mobile or devices that hint at low hardware concurrency
    const isMobile = /Mobi|Android|iPhone|iPad/i.test(navigator.userAgent)
    const isLowCPU = navigator.hardwareConcurrency !== undefined && navigator.hardwareConcurrency <= 2
    setIsLowEnd(isMobile || isLowCPU)
  }, [])

  if (isLowEnd) {
    return <StaticDotGrid />
  }

  return (
    <Canvas
      style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}
      camera={{ position: [0, 0, 8], fov: 60 }}
      dpr={[1, 1.5]}
      gl={{ antialias: false, alpha: true }}
    >
      <ParticleMesh />
    </Canvas>
  )
}

/* ============================================================
   DYNAMIC EXPORT — no SSR
   ============================================================ */
export const ParticleGridCanvas = dynamic(
  () => Promise.resolve(ParticleGridInner),
  {
    ssr: false,
    loading: () => (
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage:
            'radial-gradient(circle, rgba(255,77,0,0.15) 1px, transparent 1px)',
          backgroundSize: '32px 32px',
          pointerEvents: 'none',
        }}
        aria-hidden="true"
      />
    ),
  }
)
