/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.16 .\public\models\scene.gltf 
*/

import React from 'react'
import { useGLTF, PerspectiveCamera } from '@react-three/drei'

export function Model(props) {
  const { nodes, materials } = useGLTF('/scene.gltf')
  return (
    <group {...props} dispose={null}>
      <group rotation={[0, -Math.PI / 2, 0]}>
        <pointLight intensity={10000} decay={2} position={[14.892, 30.434, -21.045]} rotation={[-1.839, 0.602, 1.932]} />
        <PerspectiveCamera makeDefault={false} far={100} near={0.1} fov={22.895} position={[37.705, 14.675, -43.251]} rotation={[-2.552, 0.687, 2.742]} />
        <mesh geometry={nodes.ocieplenie.geometry} material={materials.Material} />
        <mesh geometry={nodes.strop.geometry} material={materials.Material} />
        <mesh geometry={nodes.sciany_pietro.geometry} material={materials.Material} />
        <mesh geometry={nodes.wspornik.geometry} material={materials.Material} />
        <mesh geometry={nodes.Plane.geometry} material={nodes.Plane.material} position={[-35, 0, -35]} rotation={[Math.PI, -1.183, Math.PI]} scale={70} />
        <mesh geometry={nodes.platew.geometry} material={nodes.platew.material} position={[5.4, 7.69, -0.2]} />
        <mesh geometry={nodes.sciany_parter.geometry} material={materials.Material} />
        <mesh geometry={nodes.stropDachuPlaskiego.geometry} material={materials.Material} />
        <mesh geometry={nodes.dachOcieplenie.geometry} material={materials.Material} />
      </group>
    </group>
  )
}

useGLTF.preload('/scene.gltf')
