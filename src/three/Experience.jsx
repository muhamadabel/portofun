import { Suspense, useEffect, useState } from 'react'
import { Canvas } from '@react-three/fiber'
import Star3D from './Star3D.jsx'

function useIsMobile() {
  const [mobile, setMobile] = useState(
    typeof window !== 'undefined' && window.innerWidth < 760,
  )
  useEffect(() => {
    const onResize = () => setMobile(window.innerWidth < 760)
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])
  return mobile
}

export default function Experience() {
  const mobile = useIsMobile()
  // di mobile: bintang gede & di tengah-atas biar jadi fokus (bukan ngumpet di pojok)
  const pos = mobile ? [0, 1.95, 0] : [2.7, 0.2, 0]
  const scale = mobile ? 0.6 : 1.15

  return (
    <Canvas
      dpr={[1, 1.6]}
      gl={{ antialias: true, alpha: true }}
      camera={{ position: [0, 0, 8], fov: 38, near: 0.1, far: 50 }}
    >
      <Suspense fallback={null}>
        <group position={pos} scale={scale}>
          <Star3D />
        </group>
      </Suspense>
    </Canvas>
  )
}
