/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'

export function CompressedTurn(props) {
  const { nodes, materials } = useGLTF('/compressed.glb')

  const spinnyRight = useRef()
  const spinnyLeft = useRef()

  // rotate the turnable items
  useFrame(() => {
    if (spinnyRight.current) {
        spinnyRight.current.rotation.y += 0.005
    }
})

  const allMaterials = Object.values(materials)
    allMaterials.forEach((material) => {
        console.log(material.name);
        if (material.name === "edge_color123118118255") {
            // console.log('targeted material', material);
            material.color.set('red')
            material.emissive.set('blue')
            material.emissiveIntensity = 2.5
        } else if (material.name === "Red Light") {
            material.color.set('red')
            material.emissive.set('purple')
            material.emissiveIntensity = 1.5
        }
    })

  // Log all of the nodes of the model
  console.log(nodes);

    const turntableHover = (e, partName) => {
        e.stopPropagation()
        console.log(`Hovering over ${partName}`);
    }

    const turntableHoverEnd = (e, partName) => {
        e.stopPropagation()
        console.log(`No longer hovering over ${partName}`)
    }

    
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Platter_2.geometry}
        material={materials['Main.001']}
        position={[1.407, 0.099, -0.093]}
        ref={spinnyRight}
        onPointerOver={(e) => turntableHover(e, ' Right Platter')}
        onPointerOut={(e) => turntableHoverEnd(e, 'Right Platter')}
      />
      <group
        position={[-1.317, -0.134, -1.3]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[-0.037, -0.055, -0.037]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder028.geometry}
          material={materials.Material}
          onPointerOver={(e) => turntableHover(e, 'Left Platter')}
        onPointerOut={(e) => turntableHoverEnd(e, 'Left Platter')}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder028_1.geometry}
          material={materials['Metal01.002']}
          onPointerOver={(e) => turntableHover(e, 'Left yeet')}
        onPointerOut={(e) => turntableHoverEnd(e, 'Left yeet')}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.MicIn.geometry}
        material={materials['Plastic03.002']}
        position={[-1.645, -0.134, -1.28]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[-0.053, -0.08, -0.053]}
      />
      <mesh castShadow receiveShadow geometry={nodes.Main001.geometry} material={materials.Logo} />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Filter_1.geometry}
        material={materials.PaletteMaterial001}
        position={[-0.314, 0.19, 0.108]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.MicLevel.geometry}
        material={materials.material}
        position={[-1.789, -0.135, -1.292]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={0.636}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Play_1.geometry}
        material={materials.PaletteMaterial002}
        position={[-2.097, 0.108, 1.013]}
        scale={[1.457, 0.092, 1.457]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Sync_1.geometry}
        material={materials.PaletteMaterial003}
        position={[-2.097, 0.108, 0.483]}
        scale={[0.735, 0.046, 0.735]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube019.geometry}
        material={materials.PaletteMaterial002}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube031.geometry}
        material={materials.PaletteMaterial002}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube.geometry}
        material={materials['ddj-sb3-front']}
      />
      <mesh castShadow receiveShadow geometry={nodes.Cube_1.geometry} material={materials.Main} />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder.geometry}
        material={materials['Plastic03.002']}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder_1.geometry}
        material={materials.PaletteMaterial001}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder_2.geometry}
        material={materials.Main}
      />
      <mesh castShadow receiveShadow geometry={nodes.Cube010.geometry} material={materials.Main} />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube010_1.geometry}
        material={materials.PaletteMaterial003}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube001.geometry}
        material={materials['Plastic03.002']}
        position={[0.32, 0.120, 0.610]}
        scale={0.07}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube001_1.geometry}
        material={materials.PaletteMaterial001}
        position={[0.32, 0.120, 0.610]}
        scale={0.07}
      />
    </group>
  )
}

useGLTF.preload('/compressed.glb')
