import { Canvas } from '@react-three/fiber'
import Experience from './Experience.jsx'
import { KeyboardControls, Stars } from '@react-three/drei'
import Interface from './Interface.jsx'
import Loading from './Loading.jsx'
import TouchDeviceWarning from './TouchDeviceWarning.jsx'
import { Suspense, useState } from 'react'


export default function App() {
    const [loadStatus, chageLoadStatus] = useState(false)
    const touchDevice = ('ontouchstart' in document.documentElement)
    return (
        <Suspense fallback={(<Loading />)}>
            {
            touchDevice === true ? <TouchDeviceWarning /> : 
            <KeyboardControls
                map={[
                    {name: 'forward', keys: ['ArrowUp', 'KeyW']},
                    {name: 'backward', keys: ['ArrowDown', 'KeyS']},
                    {name: 'leftward', keys: ['ArrowLeft', 'KeyA']},
                    {name: 'rightward', keys: ['ArrowRight', 'KeyD']},
                    {name: 'jump', keys: ['Space']}
                ]}
            >
                <Canvas
                    shadows
                    camera={ {
                        fov: 45,
                        near: 0.1,
                        far: 200,
                        position: [ 2.5, 4, 6 ]
                    } }
                >
                    <Stars depth={-10} />
                    <Experience loadStatus={loadStatus} chageLoadStatus={chageLoadStatus} />
                </Canvas>
                {loadStatus && <Interface />}
            </KeyboardControls>
            }
        </Suspense>
    )
}