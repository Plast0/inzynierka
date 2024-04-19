/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.16 .\public\models\scene.gltf 
*/

import { useGLTF } from '@react-three/drei'
import { useEffect, useState } from 'react';
import { MeshBasicMaterial } from 'three';

export function Building({onClick, props}) {
  const { nodes, materials } = useGLTF('./models/scene.gltf');
  const [hovered, hover] = useState(false);
  const defaultMaterial = new MeshBasicMaterial({ color: 0xFF7F7F });

  useEffect(() => {
    document.body.style.cursor = hovered ? 'pointer' : 'auto'
  },[hovered])

  const handlePointerOver = (event, mesh) => {
    event.stopPropagation();
    hover(mesh);
  };

  const handlePointerOut = (event) => {
    event.stopPropagation();
    hover(null);
  };



  return (
    <group {...props} dispose={null}>
      <group rotation={[0, -Math.PI / 2, 0]}>
        <pointLight intensity={10000} decay={2} position={[15, 30.434, -21.045]} rotation={[-1.839, 0.602, 1.932]} />
        {/* <PerspectiveCamera makeDefault={false} far={100} near={0.1} fov={22.895} position={[0,0,0]} rotation={[-2.552, 0.687, 2.742]}  /> */}        
        <mesh 
        geometry={nodes.ocieplenie.geometry} 
        material={hovered === 'ocieplenie' ? defaultMaterial : materials.Material } 
        onClick={(e) => {e.stopPropagation(); console.log("ocieplenie"); onClick('ocieplenie')}}
        onPointerOver={(e) => handlePointerOver(e, 'ocieplenie')}
        onPointerOut={handlePointerOut}
        /> 
        <mesh 
        geometry={nodes.strop.geometry} 
        material={hovered === 'strop' ? defaultMaterial : materials.Material }
        onClick={(e) => {e.stopPropagation(); console.log("strop"); onClick('strop')}}
        onPointerOver={(e) => handlePointerOver(e, 'strop')}
        onPointerOut={handlePointerOut}
        />
        <mesh 
        geometry={nodes.sciany_pietro.geometry} 
        material={hovered === 'sciany_pietro' ? defaultMaterial : materials.Material } 
        onClick={(e) => {e.stopPropagation(); console.log("sciany_pietro"); onClick('sciany_pietro')}}
        onPointerOver={(e) => handlePointerOver(e, 'sciany_pietro')}
        onPointerOut={handlePointerOut}
         />
        <mesh geometry={nodes.wspornik.geometry} material={materials.Material}/>
        <mesh geometry={nodes.Plane.geometry} material={nodes.Plane.material} position={[10, 0, -35]} rotation={[Math.PI, -1.183, Math.PI]} scale={70} />
        <mesh geometry={nodes.platew.geometry} material={nodes.platew.material} position={[5.4, 7.69, -0.2]} />
        <mesh 
        geometry={nodes.sciany_parter.geometry} 
        material={hovered === 'sciany_parter' ? defaultMaterial : materials.Material } 
        onClick={(e) => {e.stopPropagation(); console.log("sciany_parter"); onClick("sciany_parter") }}
        onPointerOver={(e) => handlePointerOver(e, 'sciany_parter')}
        onPointerOut={handlePointerOut}
        />
        <mesh 
        geometry={nodes.stropDachuPlaskiego.geometry} 
        material={hovered === 'stropodach_plaski' ? defaultMaterial : materials.Material } 
        onClick={(e) => {e.stopPropagation(); console.log("stropodach_plaski"); onClick("stropodach_plaski") }}
        onPointerOver={(e) => handlePointerOver(e, 'stropodach_plaski')}
        onPointerOut={handlePointerOut}
        />
        <mesh 
        geometry={nodes.dachOcieplenie.geometry} 
        material={hovered === 'ocieplenie_dach' ? defaultMaterial : materials.Material } 
        onClick={(e) => {e.stopPropagation(); console.log("ocieplenie_dach"); onClick('ocieplenie_dach') }}
        onPointerOver={(e) => handlePointerOver(e, 'ocieplenie_dach')}
        onPointerOut={handlePointerOut}
        />
      </group>
    </group>
  )
}


useGLTF.preload('./models/scene.gltf')