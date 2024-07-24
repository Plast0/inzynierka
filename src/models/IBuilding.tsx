import * as THREE from 'three';

export interface IBuilding {  
    onClick: (meshType: string) => void
  }
  
  export interface Nodes {
    Teren_1: THREE.Mesh;
    Teren_2: THREE.Mesh;
    stropDachuPlaskiego_1: THREE.Mesh;
    stropDachuPlaskiego_2: THREE.Mesh;
    stropDachuPlaskiego_3: THREE.Mesh;
    ScianyZewnetrzne_1: THREE.Mesh;
    ScianyZewnetrzne_2: THREE.Mesh;
    ScianyZewnetrzne_3: THREE.Mesh;
    stropNadPiwnica_1: THREE.Mesh;
    stropNadPiwnica_2: THREE.Mesh;
    stropNadPiwnica_3: THREE.Mesh;
    dachSpadowy_1: THREE.Mesh;
    dachSpadowy_2: THREE.Mesh;
    platew: THREE.Mesh;
    krokwie: THREE.Mesh;
    scianyDzialowe_1: THREE.Mesh;
    scianyDzialowe_2: THREE.Mesh;
    okna: THREE.Mesh;
    strop_1: THREE.Mesh;
    strop_2: THREE.Mesh;
    ScianyFundamentowe_1: THREE.Mesh;
    ScianyFundamentowe_2: THREE.Mesh;
    ScianyFundamentowe_3: THREE.Mesh;
    PlytaFundamentowa_1: THREE.Mesh;
    PlytaFundamentowa_2: THREE.Mesh;
    StropNadwieszony_1: THREE.Mesh;
    StropNadwieszony_2: THREE.Mesh;
    StropNadwieszony_3: THREE.Mesh;
    scianaAttykowa_1: THREE.Mesh;
    scianaAttykowa_2: THREE.Mesh;
  }
  
 export interface Materials {
    Ziemia: THREE.Material;
    Trwa: THREE.Material;
    Bryla: THREE.Material;
    Konstrukcja: THREE.Material;
    Styropian: THREE.Material;
    Welna: THREE.Material;
    Dzialowa: THREE.Material;
    Szklo: THREE.Material;
  }