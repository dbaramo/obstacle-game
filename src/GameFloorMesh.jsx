import { RigidBody } from '@react-three/rapier'
import { Base, Geometry, Subtraction } from '@react-three/csg'
import * as THREE from 'three'

THREE.ColorManagement.legacyMode = false

export default function GameFloorMesh({ type }){
    return (
        <RigidBody type='fixed' colliders="trimesh">
            <mesh  receiveShadow>  
                <Geometry>    
                    <Base position={[ 0, -0.1, 0 ]} scale={[4, 0.2, 4]}>
                        <boxGeometry args={[1, 1, 1]} />
                    </Base>
                    
                    <Subtraction scale={5.5}>
                        <icosahedronGeometry args={[0.3, 1 ]}  />
                    </Subtraction>
                </Geometry>
                <meshStandardMaterial color='#FF00B4' />
            </mesh>
        </RigidBody>
    )
}