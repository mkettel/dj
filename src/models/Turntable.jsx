/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef, useState } from 'react'
import { useGLTF, Decal, useTexture, Text3D, Instance } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'
import YouTube from 'react-youtube';
import { useContext } from 'react';
import PlayerContext from '../PlayerContext';

export function Turntable(props) {
    const { nodes, materials } = useGLTF('/SB3.glb')
    const [isHovered, setIsHovered] = useState(false)
    const { togglePlay } = useContext(PlayerContext); // this will give you access to the togglePlay function
    const [isButtonPressed, setIsButtonPressed] = useState(false);
    const { toggleModal } = useContext(PlayerContext); // this will give you access to the toggleModal function
    

    // Get textures
    const texture = useTexture('/images/bonjor.png')

    // UseRef to get access to specific parts of the model
    const spinnyRight = useRef()
    const spinnyLeft = useRef()

    // if isHovered is true then make cursor a pointer
    // console.log(document.body.style);
    if (isHovered) {
        document.body.style.cursor = 'pointer'
    } else {
        document.body.style.cursor = 'auto'
    }

    // rotate the turnable items
    useFrame(() => {
        spinnyRight.current.rotation.y += 0.005
        spinnyLeft.current.rotation.y += 0.005
    })

    const turntableHover = (e, partName) => {
        e.stopPropagation()
        setIsHovered(true)
    }

    const turntableHoverEnd = (e, partName) => {
        e.stopPropagation()
        setIsHovered(false)
        e.object.material.color.set('white')
        const material = e.object.material.color
        // console.log(`No longer hovering over ${partName} ${material}`)
    }

  const playButtonMaterial = new THREE.MeshStandardMaterial({
    color: 'black',
    emissive: 'black',
    // Add any other material properties you want
  });
  

  //get all materials
    const allMaterials = Object.values(materials)
    allMaterials.forEach((material) => {
        // console.log(material.name);
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
    

    // play Button hover cursor
    const playButtonHover = (e) => {
        e.stopPropagation()
        document.body.style.cursor = 'pointer'
    }

    // play Button hover end cursor
    const playButtonHoverEnd = (e) => {
        e.stopPropagation()
        document.body.style.cursor = 'auto'
    }

    // Play Button Click animation
    const handleButtonClick = () => {
        setIsButtonPressed(true);
        setTimeout(() => setIsButtonPressed(false), 200);
        togglePlay();
      };

    const handleModalClick = () => {
        toggleModal();
    }
   

  return (
    <group {...props} dispose={null} >
      <mesh
        ref={spinnyRight}
        geometry={nodes.Platter_2.geometry}
        material={materials['Main.001']}
        position={[1.407, 0.099, -0.093]}
        onPointerOver={(e) => turntableHover(e, 'spinnyRight')}
        onPointerOut={(e) => turntableHoverEnd(e, 'spinnyRight')}
        onClick={handleModalClick}
      >
            <Sticker url="/images/rsvp.png" position={[0, 0.0, 0]} rotation={[Math.PI / 2, 0, 1]} scale={0.55} onClick={handleModalClick} />
            <Sticker url="/images/bday.png" position={[0.32, 0.0, -0.20]} rotation={[Math.PI / 2, 0, -2]} scale={[.5, .10, 1]} onClick={handleModalClick} />
            <Sticker url="/images/lips-trans.png" position={[0.08, 0.0, 0.43]} rotation={[Math.PI / 2, 0, 2.2]} scale={[.25, .20, 1]} />
      </mesh>
      <mesh
        ref={spinnyLeft}
        geometry={nodes.Platter_1.geometry}
        material={materials['Main.001']}
        position={[-1.4, 0.137, -0.093]}
        onPointerOver={(e) => turntableHover(e, 'spinnyRight')}
        onPointerOut={(e) => turntableHoverEnd(e, 'spinnyRight')}
        onClick={handleModalClick}
      >
        <Sticker url="/images/Bonjour.png" position={[0.42, 0, 0]} rotation={[Math.PI / 2, 0, 1.5]} scale={0.22} />
        <Sticker url="/images/rsvp.png" position={[0, 0, 0]} rotation={[Math.PI / 2, 0, 0]} scale={0.55} onClick={handleModalClick} />
      </mesh> 
    
      <group position={[0, 0.19, -0.255]}>
        <mesh
        //  bottom middle knob
          geometry={nodes.Cylinder.geometry}
          material={materials['Plastic03.001']}
        />
        <mesh
          geometry={nodes.Cylinder_1.geometry}
          material={materials.edge_color123118118255}
        />
        <mesh
          geometry={nodes.Cylinder_2.geometry}
          material={materials.Main}
        />
      </group>
      <group position={[0, 0.19, -0.628]}>
        <mesh
          geometry={nodes.Cylinder001.geometry}
          material={materials['Plastic03.001']}
        />
        <mesh
          geometry={nodes.Cylinder001_1.geometry}
          material={materials.edge_color123118118255}
        />
        <mesh
          geometry={nodes.Cylinder001_2.geometry}
          material={materials.Main}
        />
      </group>
      <group position={[0.311, 0.19, -0.628]}>
        <mesh
          geometry={nodes.Cylinder002.geometry}
          material={materials['Plastic03.001']}
        />
        <mesh
          geometry={nodes.Cylinder002_1.geometry}
          material={materials.edge_color123118118255}
        />
        <mesh
          geometry={nodes.Cylinder002_2.geometry}
          material={materials.Main}
        />
      </group>
      <group position={[0.311, 0.19, -0.873]}>
        <mesh
          geometry={nodes.Cylinder003.geometry}
          material={materials['Plastic03.001']}
        />
        <mesh
          geometry={nodes.Cylinder003_1.geometry}
          material={materials.edge_color123118118255}
        />
        <mesh
          geometry={nodes.Cylinder003_2.geometry}
          material={materials.Main}
        />
      </group>
      <group position={[0.311, 0.19, -0.381]}>
        <mesh
          geometry={nodes.Cylinder004.geometry}
          material={materials['Plastic03.001']}
        />
        <mesh
          geometry={nodes.Cylinder004_1.geometry}
          material={materials.edge_color123118118255}
        />
        <mesh
          geometry={nodes.Cylinder004_2.geometry}
          material={materials.Main}
        />
      </group>
      <group position={[0.311, 0.19, -0.139]}>
        <mesh
          geometry={nodes.Cylinder005.geometry}
          material={materials['Plastic03.001']}
        />
        <mesh
          geometry={nodes.Cylinder005_1.geometry}
          material={materials.edge_color123118118255}
        />
        <mesh
          geometry={nodes.Cylinder005_2.geometry}
          material={materials.Main}
        />
      </group>
      <group position={[0.311, 0.19, 0.108]}>
        <mesh
          geometry={nodes.Cylinder006.geometry}
          material={materials['Plastic03.001']}
        />
        <mesh
          geometry={nodes.Cylinder006_1.geometry}
          material={materials.edge_color123118118255}
        />
        <mesh
          geometry={nodes.Cylinder006_2.geometry}
          material={materials.Main}
        />
      </group>
      <group position={[1.493, 0.19, -0.939]}>
        <mesh
          geometry={nodes.Cylinder007.geometry}
          material={materials['Plastic03.001']}
        />
        <mesh
          geometry={nodes.Cylinder007_1.geometry}
          material={materials.edge_color123118118255}
        />
        <mesh
          geometry={nodes.Cylinder007_2.geometry}
          material={materials.Main}
        />
      </group>
      <group position={[-0.314, 0.19, -0.628]}>
        <mesh
          geometry={nodes.Cylinder008.geometry}
          material={materials['Plastic03.001']}
        />
        <mesh
          geometry={nodes.Cylinder008_1.geometry}
          material={materials.edge_color123118118255}
        />
        <mesh
          geometry={nodes.Cylinder008_2.geometry}
          material={materials.Main}
        />
      </group>
      <group position={[-0.314, 0.19, -0.873]}>
        <mesh
          geometry={nodes.Cylinder009.geometry}
          material={materials['Plastic03.001']}
        />
        <mesh
          geometry={nodes.Cylinder009_1.geometry}
          material={materials.edge_color123118118255}
        />
        <mesh
          geometry={nodes.Cylinder009_2.geometry}
          material={materials.Main}
        />
      </group>
      <group position={[-0.314, 0.19, -0.381]}>
        <mesh
          geometry={nodes.Cylinder010.geometry}
          material={materials['Plastic03.001']}
        />
        <mesh
          geometry={nodes.Cylinder010_1.geometry}
          material={materials.edge_color123118118255}
        />
        <mesh
          geometry={nodes.Cylinder010_2.geometry}
          material={materials.Main}
        />
      </group>
      <group position={[-0.314, 0.19, -0.139]}>
        <mesh
          geometry={nodes.Cylinder011.geometry}
          material={materials['Plastic03.001']}
        />
        <mesh
          geometry={nodes.Cylinder011_1.geometry}
          material={materials.edge_color123118118255}
        />
        <mesh
          geometry={nodes.Cylinder011_2.geometry}
          material={materials.Main}
        />
      </group>
      <group position={[-0.314, 0.19, 0.108]}>
        <mesh
          geometry={nodes.Cylinder012.geometry}
          material={materials['Plastic03.001']}
        />
        <mesh
          geometry={nodes.Cylinder012_1.geometry}
          material={materials.edge_color123118118255}
        />
      </group>
      <group position={[-1.327, 0.19, -0.939]}>
        <mesh
          geometry={nodes.Cylinder013.geometry}
          material={materials['Plastic03.001']}
        />
        <mesh
          geometry={nodes.Cylinder013_1.geometry}
          material={materials.edge_color123118118255}
        />
        <mesh
          geometry={nodes.Cylinder013_2.geometry}
          material={materials.Main}
        />
      </group>
      <group position={[-1.789, -0.135, -1.292]} rotation={[-Math.PI / 2, 0, 0]} scale={0.636}>
        <mesh
          geometry={nodes.Cylinder030.geometry}
          material={materials.material}
        />
        <mesh
          geometry={nodes.Cylinder030_1.geometry}
          material={materials['Plastic03.001']}
        />
      </group>
      <group position={[-2.097, 0.108, 1.013]} scale={[1.457, 0.092, 1.457]}>
        <mesh
          geometry={nodes.Cylinder019.geometry}
          material={materials.Main}
        />
        <mesh
          geometry={nodes.Cylinder019_1.geometry}
          material={materials.Black}
        />
      </group>
      <group position={[-2.097, 0.108, 0.741]} scale={[1.457, 0.092, 1.457]}>
        <mesh
          geometry={nodes.Cylinder020.geometry}
          material={materials.Main}
        />
        <mesh
          geometry={nodes.Cylinder020_1.geometry}
          material={materials.Black}
        />
      </group>
      <group position={[-2.097, 0.108, 0.483]} scale={[0.735, 0.046, 0.735]}>
        <mesh
          geometry={nodes.Cylinder021.geometry}
          material={materials.Main}
        />
        <mesh
         // left sync knob
          geometry={nodes.Cylinder021_1.geometry}
          material={materials['Red Light']}
        />
      </group>
      <group position={[-2.096, 0.101, -0.681]} scale={[0.765, 0.065, 0.765]}>
        <mesh
          geometry={nodes.Cylinder022.geometry}
          material={materials.Main}
          
        />
        <mesh
          geometry={nodes.Cylinder022_1.geometry}
          material={materials['Green Light']}
        />
      </group>
      <group position={[-0.725, 0.012, 0.61]}>
        <mesh
          geometry={nodes.Cube010.geometry}
          material={materials.Main}
        />
        <mesh
          geometry={nodes.Cube010_1.geometry}
          material={materials['Red Light']}
        />
      </group>
      <group position={[-1.542, 0.012, 0.61]}>
        <mesh
          geometry={nodes.Cube007.geometry}
          material={materials.Main}
        />
        <mesh
          geometry={nodes.Cube007_1.geometry}
          material={materials['Red Light']}
        />
      </group>
      <group position={[-2.096, 0.012, -1.004]} scale={[0.612, 1, 1]}>
        <mesh
          geometry={nodes.Cube015.geometry}
          material={materials.Main}
        />
        <mesh
          geometry={nodes.Cube015_1.geometry}
          material={materials['Red Light']}
        />
      </group>
      <group position={[-1.856, 0.012, -1.004]} scale={[0.612, 1, 1]}>
        <mesh
          geometry={nodes.Cube016.geometry}
          material={materials.Main}
        />
        <mesh
          geometry={nodes.Cube016_1.geometry}
          material={materials['Red Light']}
        />
      </group>
      <group position={[-1.616, 0.012, -1.004]} scale={[0.612, 1, 1]}>
        <mesh
        
          geometry={nodes.Cube017.geometry}
          material={materials.Main}
        />
        <mesh
          geometry={nodes.Cube017_1.geometry}
          material={materials['Red Light']}
        />
      </group>
      <group position={[-1.8, 0.012, 0.61]}>
        <mesh
          geometry={nodes.Cube006.geometry}
          material={materials.Main}
        />
        <mesh
          geometry={nodes.Cube006_1.geometry}
          material={materials['Red Light']}
        />
      </group>
      <group position={[-1.04, 0.012, -1.004]} scale={[0.612, 1, 1]}>
        <mesh
          geometry={nodes.Cube018.geometry}
          material={materials.Main}
        />
        <mesh
          geometry={nodes.Cube018_1.geometry}
          material={materials['Red Light']}
        />
      </group>
      <mesh
        geometry={nodes.Load.geometry}
        material={materials.Black}
        position={[-0.312, 0.012, -1.169]}
        scale={[0.612, 1, 1]}
      />
      <group position={[-1.282, 0.012, 0.61]}>
        <mesh
          geometry={nodes.Cube008.geometry}
          material={materials.Main}
        />
        <mesh
          geometry={nodes.Cube008_1.geometry}
          material={materials['Red Light']}
        />
      </group>
      <group position={[-1.023, 0.012, 0.61]}>
        <mesh
          geometry={nodes.Cube009.geometry}
          material={materials.Main}
        />
        <mesh
          geometry={nodes.Cube009_1.geometry}
          material={materials['Red Light']}
        />
      </group>
      <mesh
        geometry={nodes.Shift_1.geometry}
        material={materials.Black}
        position={[-2.095, 0.012, 0.243]}
        scale={[0.302, 1, 1.069]}
      />
      <group position={[-0.725, 0.012, 0.42]} scale={[0.612, 1, 1]}>
        <mesh
          geometry={nodes.Cube011.geometry}
          material={materials.Main}
        />
        <mesh
          geometry={nodes.Cube011_1.geometry}
          material={materials['Red Light']}
        />
      </group>
      <group position={[0.726, 0.108, 1.013]} scale={[1.457, 0.092, 1.457]}>
        
        <mesh
          // PLAY / PAUSE BUTTON --------------------------------------------------------------------------------------------------------------------
          geometry={nodes.Cylinder023.geometry}
          // geometry={new THREE.SphereGeometry(0.05, 10, 10)}
          material={playButtonMaterial}
          onClick={handleButtonClick}
          onTouchStart={handleModalClick} // for mobile
          onPointerOver={playButtonHover}
          onPointerOut={playButtonHoverEnd}
          position={[0, isButtonPressed ? -0.30 : 0, 0]}
        />
        <mesh
          geometry={nodes.Cylinder023_1.geometry}
          material={materials.Black}
          position={[0, isButtonPressed ? -0.30 : 0, 0]}
        />
      </group>
      {/* 3D TEXT FOR TOUCH ME */}
      <Text3D 
        font="/bold.blob" 
        scale={[.05, .05, .1]}
        position={[0.66, isButtonPressed ? 0.09 : 0.118, 0.99]}
        rotation={[-Math.PI / 2, 0, 0]}
        >
          TAP
          <meshStandardMaterial color="red" emissive={"blue"} emissiveIntensity={2} />
        </Text3D>
      <Text3D 
        font="/bold.blob" 
        scale={[.05, .05, .1]}
        position={[0.64, isButtonPressed ? 0.09 : 0.118, 1.05]}
        rotation={[-Math.PI / 2, 0, 0]}
        >
          HERE
          <meshStandardMaterial color="red" emissive={"blue"} emissiveIntensity={2} />
        </Text3D>
      <group position={[0.726, 0.108, 0.741]} scale={[1.457, 0.092, 1.457]}>
        <mesh
        // CUE on the right side
          geometry={nodes.Cylinder024.geometry}
          material={materials.Main}
        />
        <mesh
         
          geometry={nodes.Cylinder024_1.geometry}
          material={materials.Black}
        />
      </group>
      <group position={[0.726, 0.108, 0.483]} scale={[0.735, 0.046, 0.735]}>
        <mesh
         // sync right side
          geometry={nodes.Cylinder025.geometry}
          material={materials.Main}
        />
        <mesh
          geometry={nodes.Cylinder025_1.geometry}
          material={materials['Red Light']}
        />
      </group>
      <group position={[0.727, 0.101, -0.681]} scale={[0.765, 0.065, 0.765]}>
        <mesh
          geometry={nodes.Cylinder026.geometry}
          material={materials.Main}
        />
        <mesh
          geometry={nodes.Cylinder026_1.geometry}
          material={materials['Green Light']}
          
        />
      </group>
      <mesh
        geometry={nodes['12x001'].geometry}
        material={materials.Black}
        position={[2.029, 0.012, 0.77]}
        scale={[0.392, 1, 1]}
      />
      <mesh
        geometry={nodes['2x001'].geometry}
        material={materials.Black}
        position={[2.167, 0.012, 0.77]}
        scale={[0.392, 1, 1]}
      />
      <group position={[2.097, 0.012, 0.61]}>
        <mesh
          geometry={nodes.Cube028.geometry}
          material={materials.Main}
          
        />
        <mesh
          geometry={nodes.Cube028_1.geometry}
          material={materials['Red Light']}
        />
      </group>
      <group position={[-0.073, -0.13, 0.128]} scale={[0.326, 2.364, 1.171]}>
        <mesh
          geometry={nodes.Cube021.geometry}
          material={materials.Main}
          
        />
        <mesh
          geometry={nodes.Cube021_1.geometry}
          material={materials['Green Light']}
        />
      </group>
      <group position={[0.071, -0.13, 0.128]} scale={[0.326, 2.364, 1.171]}>
        <mesh
          geometry={nodes.Cube022.geometry}
          material={materials.Main}
          
        />
        <mesh
          geometry={nodes.Cube022_1.geometry}
          material={materials['Green Light']}
        />
      </group>
      <group position={[1.28, 0.012, 0.61]}>
        <mesh
          geometry={nodes.Cube025.geometry}
          material={materials.Main}
        />
        <mesh
          geometry={nodes.Cube025_1.geometry}
          material={materials['Red Light']}
        />
      </group>
      <group position={[0.726, 0.012, -1.004]} scale={[0.612, 1, 1]}>
        <mesh
        
          geometry={nodes.Cube033.geometry}
          material={materials.Main}
        />
        <mesh
          geometry={nodes.Cube033_1.geometry}
          material={materials['Red Light']}
        />
      </group>
      <group position={[0.966, 0.012, -1.004]} scale={[0.612, 1, 1]}>
        <mesh
          geometry={nodes.Cube034.geometry}
          material={materials.Main}
        />
        <mesh
          geometry={nodes.Cube034_1.geometry}
          material={materials['Red Light']}
        />
      </group>
      <group position={[1.206, 0.012, -1.004]} scale={[0.612, 1, 1]}>
        <mesh
          geometry={nodes.Cube035.geometry}
          material={materials.Main}
        />
        <mesh
          geometry={nodes.Cube035_1.geometry}
          material={materials['Red Light']}
        />
      </group>
      <group position={[1.022, 0.012, 0.61]}>
        <mesh
          geometry={nodes.Cube024.geometry}
          material={materials.Main}
        />
        <mesh
          geometry={nodes.Cube024_1.geometry}
          material={materials['Red Light']}
        />
      </group>
      <group position={[1.782, 0.012, -1.004]} scale={[0.612, 1, 1]}>
        <mesh
          geometry={nodes.Cube036.geometry}
          material={materials.Main}
        />
        <mesh
          geometry={nodes.Cube036_1.geometry}
          material={materials['Red Light']}
        />
      </group>
      <group position={[0, -0.043, -0.078]} scale={[0.627, 1.504, 1.051]}>
        <mesh
          geometry={nodes.Cube020.geometry}
          material={materials.Main}
          
        />
        <mesh
          geometry={nodes.Cube020_1.geometry}
          material={materials['Green Light']}
          
        />
      </group>
      <group position={[1.54, 0.012, 0.61]}>
        <mesh
          geometry={nodes.Cube026.geometry}
          material={materials.Main}
        />
        <mesh
          geometry={nodes.Cube026_1.geometry}
          material={materials['Red Light']}
        />
      </group>
      <group position={[1.799, 0.012, 0.61]}>
        <mesh
          geometry={nodes.Cube027.geometry}
          material={materials.Main}
          
        />
        <mesh
          geometry={nodes.Cube027_1.geometry}
          material={materials['Red Light']}
        />
      </group>
      <mesh
        geometry={nodes.Shift001.geometry}
        material={materials.Black}
        position={[0.728, 0.012, 0.243]}
        scale={[0.302, 1, 1.069]}
        
      />
      <group position={[2.097, 0.012, 0.42]} scale={[0.612, 1, 1]}>
        <mesh
          geometry={nodes.Cube029.geometry}
          material={materials.Main}
          
        />
        <mesh
          geometry={nodes.Cube029_1.geometry}
          material={materials['Red Light']}
        />
      </group>
      <mesh
        geometry={nodes['12x'].geometry}
        material={materials.Black}
        position={[-0.793, 0.012, 0.77]}
        scale={[0.392, 1, 1]}
      />
      <mesh
        geometry={nodes['2x'].geometry}
        material={materials.Black}
        position={[-0.655, 0.012, 0.77]}
        scale={[0.392, 1, 1]}
      />
      <mesh
        geometry={nodes.Load_2.geometry}
        material={materials.Black}
        position={[0.313, 0.012, -1.169]}
        scale={[0.612, 1, 1]}
      />
      <group position={[-0.313, 0.132, 0.623]} scale={[0.098, 0.124, 0.044]}>
        <mesh
          geometry={nodes.Cube001.geometry}
          material={materials['Plastic03.001']}
        />
        <mesh
          geometry={nodes.Cube001_1.geometry}
          material={materials.edge_color123118118255}
        />
      </group>
      <group position={[-0.726, 0.132, -0.902]} scale={[0.074, 0.124, 0.044]}>
        <mesh
          geometry={nodes.Cube005.geometry}
          material={materials['Plastic03.001']}
        />
        <mesh
          geometry={nodes.Cube005_1.geometry}
          material={materials.edge_color123118118255}
        />
      </group>
      <group position={[0.313, 0.132, 0.623]} scale={[0.098, 0.124, 0.044]}>
        <mesh
          geometry={nodes.Cube002.geometry}
          material={materials['Plastic03.001']}
          // bottom right slider
        />
        <mesh
          geometry={nodes.Cube002_1.geometry}
          material={materials.edge_color123118118255}
        />
      </group>
      <group
        position={[-0.004, 0.132, 1.114]}
        rotation={[0, -Math.PI / 2, 0]}
        scale={[0.098, 0.124, 0.044]}>
        <mesh
          geometry={nodes.Cube003.geometry}
          material={materials['Plastic03.001']}
        //   Bottom slider
        />
        <mesh
          geometry={nodes.Cube003_1.geometry}
          material={materials.edge_color123118118255}
        />
      </group>
      <group position={[-0.741, 0.132, -0.902]} scale={[0.074, 0.124, 0.044]}>
        <mesh
          geometry={nodes.Cube038.geometry}
          material={materials['Plastic03.001']}
        />
        <mesh
          geometry={nodes.Cube038_1.geometry}
          material={materials.edge_color123118118255}
        />
      </group>
      <group position={[-1.8, 0.012, 1.077]}>
        <mesh
          geometry={nodes.Cube004.geometry}
          material={materials.Black}
        />
        <mesh
          geometry={nodes.Cube004_1.geometry}
          material={materials['Red Light']}
        />
      </group>
      <group position={[-1.8, 0.012, 1.077]}>
        <mesh
          geometry={nodes.Cube039.geometry}
          material={materials.Black}
        />
        <mesh
          geometry={nodes.Cube039_1.geometry}
          material={materials['Red Light']}
        />
      </group>
      <group position={[-1.8, 0.012, 1.077]}>
        <mesh
          geometry={nodes.Cube040.geometry}
          material={materials.Black}
        />
        <mesh
          geometry={nodes.Cube040_1.geometry}
          material={materials['Red Light']}
        />
      </group>
      <group position={[-1.8, 0.012, 1.077]}>
        <mesh
          geometry={nodes.Cube041.geometry}
          material={materials.Black}
          
        />
        <mesh
          geometry={nodes.Cube041_1.geometry}
          material={materials['Red Light']}
        />
      </group>
      <group position={[-1.8, 0.012, 1.077]}>
        <mesh
          geometry={nodes.Cube042.geometry}
          material={materials.Black}
        />
        <mesh
          geometry={nodes.Cube042_1.geometry}
          material={materials['Red Light']}
        />
      </group>
      <group position={[-1.8, 0.012, 1.077]}>
        <mesh
          geometry={nodes.Cube043.geometry}
          material={materials.Black}
        />
        <mesh
          geometry={nodes.Cube043_1.geometry}
          material={materials['Red Light']}
        />
      </group>
      <group position={[-1.8, 0.012, 1.077]}>
        <mesh
          geometry={nodes.Cube044.geometry}
          material={materials.Black}
        />
        <mesh
          geometry={nodes.Cube044_1.geometry}
          material={materials['Red Light']}
        />
      </group>
      <group position={[-1.8, 0.012, 1.077]}>
        <mesh
          geometry={nodes.Cube045.geometry}
          material={materials.Black}
        />
        <mesh
          geometry={nodes.Cube045_1.geometry}
          material={materials['Red Light']}
        />
      </group>
      <group position={[-1.8, 0.012, 1.077]}>
        <mesh
          geometry={nodes.Cube046.geometry}
          material={materials.Black}
        />
        <mesh
          geometry={nodes.Cube046_1.geometry}
          material={materials['Red Light']}
        />
      </group>
      <group position={[-1.8, 0.012, 1.077]}>
        <mesh
          geometry={nodes.Cube047.geometry}
          material={materials.Black}
        />
        <mesh
          geometry={nodes.Cube047_1.geometry}
          material={materials['Red Light']}
        />
      </group>
      <group position={[-1.8, 0.012, 1.077]}>
        <mesh
          geometry={nodes.Cube048.geometry}
          material={materials.Black}
        />
        <mesh
          geometry={nodes.Cube048_1.geometry}
          material={materials['Red Light']}
        />
      </group>
      <group position={[-1.8, 0.012, 1.077]}>
        <mesh
          geometry={nodes.Cube049.geometry}
          material={materials.Black}
        />
        <mesh
          geometry={nodes.Cube049_1.geometry}
          material={materials['Red Light']}
        />
      </group>
      <group position={[-1.8, 0.012, 1.077]}>
        <mesh
          geometry={nodes.Cube050.geometry}
          material={materials.Black}
        />
        <mesh
          geometry={nodes.Cube050_1.geometry}
          material={materials['Red Light']}
        />
      </group>
      <group position={[-1.8, 0.012, 1.077]}>
        <mesh
          geometry={nodes.Cube051.geometry}
          material={materials.Black}
        />
        <mesh
          geometry={nodes.Cube051_1.geometry}
          material={materials['Red Light']}
        />
      </group>
      <group position={[-1.8, 0.012, 1.077]}>
        <mesh
          geometry={nodes.Cube052.geometry}
          material={materials.Black}
        />
        <mesh
          geometry={nodes.Cube052_1.geometry}
          material={materials['Red Light']}
        />
      </group>
      <group position={[-1.8, 0.012, 1.077]}>
        <mesh
          geometry={nodes.Cube053.geometry}
          material={materials.Black}
        />
        <mesh
          geometry={nodes.Cube053_1.geometry}
          material={materials['Red Light']}
        />
      </group>
      <mesh geometry={nodes.Cube.geometry} material={materials.Main} />
      <mesh
        geometry={nodes.Cube_1.geometry}
        material={materials.Material}
      />
      <mesh
        // Bottom
        geometry={nodes.Cube_2.geometry}
        material={materials.Plastic03}
      />
      <mesh
        geometry={nodes.Cube_3.geometry}
        material={materials['ddj-sb3-front']}
      >

        </mesh>
    </group>
  )
}


function Sticker({ url, ...props }) {
    const emoji = useTexture(url)
    return (
      <Decal  {...props}>
        {/* <meshPhysicalMaterial
          transparent
          polygonOffset
          polygonOffsetFactor={-10}
          map={emoji}
          map-flipY={false}
          map-anisotropy={16}
          iridescence={1}
          iridescenceIOR={1}
          iridescenceThicknessRange={[0, 1400]}
          roughness={1}
          clearcoat={0.5}
          metalness={0.75}
          toneMapped={false}
        /> */}
        <meshStandardMaterial
          transparent
          map={emoji}
          map-flipY={false}
          map-anisotropy={16}
          roughness={1}
          toneMapped={false}
          polygonOffset
          polygonOffsetFactor={-10}
          side={THREE.DoubleSide}
        />
      </Decal>
    )
  }

useGLTF.preload('/SB3.glb')
