import React from 'react';
import { Canvas } from '@react-three/fiber';
import TemplateScene from './templateScene';
import { Center, OrbitControls } from '@react-three/drei';

export default function Experience() {
    return (
        <Canvas>
            <OrbitControls />
            <Center />
            <TemplateScene />
        </Canvas>
    );
};

