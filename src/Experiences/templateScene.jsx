import { Canvas, useFrame } from "@react-three/fiber";
import { useEffect, useRef } from "react";
import fragment from '../Shaders/normalFragment.glsl'
import vertex from '../Shaders/normalVertex.glsl'

export default function TemplateScene() {

    const materialRef = useRef()

    const uniforms = {
        uTime: { value: 0 }
    }

    useFrame(({ clock }) => {
        if (materialRef.current) {
            materialRef.current.uniforms.uTime.value = clock.elapsedTime;
        }
    })

    return (
        <>
            <mesh>
                <boxGeometry />
                <shaderMaterial ref={materialRef}
                    fragmentShader={fragment}
                    vertexShader={vertex}
                    uniforms={uniforms}
                />
            </mesh>
        </>
    )
}