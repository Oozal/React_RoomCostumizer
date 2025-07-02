varying vec2 vUv;
uniform float uTime;

void main()
{
    vec3 modifiedPos = position;
    modifiedPos.y+= sin(uTime);
    vec4 modelPosition = modelMatrix * vec4(modifiedPos, 1.0);
    vec4 viewPosition = viewMatrix * modelPosition;
    vec4 projectionPosition = projectionMatrix * viewPosition;
    vUv = uv;
    gl_Position = projectionPosition;
}