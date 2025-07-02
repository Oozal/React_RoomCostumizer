varying vec2 vUv;
uniform float uTime;

#include ./includes/noises.glsl

void main() {

    vec2 newUv = vUv*5.;
    newUv.x+=uTime;
    vec3  color = vec3(noise(newUv));
    gl_FragColor = vec4(color, 1);
}