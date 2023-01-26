import { ContactShadows, useGLTF, Environment, Float, PresentationControls } from '@react-three/drei'

export default function Experience()
{
    const computer = useGLTF('https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/macbook/model.gltf')
    return <>
        <Environment preset='city' />
        <color args={ [ '#241a1a' ] } attach="background" />

        <PresentationControls
            global
            rotation={ [ 0.13, 0.1, 0 ] }
            polar={ [ - 0.4, 0.2 ] } 
            azimuth={ [ - 1, 0.75 ] }
            config={ { mass: 2, tension: 400 } }    
            snap={ { mass: 4, tension: 400 }  }          
        >
            <Float
                rotationIntensity={ 0.4 }
            >
                <primitive 
                    object={ computer.scene } 
                    position-y={ - 1.2 }
                />
            </Float>
        </PresentationControls>

        <ContactShadows 
            position-y={ - 1.4 }
            opacity={ 0.4 }
            scale={ 5 }
            blur={ 2.4 }
        />

    </>
}