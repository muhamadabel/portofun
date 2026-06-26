import { useMemo, useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { Environment, Lightformer } from '@react-three/drei'
import * as THREE from 'three'

// Bikin geometry bintang 5-sudut yang di-extrude + bevel (glossy).
function useStarGeo(outer = 1.55, inner = 0.66, depth = 0.55) {
  return useMemo(() => {
    const shape = new THREE.Shape()
    const spikes = 5
    for (let i = 0; i < spikes * 2; i++) {
      const r = i % 2 === 0 ? outer : inner
      const a = (i / (spikes * 2)) * Math.PI * 2 - Math.PI / 2
      const x = Math.cos(a) * r
      const y = Math.sin(a) * r
      i === 0 ? shape.moveTo(x, y) : shape.lineTo(x, y)
    }
    shape.closePath()
    const geo = new THREE.ExtrudeGeometry(shape, {
      depth,
      bevelEnabled: true,
      bevelThickness: 0.16,
      bevelSize: 0.16,
      bevelSegments: 4,
      steps: 1,
    })
    geo.center()
    return geo
  }, [outer, inner, depth])
}

function Star({ geo, color, scale = 1, ...props }) {
  return (
    <mesh geometry={geo} scale={scale} {...props}>
      <meshStandardMaterial color={color} metalness={0.35} roughness={0.18} />
    </mesh>
  )
}

export default function Star3D() {
  const big = useRef()
  const mini = useRef()
  const geo = useStarGeo()
  const geoMini = useStarGeo(1.55, 0.66, 0.55)

  useFrame((state, delta) => {
    const t = state.clock.elapsedTime
    if (big.current) {
      big.current.rotation.y += delta * 0.5
      big.current.rotation.x = -0.18 + Math.sin(t * 0.5) * 0.12 + state.pointer.y * 0.12
      big.current.rotation.z = Math.sin(t * 0.3) * 0.08
      big.current.position.y = 0.2 + Math.sin(t * 0.7) * 0.12
    }
    if (mini.current) {
      const a = t * 0.6
      mini.current.position.set(Math.cos(a) * 2.6, 1.6 + Math.sin(a) * 0.5, Math.sin(a) * 1.2)
      mini.current.rotation.y += delta * 1.2
      mini.current.rotation.x += delta * 0.6
    }
  })

  return (
    <>
      <ambientLight intensity={0.55} />
      <directionalLight position={[5, 7, 6]} intensity={1.4} />
      <directionalLight position={[-6, 1, -3]} intensity={0.6} color="#f4b41a" />
      <Environment resolution={256}>
        <Lightformer intensity={2.4} position={[0, 3, 5]} scale={[10, 6, 1]} />
        <Lightformer intensity={1.4} position={[-5, 1, 2]} scale={[6, 8, 1]} color="#fff6e0" />
        <Lightformer intensity={1.2} position={[5, -2, 3]} scale={[6, 6, 1]} color="#bcd0ff" />
      </Environment>

      <group ref={big}>
        <Star geo={geo} color="#1e3ae0" />
      </group>
      <group ref={mini} scale={0.32}>
        <Star geo={geoMini} color="#e85a93" />
      </group>
    </>
  )
}
