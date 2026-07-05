precision highp float;

varying vec2 vUv;

uniform float uTime;
uniform vec2 uResolution;
uniform vec2 uMouse;

uniform vec3 uWaveColor;

uniform float uWaveSpeed;
uniform float uWaveFrequency;
uniform float uWaveAmplitude;

uniform float uPixelSize;
uniform float uMouseRadius;

#define PI 3.14159265359
#define TAU 6.28318530718

//-----------------------------------------------------
// Bayer Dithering
//-----------------------------------------------------

float Bayer2(vec2 a)
{
    a = floor(a);

    return fract(
        a.x / 2.0 +
        a.y * a.y * 0.75
    );
}

#define Bayer4(a)  (Bayer2(0.5*(a))*0.25 + Bayer2(a))
#define Bayer8(a)  (Bayer4(0.5*(a))*0.25 + Bayer2(a))
#define Bayer16(a) (Bayer8(0.5*(a))*0.25 + Bayer2(a))

//-----------------------------------------------------
// Helpers
//-----------------------------------------------------

mat2 rotate(float angle)
{
    float s = sin(angle);
    float c = cos(angle);

    return mat2(
        c,-s,
        s, c
    );
}

float remap(
    float value,
    float min1,
    float max1,
    float min2,
    float max2
){
    return min2 +
        (value-min1) *
        (max2-min2) /
        (max1-min1);
}

float saturate(float x)
{
    return clamp(x,0.0,1.0);
}
//-----------------------------------------------------
// Hash
//-----------------------------------------------------

float hash(vec2 p)
{
    p = fract(p * vec2(234.34, 435.345));
    p += dot(p, p + 34.23);

    return fract(p.x * p.y);
}

//-----------------------------------------------------
// Value Noise
//-----------------------------------------------------

float noise(vec2 p)
{
    vec2 i = floor(p);
    vec2 f = fract(p);

    vec2 u = f * f * (3.0 - 2.0 * f);

    float a = hash(i);
    float b = hash(i + vec2(1.0, 0.0));
    float c = hash(i + vec2(0.0, 1.0));
    float d = hash(i + vec2(1.0, 1.0));

    return mix(
        mix(a, b, u.x),
        mix(c, d, u.x),
        u.y
    );
}

//-----------------------------------------------------
// Fractal Brownian Motion
//-----------------------------------------------------

float fbm(vec2 p)
{
    float value = 0.0;
    float amplitude = 0.5;

    mat2 rot = rotate(0.5);

    for(int i = 0; i < 6; i++)
    {
        value += amplitude * noise(p);

        p = rot * p * 2.02 + 13.4;

        amplitude *= 0.5;
    }

    return value;
}

//-----------------------------------------------------
// Wave Field
//-----------------------------------------------------

float waveField(vec2 uv)
{
    vec2 p = uv;

    p *= uWaveFrequency;

    p.x += uTime * uWaveSpeed;

    float n = fbm(p);

    float wave =
        sin(
            p.x * 2.0 +
            n * 5.0 +
            uTime * uWaveSpeed
        );

    wave +=
        cos(
            p.y * 2.4 -
            n * 3.5
        );

    wave *= 0.5;

    wave += n;

    return wave;
}
//-----------------------------------------------------
// Mouse Influence
//-----------------------------------------------------

float mouseInfluence(vec2 uv)
{
    vec2 mouse = uMouse / uResolution;

    float d = distance(uv, mouse);

    return 1.0 - smoothstep(
        0.0,
        uMouseRadius,
        d
    );
}

//-----------------------------------------------------
// Pixelation
//-----------------------------------------------------

vec2 pixelate(vec2 uv)
{
    vec2 resolution = uResolution / uPixelSize;

    return floor(uv * resolution) / resolution;
}

//-----------------------------------------------------
// Bayer Threshold
//-----------------------------------------------------

float bayerThreshold(vec2 uv)
{
    vec2 pixel = floor(uv * uResolution);

    return Bayer16(pixel);
}

//-----------------------------------------------------
// Generate Dither Value
//-----------------------------------------------------

float ditherValue(vec2 uv)
{
    vec2 pixelUV = pixelate(uv);

    float wave = waveField(pixelUV);

    wave += mouseInfluence(pixelUV) * 0.45;

    wave = remap(
        wave,
        -2.0,
        2.0,
        0.0,
        1.0
    );

    wave = saturate(wave);

    float threshold = bayerThreshold(pixelUV);

    return step(threshold, wave);
}

//-----------------------------------------------------
// Final Colour
//-----------------------------------------------------

vec3 renderColor(vec2 uv)
{
    float value = ditherValue(uv);

    vec3 color = value * uWaveColor;

    return color;
}