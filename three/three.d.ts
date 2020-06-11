declare module THREE {

    export class WebGLRenderTargetCube extends WebGLRenderTarget {

        constructor(width: number, height: number, options: __internal.WebGLRenderTarget.options);

        activeCubeFace: number;
        activeMipMapLevel: number;

        ["constructor"]: typeof WebGLRenderTargetCube;
        isWebGLRenderTargetCube: true;

    }

    export class WebGLRenderTarget extends EventDispatcher {

        constructor(width: number, height: number, options: __internal.WebGLRenderTarget.options);

        width: number;
        height: number;
        scissor: Vector4;
        scisserTest: boolean;
        viewport: Vector4;
        texture: Texture;
        depthBuffer: boolean;
        stencilBuffer: boolean;
        depthTexture: Texture;

        ["constructor"]: typeof WebGLRenderTarget;
        isWebGLRenderTarget: true;

        setSize(width: number, height: number): void;
        clone(): WebGLRenderTarget;
        copy(source: WebGLRenderTarget): WebGLRenderTarget;
        dispose: VoidFunction;

    }

    export class WebGLRenderer {

        constructor(parameters: __internal.WebGLRenderer.parameters);

        domElement: HTMLElement;
        context: any;

        autoClear: boolean;
        autoClearColor: boolean;
        autoClearDepth: boolean;
        autoClearStencil: boolean;

        sortObjects: boolean;

        clippingPlanes: Array<any>;
        localClippingEnabled: boolean;

        gammaFactor: number;
        gammaInput: boolean;
        gammaOutput: boolean;

        physicallyCorrectLights: boolean;

        toneMapping: number;
        toneMappingExposure: number;
        toneMappingWhitePoint: number;

        maxMorphTargets: number;
        maxMorphNormals: number;

        capabilities: __internal.WebGLCapabilities;
        extensions: __internal.WebGLExtensions;
        properties: __internal.WebGLProperties;
        renderLists: __internal.WebGLRenderLists;
        state: __internal.WebGLState;
        info: __internal.WebGLInfo;

        vr: __internal.WebXRManager | __internal.WebVRManager;

        shadowMap: __internal.WebGLShadowMap;

        getContext(): WebGL2RenderingContext | WebGLRenderingContext;
        getContextAttributes();
        forceContextLoss: VoidFunction;
        forceContextRestore: VoidFunction;
        getPixelRatio(): number;
        setPixelRatio: VoidFunction;
        getSize(): __internal.WebGLRenderer.Size;
        setSize(width: number, height: number, updateStyle: any): void;
        getDrawingBufferSize(): __internal.WebGLRenderer.Size;
        setDrawingBufferSize(width: number, height: number, pixelRatio: number): void;
        getCurrentViewport(): Vector4;
        setViewport(x: number, y: number, width: number, height: number): void;
        setScissor(x: number, y: number, width: number, height: number): void;
        setScissorTest(boolean: boolean): void;
        getClearColor(): Color;
        setClearColor(color: number | string | Color, alpha: number): void;
        getClearAlpha(): number;
        setClearAlpha(alpha: number): void;
        clear(color: boolean, depth: boolean, stencil: boolean): void;
        clearColor: VoidFunction;
        clearDepth: VoidFunction;
        clearStencil: VoidFunction;
        clearTarget(renderTarget: any, color: boolean, depth: boolean, stencil: boolean): void;
        dispose: VoidFunction;

        renderBufferImmediate(object: any, program: number): void;
        renderBufferDirect(camera: Camera, fog: any, geometry: any, material: Material, object: any, group: any): void;

        compile(scene: Scene, camera: Camera): void;
        render(scene: Scene, camera: Camera, renderTarget: WebGLRenderTarget, forceClear: any): void;

        setTexture2D(texture: Texture, slot: any): void;
        setTexture(texture: Texture, slot: any): void;
        setTextureCube(texture: Texture, slot: any): void;
        setFramebuffer(value: any): void;
        getRenderTarget(): WebGLRenderTarget;
        setRenderTarget(renderTarget: WebGLRenderTarget): void;
        readRenderTargetPixels(renderTarget: WebGLRenderTarget, x: number, y: number, width: number, height: number): void;
        copyFramebufferToTexture(position: any, texture: Texture, level: number): void;
        copyTextureToTexture(position: any, srcTexture: any, dstTexture: any, level: number): void;

    }

    export var ShaderLib: {

        basic: __internal.Shader.shader,
        lambert: __internal.Shader.shader,
        phong: __internal.Shader.shader,
        standard: __internal.Shader.shader,
        points: __internal.Shader.shader,
        dashed: __internal.Shader.shader,
        depth: __internal.Shader.shader,
        normal: __internal.Shader.shader,
        sprite: __internal.Shader.shader,
        cube: __internal.Shader.shader,
        equirect: __internal.Shader.shader,
        distanceRGBA: __internal.Shader.shader,
        shadow: __internal.Shader.shader,
        phisical: __internal.Shader.shader,

    }

    export var UniformsLib: {

        common: {

            diffuse: { value: Color },
            opacity: { value: number },
            map: { value: any },
            uvTransform: { value: Matrix3 },
            alphaMap: { value: any }

        },

        specularmap: { specularMap: { value: any } },

        envmap: {

            envMap: { value: any },
            flipEnvMap: { value: number },
            reflectivity: { value: number }
            refractionRatio: { value: number },
            maxMipLevel: { value: number }

        },

        aomap: {

            aoMap: { value: any },
            aoMapIntensity: { value: number }

        },

        lightmap: {

            lightMap: { value: any },
            lightMapIntensity: { value: number }

        },

        emissivemap: { emissiveMap: { value: any } },

        bumpmap: {

            bumpmap: { value: any },
            bumpScale: { value: Vector2 }

        },

        normalmap: {

            normalMap: { value: any },
            normalScale: { value: Vector2 }

        },

        displacementmap: {

            displacementMap: { value: any },
            displacementScale: { value: number },
            displacementBias: { value: number }

        },

        roughnessmap: { roughnessMap: { value: any } },

        metalnessmap: { metalnessMap: { value: any } },

        gradientmap: { gradientMap: { value: any } },

        fog: {

            fogDensity: { value: number },
            fogNear: { value: number },
            forFar: { value: number },
            forColor: { value: Color },

        },

        lights: {

            ambientLightColor: { value: Array<any> },
            directionalLights: {
                value: Array<any>, properties: __internal.UniformsLib.light & {

                    direction: { },

                }
            },

            directionalShadowMap: { value: Array<any> },
            directionalShadowMatrix: { value: Array<any> },

            spotLights: {
                value: Array<any>, properties: __internal.UniformsLib.light & {

                    position: { },
                    direction: { },
                    distance: { },
                    coneCos: { },
                    penumbraCos: { },
                    decay: { }

                }
            },

            spotShadowMap: { value: Array<any> },
            spotShadowMatrix: { value: Array<any> },

            pointLights: {
                value: Array<any>, properties: {

                    position: { },
                    decay: { },
                    distance: { }

                }
            },

            pointShadowMap: { value: Array<any> },
            pointShadowMatrix: { value: Array<any> },

            hemisphereLights: {
                value: Array<any>, properties: {

                    direction: { },
                    skyColor: { },
                    groundColor: { }

                }
            },

            rectAreaLights: {
                value: Array<any>, properties: {

                    color: { },
                    position: { },
                    width: { },
                    height: { }

                }
            }

        },

        points: {

            diffuse: { value: Color },
            opacity: { value: number },
            size: { value: number },
            scale: { value: number },
            map: { value: any },
            uvTransform: { value: Matrix3 }

        },

        sprite: {

            diffuse: { value: Color },
            opacity: { value: number },
            center: { value: Vector2 },
            rotation: { value: number },
            map: { value: any },
            uvTransform: { value: Matrix3 }

        }

    }

    export var UniformsUtils: {

        merge(uniforms: Array<{ }>): { },
        clone(uniforms_src: { }): { }

    }

    export var ShaderChunk: {

        alphamap_fragment: string,
        alphamap_pars_fragment: string,
        alphatest_fragment: string,
        aomap_fragment: string,
        aomap_pars_fragment: string,
        begin_vertex: string,
        beginnormal_vertex: string,
        bsdfs: string,
        bumpmap_pars_fragment: string,
        clipping_planes_fragment: string,
        clipping_planes_pars_fragment: string,
        clipping_planes_pars_vertex: string,
        clipping_planes_vertex: string,
        color_fragment: string,
        color_pars_fragment: string,
        color_pars_vertex: string,
        color_vertex: string,
        common: string,
        cube_uv_reflection_fragment: string,
        defaultnormal_vertex: string,
        displacementmap_pars_vertex: string,
        displacementmap_vertex: string,
        emissivemap_fragment: string,
        emissivemap_pars_fragment: string,
        encodings_fragment: string,
        encodings_pars_fragment: string,
        envmap_fragment: string,
        envmap_pars_fragment: string,
        envmap_pars_vertex: string,
        envmap_physical_pars_fragment: string,
        envmap_vertex: string,
        fog_vertex: string,
        fog_pars_vertex: string,
        fog_fragment: string,
        fog_pars_fragment: string,
        gradientmap_pars_fragment: string,
        lightmap_fragment: string,
        lightmap_pars_fragment: string,
        lights_lambert_vertex: string,
        lights_pars_begin: string,
        lights_phong_fragment: string,
        lights_phong_pars_fragment: string,
        lights_physical_fragment: string,
        lights_physical_pars_fragment: string,
        lights_fragment_begin: string,
        lights_fragment_maps: string,
        lights_fragment_end: string,
        logdepthbuf_fragment: string,
        logdepthbuf_pars_fragment: string,
        logdepthbuf_pars_vertex: string,
        logdepthbuf_vertex: string,
        map_fragment: string,
        map_pars_fragment: string,
        map_particle_fragment: string,
        map_particle_pars_fragment: string,
        metalnessmap_fragment: string,
        metalnessmap_pars_fragment: string,
        morphnormal_vertex: string,
        morphtarget_pars_vertex: string,
        morphtarget_vertex: string,
        normal_fragment_begin: string,
        normal_fragment_maps: string,
        normalmap_pars_fragment: string,
        packing: string,
        premultiplied_alpha_fragment: string,
        project_vertex: string,
        dithering_fragment: string,
        dithering_pars_fragment: string,
        roughnessmap_fragment: string,
        roughnessmap_pars_fragment: string,
        shadowmap_pars_fragment: string,
        shadowmap_pars_vertex: string,
        shadowmap_vertex: string,
        shadowmask_pars_fragment: string,
        skinbase_vertex: string,
        skinning_pars_vertex: string,
        skinning_vertex: string,
        skinnormal_vertex: string,
        specularmap_fragment: string,
        specularmap_pars_fragment: string,
        tonemapping_fragment: string,
        tonemapping_pars_fragment: string,
        uv_pars_fragment: string,
        uv_pars_vertex: string,
        uv_vertex: string,
        uv2_pars_fragment: string,
        uv2_pars_vertex: string,
        uv2_vertex: string,
        worldpos_vertex: string,
        cube_frag: string,
        cube_vert: string,
        depth_frag: string,
        depth_vert: string,
        distanceRGBA_frag: string,
        distanceRGBA_vert: string,
        equirect_frag: string,
        equirect_vert: string,
        linedashed_frag: string,
        linedashed_vert: string,
        meshbasic_frag: string,
        meshbasic_vert: string,
        meshlambert_frag: string,
        meshlambert_vert: string,
        meshphong_frag: string,
        meshphong_vert: string,
        meshphysical_frag: string,
        meshphysical_vert: string,
        normal_frag: string,
        normal_vert: string,
        points_frag: string,
        points_vert: string,
        shadow_frag: string,
        shadow_vert: string,
        sprite_frag: string,
        sprite_vert: string

    }

    export class FogExp2 {

        constructor(color: any, density: number);

        name: string;
        color: Color;
        density: number;

        isFogExp2: true;
        clone(): FogExp2;
        toJSON(): { };

    }

    export class Fog {

        constructor(color: any, near: number, far: number);

        name: string;
        color: Color;
        near: number;
        far: number;

        isFog: true;
        clone(): Fog;
        toJSON(): { };

    }

    export class Scene extends Object3D {

        type: string;
        background: any;
        fog: any;
        overridematerial: Material;
        autoUpdate: boolean;

        ["constructor"]: typeof Scene;

        copy(source: Scene, recursive: boolean): Scene;
        toJSON(meta: string): { };

    }

    export class Sprite extends Object3D {

        constructor(material: Material);

        type: string;

        geometry: BufferGeometry | Geometry
        material: Material;

        center: Vector2;

        ["constructor"]: typeof Object3D & typeof Sprite;
        isSprite: true;

        raycast(raycaster: Raycaster, intersects: any): void;

        clone(): Sprite;
        copy(source: Sprite): Sprite;

    }

    export class LOD extends Object3D {

        type: string;
        levels: Array<any>;

        ["constructor"]: typeof Object3D & typeof LOD;

        copy(source: LOD): LOD;
        addLevel(object: any, distance: number): void;
        getObjectForDistance(distance: number);
        raycast(raycaster: Raycaster, intersects: any): void;
        update(camera: Camera): void;
        toJSON(meta: string): { };

    }

    export class SkinnedMesh extends Mesh {

        type: string;
        bindMode: string;
        bindMatrix: Matrix4;
        bindMatrixInverse: Matrix4;

        bones: Array<Bone>;
        skeleton: Skeleton;

        ["constructor"]: typeof Object3D & typeof SkinnedMesh;
        isSkinnedMesh: true;

        initBones(): Array<Bone>;
        bind(skeleton: Skeleton, bindMatrix: Matrix4): void;
        pose: VoidFunction;
        normalizeSkinWeights: VoidFunction;
        updateMatrixWorld(force: boolean): void;
        clone(): SkinnedMesh;

    }

    export class Skeleton {

        constructor(bones: Array<Bone>, boneInverses: Array<Matrix4>);

        bones: Array<Bone>;
        boneMatrices: Float32Array;
        boneInverses: Array<Matrix4>;

        calculateInverses: VoidFunction;
        pose: VoidFunction;
        update: VoidFunction;
        clone(): Skeleton;
        getBoneByName(name: string): Bone;

    }

    export class Bone extends Object3D {

        type: string;

        ["constructor"]: typeof Bone;
        isBone: true;

    }

    export class Mesh extends Object3D {

        constructor(geometry: Geometry, material: Material);

        drawMode: number;

        ["constructor"]: typeof Object3D & typeof Mesh;
        isMesh: true;

        setDrawMode(value: number): void;
        copy(source: Mesh): Mesh;
        updateMorphTargets: VoidFunction;
        raycast(raycaster: Raycaster, intersects: any): void;
        clone(): Mesh;

    }

    export class LineSegments extends Line {

        constructor(geometry: any, material: Material);

        type: string;

        ["constructor"]: typeof Object3D & typeof LineSegments;
        isLineSegments: true;

        computeLineDistances(): LineSegments;

    }

    export class LineLoop extends Line {

        constructor(geometry: any, material: Material);

        type: string;

        ["constructor"]: typeof Line.prototype.constructor & typeof LineLoop;
        isLineLoop: true;

    }

    export class Line extends Object3D {

        constructor(geometry: any, material: Material, mode: number);

        type: string;
        geometry: BufferGeometry | Geometry
        material: LineBasicMaterial;

        ["constructor"]: typeof Object3D & typeof Line;
        isLine: true;

        computeLineDistances(): Line;
        raycast: VoidFunction;
        clone(): Line;

    }

    export class Points extends Object3D {

        constructor(geometry: BufferGeometry, material: Material);

        type: string;
        geometry: BufferGeometry | Geometry
        material: Material;

        ["constructor"]: typeof Object3D & typeof Points;
        isPoints: true;
        raycast: VoidFunction;
        clone(): Points;

    }

    export class Group extends Object3D {

        type: string;

        ["constructor"]: typeof Group;
        isGroup: true;

    }

    export class VideoTexture extends Texture {

        constructor(video: any, mapping: any, wrapS: number, wrapT: number, mapFilter: number, minFilter: number, format: number, type: number, anisotropy: number);

        generateMipmaps: boolean;

        ["constructor"]: typeof VideoTexture;
        isVideoTexture: true;

        update: VoidFunction;

    }

    export class DataTexture extends Texture {

        constructor(data: any, width: number, height: number, format: number, type: number, mapping: any, wrapS: number, wrapT: number, magFilter: number, minFilter: number, anisotropy: number, encoding: number);

        image: {

            data: any,
            width: number,
            height: number

        }

        magFilter: number;
        minFilter: number;

        ["constructor"]: typeof Texture & typeof DataTexture;
        isDataTexture: true;

    }

    export class CompressedTexture extends Texture {

        constructor(mipmaps: any, width: number, height: number, format: number, type: number, mapping: any, wrapS: number, wrapT: number, magFilter: number, minFilter: number, anisotropy: number, encoding: number);

        image: {

            width: number,
            height: number

        }

        mipmaps: any;
        flipY: boolean;
        generateMipmaps: boolean;

        ["constructor"]: typeof Texture & typeof CompressedTexture;
        isCompressedTexture: true;

    }

    export class CubeTexture extends Texture {

        constructor(images: any, mapping: any, wrapS: number, wrapT: number, magFilter: number, minFilter: number, format: number, type: number, anisotropy: number, encoding: number);

        flipY: boolean;

        ["constructor"]: typeof CubeTexture;
        isCubeTexture: true;

        get images();
        set images(value: any);

    }

    export class CanvasTexture extends Texture {

        constructor(canvas: any, mapping: any, wrapS: number, wrapT: number, magFilter: number, minFilter: number, format: number, type: number, anisotropy: number);

        needsUpdate: boolean;

        ["constructor"]: typeof CanvasTexture;
        isCanvasTexture: true;

    }

    export class DepthTexture extends Texture {

        constructor(width: number, height: number, type: number, mapping: any, wrapS: number, wrapT: number, magFilter: number, minFilter: number, anisotropy: number, format: number);

        mapFilter: number;
        minFilter: number;
        flipY: boolean;
        generateMipmaps: boolean;

        ["constructor"]: typeof DepthTexture;
        isDepthTexture: true;

    }

    export class Texture {

        constructor(image: any, mapping: any, wrapS: number, wrapT: number, mapFilter: any, minFilter: any, format: number, type: number, anisotropy: number, encoding: number);

        id: number;
        uuid: string;
        name: string;
        image: any;
        mipmaps: Array<any>;
        wrapS: number;
        wrapT: number;
        magFilter: number;
        minFilter: number;
        anisotropy: number;
        format: number;
        type: number;

        offset: Vector2;
        repeat: Vector2;
        center: Vector2;
        rotation: number;

        matrixAutoUpdate: boolean;
        matrix: Matrix3;
        generateMipmaps: boolean;
        premultiplyAlpha: boolean;
        flipY: boolean;
        unpackAlignments: number;

        encoding: number;
        version: number;
        onUpdate: any;

        static DEFAULT_IMAGE: undefined;
        static DEFAULT_MAPPING: number;

        ["constructor"]: typeof Texture;
        isTexture: true;

        updateMatrix: VoidFunction;
        clone(): Texture;
        copy(source: Texture): Texture;
        toJSON(meta: string): { };
        dispose: VoidFunction;
        transformUv(uv: Vector2): void;
        set needsUpdate(value: boolean);

    }

    export class CompressedTextureLoader {

        constructor(manager: LoadingManager);

        manager: LoadingManager;
        _parser: Function;
        path: string;

        load: __internal.Loader.loader<CompressedTexture>;
        setPath(value: string): CompressedTextureLoader;

    }

    export class DataTextureLoader {

        constructor(manager: LoadingManager);

        manager: LoadingManager;
        _parser: Function;

        load: __internal.Loader.loader<DataTexture>;

    }

    export class CubeTextureLoader {

        constructor(manager: LoadingManager);

        manager: LoadingManager;

        crossOrigin: string;
        path: string;
        load: __internal.Loader.loader<CubeTexture>;

        setCrossOrigin(value: string): CubeTextureLoader;
        setPath(value: string): CubeTextureLoader;

    }

    export class TextureLoader {

        constructor(manager: LoadingManager);

        manager: LoadingManager;

        crossOrigin: string;
        path: string;
        load: __internal.Loader.loader<Texture>;
        setCrossOrigin(value: string): TextureLoader;
        setPath(value: string): TextureLoader

    }

    export class ObjectLoader {

        constructor(manager: LoadingManager);

        manager: LoadingManager;
        texturePath: string;

        crossOrigin: string;
        load: __internal.Loader.loader<any>;
        setTexturePath(value: string): ObjectLoader;
        setCrossOrigin(value: string): ObjectLoader;
        parse(json: { }, onLoad: (data: any) => any): any;
        parseShape(json: { }): Shape;
        parseGeometries(json: { }, shapes: Shape): Geometry;
        parseMaterials(json: { }, textures: Texture): Material;
        parseAnimations(json: Array<{ }>): Array<AnimationClip>;
        parseImages(json: { }, onLoad: (image: __internal.Image) => any): __internal.Image;
        parseTextures(json: { }, images: Array<__internal.Image>): Texture;
        parseObject(data: any, geometries: Geometry, material: Material): Object3D;

    }

    export class MaterialLoader {

        constructor(manager: LoadingManager);

        manager: LoadingManager;
        textures: Texture;

        load: __internal.Loader.loader<Material>;
        setTextures(value: Texture): void;
        parse(json: { }): Material;

    }

    export class BufferGeometryLoader {

        constructor(manager: LoadingManager);

        manager: LoadingManager;

        load: __internal.Loader.loader<BufferGeometry>;
        parse(json: { }): BufferGeometry;

    }

    export var DefaultLoadingManager: LoadingManager;

    export class LoadingManager {

        constructor(onLoad: (data: any) => any, onProgress: (url: string, itemsLoaded: number, itemsTotal: number) => any, onError: (error: Error) => any);

        onStart: any;
        onLoad: Function
        onProgress: Function;
        onError: Function;

        itemStart(url: string): void;
        itemEnd(url: string): void;
        itemError(url: string): void;
        resolveURL(url: string): string | any;
        setURLModifier(transform: (utl: string) => any): LoadingManager;

    }

    export class JSONLoader {

        constructor(manager: LoadingManager);

        manager: LoadingManager;
        withCredentials: boolean;

        crossOrigin: string;
        texturePath: string;

        load(url: string, onLoad: (geometry: Geometry, material: Material) => any, onProgress: (url: string, itemsLoaded: number, itemsTotal: number) => any, onError: (error: Error) => any): void;
        setCrossOrigin(value: string): JSONLoader;
        setTexturePath(value: string): JSONLoader;
        parse(json: { }, texturePath: string): __internal.JSONLoader.parse;

    }

    export class ImageLoader {

        constructor(manager: LoadingManager);

        manager: LoadingManager;
        crossOrigin: string;
        path: string;
        load: __internal.Loader.loader<HTMLElement>;
        setCrossOrigin(value: string): ImageLoader;
        setPath(value: string): ImageLoader;

    }

    export class ImageBitmapLoader { 

        constructor(manager: LoadingManager);

        manager: LoadingManager;
        options: any;
        path: string;

        ["constructor"]: typeof ImageBitmapLoader;

        setOptions(options: any): ImageBitmapLoader;
        load: __internal.Loader.loader<ImageBitmap>;
        setCrossOrigin(): ImageBitmapLoader;
        setPath(value: string): ImageBitmapLoader;

    }

    export class FontLoader {

        constructor(manager: LoadingManager);

        manager: LoadingManager;
        path: string;

        load: __internal.Loader.loader<Font>;
        parse(json: { }): Font;
        setPath(value: string): FontLoader;

    }

    export class FileLoader {

        constructor(manager: LoadingManager);

        manager: LoadingManager;
        path: string;
        responseType: string;
        withCredentials: boolean;
        mimeType: string;
        requestHeader: string;

        load(url: string, onLoad: (file: any) => any, onProgress: (url: string, itemsLoaded: number, itemsTotal: number) => any, onError: (error: Error) => any): XMLHttpRequest;
        setPath(value: string): FileLoader;
        setResponseType(value: string): FileLoader;
        setWithCredentials(value: boolean): FileLoader;
        setMimeType(value: string): FileLoader;
        setRequestHeader(value: string): FileLoader;

    }

    export class Loader {

        static Handlers: {

            handlers: Array<RegExp | any>;

            add(regex: any, loader: any): void;
            get(file: string): any;

        }

        crossOrigin: string;
        onLoadStart: Function;
        onLoadProgress: Function;
        onComplete: Function;
        initMaterials(materials: Array<Material>, texturePath: string, crossOrigin: string): Material;
        createMaterial(m: Material, texturePath: string, crossOrigin: string): Material;

    }

    export var LoaderUtils: {

        decodeText(array: BufferSource): string,
        extractUrlBase(url: string): string

    }

    export var Cache: {

        enabled: boolean,
        files: {
            [key: string]: string
        },

        add(key: string, file: string): void;
        get(key: string): string;
        remove(key: string): void;
        clear: VoidFunction;

    }

    export class AudioLoader {

        constructor(manager: LoadingManager);

        load: __internal.Loader.loader<AudioBuffer>;

    }

    export class SpotLightShadow extends LightShadow {

        camera: PerspectiveCamera;

        ["constructor"]: typeof SpotLightShadow;
        isSpotLightShadow: true;

        update(light: SpotLight): void;

    }

    export class SpotLight extends Light {

        constructor(color: any, intensity: number, distance: number, angle: number, penumbra: number, decay: number);

        type: string;
        target: Object3D;
        get power(): number;
        set power(power: number);
        distance: number;
        angle: number;
        penumbra: number;
        decay: number;
        shadow: SpotLightShadow;

        ["constructor"]: typeof Light.prototype.constructor & typeof SpotLight;
        isSpotLight: true;
        copy(source: SpotLight): SpotLight;

    }

    export class PointLight extends Light {

        constructor(color: any, intensity: number, distance: number, decay: number);

        type: string;
        get power(): number;
        set power(power: number);
        distance: number;
        decay: number;
        shadow: LightShadow;

        ["constructor"]: typeof Light.prototype.constructor & typeof PointLight;
        isPointLight: true;
        copy(source: PointLight): PointLight;

    }

    export class RectAreaLight extends Light {

        constructor(color: any, intensity: number, width: number, height: number);

        type: string;
        width: number;
        height: number;

        ["constructor"]: typeof Light.prototype.constructor & typeof RectAreaLight;
        isRectAreaLight: true;
        copy(source: RectAreaLight): RectAreaLight;
        toJSON(meta: string): { };

    }

    export class HemisphereLight extends Light {

        constructor(skyColor: any, groundColor: any, intensity: number);

        type: string;
        castShadow: boolean;
        groundColot: Color;

        ["constructor"]: typeof Light.prototype.constructor & typeof HemisphereLight;
        isHemisphereLight: true;
        copy(source: HemisphereLight): HemisphereLight;

    }

    export class DirectionalLightShadow extends LightShadow {

        ["constructor"]: typeof DirectionalLightShadow;

    }

    export class DirectionalLight extends Light {

        constructor(color: any, intensity: number);

        type: string;
        target: Object3D;
        shadow: DirectionalLightShadow;

        ["constructor"]: typeof Light.prototype.constructor & typeof DirectionalLight;
        isDirectionalLight: true;
        copy(source: DirectionalLight): DirectionalLight;

    }

    export class AmbientLight extends Light {

        constructor(color: any, intensity: number);

        type: string;
        castShadow: boolean;

        ["constructor"]: typeof Light.prototype.constructor & typeof AmbientLight;
        isAmbientLight: true;

    }

    export class LightShadow {

        constructor(camera: Camera);

        camera: Camera;
        bias: number;
        radius: number;
        mapSize: Vector2;
        map: any;
        matrix: Matrix4;
        copy(source: LightShadow): LightShadow;
        clone(): LightShadow;
        toJSON(): { };

    }

    export class Light extends Object3D {

        constructor(color: any, intensity: number);

        type: string;
        color: Color;
        intensity: number;
        receiveShadow: boolean;

        ["constructor"]: typeof Object3D & typeof Light;
        isLight: true;
        copy(source: Light): Light;
        toJSON(meta: string): { };

    }

    export class StereoCamera {

        type: string;
        aspect: number;
        eyeSep: number;
        cameraL: PerspectiveCamera;
        cameraR: PerspectiveCamera;
        update(camera: Camera): void;

    }

    export class PerspectiveCamera extends Camera {

        constructor(fov: number, aspect: number, near: number, far: number);

        type: string;
        fov: number;
        zoom: number;
        near: number;
        far: number;
        focus: number;
        aspect: number;
        view: any;
        filmGauge: number;
        filmOffset: number;

        ["constructor"]: typeof Camera.prototype.constructor & typeof PerspectiveCamera;
        isPerspectiveCamera: true;
        copy(source: Object3D & Camera & PerspectiveCamera, recursive: boolean): Object3D & Camera & PerspectiveCamera;
        setFocalLength(focalLength: number): void;
        getFocalLength(): number;
        getEffectiveFOV(): number;
        getFilmWidth(): number;
        getFilmHeight(): number;
        setViewOffset(fullWidth: number, fullHeight: number, x: number, y: number, width: number, height: number): void;
        clearViewOffset: VoidFunction;
        updateProjectionMatrix: VoidFunction;
        toJSON(meta: string): { };

    }

    export class OrthographicCamera extends Camera {

        constructor(left: number, right: number, top: number, bottom: number, near: number, far: number);

        type: string;
        zoom: number;
        view: any;
        left: number;
        right: number;
        top: number;
        bottom: number;
        near: number;
        far: number;

        ["constructor"]: typeof Camera.prototype.constructor & typeof OrthographicCamera;
        isOrthographicCamera: true;
        copy(source: Object3D & Camera & OrthographicCamera, recursive: boolean): Object3D & Camera & OrthographicCamera;
        setViewOffset(fullWidth: number, fullHeight: number, x: number, y: number, width: number, height: number): void;
        clearViewOffset: VoidFunction;
        updateProjectionMatrix: VoidFunction;
        toJSON(meta: string): { };

    }

    export class CubeCamera extends Object3D {

        constructor(near: number, far: number, cubeResolution: number);

        type: string;
        renderTarget: WebGLRenderTargetCube;
        update(renderer: WebGLRenderer, scene: Scene): void;
        clear(renderer: WebGLRenderer, color: any, depth: number, stencil: number): void;

        ["constructor"]: typeof Object3D & typeof CubeCamera;

    }

    export class ArrayCamera extends PerspectiveCamera {

        constructor(array: Array<Camera>);
        cameras: Array<Camera>;

        ["constructor"]: typeof PerspectiveCamera.prototype.constructor & typeof ArrayCamera;
        isArrayCamera: true;

    }

    export class Camera extends Object3D {

        type: string;
        matrixWorldInverse: Matrix4;
        projectionMatrix: Matrix4;

        ["constructor"]: typeof Object3D & typeof Camera;
        isCamera: true;
        copy(source: Object3D & Camera, recursive: boolean): Object3D & Camera;
        getWorldDirection(target: Vector3): Quaternion;
        updateMatrixWorld(force: boolean): void;
        clone(): Object3D & Camera;

    }

    export class AudioListener extends Object3D {

        type: string;
        context: AudioContext;
        gain: GainNode;
        filter: AudioNode;

        ["constructor"]: typeof AudioListener;

        getInput(): GainNode;
        removeFilter(): AudioListener;
        getFilter(): AudioNode;
        setFilter(value: AudioNode): AudioListener;
        getMasterVolume(): number;
        setMasterVolume(value: number): AudioListener;
        updateMatrixWorld: VoidFunction;

    }

    export class PositionalAudio extends Audio {

        constructor(listener: AudioListener);

        panner: PannerNode;

        ["constructor"]: typeof Audio.prototype.constructor & typeof PositionalAudio;

        getOutput(): GainNode;
        getRefDistance(): number;
        setRefDistance(): PositionalAudio;
        getRolloffFactor(): number;
        setRolloffFactor(value: number): PositionalAudio;
        getDistanceModel(): DistanceModelType;
        setDistanceModel(value: DistanceModelType): PositionalAudio;
        getMaxDistance(): number;
        setMaxDistance(value: number): PositionalAudio;
        setDirectionalCone(coneInnerAngle: number, coneOuterAngle: number, coneOuterGain: number): PositionalAudio;
        updateMatrixWorld(force: boolean): void;

    }

    export var AudioContext : {

        getContext(): AudioContext;
        setContext(value: AudioContext): void;

    }

    export class AudioAnalyser {

        constructor(audio: Audio, fftSize: number);

        analyser: AnalyserNode;
        data: Uint8Array;

        getFrequencyData(): Uint8Array;
        getAverageFrequency(): number;

    }

    export class Audio extends Object3D {

        constructor(listener: AudioListener);

        type: string;
        context: AudioContext;
        gain: GainNode;
        autoplay: boolean;
        buffer: AudioBuffer;
        loop: boolean;
        startTime: number;
        offset: number;
        playbackRate: number;
        isPlaying: boolean;
        hasPlaybackControl: boolean;
        sourceType: string;
        source: { };
        filters: Array<any>;

        ["constructor"]: typeof Object3D & typeof Audio;
        getOutput(): GainNode;
        setNodeSource(audioNode: AudioNode): Audio;
        setMediaElementSource(media: HTMLMediaElement): Audio;
        setBuffer(audioBuffer: AudioBuffer): Audio;
        play(): Audio;
        pause(): Audio;
        stop(): Audio;
        connect(): Audio;
        disconnect(): Audio;
        getFilters(): Array<any>;
        setFilters(value: Array<any>): Audio;
        getFilter(): any;
        setFilter(filter: any): Audio;
        setPlaybackRate(value: number): Audio;
        getPlaybackRate(): number;
        onEnded: VoidFunction;
        getLoop(): boolean;
        setLoop(value: boolean): Audio;
        getVolume(): number;
        setVolume(value: number): Audio;

    }

    export class VectorKeyframeTrack extends KeyframeTrack {

        constructor(name: string, times: Array<number>, values: Array<Vector2 | Vector3 | Vector4>, interpolation: number);

        ["constructor"]: typeof VectorKeyframeTrack;
        ValueTypeName: string;

    }

    export class StringKeyframeTrack extends KeyframeTrack {

        constructor(name: string, times: Array<number>, values: Array<string>, interpolation: number);

        ["constructor"]: typeof KeyframeTrack & typeof StringKeyframeTrack;

        ValueTypeName: string;
        ValueBufferType: ArrayConstructor;
        DefaultInterpolation: number;
        interpolantFactoryMethodLinear: any;
        interpolantFactoryMethodSmooth: any;

    }

    export class QuaternionKeyframeTrack extends KeyframeTrack {

        constructor(name: string, times: Array<number>, values: Array<Quaternion>, interpolation: number);

        ["constructor"]: typeof KeyframeTrack & typeof QuaternionKeyframeTrack;
        ValueTypeName: string;
        DefaultInterpolation: number;
        InterpolantFactoryMethodLinear(result: any): QuaternionLinearInterpolant;
        InterpolantFactoryMethodSmooth: any;

    }

    export class NumberKeyframeTrack extends KeyframeTrack{

        constructor(name: string, times: Array<number>, values: Array<number>, interpolation: number);

        ["constructor"]: typeof NumberKeyframeTrack;
        ValueTypeName: string;

    }

    export class ColorKeyframeTrack extends KeyframeTrack {

        constructor(name: string, times: Array<number>, values: Array<Color>, interpolation: number);

        ["constructor"]: typeof ColorKeyframeTrack;
        ValueTypeName: string;

    }

    export class BooleanKeyframeTrack extends KeyframeTrack {

        constructor(name: string, times: Array<number>, values: Array<boolean>);

        ["constructor"]: typeof KeyframeTrack & typeof BooleanKeyframeTrack;
        ValueTypeName: string;
        ValueBufferType: ArrayConstructor;
        DefaultInterpolation: number;
        InterpolantFactoryMethodLinear: any;
        InterpolantFactoryMethodSmooth: any;

    }

    export class PropertyMixer {

        constructor(binding: PropertyBinding, typeName: string, valueSize: number);
        binding: PropertyBinding;
        valueSize: number;
        buffer: Float64Array;
        _mixBufferRegion: __internal.PropertyMixer.mixer;
        cumulativeWeight: number;
        useCount: number;
        referenceCount: number;

        accumulate(accuIndex: number, weight: number): void;
        apply(accuIndex: number): void;
        saveOriginalState: VoidFunction;
        restoreOriginalState: VoidFunction;
        _select: __internal.PropertyMixer.mixer;
        _slerp: __internal.PropertyMixer.mixer;
        _lerp: __internal.PropertyMixer.mixer;

    }

    export class PropertyBinding {

        constructor(rootNode: any, path: string, parsedPath: string);

        path: string;
        parsedPath: string;
        node: any;
        rootNode: any;

        static Composite: typeof __internal.Composite;
        static create(root: any, path: string, parsedPath: string): PropertyBinding | __internal.Composite;
        static sanitizeNodeName(name: string): string;
        static parseTrackName(trackName: string): __internal.PropertyBinding.TrackName;
        static findNode(root: any, nodeName: string): any;

        _getValue_unavailable: VoidFunction;
        _setValue_unavailable: VoidFunction;

        BindingType: {

            Direct: number,
            EntireArray: number,
            ArrayElement: number,
            HasFromToArray: number

        }
        Versioning: {

            None: number,
            NeedsUpdate: number,
            MatrixWorldNeedsUpdate: number

        }
        GetterByBindingType: __internal.PropertyBinding.get;
        SetterByBindingTypeAndVersioning: __internal.PropertyBinding.set;
        getValue: __internal.PropertyBinding.BindingFunction;
        setValue: __internal.PropertyBinding.BindingFunction;
        bind: VoidFunction;
        unbind: VoidFunction;
        _getValue_unbound: __internal.PropertyBinding.get;
        _setValue_unbound: __internal.PropertyBinding.set;

    }

    export class KeyframeTrack {

        constructor(name: string, times: Array<number>, values: Array<any>, interpolation: number);

        name: string;
        times: Array<number>;
        values: Array<any>;

        static toJSON(track: KeyframeTrack): { };

        ["constructor"]: typeof KeyframeTrack;
        TimeBufferType: any;
        ValueBufferType: any;
        DefaultInterpolation: number;
        InterpolantFactoryMethodDiscrete(result: number): DiscreteInterpolant;
        InterpolantFactoryMethodLinear(result: number): LinearInterpolant;
        InterpolantFactoryMethodSmooth(result: number): CubicInterpolant;
        setInterpolation(interpolation: number): KeyframeTrack;
        getInterpolation(): number;
        getValueSize(): number;
        shift(timeOffset: number): KeyframeTrack;
        scale(timeScale: number): KeyframeTrack;
        trim(startTime: number, endTime: number): KeyframeTrack;
        validate(): boolean;
        optimize(): KeyframeTrack;

    }

    export var AnimationUtils: {

        arraySlice(array: Array<any>, from: number, to: number): Array<any>,
        convertArray(array: Array<any>, type: any, forceClone: boolean): Array<any>,
        isTypedArray(object: Array<any>): boolean,
        getKeyframeOrder(time: number): Array<any>,
        sortedArray(values: Array<any>, stride: number, order: Array<any>): Array<any>,
        flattenJSON(jsonKeys: Array<any>, time: Array<number>, values: Array<any>, valuePropertyName: string): void

    }

    export class AnimationObjectGroup {

        constructor(...arguments: __internal.AnimationObjectGroup.IArgument);

        uuid: string;
        _objects: Array<any>;
        nCachedObjects_: number;
        _indicesByUUID: __internal.AnimationObjectGroup.I_Indices;
        _paths: Array<string>;
        _parsedPath: Array<any>;
        _bindings: Array<Array<PropertyBinding>>;
        _bindingsIndicesByBath: __internal.AnimationObjectGroup.I_Indices;
        stats: {

            object: {

                total: number;
                inUse: number;

            },
            bindingsPerObject: number

        }

        isAnimationObjectGroup: true;
        add: VoidFunction;
        remove: VoidFunction;
        uncache: VoidFunction;
        subscribe_(path: string, parsedPath: string): Array<string>;
        unsubscribe_(path: string): void;

    }

    export class AnimationMixer extends EventDispatcher {

        constructor(root: any);
        _root: any;
        _accuIndex: number;
        time: number;
        timeScale: number;

        ["constructor"]: typeof AnimationMixer;

        _bindAction(action: any, protytypeAction: any): void;
        _activateAction(action: any): void;
        _deactivateAction(action: any): void;
        _initMemoryManager: VoidFunction;
        _actions: Array<any>;
        _nActiveActions: number;
        _actionsByClip: { };
        _bindings: Array<PropertyBinding>;
        _nActiveBindings: number;
        _bindingsByRootAndName: Map<string, PropertyMixer>;
        _controlInterpolants: Array<number>;
        _nActiveControlInterpolants: number;
        stats: {
            actions: __internal.AnimationMixer.stats,
            bindings: __internal.AnimationMixer.stats,
            controlInterpolants: __internal.AnimationMixer.stats
        }
        _isActiveAction(action: any): boolean;
        _addInactiveAction(action: any, clipUuid: string, rootUuid: string): void;
        _removeInactiveAction(action: any): void;
        _removeInactiveBindingsForAction(action: any): void;
        _lendAction(action: any): void;
        _takeBackAction(action: any): void;
        _addInactiveBinding(binding: PropertyBinding, rootUuid: string, trackName: string): void;
        _removeInactiveBinding(binding: PropertyBinding): void;
        _lendBinding(binding: PropertyBinding): void;
        _takeBackBinding(binding: PropertyBinding): void;
        _lendControlInterpolant(): number;
        _takeBackControlInterpolant(interpolant: number): void;
        existingAction(clip: AnimationClip, optionalRoot: any): any;
        stopAllAction(): AnimationMixer;
        update(deltaTime: number): AnimationMixer;
        getRoot(): any;
        uncacheClip(clip: AnimationClip): void;
        uncacheRoot(root: any): void;
        uncacheAction(clip: AnimationClip, optionalRoot: any): void;

    }

    export class AnimationClip {

        constructor(name: string, duration: number, tracks: KeyframeTrack);
        
        name: string;
        tracks: KeyframeTrack;
        duration: number;
        uuid: string;

        static parse(data: { }): AnimationClip;
        static toJSON(clip: AnimationClip): { };
        static CreateFromMorphTargetSequence(name: string, morphTargetSequence: any, fps: number, noLoop: boolean): AnimationClip;
        static findByName(objectOrClipArray: { } | Array<AnimationClip>): any;
        static CreateClipsFromMorphTargetSenquences(morphTargets: Array<any>, fps: number, noLoop: boolean);
        static parseAnimation(animation: any): AnimationClip;

        resetDuration(): AnimationClip;
        trim(): AnimationClip;
        validate(): boolean;
        optimize(): AnimationClip;

    }

    export class Uniform {

        constructor(value: any);
        value: any;
        clone(): Uniform;

    }

    export class InstancedBufferGeometry extends BufferGeometry {

        type: string;
        maxInstancedCount: any;

        ["constructor"]: typeof InstancedBufferGeometry;

        isInstancedBufferGeometry: true;

        copy(source: InstancedBufferGeometry): InstancedBufferGeometry;
        clone(): InstancedBufferGeometry;

    }

    export class BufferGeometry extends EventDispatcher {

        id: number;
        uuid: string;
        name: string;
        type: string;
        index: number | Uint32Array | Uint16Array;
        attributes: { };
        morphAttributes: { };
        groups: Array<{
            start: number,
            count: number,
            materialIndex: number
        }>;
        boundingBox: Box3;
        boundingSphere: Sphere;
        drawRange: {
            start: number,
            count: number
        }
        userData: { };

        ["constructor"]: typeof BufferGeometry;

        isBufferGeometry: true;
        getIndex(): number;
        setIndex(index: number | Array<number>): void;
        addAttribute(name: string, attribute: BufferAttribute): BufferGeometry;
        getAttribute(name: string): any;
        removeAttribute(name: string): BufferGeometry;
        addGroup(start: number, count: number, materialIndex: number): void;
        clearGroups: VoidFunction;
        setDrawRange(start: number, count: number): void;
        applyMatrix(matrix: Matrix3 | Matrix4): BufferGeometry;
        rotateX(angle: number): BufferGeometry;
        rotateY(angle: number): BufferGeometry;
        rotateZ(angle: number): BufferGeometry;
        translate(x: number, y: number, z: number): BufferGeometry;
        scale(x: number, y: number, z: number): BufferGeometry;
        lookAt(vector: Vector2 | Vector3 | Vector4): void;
        center(): BufferGeometry;
        setFromObject(object: any): BufferGeometry;
        setFromPoints(points: Array<number>):  BufferGeometry;
        updateFromObject(object: any): BufferGeometry;
        fromGeometry(geometry: Geometry): BufferGeometry;
        fromDirectGeometry(geometry: __internal.DirectGeometry): BufferGeometry;
        computeBoundingBox: VoidFunction;
        computeBoundingSphere: VoidFunction;
        computeFaceNormals: VoidFunction;
        computeVertexNormals: VoidFunction;
        merge(geometry: BufferGeometry, offset: number): BufferGeometry;
        normalizeNormals: VoidFunction;
        toNonIndexed(): BufferGeometry;
        toJSON(): { };
        clone(): BufferGeometry;
        copy(source: BufferGeometry): BufferGeometry;
        dispose: VoidFunction;

    }

    export class Geometry extends EventDispatcher {

        id: number;
        uuid: string;
        name: string;
        type: string;
        vertices: Array<Vector3>;
        colors: Array<Color>;
        faces: Array<Face3>;
        faceVertexUvs: Array<Vector2>;
        morphTargets: Array<any>;
        morphNormals: Array<any>;
        skinWeights: Array<number>;
        skinIndices: Array<any>;
        lineDistances: Array<number>;
        boundingBox: Box3;
        boundingSphere: Sphere;
        elementsNeedUpdate: boolean;
        verticesNeedUpdate: boolean;
        uvsNeedUpdate: boolean;
        normalsNeedUpdate: boolean;
        colorsNeedUpdate: boolean;
        lineDistancesNeedUpdate: boolean;
        groupsNeedUpdate: boolean;

        ["constructor"]: typeof Geometry;
        isGeometry: true;
        applyMatrix(matrix: Matrix3 | Matrix4): Geometry;
        rotateX(angle: number): Geometry;
        rotateY(angle: number): Geometry;
        rotateZ(angle: number): Geometry;
        translate(x: number, y: number, z: number): Geometry;
        scale(x: number, y: number, z: number): Geometry;
        lookAt(vector: Vector3): void;
        fromBufferGeometry(geometry: BufferGeometry): Geometry;
        center(): Geometry;
        normalize(): Geometry;
        computeFaceNormals: VoidFunction;
        computeVertexNormals: VoidFunction;
        computeFlatVectexNormals: VoidFunction;
        computeMorphNormals: VoidFunction;
        computeBoundingBox: VoidFunction;
        computeBoundingSphere: VoidFunction;
        merge(geometry: Geometry, matrix: Matrix3 | Matrix4, materialIndexOffset: number): void;
        mergeMesh(mesh: Mesh): void;
        mergeVertices(): number;
        setFromPoints(points: Array<number>): Geometry;
        sortFacesByMaterialIndex: VoidFunction;
        toJSON(): { };
        clone(): Geometry;
        copy(source: Geometry): Geometry;

    }

    export class InterleavedBufferAttribute {

        constructor(interleavedBuffer: InterleavedBuffer, itemSize: number, offset: number, normalized: boolean);

        data: InterleavedBuffer;
        itemSize: number;
        offset: number;
        normalized: boolean;
        count: number;
        array: number;
        isInterleavedBufferAttribute: true;
        setX(index: number, x: number): InterleavedBufferAttribute;
        setY(index: number, y: number): InterleavedBufferAttribute;
        setZ(index: number, z: number): InterleavedBufferAttribute;
        setW(index: number, w: number): InterleavedBufferAttribute;
        getX(index: number): number;
        getY(index: number): number;
        getZ(index: number): number;
        getW(index: number): number;
        setXY(index: number, x: number, y: number): InterleavedBufferAttribute;
        setXYZ(index: number, x: number, y: number, z: number): InterleavedBufferAttribute;
        setXYZW(index: number, x: number, y:  number, z: number, w: number): InterleavedBufferAttribute;

    }

    export class InstancedInterleaveBuffer extends InterleavedBuffer {

        constructor(array: Array<any>, stride: any, meshPerAttribute: number);
        meshPerAttribute: number;

        ["constructor"]: typeof InstancedInterleaveBuffer;
        isInstancedInterleavedBuffer: true;
        copy(source: InstancedInterleaveBuffer): InstancedInterleaveBuffer;

    }

    export class InterleavedBuffer {

        constructor(array: Array<any>, stride: any);
        array: Array<any>;
        stride: any;
        count: number;
        dynamic: boolean;
        updateRange: {
            offset: number,
            count: number
        }
        version: number;
        set needsUpdate(value: boolean);

        isInterleavedBuffer: true;
        onUploadCallback: Function;
        setArray(array: Array<any>): InterleavedBuffer;
        setDynamic(value: boolean): InterleavedBuffer;
        copy(source: InterleavedBuffer): InterleavedBuffer;
        copyAt(index1: number, attribute: BufferAttribute, index2: number): InterleavedBuffer;
        set(value: Array<any>, offset: number): InterleavedBuffer;
        clone(): InterleavedBuffer;
        onUpLoad(callback: Function): InterleavedBuffer;

    }

    export class InstancedBufferAttribute extends BufferAttribute {

        constructor(array: Array<any>, itemSize: number, meshPerAttribute: number);
        meshPerAttribute: number;

        ["constructor"]: typeof InstancedBufferAttribute;
        isInstancedBufferAttribute: true;
        copy(source: InstancedBufferAttribute): InstancedBufferAttribute;

    }

    export class Face3 {

        constructor(a: number, b: number, c: number, normal: Vector3, color: Color, materialIndex: number);

        a: number;
        b: number;
        c: number;
        normal: Vector3;
        vertexNormals: Array<number>;
        color: Color;
        vertexColors: Array<Color>;
        materialIndex: number;

        clone(): Face3;
        copy(source: Face3): Face3;

    }

    export class Object3D {

        id: number;
        uuid: string;
        name: string;
        type: string;
        parent: Object3D;
        children: Array<Object3D>;
        up: Vector3;
        position: Vector3;
        rotation: Euler;
        quaternion: Quaternion;
        scale: Vector3;
        modelViewMatrix: Matrix4;
        normalMatrix: Matrix3;
        matrix: Matrix4;
        matrixWorld: Matrix4;
        matrixAutoUpdate: boolean;
        matrixWorldNeedsUpdate: boolean;
        layers: Layers;
        visible: boolean;
        castShadow: boolean;
        receiveShadow: boolean;
        frustumCulled: boolean;
        renderOrder: number;
        userData: { };

        static DefaultUp: Vector3;
        static DefaultMatrixAutoUpdate: boolean;

        ["constructor"]: typeof Object3D;
        isObject3D: true;

        onBeforeRender: Function;
        onAfterRender: Function;
        applyMatrix(matrix: Matrix4): void;
        applyQuaternion(q: Quaternion): Object3D;
        setRotationFromAxisAngle(axis: Vector3, angle: number): void;
        setRotationFromEuler(euler: Euler): void;
        setRotationFromMatrix(m: Matrix3): void;
        setRotationFromQuaternion(q: Quaternion): void;
        rotateOnAxis(axis: Vector3, angle: number): Object3D;
        rotateOnWorldAxis(axis: Vector3, angle: number): Object3D;
        rotateX(angle: number): Object3D;
        rotateY(angle: number): Object3D;
        rotateZ(angle: number): Object3D;
        translateOnAxis(axis: Vector3, distance: number): Object3D;
        translateX(distance: number): Object3D;
        translateY(distance: number): Object3D;
        translateZ(distance: number): Object3D;
        localToWorld(vector: Vector3): Vector3;
        worldToLocal(vector: Vector3): Vector3;
        lookAt(x: number | Vector3, y: number, z: number): void;
        add(object: Object3D): Object3D;
        remove(object: Object3D): Object3D;
        getObjectById(id: number): Object3D;
        getObjectByName(name: string): Object3D;
        getObjectByProperty(name: string, value: any): Object3D;
        getWorldPosition(target: Vector3): Vector3;
        getWorldQuaternion(target: Quaternion): Quaternion;
        getWorldScale(target: Vector3): Vector3;
        getWorldDirection(target: Quaternion): Quaternion;
        traverse(callback: __internal.Object3D.traverseFn): void;
        traverseVisible(callback: __internal.Object3D.traverseFn): void;
        traverseAncestors(callback: __internal.Object3D.traverseFn): void;
        updateMatrix: VoidFunction;
        updateMatrixWorld(force: boolean): void;
        toJSON(meta: string): { };
        clone(recursive: boolean): Object3D;
        copy(source: Object3D, recursive: boolean): Object3D;

    }

    export class Raycaster {

        constructor(origin: Vector3, direction: Vector3, near: number, far: number);

        ray: Ray;

        near: number;
        far: number;

        params: {

            Mesh: { },
            Line: { },
            LOD: { },
            Points: {
                threshold: number
            },
            Sprite: { },
            PointCloud: { }

        }

    }

    export class Layers {

        constructor();

        mask: number;
        set: __internal.Layers.layerFn;
        enable: __internal.Layers.layerFn;
        toogle: __internal.Layers.layerFn;
        disable: __internal.Layers.layerFn;
        test: __internal.Layers.layerFn;

    }

    export class EventDispatcher {

        _listeners: {

            [type: string]: Array<any>;

        };
        addEventListener(type: string, listener: any): void;
        hasEventListener(type: string, listener: any): boolean;
        removeEventListener(type: string, listener: any): void;
        dispatchEvent(event: any): void;

    }

    export class Clock {

        constructor(autoStart: boolean);

        startTime: number;
        oldTime: number;
        elapsedTime: number;
        running: boolean;

        start: VoidFunction;
        stop: VoidFunction;
        getElapsedTime(): number;
        getDelta(): number;

    }

    export class QuaternionLinearInterpolant extends Interpolant {

        constructor(parameterPositions: Array<number>, sampleValues: Array<Quaternion>, sampleSize: number, resultBuffer: Array<Quaternion>);

        ["constructor"]: typeof QuaternionLinearInterpolant;
        interpolate_(i1: number, t0: number, t: number, t1: number): Array<Quaternion>;

    }

    export class LinearInterpolant extends Interpolant {

        constructor(parameterPositions: Array<number>, sampleValues: Array<number>, sampleSize: number, resultBuffer: Array<number>);

        ["constructor"]: typeof LinearInterpolant;
        interpolate_(i1: number, t0: number, t: number, t1: number): Array<number>;

    }

    export class DiscreteInterpolant {

        constructor(parameterPositions: Array<number>, sampleValues: Array<any>, sampleSize: number, resultBuffer: Array<number>);

        ["constructor"]: typeof DiscreteInterpolant;
        interpolate_(i1: number): Array<any>;

    }

    export class CubicInterpolant extends Interpolant {

        constructor(parameterPositions: Array<number>, sampleValues: Array<number>, sampleSize:  number, resultBuffer: Array<number>);

        _weightPrev: number;
        _offsetPrev: number;
        _weightNext: number;
        _offsetNext: number;

        ["constructor"]: typeof CubicInterpolant;
        DefaultSettings_: {

            endingStart: number,
            endingEnd: number

        }
        intervalChanged_(i1: number, t0: number, t1: number): void;
        interpolate_(i1: number, t0: number, t: number, t1: number): Array<number>;

    }

    export class Interpolant {

        constructor(parameterPositions: Array<number>, sampleValue: Array<any>, sampleSize: number, resultBuffer: Array<any>);

        parameterPositions: Array<number>;
        _cachedIndex: number;
        resultBuffer: Array<any>;
        sampleValues: Array<any>;
        valueSize: number;
        evaluate(t: number): never;
        settings: { };
        DefaultSettings_: { };
        getSettings_(): { };
        copySampleValue_(index: number): Array<any>;
        beforeStart_: Function;
        afterEnd: Function;

    }

    export class Triangle {

        constructor(a: Vector3, b: Vector3, c: Vector3);

        a: Vector3;
        b: Vector3;
        c: Vector3;

        static getNormal(a: Vector3, b: Vector3, c: Vector3, target: Vector3): void;
        static getBarycoord(point: Vector3, a: Vector3, b: Vector3, c: Vector3, target: Vector3): Vector3;
        static containsPoint(point: Vector3, a: Vector3, b: Vector3, c: Vector3): boolean;
        set(a: Vector3, b: Vector3, c: Vector3): Triangle;
        setFromPointsAndIndices(points: Array<Vector3>, i0: number, i1: number, i2: number): Triangle;
        clone(): Triangle;
        copy(triangle: Triangle): Triangle;
        getArea(): number;
        getMidpoint(target: Vector3): Vector3;
        getNormal(target: Vector3): Vector3;
        getPlane(target: Vector3): Vector3;
        getBarycoord(point: Vector3, target: Vector3): Vector3;
        containsPoint(point: Vector3): boolean;
        intersectsBox(box: Box3): boolean;
        closestPointToPoint(p: Vector3, target: Vector3): Vector3;
        equals(triangle: Triangle): boolean;

    }

    export var Math: {

        DEG2RAD: number,
        RAD2DEG: number,

        generateUUID(): string,
        clamp(value: number, min: number, max: number): number,
        euclideanModulo(n: number, m: number): number,
        mapLinear(x: number, a1: number, a2: number, b1: number, b2: number): number,
        lerp(x: number, y: number, t: number): number,
        smoothstep(x: number, min: number, max: number): number,
        smootherstep(x: number, min: number, max: number): number,
        randInt(low: number, high: number): number,
        randFloat(low: number, high: number): number,
        randFloatSpread(range: number): number,
        degToRad(degrees: number): number,
        radToDeg(radians: number): number,
        isPowerOfTwo(value: number): boolean,
        ceilPowerOfTwo(value: number): number,
        floorPowerOfTwo(value: number): number

    }

    export class Spherical {

        constructor(radius: number, phi: number, theta: number);

        radius: number;
        phi: number;
        theta: number;

        set(radius: number, phi: number, theta: number): Spherical;
        clone(): Spherical;
        copy(other: Spherical): Spherical;
        makeSafe(): Spherical;
        setFromVector3(vec3: Vector3 | Vector4): Spherical;

    }

    export class Cylindrical {

        constructor(radius: number, theta: number, y: number);

        radius: number;
        theta: number;
        y: number;

        set(radius: number, theta: number, y: number): Cylindrical;

    }

    export class Plane {

        constructor(normal: Vector3, constant: number);

        normal: Vector3;
        constant: number;

        set(normal: Vector3, constant: number): Plane;
        setComponents(x:  number, y: number, z: number, w: number): Plane;
        setFromNormalAndCoplanarPoint(normal: Vector3, point: Vector3): Plane;
        setFromCoplanarPoints(a: Vector3, b: Vector3, c: Vector3): Plane;
        clone(): Plane;
        copy(plane: Plane): Plane;
        normalize(): Plane;
        negate(): Plane;
        distanceToPoint(point: Vector3): number;
        distanceToSphere(sphere: Sphere): number;
        projectPoint(point: Vector3, target: Vector3): Vector3;
        intersectLine(line: Line, target: Vector3): Vector3;
        intersectsLine(line: Line): boolean;
        coplanarPoint(target: Vector3): Vector3;
        applyMatrix4(matrix: Matrix4, optionalNormalMatrix: Matrix4): Plane;
        translate(offset: Vector3): Plane;
        equals(plane: Plane): boolean;

    }

    export class Frustum {

        constructor(p0: Plane, p1: Plane, p2: Plane, p3: Plane, p4: Plane, p5: Plane);

        planes: Array<Plane>;
        set(p0: Plane, p1: Plane, p2: Plane, p3: Plane, p4: Plane, p5: Plane): Frustum;
        clone(): Frustum;
        copy(frustum: Frustum): Frustum;
        setFromMatrix(m: Matrix4): Frustum;
        intersectsObject(object: Mesh): boolean;
        intersectsSprite(sprite: Sprite): boolean;
        intersectsSphere(sphere: Sphere): boolean;
        intersectsBox(box: Box3): boolean;
        containsPoint(point: Vector3): boolean;

    }
    
    export class Sphere {

        constructor(center: Vector3, radius: number);

        center: Vector3;
        radius: number;

        set(center: Vector3, radius: number): Sphere;
        setFromPoints(points: Array<Vector3>, optionalCenter: Vector3): Sphere;
        clone(): Sphere;
        copy(sphere: Sphere): Sphere;
        empty(): boolean;
        containsPoint(point: Vector3): boolean;
        distanceToPoint(point: Vector3): number;
        intersectsSphere(sphere: Sphere): boolean;
        intersectsBox(box: Box3): boolean;
        intersectsPlane(plane: Plane): boolean;
        clampPoint(point: Vector3, target: Vector3): Vector3;
        getBoundingBox(target: Box3): Box3;
        applyMatrix4(matrix: Matrix4): Sphere;
        translate(offset: Vector3): Sphere;
        equals(sphere: Sphere): boolean;

    }

    export class Ray {

        constructor(origin: Vector3, direction: Vector3);

        origin: Vector3;
        direction: Vector3;
        set(origin: Vector3, directon: Vector3): Ray;
        clone(): Ray;
        copy(ray: Ray): Ray;
        at(t: Vector3, target: Vector3): Vector3;
        lookAt(v: Vector3): Ray;
        recast(t: Vector3): Ray;
        closestPointToPoint(point: Vector3, target: Vector3): Vector3;
        distanceToPoint(point: Vector3): number;
        distanceSqToPoint(point: Vector3): number;
        distanceSqToSegment(v0: Vector3, v1: Vector3, optionalPointOnRay: Vector3, optionalPointOnSegment: Vector3): number;
        intersectSphere(sphere: Sphere, target: Vector3): Vector3;
        intersectsSphere(sphere: Sphere): boolean;
        distanceToPlane(plane: Plane): number;
        intersectPlane(plane: Plane, target: Vector3): Vector3;
        intersectsPlane(plane: Plane): boolean;
        intersectBox(box: Box3, target: Vector3): Vector3;
        intersectsBox(box: Box3): boolean;
        intersectTriangle(a: Vector3, b: Vector3, c: Vector3, backfaceCulling: boolean, target: Vector3): Vector3;
        applyMatrix4(matrix4: Matrix4): Ray;
        equals(ray: Ray): boolean;

    }

    export class Matrix4 {

        elements: Array<number>;

        isMatrix4: true;
        set(n11: number, n12: number, n13: number, n14: number, n21: number, n22: number, n23: number, n24: number, n31: number, n32: number, n33: number, n34: number, n41: number, n42: number, n43: number, n44: number): Matrix4;
        identity(): Matrix4;
        clone(): Matrix4;
        copy(m: Matrix4): Matrix4;
        copyPosition(m: Matrix4): Matrix4;
        extractBasis(xAxis: Vector3, yAxis: Vector3, zAxis: Vector3): Matrix4;
        makeBasis(xAxis: Vector3, yAxis: Vector3, zAxis: Vector3): Matrix4;
        extractRotation(m: Matrix4): Matrix4;
        makeRotationFromEuler(euler: Euler): Matrix4;
        makeRotationFromQuaternion(q: Quaternion): Matrix4;
        lookAt(eye: Vector3, target: Vector3, up: Vector3): Matrix4;
        multiply(m: Matrix4, n: Matrix4): Matrix4;
        premultiply(m: Matrix4): Matrix4;
        multiplyMatrices(a: Matrix4, b: Matrix4): Matrix4;
        multiplyScalar(s: number): Matrix4;
        applyToBufferAttribute(attribute: BufferAttribute): BufferAttribute;
        determinant(): number;
        transpose(): Matrix4;
        setPosition(v: Vector3): Matrix4;
        getInverse(m: Matrix4, throwOnDegenerate: boolean): Matrix4;
        scale(v: Vector3): Matrix4;
        getMaxScaleOnAxis(): number;
        makeTranslation(x: number, y: number, z: number): Matrix4;
        makeRotationX(theta: number): Matrix4;
        makeRotationY(theta: number): Matrix4;
        makeRotationZ(theta: number): Matrix4;
        makeRotationAxis(axis: Vector3, angle: number): Matrix4;
        makeScale(x: number, y: number, z: number): Matrix4;
        makeShear(x: number, y: number, z: number): Matrix4;
        compose(position: Vector3, quaternion: Quaternion, scale: Vector3): Matrix4;
        decompose(position: Vector3, quaternion: Quaternion, scale: Vector3): Matrix4;
        makePerspective(left: number, right: number, top: number, bottom: number, near: number, far: number): Matrix4;
        makeOrthographic(left: number, right: number, top: number, bottom: number, near: number, far:  number): Matrix4;
        equals(matrix: Matrix4): boolean;
        fromArray(array: Array<number>, offset: number): Matrix4;
        toArray(array: Array<number>, offset: number): Array<number>;

    }

    export class Matrix3 {

        element: Array<number>;

        isMatrix3: true;
        set(n11: number, n12: number, n13: number, n21:  number, n22: number, n23: number, n31: number, n32: number, n33: number): Matrix3;
        identity(): Matrix3;
        clone(): Matrix3;
        copy(m: Matrix3): Matrix3;
        setFromMatrix4(m: Matrix4): Matrix3;
        applyToBufferAttribute(attribute: BufferAttribute): BufferAttribute;
        multiply(m: Matrix3): Matrix3;
        premultiply(m: Matrix3): Matrix3;
        multiplyMatrices(a: Matrix3, b: Matrix3): Matrix3;
        multiplyScalar(s: number): Matrix3;
        determinant(): number;
        getInverse(matrix: Matrix3, throwOnDegenerate: boolean): Matrix3;
        transpose(): Matrix3;
        getNormalMatrix(matrix4: Matrix4): Matrix3;
        transposeIntoArray(r: Array<number>): Matrix3;
        setUvTransform(tx: number, ty: number, sx: number, sy: number, rotation: number, cx: number, cy: number): void;
        scale(sx: number, sy: number): Matrix3;
        rotate(theta: number): Matrix3;
        translate(tx: number, ty: number): Matrix3;
        equals(matrix: Matrix3): boolean;
        fromArray(array: Array<number>, offset: number): Matrix3;
        toArray(array: Array<number>, offset: number): Array<number>;

    }

    export class Box3 {

        constructor(min: Vector3, max: Vector3);

        min: Vector3;
        max: Vector3;
    
        isBox3: true;
        set(min: Vector3, max: Vector3): Box3;
        setFromArray(array: Array<number>): Box3;
        setFromBufferAttribute(attribute: BufferAttribute): Box3;
        setFromPoints(points: Array<Vector3>): Box3;
        setFromCenterAndSize(center: Vector3, size: Vector3): Box3;
        setFromObject(object: any): Box3;
        clone(): Box3;
        copy(box: Box3): Box3;
        makeEmpty(): Box3;
        isEmpty(): boolean;
        getCenter(target: Vector3): Vector3;
        getSize(target: Vector3): Vector3;
        expandByPoint(point: Vector3): Box3;
        expandByVector(vector: Vector3): Box3;
        expandByScalar(scalar: number): Box3;
        expandByObject(object: any): Box3;
        containsPoint(point: Vector3): boolean;
        containsBox(box: Box3): boolean;
        getParameter(point: Vector3, target: Vector3): Vector3;
        intersectsBox(box: Box3): boolean;
        intersectsSphere(sphere: Sphere): boolean;
        intersectsPlane(plane: Plane): boolean;
        intersectsTriangle(triangle: Triangle): boolean;
        clampPoint(point: Vector3, target: Vector3): Vector3;
        distanceToPoint(point: Vector3): number;
        getBoundingSphere(target: Vector3): Vector3;
        intersect(box: Box3): Box3;
        union(box: Box3): Box3;
        applyMatrix4(matrix: Matrix4): Vector3;
        translate(offset: Vector3): Vector3;
        equals(box: Box3): Box3;

    }

    export class Box2 {

        constructor(min: Vector2, max: Vector2);

        min: Vector2;
        max: Vector2;

        set(min: Vector2, max: Vector2): Box2;
        setFromPoints(points: Array<Vector2>): Box2;
        setFromCenterAndSize(center: Vector2, size: Vector2): Box2;
        clone(): Box2;
        copy(box: Box2): Box2;
        makeEmpty(): Box2;
        isEmpty(): boolean;
        getCenter(target: Vector2): Vector2;
        getSize(target: Vector2): Vector2;
        expandByPoint(point: Vector2): Box2;
        expandByVector(vector: Vector2): Box2;
        expandByScalar(scalar: number): Box2;
        containsPoint(point: Vector2): boolean;
        containsBox(box: Box2): boolean;
        getParameter(point: Vector2, target: Vector2): Vector2;
        intersectsBox(box: Box2): Vector2;
        clampPoint(point: Vector2, target: Vector2): Vector2;
        distanceToPoint(point: Vector2): number;
        intersect(box: Box2): Box2;
        union(box: Box2): Box2;
        translate(offset: Vector2): Box2;
        equals(box: Box2): boolean;

    }

    export class Line3 {

        constructor(start: Vector3, end: Vector3);

        start: Vector3;
        end: Vector3;

        set(start: Vector3, end: Vector3): Line3;
        clone(): Line3;
        copy(line: Line3): Line3;
        getCenter(target: Vector3): Vector3;
        delta(target: Vector3): Vector3;
        distanceSq(): number;
        distance(): number;
        at(t: number, target: Vector3): Vector3;
        closestPointToPointParameter(point: Vector3, clampToLine: boolean): number;
        closestPointToPoint(point: Vector3, clampToLine: boolean, target: Vector3): Vector3;
        applyMatrix4(matrix: Matrix4): Line3;
        equals(line: Line3): boolean;

    }

    export class Euler {

        constructor(x: number, y: number, z: number, order: __internal.Euler.order);

        _x: number;
        _y: number;
        _z: number;
        _order: __internal.Euler.order;

        static RotationOrders: Array<__internal.Euler.order>;
        static DefaultOrder: __internal.Euler.order;

        get x(): number;
        set x(value: number);
        get y(): number;
        set y(value: number);
        get z(): number;
        set z(value: number);
        get order(): __internal.Euler.order;
        set order(value: __internal.Euler.order);

        isEuler: true;
        set(x: number, y: number, z: number, order: __internal.Euler.order): Euler;
        clone(): Euler;
        copy(euler: Euler): Euler;
        setFromRotationMatrix(m: Matrix4, order: __internal.Euler.order, update: boolean): Euler;
        setFromQuaternion(q: Quaternion, order: __internal.Euler.order, update: boolean): Euler;
        setFromVector3(v: Vector3, order: __internal.Euler.order): Euler;
        reorder(newOrder: __internal.Euler.order): Euler;
        equals(euler: Euler): boolean;
        fromArray(array: Array<number | __internal.Euler.order>): Euler;
        toArray(array: Array<number | __internal.Euler.order>, offset: number): Array<number | __internal.Euler.order>;
        toVector3(optionalResult: Vector3): Vector3;
        onChange(callback: Function): Euler;

        onChangeCallback: Function;

    }

    export class Vector4 {

        constructor(x: number, y: number, z: number, w: number);

        x: number;
        y: number;
        z: number;
        w: number;

        isVector4: true;

        set(x: number, y: number, z: number, w: number): Vector4;
        setScalar(scalar: number): Vector4;
        setX(x: number): Vector4;
        setY(y: number): Vector4;
        setZ(z: number): Vector4;
        setW(w: number): Vector4;
        setComponent(index: number, value: number): Vector4;
        getComponent(idnex: number): number;
        clone(): Vector4;
        copy(v: Vector4): Vector4;
        add(v: Vector4): Vector4;
        add(v: Vector4, w: Vector4): Vector4;
        addScalar(s: number): Vector4;
        addVectors(a: Vector4, b: Vector4): Vector4;
        addScaledVector(v: Vector4, s: number): Vector4;
        sub(v: Vector4): Vector4;
        sub(v: Vector4, w: Vector4): Vector4;
        subScalar(s: number): Vector4;
        subVectors(a: Vector4, b: Vector4): Vector4;
        multiplyScalar(scalar: number): Vector4;
        applyMatrix4(m: Matrix4): Vector4;
        divideScalar(scalar: number): Vector4;
        setAxisAngleFromQuaternion(q: Quaternion): Vector4;
        setAxisAngleFromRotationMatrix(m: Matrix4): Vector4;
        min(v: Vector4): Vector4;
        max(v: Vector4): Vector4;
        clamp(min: Vector4, max: Vector4): Vector4;
        clampScalar(minVal: number, maxVal: number): Vector4;
        clampLength(min: number, max: number): Vector4;
        floor(): Vector4;
        ceil(): Vector4;
        round(): Vector4;
        roundToZero(): Vector4;
        negate(): Vector4;
        dot(v: Vector4): number;
        lengthSq(): number;
        length(): number;
        manhattanLength(): number;
        normalize(): Vector4;
        setLength(length: number): Vector4;
        lerp(v: Vector4, alpha: number): Vector4;
        lerpVectors(v1: Vector4, v2: Vector4, alpha: number): Vector4;
        equals(v: Vector4): boolean;
        toArray(array: Array<number>, offset: number): Array<number>;
        fromBufferAttribute(attribute: BufferAttribute, index: number): Vector4;

    }

    export class Vector3 {

        constructor(x: number, y: number, z: number);

        x: number;
        y: number;
        z: number;

        isVector3: true;
        set(x: number, y: number, z: number): Vector3
        setScalar(scalar: number): Vector3;
        setX(x: number): Vector3;
        setY(y: number): Vector3;
        setZ(z: number): Vector3;
        setComponent(index: number, value: number): Vector3;
        getComponent(index: number): number;
        clone(): Vector3;
        copy(v: Vector3): Vector3;
        add(v: Vector3): Vector3;
        add(v: Vector3, w: Vector3): Vector3;
        addScalar(s: number): Vector3;
        addVectors(a: Vector3, b: Vector3): Vector3;
        addScaledVector(v: Vector3, s: number): Vector3;
        sub(v: Vector3): Vector3;
        sub(v: Vector3, w: Vector3): Vector3;
        subScalar(s: number): Vector3;
        multiply(v: Vector3): Vector3;
        multiply(v: Vector3, w: Vector3): Vector3;
        multiplyScalar(scalar: number): Vector3;
        multiplyVectors(a: Vector3, b: Vector3): Vector3;
        applyEuler(euler: Euler): Vector3;
        applyAxisAngle(axis: Vector3, angle: number): Vector3;
        applyMatrix3(m: Matrix3): Vector3;
        applyMatrix4(m: Matrix4): Vector3;
        applyQuaternion(q: Quaternion): Vector3;
        project(camera: Camera): Vector3;
        unproject(camera: Camera): Vector3;
        transformDirection(m: Matrix4): Vector3;
        divide(v: Vector3): Vector3;
        divideScalar(scalar: number): Vector3;
        min(v: Vector3): Vector3;
        max(v: Vector3): Vector3;
        clamp(min: Vector3, max: Vector3): Vector3;
        clampScalar(minVal: number, maxVal: number): Vector3;
        clampLength(min: Vector3, max: Vector3): Vector3;
        floot(): Vector3;
        ceil(): Vector3;
        round(): Vector3;
        roundToZero(): Vector3;
        negate(): Vector3;
        dot(v: Vector3): number;
        lengthSq(): number;
        length(): number;
        manhattanLength(): number;
        normalize(): Vector3;
        setLength(length: number): Vector3;
        lerp(v: Vector3, alpha: number): Vector3;
        lerpVectors(v1: Vector3, v2: Vector3, alpha: Vector3): Vector3;
        cross(v: Vector3): Vector3;
        cross(v: Vector3, w: Vector3): Vector3;
        crossVectors(a: Vector3, b: Vector3): Vector3;
        projectOnVector(vector: Vector3): Vector3;
        projectOnPlane(planeNormal: Vector3): Vector3;
        reflect(normal: Vector3): Vector3;
        angleTo(v: Vector3): number;
        distanceTo(v: Vector3): number;
        distanceToSquared(v: Vector3): number;
        manhattanDistanceTo(v: Vector3): number;
        setFromSpherical(s: Spherical): Vector3;
        setFromCylindrical(c: Cylindrical): Vector3;
        setFromMatrixPosition(m: Matrix4): Vector3;
        setFromMatrixScale(m: Matrix4): Vector3;
        setFromMatrixColumn(m: Matrix4, index: number): Vector3;
        equals(v: Vector3): boolean;
        fromArray(array: Array<number>, offset: number): Vector3;
        toArray(array: Array<number>, offset: number): Array<number>;
        fromBufferAttribute(attribute: BufferAttribute, index:  number): Vector3;

    }

    export class Vector2 {

        constructor(x: any, y: number);

        x: number;
        y: number;

        get width(): number;
        set width(value: number);
        get height(): number;
        set height(value: number);

        isVector2: true;
        set(x: number, y: number): Vector2;
        setScalar(scalar: number): Vector2;
        setX(x: number): Vector2;
        setY(y: number): Vector2;
        setComponent(index: number, value: number): Vector2;
        getComponent(index: number): number;
        clone(): Vector2;
        copy(c: Vector2): Vector2;
        add(v: Vector2): Vector2;
        add(v: Vector2, w: Vector2): Vector2;
        addScalar(s: number): Vector2;
        addVectors(a: Vector2, b: Vector2): Vector2;
        addScaledVector(v: Vector2, s: number): Vector2;
        sub(v: Vector2): Vector2;
        sub(v: Vector2, w: Vector2): Vector2;
        subScalar(scalar: number): Vector2;
        subVectors(a: Vector2, b: Vector2): Vector2;
        multiply(v: Vector2): Vector2;
        multiplyScalar(scalar: number): Vector2;
        divide(v: Vector2): Vector2;
        divideScalar(scalar: number): Vector2;
        applyMatrix3(m: Matrix3): Vector2;
        min(v: Vector2): Vector2;
        max(v: Vector2): Vector2;
        clamp(min: Vector2, max: Vector2): Vector2;
        clampScalar(minVal: number, maxVal: number): Vector2;
        floor(): Vector2;
        ceil(): Vector2;
        round(): Vector2;
        roundToZero(): Vector2;
        negate(): Vector2;
        dot(v: Vector2): Vector2;
        cross(v: Vector2): Vector2;
        lengthSq(): number;
        length(): number;
        manhattanLength(): number;
        normalize(): Vector2;
        angle(): number;
        distanceTo(v: Vector2): number;
        distanceToSquaed(v: Vector2): number;
        manhattanDistanceTo(v: Vector2): number;
        setLength(length: number): Vector2;
        lerp(v: Vector2, alpha: number): Vector2;
        lerpVectors(v1: Vector2, v2: Vector2, alpha: number): Vector2;
        equals(v: Vector2): boolean;
        fromArray(array: Array<number>, offset: number): Vector2;
        toArray(array: Array<number>, offset: number): Vector2;
        fromBufferAttribute(attribute: BufferAttribute, index: number): Vector2;
        rotateAround(center: Vector2, angle: number): Vector2;

    }

    export class Quaternion {

        constructor(x: number, y: number, z: number, w: number);

        _x: number;
        _y: number;
        _z: number;
        _w: number;

        static slerp(qa: Quaternion, qb: Quaternion, qm: Quaternion, t: Quaternion): Quaternion;
        static slerpFlat(dst: Array<number>, dstOffset: number, src0: Array<number>, srcOffset0: number, src1: Array<number>, srcOffset1: number, t: number): void;

        get x(): number;
        set x(value: number);
        get y(): number;
        set y(value: number);
        get z(): number;
        set z(value: number);
        get w(): number;
        set w(value: number);

        set(x: number, y: number, z: number, w: number): Quaternion;
        clone(): Quaternion;
        copy(quaternion: Quaternion): Quaternion;
        setFromEuler(euler: Euler, update: boolean): Quaternion;
        setFromAxisAngle(axis: Vector3, angle: number): Quaternion;
        setFromRotationMatrix(m: Matrix4): Quaternion;
        setFromUnitVectors(vFrom: Vector3, vTo: Vector3): Quaternion;
        angleTo(q: Quaternion): number;
        rotateTowards(q: Quaternion, step: number): Quaternion;
        inverse(): Quaternion;
        conjugate(): Quaternion;
        dot(v: Quaternion): number;
        lengthSq(): number;
        length(): number;
        normalize(): Quaternion;
        multiply(q: Quaternion): Quaternion;
        multiply(q: Quaternion, p: Quaternion): Quaternion;
        premultiply(q: Quaternion): Quaternion;
        multiplyQuaternions(a: Quaternion, b: Quaternion): Quaternion;
        slerp(qb: Quaternion, t: number): Quaternion;
        equals(quaternion: Quaternion): Quaternion;
        fromArray(array: Array<number>, offset: number): Quaternion;
        toArray(array: Array<number>, offset: number): Array<number>;
        onChange(callback: Function): Quaternion;

        onChangeCallback: Function;

    }

    export class Color {

        constructor(r: Color | string | number, g: number, b: number);

        isColor: true;

        r: number;
        g: number;
        b: number;

        set(value: Color | number | string): Color;
        setScalar(scalar: number): Color;
        setHex(hex: number): Color;
        setRGB(r: number, g: number, b: number): Color;
        setHSL(h: number, s: number, l: number): Color;
        setStyle(style: string): Color;
        clone(): Color;
        copy(color: Color): Color;
        copyGammaToLinear(color: Color, gammaFactor: number): Color;
        copyLinearToGamma(color: Color, gammaFactor: number): Color;
        convertGammaToLinear(gammaFactor: number): Color;
        convertLinearToGamma(gammaFactor: number): Color;
        copySRGBToLinear(color: Color): Color;
        copyLinearToSRGB(color: Color): Color;
        convertSRGBToLinear(): Color;
        convertLinearToSRGB(): Color;
        getHex(): number;
        getHexString(): string;
        getHSL(target: __internal.Color.hslObj): __internal.Color.hslObj;
        getStyle(): string;
        offsetHSL(h: number, s: number, l: number): Color;
        add(color: Color): Color;
        addColors(color1: Color, color2: Color): Color;
        addScalar(s: number): Color;
        sub(color: Color): Color;
        multiply(color: Color): Color;
        multiplyScalar(s: number): Color;
        lerp(color: Color, alpha: number): Color;
        equals(c: Color): boolean;
        fromArray(array: Array<number>, offset: number): Color;
        toArray(array: Array<number>, offset: number): Array<number>;
        toJSON(): number;

    }

    export class ImmediateRenderObject extends Object3D {

        constructor(material: Material);

        material: Material;
        render: Function;

        ["constructor"]: typeof Object3D & typeof ImmediateRenderObject;

        isImmediateRenderObject: true;

    }

    export class VertexNormalsHelper extends LineSegments {

        constructor(object: Object3D, size: number, hex: number, lineWidth: number);

        object: Object3D;
        size: number;
        matrixAutoUpdate: boolean;

        ["constructor"]: typeof LineSegments.prototype.constructor & typeof VertexNormalsHelper;

        update: VoidFunction;

    }

    export class SpotLightHelper extends Object3D {

        constructor(light: SpotLight, color: Color);

        light: SpotLight;
        matrix: Matrix4;
        matrixAutoUpdate: boolean;
        color: Color;

        cone: LineSegments;

        ["constructor"]: typeof Object3D & SpotLightHelper;
        dispose: VoidFunction;
        update: VoidFunction;

    }

    export class SkeletonHelper extends LineSegments {

        constructor(object: Object3D);

        root: Object3D;
        bones: Array<Bone>;
        matrix: Matrix4;
        matrixAutoUpdate: boolean;

        ["constructor"]: typeof LineSegments.prototype.constructor & typeof SkeletonHelper;
        updateMatrixWorld(force: boolean): void;

    }

    export class PointLightHelper extends Mesh {

        constructor(light: PointLight, shpereSize: number, color: Color);

        light: PointLight;
        color: Color;
        matrix: Matrix4;
        matrixAutoUpdate: boolean;

        ["constructor"]: typeof Mesh.prototype.constructor & typeof PointLightHelper;

        dispose: VoidFunction;
        update: VoidFunction;

    }

    export class RectAreaLightHelper extends Object3D {

        constructor(light: RectAreaLight, color: Color);

        light: RectAreaLight;
        matrix: Matrix4;
        matrixAutoUpdate: boolean;
        color: Color;
        line: Line;

        ["constructor"]: typeof Object3D & typeof RectAreaLightHelper;

        dispose: VoidFunction;
        update: VoidFunction;

    }

    export class HemisphereLightHelper extends Object3D {

        constructor(light: HemisphereLight, size: number, color: Color);

        light: HemisphereLight;
        matrix: Matrix4;
        matrixAutoUpdate: boolean;
        color: Color;
        material: Material;

        ["constructor"]: typeof Object3D & typeof HemisphereLightHelper;

        dispose: VoidFunction;
        update: VoidFunction;

    }

    export class GridHelper extends LineSegments {

        constructor(size: number, divisions: number, color1: Color, color2: Color);

        ["constructor"]: typeof LineSegments.prototype.constructor & typeof GridHelper;

    }

    export class PolarGridHelper extends LineSegments {

        constructor(radius: number, radials: number, circles: number, divisions: number, color1: Color, color2: Color);

        ["constructor"]: typeof LineSegments.prototype.constructor & typeof PolarGridHelper;

    }

    export class FaceNormalsHelper extends LineSegments {

        constructor(object: Object3D, size: number, hex: number, linewidth: number);

        object: Object3D;
        size: number;
        matrixAutoUpdate: boolean;

        ["constructor"]: typeof LineSegments.prototype.constructor & typeof FaceNormalsHelper;
    
        update: VoidFunction;

    }

    export class DirectionalLightHelper extends Object3D {

        constructor(light: DirectionalLight, size: number, color: Color);

        light: DirectionalLight;
        matrix: Matrix4;
        matrixAutoUpdate: boolean;
        color: Color;
        lightPlane: Line;
        targetLine: Line;

        ["constructor"]: typeof Object3D & typeof DirectionalLightHelper;

        dispose: VoidFunction;
        update: VoidFunction;

    }

    export class CameraHelper extends LineSegments {

        constructor(camera: Camera);

        camera: Camera;
        matrix: Matrix4;
        matrixAutoUpdate: boolean;
        pointMap: Array<Array<number>>;

        ["constructor"]: typeof LineSegments.prototype.constructor & typeof CameraHelper;

        update: VoidFunction;

    }

    export class BoxHelper extends LineSegments {

        constructor(object: Object3D, color: Color);

        object: Object3D;
        matrixAutoUpdate: boolean;

        ["constructor"]: typeof LineSegments.prototype.constructor & typeof BoxHelper;

        update: VoidFunction;
        setFromObject(object: Object3D): BoxHelper;

    }

    export class Box3Helper extends LineSegments {

        constructor(box: Box3, hex: number);

        type: string;
        box: Box3;

        ["constructor"]: typeof LineSegments.prototype.constructor & typeof Box3Helper;

        updateMatrixWorld(force: boolean): void;

    }

    export class PlaneHelper extends Line {

        constructor(plane: Plane, size:  number, hex: number);

        type: string;
        plane: Plane;
        size: number;

        ["construcotr"]: typeof Line.prototype.constructor & typeof PlaneHelper;

        updateMatrixWorld(force: boolean): void;

    }

    export class ArrowHelper extends Object3D {

        constructor(dir: Vector3, origin: Vector3, length: number, color: Color, headLength: number, headWidth: number);

        line: Line;
        cone: Mesh;

        ["constructor"]: typeof Object3D & typeof ArrowHelper;

        setDirection(dir: Vector3): void;
        setLength(length: number, headLength: number, headWidth: number): void;
        setColor(color: Color): void;

    }

    export class AxesHelper extends LineSegments {

        constructor(size: number);

        ["constructor"]: typeof LineSegments.prototype.constructor & typeof AxesHelper;

    }

    export class Shape extends Path {

        constructor(points: Array<Vector2>);

        uuid: string;
        type: string;
        holes: Array<Path>;

        ["constructor"]: typeof Path.prototype.constructor & typeof Shape;

        getPointsHoles(divisions: number): Array<Vector2>;
        extractPoints(divisions: number): __internal.Shape.extract;
        copy(source: Shape): Shape;
        toJSON(): { };
        fromJSON(json: { }): Shape;

    }

    export class Path extends CurvePath {

        constructor(points: Array<Vector2>);

        type: string;
        currentPoint: Vector2;

        ["constructor"]: typeof CurvePath.prototype.constructor & typeof Path;

        setFromPoints(points: Array<Vector2>): void;
        moveTo(x: number, y: number): void;
        lineTo(x: number, y: number): void;
        quadraticCurveTo(aCPx: number, aCPy: number, aX: number, aY: number): void;
        bezierCurveTo(aCP1x: number, aCP1y: number, aCP2x: number, aCP2y: number, aX: number, aY: number): void;
        splineThru(pts: Array<Vector2>): void;
        arc(aX: number, aY: number, aRadius: number, aStartAngle: number, aEndAngle: number, aClockwise: boolean): void;
        absarc(aX: number, aY: number, aRadius: number, aStartAngle: number, aEndAngle: number, aClockwise: boolean): void;
        ellipse(aX: number, aY: number, xRadius: number, yRadius: number, aStartAngle: number, aEndAngle: number, aClockwise: boolean, aRotation: number): void;
        absellipse(aX: number, aY: number, xRadius: number, yRadius: number, aStartAngle: number, aEndAngle: number, aClockwise: boolean, aRotation: number): void;
        copy(source: Path): Path;
        toJSON(): { };
        fromJSON(json: { }): Path;

    }

    export class ShapePath {

        type: string;
        color: Color;
        subPaths: Array<Path>;
        currentPath: Path;

        moveTo(x: number, y: number): void;
        lineTo(x: number, y: number): void;
        quadraticCurveTo(aCPx: number, aCPy: number, aX: number, aY: number): void;
        bezierCurveTo(aCP1x: number, aCP1y: number, aCP2x: number, aCP2y: number, aX: number, aY: number): void;
        splineThru(pts: Array<Vector2>): void;
        toShapes(isCCW: number, noHoles: boolean): Array<Shape>;

    }

    export class Font {

        constructor(data: { });

        type: string;
        data: { };

        isFont: true;
        generateShapes(text: string, size: number): Array<ShapePath>;

    }

    export class CurvePath extends Curve {

        type: string;
        curves: Array<LineCurve>;
        autoClose: boolean;

        ["constructor"]: typeof Curve;

        add(curve: LineCurve): void;
        closePath: VoidFunction;
        getPoint(t: number): any;
        getLength(): number;
        updateArcLengths: VoidFunction;
        getCurveLength(): Array<number>;
        getSpacedPoints(divisions: number): Array<Vector2>;
        getPoints(divisions: number): Array<Vector2>;
        copy(source: CurvePath): CurvePath;
        toJSON(): { };
        fromJSON(json: { }): CurvePath;

    }

    export class Curve {

        type: string;
        arcLengthDivisions: number;

        getPointAt(u: number, optionalTarget: any): any;
        getPoints(divisions: number): Array<any>;
        getSpacedPoints(divisions: number): Array<any>;
        getLength(): number;
        getLengths(divisions: number): Array<number>;
        updateArcLengths: VoidFunction;
        getUtoTmapping(u: number, distance: number): number;
        getTangent(t: number): Vector2;
        getTangentAt(u: number): Vector2;
        computeFrenetFrames(segments: number, closed: boolean): __internal.Curve.frenetFrames;
        clone(): Curve;
        copy(source: Curve): Curve;
        toJSON(): { };
        fromJSON(json: { }): Curve;

    }
    
    export var ImageUtils: {

        getDataUrl(image: HTMLCanvasElement | ImageData): string

    }
    
    export var ShapeUtils: {

        area(contour: Array<Vector2>): number;
        isClockWise(pts: Array<Vector2>): boolean;
        triangulateShape(contour: Array<Vector2>, holes: Array<Vector2>): any;

    }

    export var WebGLUtils: {

        new (gl: WebGL2RenderingContext | WebGLRenderingContext, extensions: __internal.WebGLExtensions, capabilities: __internal.WebGLCapabilities): __internal.WebGLUtils,

        (gl: WebGL2RenderingContext | WebGLRenderingContext, extensions: __internal.WebGLExtensions, capabilities: __internal.WebGLCapabilities): __internal.WebGLUtils

    }

    export class WireframeGeometry extends BufferGeometry {

        constructor(geometry: Geometry);

        type: string;
        ["constructor"]: typeof BufferGeometry & typeof WireframeGeometry;

    }

    export class ParametricGeometry extends Geometry {

        constructor(func: Array<Function>, slices: number, stacks: number);

        type: string;
        parameters: __internal.Parametric.parameters;

        ["constructor"]: typeof Geometry.prototype.constructor & typeof ParametricGeometry;

    }

    export class ParametricBufferGeometry extends BufferGeometry {

        constructor(func: Array<Function>, slices: number, stacks: number);

        type: string;
        parameters: __internal.Parametric.parameters;

        ["constructor"]: typeof BufferGeometry.prototype.constructor & typeof ParametricBufferGeometry;

    }

    export class TetrahedronGeometry extends Geometry {

        constructor(radius: number, detail: number);

        type: string;
        parameters: __internal.Hedron.parameters;

        ["constructor"]: typeof Geometry & typeof TetrahedronGeometry;

}

    export class TetrahedronBufferGeometry extends PolyhedronBufferGeometry {
        
        constructor(radius: number, detail: number);
        
        type: string;
        parameters: __internal.Hedron.parameters;

        ["constructor"]: typeof PolyhedronBufferGeometry.prototype.constructor & typeof TetrahedronBufferGeometry;

    }

    export class OctahedronGeometry extends Geometry {

        constructor(radius: number, detail: number);

        type: string;
        parameters: __internal.Hedron.parameters;

        ["constructor"]: typeof Geometry & typeof OctahedronGeometry;

    }

    export class OctahedronBufferGeometry extends PolyhedronBufferGeometry {

        constructor(radius: number, detail: number);

        type: string;
        parameters: __internal.Hedron.parameters;

        ["constructor"]: typeof PolyhedronBufferGeometry.prototype.constructor & typeof OctahedronBufferGeometry;

    }

    export class IcosahedronGeometry extends Geometry {

        constructor(radius: number, detail: number);

        type: string;
        parameters: __internal.Hedron.parameters;

        ["constructor"]: typeof Geometry & typeof IcosahedronGeometry;

    }

    export class IcosahedronBufferGeometry extends PolyhedronBufferGeometry {

        constructor(radius: number, detail: number);

        type: string;
        parameters: __internal.Hedron.parameters;

        ["constructor"]: typeof PolyhedronBufferGeometry.prototype.constructor & typeof IcosahedronBufferGeometry;

    }

    export class DodecahedronGeometry extends Geometry {

        constructor(radius: number, detail: number);

        type: string;
        parameters: __internal.Hedron.parameters;

        ["constructor"]: typeof Geometry & typeof DodecahedronGeometry;

    }

    export class DodecahedronBufferGeometry extends PolyhedronBufferGeometry {

        constructor(radius: number, detail: number);

        type: string;
        parameters: __internal.Hedron.parameters;

        ["constructor"]: typeof PolyhedronBufferGeometry.prototype.constructor & typeof DodecahedronBufferGeometry;

    }

    export class PolyhedronGeometry extends Geometry {

        constructor(vertices: Array<number>, indices: Array<number>, radius: number, detail: number);

        type: string;
        parameters: __internal.Hedron.parameters & __internal.Hedron.poly;

        ["constructor"]: typeof Geometry & typeof PolyhedronGeometry;

    }

    export class PolyhedronBufferGeometry extends BufferGeometry {

        constructor(vertices: Array<number>, indices: Array<number>, radius: number, detail: number);

        type: string;
        parameters: __internal.Hedron.parameters & __internal.Hedron.poly;

        position: Float32BufferAttribute;
        normal: Float32BufferAttribute;
        uv: Float32BufferAttribute;

        ["constructor"]: typeof BufferGeometry & typeof PolyhedronBufferGeometry;

    }

    export class TubeGeometry extends Geometry {

        constructor(path: Path, tubularSegments: number, radius: number, radialSegments: number, closed: boolean);

        type: string;
        parameters: {

            path: Path,
            tubularSegments: number,
            radius: number,
            radialSegments: number,
            closed: boolean

        }

        tangents: Array<Vector2>;
        normals: Array<Vector2>;
        binormals: Array<Vector2>;

        ["constructor"]: typeof Geometry & typeof TubeGeometry;

    }

    export class TubeBufferGeometry extends BufferGeometry {

        constructor(path: Path, tubularSegments: number, radius: number, radialSegments: number, closed: boolean);

        type: string;
        parameters: {

            path: Path,
            tubularSegments: number,
            radius: number,
            radialSegments: number,
            closed: boolean

        }

        tangents: Array<Vector2>;
        normal: Array<Vector2>;
        binormals: Array<Vector2>;

        ["constructor"]: typeof BufferGeometry & typeof TubeBufferGeometry;

    }

    export class TorusKnotGeometry extends Geometry {

        constructor(radius: number, tube: number, tubularSegments: number, radialSegments: number, p: number, q: number, heightScale: number);

        type: string;

        parameters: {

            radius: number,
            tube: number,
            tubularSegments: number,
            radialSegments: number,
            p: number,
            q: number

        }

        ["constructor"]: typeof Geometry & typeof TorusKnotGeometry;

    }

    export class TorusKnotBufferGeometry extends BufferGeometry {

        constructor(radius: number, tube: number, tubularSegments: number, radialSegments: number, p: number, q: number);

        type: string;
        parameters: {

            radius: number,
            tube: number,
            tubularSegments: number,
            radialSegments: number,
            p: number,
            q: number

        }

        ["constructor"]: typeof BufferGeometry & typeof TorusKnotBufferGeometry;

        position: Float32BufferAttribute;
        normal: Float32BufferAttribute;
        uv: Float32BufferAttribute;

    }

    export class TorusGeometry extends Geometry {

        constructor(radius: number, tube: number, radialSegments: number, tubularSegments: number, arc: number);

        type: string;
        parameters: {

            radius: number,
            tube: number,
            radialSegments: number,
            tubularSegments: number,
            arc: number

        }

        ["constructor"]: typeof Geometry & typeof TorusGeometry;

    }

    export class TorusBufferGeometry extends BufferGeometry {

        constructor(radius: number, tube: number, radialSegments: number, tubularSegments: number, arc: number);

        type: string;
        parameters: {

            radius: number,
            tube: number,
            radialSegments: number,
            tubularSegments: number,
            arc: number

        }

        position: Float32BufferAttribute;
        normal: Float32BufferAttribute;
        uv: Float32BufferAttribute;

    }

    export class TextGeometry extends Geometry {

        constructor(text: string, parameters: __internal.Text.parameters);

        type: string;

        parameters: {

            text: string,
            parameters: __internal.Text.parameters

        }

        ["constructor"]: typeof Geometry & typeof TextGeometry;

    }

    export class TextBufferGeometry extends BufferGeometry {

        constructor(text: string, parameters: __internal.Text.parameters);

        type: string;

        ["constructor"]: typeof BufferGeometry & typeof TextBufferGeometry;

    }

    export class SphereGeometry extends Geometry {

        constructor(radius: number, widthSegments: number, heightSegments: number, phiStart: number, phiLength: number, thetaStart: number, thetaLength: number);

        type: string;

        parameters: {

            radius: number,
            widthSegments: number,
            heightSegments: number,
            phiStart: number,
            phiLength: number,
            thetaStart: number,
            thetaLength: number

        }

        ["cosntructor"]: typeof Geometry & typeof SphereGeometry;

    }

    export class SphereBufferGeometry extends BufferGeometry {

        constructor(radius: number, widthSegments: number, heightSegments: number, phiStart: number, phiLength: number, thetaStart: number, thetaLength: number);

        type: string;
        parameters: {

            radius: number,
            widthSegments: number,
            heightSegments: number,
            phiStart: number,
            phiLength: number,
            thetaStart: number,
            thetaLength: number

        }

        position: Float32BufferAttribute;
        normal: Float32BufferAttribute;
        uv: Float32BufferAttribute;

        ["constructor"]: typeof BufferGeometry & typeof SphereBufferGeometry;

    }

    export class RingGeometry extends Geometry {

        constructor(innerRadius: number, outerRadius: number, thetaSegments: number, phiSegments: number, thetaStart: number, thetaLength: number);

        type: string;
        parameters: {

            innerRadius: number,
            outerRadius: number,
            thetaSegments: number,
            phiSegments: number,
            thetaStart: number,
            thetaLength: number

        }

        ["constructor"]: typeof Geometry & typeof RingGeometry;

    }

    export class RingBufferGeometry extends BufferGeometry {

        constructor(innerRadius: number, outerRadius: number, thetaSegments: number, phiSegments: number, thetaStart: number, thetaLength: number);

        type: string;
        parameters: {

            innerRadius: number,
            outerRadius: number,
            thetaSegments: number,
            phiSegments: number,
            thetaStart: number,
            thetaLength: number

        }

        position: Float32BufferAttribute;
        normal: Float32BufferAttribute;
        uv: Float32BufferAttribute;

        ["constructor"]: typeof BufferGeometry & typeof RingBufferGeometry;

    }

    export class PlaneGeometry extends Geometry {

        constructor(width: number, height: number, widthSegments: number, heightSegments: number);

        type: string;
        parameters: {

            width: number,
            height: number,
            widthSegments: number,
            heightSegments: number

        }

        ["constructor"]: typeof Geometry & typeof PlaneGeometry;

    }

    export class PlaneBufferGeometry extends BufferGeometry {

        constructor(width: number, height: number, widthSegments: number, heightSegments: number);

        type: string;
        parameters: {

            width: number,
            height: number,
            widthSegments: number,
            heightSegments: number

        }

        position: Float32BufferAttribute;
        normal: Float32BufferAttribute;
        uv: Float32BufferAttribute;

        ["constructor"]: typeof BufferGeometry & typeof PlaneBufferGeometry;

    }

    export class LatheGeometry extends Geometry {

        constructor(points: Array<Vector3>, segments: number, phiStart: number, phiLength: number);

        type: string;
        parameters: {

            points: Array<number>,
            segments: number,
            phiStart: number,
            phiLength: number

        }

        ["constructor"]: typeof Geometry & typeof LatheGeometry;

    }

    export class LatheBufferGeometry extends BufferGeometry {

        constructor(points: Array<Vector3>, segments: number, phiStart: number, phiLength: number);

        type: string;
        parameters: {

            points: Array<number>,
            segments: number,
            phiStart: number,
            phiLength: number

        }

        position: Float32BufferAttribute;
        uv: Float32BufferAttribute;

        ["constructor"]: typeof BufferGeometry & typeof LatheBufferGeometry;

    }

    export class ShapeGeometry extends Geometry {

        constructor(shapes: Shape, curveSegments: number);

        type: string;
        parameters: {

            shapes: Shape,
            curveSegments: number

        }

        ["constructor"]: typeof Geometry & typeof ShapeGeometry;

    }

    export class ShapeBufferGeometry extends BufferGeometry {

        constructor(shapes: Shape, curveSegments: number);

        type: string;
        parameters: {

            shapes: Shape,
            curveSegments: number

        }

        position: Float32BufferAttribute;
        normal: Float32BufferAttribute;
        uv: Float32BufferAttribute;

        ["constructor"]: typeof BufferGeometry & typeof ShapeBufferGeometry;

        toJSON(): { };

    }

    export class ExtrudeGeometry extends Geometry {

        constructor(shapes: Shape, options: __internal.ExtrudeShape.parameters);

        type: string;
        parameters: {

            shapes: Shape,
            options: __internal.ExtrudeShape.parameters

        }

        ["constructor"]: typeof Geometry & typeof ExtrudeGeometry;

        toJSON(): { };

    }

    export class ExtrudeBufferGeometry extends BufferGeometry {

        constructor(shapes: Shape, options: __internal.ExtrudeShape.parameters);

        type: string;
        parameters: {

            shapes: Shape,
            options: __internal.ExtrudeShape.parameters

        }

        position: Float32BufferAttribute;
        uv: Float32BufferAttribute;

        ["constructor"]: typeof BufferGeometry & typeof ExtrudeBufferGeometry;
        toJSON(): { };

    }

    export class EdgesGeometry extends BufferGeometry {

        constructor(geometry: Geometry, thresholdAngle: number);

        type: string;
        parameters: {

            thresholdAngle: number

        }

        position: Float32BufferAttribute;

        ["constructor"]: typeof BufferGeometry & typeof EdgesGeometry;

    }

    export class ConeGeometry extends CylinderGeometry {

        constructor(radius: number, height: number, radialSegments: number, heightSegments: number, openEnded: boolean, thetaStart: number, thetaLength: number);

        type: string;
        parameters: {

            radius: number,
            height: number,
            radialSegments: number,
            heightSegments: number,
            openEnded: boolean,
            thetaStart: number,
            thetaLength: number

        }

        ["constructor"]: typeof CylinderGeometry.prototype.constructor & typeof ConeGeometry;

    }

    export class ConeBufferGeometry extends CylinderBufferGeometry {

        constructor(radius: number, height: number, radialSegments: number, heightSegments: number, openEnded: boolean, thetaStart: number, thetaLength: number);

        type: string;
        parameters: {

            radius: number,
            height: number,
            radialSegments: number,
            heightSegments: number,
            openEnded: boolean,
            thetaStart: number,
            thetaLength: number

        }

        ["constructor"]: typeof CylinderBufferGeometry.prototype.constructor & typeof ConeBufferGeometry;

    }

    export class CylinderGeometry extends Geometry {

        constructor(radiusTop: number, radiusBottom: number, height: number, radialSegments: number, heightSegments: number, openEnded: boolean, thetaStart: number, thetaLength: number);

        type: string;
        parameters: {

            radiusTop: number,
            radiusBottom: number,
            height: number,
            radialSegments: number,
            heightSegments: number,
            openEnded: boolean,
            thetaStart: number,
            thetaLength: number

        }

        ["constructor"]: typeof Geometry & typeof CylinderGeometry;

    }

    export class CylinderBufferGeometry extends BufferGeometry {

        constructor(radiusTop: number, radiusBottom: number, height: number, radialSegments: number, heightSegments: number, openEnded: boolean, thetaStart: number, thetaLength: number);

        type: string;
        parameters: {

            radiusTop: number,
            radiusBottom: number,
            height: number,
            radialSegments: number,
            heightSegments: number,
            openEnded: boolean,
            thetaStart: number,
            thetaLength: number

        }

        position: Float32BufferAttribute;
        normal: Float32BufferAttribute;
        uv: Float32BufferAttribute;

    }

    export class CircleGeometry extends Geometry {

        constructor(radius: number, segments: number, thetaStart: number, thetaLength: number);

        type: string;
        parameters: {

            radius: number,
            segments: number,
            thetaStart: number,
            thetaLength: number

        }

        ["constructor"]: typeof Geometry & typeof CircleGeometry;

    }

    export class CircleBufferGeometry extends BufferGeometry {

        constructor(radius: number, segments: number, thetaStart: number, thetaLength: number);

        type: string;
        parameters: {

            radius: number,
            segments: number,
            thetaStart: number,
            thetaLength: number

        }

        position: Float32BufferAttribute;
        normal: Float32BufferAttribute;
        uv: Float32BufferAttribute;

    }

    export class BoxGeometry extends Geometry {

        constructor(width: number, height: number, depth: number, widthSegments: number, heightSegments: number, depthSegments: number);

        type: string;
        parameters: {

            width: number,
            height: number,
            depth: number,
            widthSegments: number,
            heightSegments: number,
            depthSegments: number

        }

        ["constructor"]: typeof Geometry & typeof BoxGeometry;

    }

    export class BoxBufferGeometry extends BufferGeometry {

        constructor(width: number, height: number, depth: number, widthSegments: number, heightSegments: number, depthSegments: number);

        type: string;
        parameters: {

            width: number,
            height: number,
            depth: number,
            widthSegments: number,
            heightSegments: number,
            depthSegments: number

        }

        ["constructor"]: typeof BufferGeometry & typeof BoxBufferGeometry;

    }

    export class ShadowMaterial extends Material {

        constructor(parameters: { color: Color });

        type: string;
        color: Color;
        transparent: boolean;

        ["constructor"]: typeof Material & typeof ShadowMaterial;
        isShadowMaterial: true;

        copy(source: ShadowMaterial): ShadowMaterial;

    }

    export class SpriteMaterial extends Material {

        constructor(parameters: {

            color: number,
            opacity: number,
            map: Texture,
            uvOffset: Vector2,
            uvScale: Vector2

        });

        type: string;
        color: Color;
        map: Texture;
        rotation: number;
        lights: boolean;
        transparent: boolean;

        ["constructor"]: typeof Material & typeof SpriteMaterial;
        isSpriteMaterial: true;

        copy(source: SpriteMaterial): SpriteMaterial;

    }

    export class RawShaderMaterial extends ShaderMaterial {

        constructor(parameters: __internal.Material.ShaderParameter);

        type: string;

        ["constructor"]: typeof ShaderMaterial.prototype.constructor & typeof RawShaderMaterial;
        isRawShaderMaterial: true;

    }

    export class ShaderMaterial extends Material {

        constructor(parameters: __internal.Shader.MaterialParameter);

        type: string;
        defines: { [name: string]: string };
        uniforms: { [name: string]: { value: number } };
        vertexShader: string;
        fragmentShader: string;
        linewidth: number;
        wireframe: boolean;
        wireframeLinewidth: number;
        fog: boolean;
        lights: boolean;
        clipping: boolean;
        skinning: boolean;
        morphTargets: boolean;
        morphNormals: boolean;
        extensions: {

            derivatives: boolean,
            fragDepth: boolean,
            drawBuffers: boolean,
            shaderTextureLOD: boolean

        }

        defaultAttributeValues: {

            color: [number, number, number],
            uv: [number, number],
            uv2: [number, number]

        }

        index0AttributeName: string;
        uniformsNeedUpdate: boolean;

        ["constructor"]: typeof Material & typeof ShaderMaterial;
        isShaderMaterial: true;

        copy(source: ShaderMaterial): ShaderMaterial;
        toJSON(meta: string): { };

    }

    export class PointsMaterial extends Material {

        constructor(parameters: __internal.Material.PointParameter);

        type: string;
        color: Color;
        map: Texture;
        size: number;
        sizeAttenuation: boolean;
        morphTargets: boolean;
        lights: boolean;

        ["constructor"]: typeof Material & typeof PointsMaterial;

    }

    export class MeshPhysicalMaterial extends MeshStandardMaterial {

        constructor(parameters: { reflectivity: number });

        defines: { [name: string]: string };
        type: string;
        reflectivity: number;
        clearCoat: number;
        clearCoatRoughness: number;

        ["constructor"]: typeof MeshStandardMaterial.prototype.constructor & typeof MeshPhysicalMaterial;
        isMeshPhysicalMaterial: true;

        copy(source: MeshPhysicalMaterial): MeshPhysicalMaterial;

    }

    export class MeshStandardMaterial {

        constructor(parameters: __internal.Material.StandardParameter & {

            roughness: number,
            metalness: number,
            roughnessMap: Texture,
            metalnessMap: Texture,
            refractionRatio: number,

        });

        defines: { [name: string]: string };
        type: string;
        color: number;
        roughness: number;
        metalness: number;
        opacity: number;
        map: Texture;
        lightMap: Texture;
        lightMapIntensity: number;
        aoMap: Texture;
        aoMapIntensity: number;
        emissive: number;
        emissiveIntensity: number;
        emissiveMap: Texture;
        bumpMap: Texture;
        bumpScale: number;
        normalMap: Texture;
        normalMapType: number;
        normalScale: Vector2;
        displacementMap: Texture;
        displacementScale: number;
        displacementBias: number;
        roughnessMap: Texture;
        metalnessMap: Texture;
        alphaMap: Texture;
        envMap: CubeTexture;
        envMapIntensity: number;
        refractionRatio: number;
        wireframe: boolean;
        wireframeLinewidth: number;
        wireframeLinecap: string;
        wireframeLinejoin: string;
        skinning: boolean;
        morphTargets: boolean;
        morphNormals: boolean;

        ["constructor"]: typeof Material & typeof MeshStandardMaterial;
        isMeshStandardMaterial: true;
        copy(source: MeshStandardMaterial): MeshStandardMaterial;

    }

    export class MeshPhongMaterial extends Material {

        constructor(parameters: __internal.Material.StandardParameter & {

            specular: number,
            shininess: number,
            opacity: number,
            specularMap: Texture,
            conbine: number,
            refractionRatio: number,
            skinning: boolean

        });

        type: string;

        wireframe: boolean;
        wireframeLinewidth: number;
        color: number;
        specular: number;
        shininess: number;
        opacity: number;
        map: Texture;

        lightMap: Texture;
        lightMapIntensity: number;
        aoMap: Texture;
        aoMapIntensity: number;
        emissive: number;
        emissiveIntensity: number;
        emissiveMap: Texture;
        bumpMap: Texture;
        bumpScale: number;
        normalMap: Texture;
        normalMapType: number;
        normalScale: Vector2;
        displacementMap: Texture;
        displacementScale: number;
        displacementBias: number;
        specularMap: Texture;
        alphaMap: Texture;
        envMap: CubeTexture;
        combine: number;
        reflectivity: number;
        refractionRatio: number;
        wireframeLinecap: number;
        wireframeLinejoin: number;
        skinning: boolean;
        morphTargets: boolean;
        morphNormals: boolean;

        ["constructor"]: typeof Material & typeof MeshPhongMaterial;
        isMeshPhongMaterial: true;
        copy(source: MeshPhongMaterial): MeshPhongMaterial;

    }

    export class MeshToonMaterial extends MeshPhongMaterial {

        defines: { [name: string]: string };
        type: string;
        gradientMap: Texture;

        ["constructor"]: typeof MeshPhongMaterial.prototype.constructor & typeof MeshToonMaterial;

        copy(source: MeshToonMaterial): MeshToonMaterial;

    }

    export class MeshNormalMaterial extends Material {

        constructor(parameters: __internal.Material.BasicParameter & {

            bumpMap: Texture,
            bumpScale: number,
            nromalMap: Texture,
            normalMapType: number,
            normalScale: Vector2,
            displacementMap: Texture,
            displacementScale: number,
            displacementBias: number,
            morphNormals: boolean

        });

        type: string;
        bumpMap: Texture;
        bumpScale: number;
        normalMap: Texture;
        normalMapType: number;
        normalScale: Vector2;
        displacementMap: Texture;
        displacementScale: number;
        displacementBias: number;
        wireframe: boolean;
        wireframeLineWidth: number;
        fog: boolean;
        lights: boolean;
        skinning: boolean;
        morphTargets: boolean;
        morphNormals: boolean;

        ["constructor"]: typeof Material & typeof MeshNormalMaterial;
        isMeshNormalMaterial: true;

        copy(source: MeshNormalMaterial): MeshNormalMaterial;

    }

    export class MeshLambertMaterial extends Material {

        constructor(parameters: __internal.Material.BasicParameter & {

            map: Texture,
            lightMap: Texture,
            lightMapIntensity: number,
            aoMap: Texture,
            aoMapIntensity: number,
            emissive: number,
            emissiveIntensity: number,
            emissiveMap: Texture,
            specularMap: Texture,
            alphaMap: Texture,
            envMap: CubeTexture,
            combine: number,
            reflectivity: number,
            refractionRatio: number,
            wireframe: boolean,
            wireframeLinewidth: number,
            morphNormals: boolean

        });

        type: string;
        color: Color;
        map: Texture;
        lightMap: Texture;
        lightMapIntensity: number;
        aoMap: number;
        aoMapIntensity: number;
        emissive: Color;
        emissiveIntensity: number;
        emissiveMap: Texture;
        specularMap: Texture;
        alphaMap: Texture;
        envMap: CubeTexture;
        combine: number;
        reflectivity: number;
        refractionRatio: number;
        wireframe: boolean;
        wireframeLinewidth: number;
        wireframeLinecap: string;
        wireframeLinejoin: string;
        skinning: boolean;
        morphTargets: boolean;
        morphNormals: boolean;

        ["constructor"]: typeof Material & typeof MeshLambertMaterial;
        isMeshLambertMaterial: true;

        copy(source: MeshLambertMaterial): MeshLambertMaterial;

    }

    export class MeshDepthMaterial extends Material {

        constructor(parameters: {

            opacity: number,
            map: Texture,
            alphaMap: Texture,
            displacementMap: Texture,
            displacementScale: number,
            displacementBias: number,
            wireframe: boolean,
            wireframeLinewidth: number

        });

        type: string;
        depthPacking: number;
        skinning: boolean;
        morphTargets: boolean;
        map: Texture;
        alphaMap: Texture;
        displacementMap: Texture;
        displacementScale: number;
        displacementBias: number;
        wireframe:boolean;
        wireframeLinewidth: number;
        fog: boolean;
        lights: boolean;

        ["constructor"]: typeof Material & typeof MeshDepthMaterial;
        isMeshDepthMaterial:  true;

        copy(source: MeshDepthMaterial): MeshDepthMaterial;

    }

    export class MeshDistanceMaterial extends Material {

        constructor(parameters: {

            referencePosition: number,
            nearDistance: number,
            farDistance: number,
            skinning: boolean,
            morphTargets: boolean,
            map: Texture,
            alphaMap: Texture,
            displacementMap: Texture,
            displacementScale: number,
            displacementBias: number,

        });

        type: string;
        referencePosition: Vector3;
        nearDistance: number;
        farDistance: number;
        skinning: boolean;
        morphTargets: boolean;
        map: Texture;
        alphaMap: Texture;
        displacementMap: Texture;
        displacementScale: number;
        displacementBias: number;
        fog: boolean;
        lights: boolean;

        ["constructor"]: typeof Material & typeof MeshDistanceMaterial;
        isMeshDistanceMaterial: true;

        copy(source: MeshDistanceMaterial): MeshDistanceMaterial;

    }

    export class MeshBasicMaterial extends Material {

        constructor(parameters: __internal.Material.BasicParameter & {

            map: Texture,
            lightMap: Texture,
            lightMapIntensity: number,
            aoMap: Texture,
            aoMapIntensity: number,
            specularMap: Texture,
            alphaMap: Texture,
            envMap: CubeTexture,
            combine: number,
            reflectivity: number,
            refractionRatio: number,
            depthTest: boolean,
            depthWrite: boolean

        });

        type: string;
        color: Color;
        map: Texture;
        lightMap: Texture;
        lightMapIntensity: number;
        aoMap: Texture;
        aoMapIntensity: number;
        specularMap: Texture;
        alphaMap: Texture;
        envMap: CubeTexture;
        combine: number;
        reflectivity: number;
        refractionRatio: number;
        wireframe: boolean;
        wireframeLinewidth: number;
        wireframeLinecap: string;
        wireframeLinejoin: string;
        skinning: boolean;
        morphTargets: boolean;
        lights: boolean;

        ["constructor"]: typeof Material & typeof MeshBasicMaterial;
        isMeshBasicMaterial: true;

        copy(source: MeshBasicMaterial): MeshBasicMaterial;

    }

    export class LineDashedMaterial extends LineBasicMaterial {

        constructor(parameters: {

            color: number,
            opacity: number,
            linewidth: number,
            scale: number,
            dashSize: number,
            gapSize: number

        });

        type: string;
        scale: number;
        dashSize: number;
        gapSize: number;

        ["constructor"]: typeof LineBasicMaterial.prototype.constructor & typeof LineDashedMaterial;
        isLineDashedMaterial: true;

        copy(source: LineDashedMaterial): LineDashedMaterial;

    }

    export class LineBasicMaterial extends Material {

        constructor(parameters: {

            color: number,
            opacity: number,
            linewidth: number,
            linecap: string,
            linejoin: string

        });

        type: string;
        color: Color;
        linewidth: number;
        linecap: string;
        linejoin: string;
        lights: boolean;

        ["constructor"]: typeof Material & typeof LineBasicMaterial;
        isLineBasicMaterial: true;

        copy(source: LineBasicMaterial): LineBasicMaterial;

    }

    export class Material extends EventDispatcher {

        id: number;
        uuid: string;
        name: string;
        type: string;
        fog: boolean;
        lights: boolean;
        blending: number;
        side: number;
        flatShading: number;
        vertexColors: number;
        opacity: number;
        transparent: boolean;
        blendSrc: number;
        blendDst: number;
        blendEquation: number;
        blendSrcAlpha: number;
        blendDstAlpha: number;
        blendEquationAlpha: number;
        depthFunc: number;
        depthTest: boolean;
        depthWrite: boolean;
        clippingPlanes: any;
        clipIntersection: boolean;
        clipShadows: boolean;
        shadowSide: number;
        colorWrite: boolean;
        precision: number;
        polygonOffset: boolean;
        polygonOffsetFactor: number;
        polygonOffsetUnits: number;
        dithering: boolean;
        alphaTest: number;
        premultipliedAlpha: boolean;
        overdraw: number;
        visible: boolean;
        userData: __internal.Material.value;
        needsUpdate: boolean;

        ["constructor"]: typeof Material;
        isMaterial: true;

        onBeforeCompile: Function;
        setValues(values: __internal.Material.value): void;
        toJSON(meta: string): { };
        clone(): Material;
        copy(source: Material): Material;
        dispose: VoidFunction;

    }

    export class Float64BufferAttribute extends BufferAttribute { }
    export class Float32BufferAttribute extends BufferAttribute { }
    export class Uint32BufferAttribute extends BufferAttribute { }
    export class Int32BufferAttribute extends BufferAttribute { }
    export class Uint16BufferAttribute extends BufferAttribute { }
    export class Int16BufferAttribute extends BufferAttribute { }
    export class Uint8ClampedBufferAttribute extends BufferAttribute { }
    export class Uint8BufferAttribute extends BufferAttribute { }
    export class Int8BufferAttribute extends BufferAttribute { }

    export class BufferAttribute {

        constructor(array: __internal.BufferAttribute.array | Array<number>, itemSize: number, normalized: number);

        name: string;
        array: __internal.BufferAttribute.array;
        itemSize: number;
        count: number;
        normalized: boolean;
        dynamic: boolean;
        updateRange: {

            offset: number,
            count: number

        }
        version: number;

        set needsUpdate(value: boolean);

        isBufferAttribute: true;

        onUploadCallback: Function;

        setArray(array: __internal.BufferAttribute.array): BufferAttribute;
        sestDynamic(value: boolean): BufferAttribute;
        copy(source: BufferAttribute): BufferAttribute;
        copyAt(index1: number, attribute: BufferAttribute, index2: number): BufferAttribute;
        copyArray(array: __internal.BufferAttribute.array): BufferAttribute;
        copyColorsArray(colors: Array<Color>): BufferAttribute;
        copyVector2sArray(vectors: Array<Vector2>): BufferAttribute;
        copyVector3sArray(vectors: Array<Vector3>): BufferAttribute;
        copyVector4sArray(vectors: Array<Vector4>): BufferAttribute;
        set(value: __internal.BufferAttribute.array, offset: number): BufferAttribute;
        getX(index: number): number;
        setX(index: number, x: number): BufferAttribute;
        getY(index: number): number;
        setY(index: number, y: number): BufferAttribute;
        getZ(index: number): number;
        setZ(index: number, z: number): BufferAttribute;
        getW(index: number): number;
        setW(index: number, w: number): BufferAttribute;
        setXY(index: number, x: number, y: number): BufferAttribute;
        setXYZ(index: number, x: number, y: number, z: number): BufferAttribute;
        setXYZW(index: number, x:  number, y: number, z: number, w: number): BufferAttribute;
        onUpLoad(callback: Function): BufferAttribute;
        clone(): BufferAttribute;

    }

    export class ArcCurve extends EllipseCurve {

        constructor(aX: number, aY: number, aRadius: number, aStartAngle: number, aEndAngle: number, aClockwise: number);

        type: string;

        ["constructor"]: typeof EllipseCurve & typeof ArcCurve;
        isArcCurve: true;

    }

    export class CatmullRomCurve3 extends Curve {

        constructor(points: Array<Vector3>, closed: boolean, curveType: string, tension: number);

        type: string;
        points: Array<Vector3>;
        closed: boolean;
        curveType: string;
        tension: number;

        ["constructor"]: typeof CatmullRomCurve3;
        isCatmullRomCurve3: true;

        getPoint(t: number, optionalTarget: Vector3): Vector3;
        copy(source: CatmullRomCurve3): CatmullRomCurve3;
        toJSON(): { };
        fromJSON(json: { }): CatmullRomCurve3;

    }

    export class CubicBezierCurve extends Curve {

        constructor(v0: Vector2, v1: Vector2, v2: Vector2, v3: Vector2);

        type: string;

        v0: Vector2;
        v1: Vector2;
        v2: Vector2;
        v3: Vector2;

        ["constructor"]: typeof CubicBezierCurve;
        isCubicBezierCurve: true;

        getPoint(t: number, optionalTarget: Vector2): Vector2;
        copy(source: CubicBezierCurve): CubicBezierCurve;
        toJSON(): { };
        fromJSON(json: { }): CubicBezierCurve;

    }

    export class CubicBezierCurve3 extends Curve {

        constructor(v0: Vector3, v1: Vector3, v2: Vector3, v3: Vector3);

        type: string;

        v0: Vector3;
        v1: Vector3;
        v2: Vector3;
        v3: Vector3;

        ["constructor"]: typeof CubicBezierCurve3;
        isCubicBezierCurve3: true;

        getPoint(t: number, optionalTarget: Vector3): Vector3;
        copy(source: CubicBezierCurve3): CubicBezierCurve3;
        toJSON(): { };
        fromJSON(json: { }): CubicBezierCurve3;

    }

    export class EllipseCurve extends Curve {

        constructor(aX: number, aY: number, aRadius: number, aStartAngle: number, aEndAngle: number, aClockwise: number, aRotation: number);

        type: string;

        aX: number;
        aY: number;
        xRadius: number;
        yRadius: number;
        aStartAngle: number;
        aEndAngle: number;
        aClockwise: boolean;
        aRotation: number;

        ["constructor"]: typeof EllipseCurve;
        isEllipseCurve: true;

        getPoint(t: number, optionalTarget: Vector2): Vector2;
        copy(source: EllipseCurve): EllipseCurve;
        toJSON(): { };
        fromJSON(json: { }): EllipseCurve;

    }

    export class LineCurve extends Curve {

        constructor(v1: Vector2, v2: Vector2);

        type: string;
        v1: Vector2;
        v2: Vector2;

        ["constructor"]: typeof LineCurve;
        isLineCurve: true;

        getPoint(t: number, optionalTarget: Vector2): Vector2;
        getPointAt(u: number, optionalTarget: Vector2): Vector2;
        getTangent(): Vector2;
        copy(source: LineCurve): LineCurve;
        toJSON(): { };
        fromJSON(json: { }): LineCurve;

    }

    export class LineCurve3 extends Curve {

        constructor(v1: Vector3, v2: Vector3);

        type: string;
        v1: Vector3;
        v2: Vector3;

        ["constructor"]: typeof LineCurve3;
        isLineCurve3: true;

        getPoint(t: number, optionalTarget: Vector3): Vector3;
        getPointAt(u: number, optionalTarget: Vector3): Vector3;
        copy(source: LineCurve3): LineCurve3;
        toJSON(): { };
        fromJSON(json: { }): LineCurve3;

    }

    export class QuadraticBezierCurve extends Curve {

        constructor(v0: Vector2, v1: Vector2, v2: Vector2);

        type: string;
        v0: Vector2;
        v1: Vector2;
        v2: Vector2;

        ["constructor"]: typeof QuadraticBezierCurve;
        isQuadraticBezierCurve: true;

        getPoint(t: number, optionalTarget: Vector2): Vector2;
        copy(source: QuadraticBezierCurve): QuadraticBezierCurve;
        toJSON(): { }
        fromJSON(json: { }): QuadraticBezierCurve;

    }

    export class QuadraticBezierCurve3 extends Curve {

        constructor(v0: Vector3, v1: Vector3, v2: Vector3);

        type: string;
        v0: Vector3;
        v1: Vector3;
        v2: Vector3;

        ["constructor"]: typeof QuadraticBezierCurve3;
        isQuadraticBezierCurve3: true;

        getPoint(t: number, optionalTarget: Vector3): Vector3;
        copy(source: QuadraticBezierCurve3): QuadraticBezierCurve3;
        toJSON(): { }
        fromJSON(json: { }): QuadraticBezierCurve3;

    }

    export class SplineCurve extends Curve {

        constructor(points: Array<Vector2>);

        type: string;
        points: Array<Vector2>;

        ["constructor"]: typeof SplineCurve;
        isSplineCurve: true;

        getPoint(t: number, optionalTarget: Vector2): Vector2;
        copy(source: SplineCurve): SplineCurve;
        toJSON(): { };
        fromJSON(json: { }): SplineCurve;

    }

    export var REVISION: string;
    export var MOUSE: {

        LEFT: number,
        MIDDLE: number,
        RIGHT: number

    };
    export var CullFaceNone: number;
    export var CullFaceBack: number;
    export var CullFaceFront: number;
    export var CullFaceFrontBack: number;
    export var FrontFaceDirectionCW: number;
    export var FrontFaceDirectionCCW: number;
    export var BasicShadowMap: number;
    export var PCFShadowMap: number;
    export var PCFSoftShadowMap: number;
    export var FrontSide: number;
    export var BackSide: number;
    export var DoubleSide: number;
    export var FlatShading: number;
    export var SmoothShading: number;
    export var NoColors: number;
    export var FaceColors: number;
    export var VertexColors: number;
    export var NoBlending: number;
    export var NormalBlending: number;
    export var AdditiveBlending: number;
    export var SubtractiveBlending: number;
    export var MultiplyBlending: number;
    export var CustomBlending: number;
    export var AddEquation: number;
    export var SubtractEquation: number;
    export var ReverseSubtractEquation: number;
    export var MinEquation: number;
    export var MaxEquation: number;
    export var ZeroFactor: number;
    export var OneFactor: number;
    export var SrcColorFactor: number;
    export var OneMinusSrcColorFactor: number;
    export var SrcAlphaFactor: number;
    export var OneMinusSrcAlphaFactor: number;
    export var DstAlphaFactor: number;
    export var OneMinusDstAlphaFactor: number;
    export var DstColorFactor: number;
    export var OneMinusDstColorFactor: number;
    export var SrcAlphaSaturateFactor: number;
    export var NeverDepth: number;
    export var AlwaysDepth: number;
    export var LessDepth: number;
    export var LessEqualDepth: number;
    export var EqualDepth: number;
    export var GreaterEqualDepth: number;
    export var GreaterDepth: number;
    export var NotEqualDepth: number;
    export var MultiplyOperation: number;
    export var MixOperation: number;
    export var AddOperation: number;
    export var NoToneMapping: number;
    export var LinearToneMapping: number;
    export var ReinhardToneMapping: number;
    export var Uncharted2ToneMapping: number;
    export var CineonToneMapping: number;
    export var UVMapping: number;
    export var CubeReflectionMapping: number;
    export var CubeRefractionMapping: number;
    export var EquirectangularReflectionMapping: number;
    export var EquirectangularRefractionMapping: number;
    export var SphericalReflectionMapping: number;
    export var CubeUVReflectionMapping: number;
    export var CubeUVRefractionMapping: number;
    export var RepeatWrapping: number;
    export var ClampToEdgeWrapping: number;
    export var MirroredRepeatWrapping: number;
    export var NearestFilter: number;
    export var NearestMipMapNearestFilter: number;
    export var NearestMipMapLinearFilter: number;
    export var LinearFilter: number;
    export var LinearMipMapNearestFilter: number;
    export var LinearMipMapLinearFilter: number;
    export var UnsignedByteType: number;
    export var ByteType: number;
    export var ShortType: number;
    export var UnsignedShortType: number;
    export var IntType: number;
    export var UnsignedIntType: number;
    export var FloatType: number;
    export var HalfFloatType: number;
    export var UnsignedShort4444Type: number;
    export var UnsignedShort5551Type: number;
    export var UnsignedShort565Type: number;
    export var UnsignedInt248Type: number;
    export var AlphaFormat: number;
    export var RGBFormat: number;
    export var RGBAFormat: number;
    export var LuminanceFormat: number;
    export var LuminanceAlphaFormat: number;
    export var RGBEFormat: number;
    export var DepthFormat: number;
    export var DepthStencilFormat: number;
    export var RGB_S3TC_DXT1_Format: number;
    export var RGBA_S3TC_DXT1_Format: number;
    export var RGBA_S3TC_DXT3_Format: number;
    export var RGBA_S3TC_DXT5_Format: number;
    export var RGB_PVRTC_4BPPV1_Format: number;
    export var RGB_PVRTC_2BPPV1_Format: number;
    export var RGBA_PVRTC_4BPPV1_Format: number;
    export var RGBA_PVRTC_2BPPV1_Format: number;
    export var RGB_ETC1_Format: number;
    export var RGBA_ASTC_4x4_Format: number;
    export var RGBA_ASTC_5x4_Format: number;
    export var RGBA_ASTC_5x5_Format: number;
    export var RGBA_ASTC_6x5_Format: number;
    export var RGBA_ASTC_6x6_Format: number;
    export var RGBA_ASTC_8x5_Format: number;
    export var RGBA_ASTC_8x6_Format: number;
    export var RGBA_ASTC_8x8_Format: number;
    export var RGBA_ASTC_10x5_Format: number;
    export var RGBA_ASTC_10x6_Format: number;
    export var RGBA_ASTC_10x8_Format: number;
    export var RGBA_ASTC_10x10_Format: number;
    export var RGBA_ASTC_12x10_Format: number;
    export var RGBA_ASTC_12x12_Format: number;
    export var LoopOnce: number;
    export var LoopRepeat: number;
    export var LoopPingPong: number;
    export var InterpolateDiscrete: number;
    export var InterpolateLinear: number;
    export var InterpolateSmooth: number;
    export var ZeroCurvatureEnding: number;
    export var ZeroSlopeEnding: number;
    export var WrapAroundEnding: number;
    export var TrianglesDrawMode: number;
    export var TriangleStripDrawMode: number;
    export var TriangleFanDrawMode: number;
    export var LinearEncoding: number;
    export var sRGBEncoding: number;
    export var GammaEncoding: number;
    export var RGBEEncoding: number;
    export var LogLuvEncoding: number;
    export var RGBM7Encoding: number;
    export var RGBM16Encoding: number;
    export var RGBDEncoding: number;
    export var BasicDepthPacking: number;
    export var RGBADepthPacking: number;
    export var TangentSpaceNormalMap: number;
    export var ObjectSpaceNormalMap: number;

    export class CubeGeometry extends BoxGeometry { }

    export function Face4(a: number, b: number, c: number, d: number, normal: Vector3, color: Vector3, materialIndex: number): Face3;

    export var LineStrip: number;
    export var LinePieces: number;

    export function MeshFaceMaterial(materials: Array<Material>): Array<Material>;

    export function MultiMaterial(materials: Array<Material>): Array<Material> & {

        isMultiMaterial: true,
        materials: Array<Material>,
        clone(): Array<Material>

    };

    export function PointCloud(geometry: Geometry, material: Material): Points;

    export function Particle(material: Material): Sprite;

    export function PointCloudMaterial(parameters: __internal.Material.PointParameter): PointsMaterial;

    export function ParticleBasicMaterial(parameters: __internal.Material.PointParameter): PointsMaterial;

    export function ParticleSystemMaterial(parameters: __internal.Material.PointParameter): PointsMaterial;

    export function Vertex(x: number, y: number, z: number): Vector3;

    export function DynamicBufferAttribute(array: __internal.BufferAttribute.array, itemSize: number): BufferAttribute;

    export function Int8Attribute(array: __internal.BufferAttribute.array, itemSize: number): Int8BufferAttribute;

    export function Uint8Attribute(array: __internal.BufferAttribute.array, itemSize: number): Uint8BufferAttribute;

    export function Uint8ClampedAttribute(array: __internal.BufferAttribute.array, itemSize: number): Uint8ClampedBufferAttribute;

    export function Int16Attribute(array: __internal.BufferAttribute.array, itemSize: number): Int16BufferAttribute;

    export function Uint16Attribute(array: __internal.BufferAttribute.array, itemSize: number): Uint16BufferAttribute;

    export function In328Attribute(array: __internal.BufferAttribute.array, itemSize: number): Int32BufferAttribute;

    export function Uint32Attribute(array: __internal.BufferAttribute.array, itemSize: number): Uint32BufferAttribute;

    export function Float32Attribute(array: __internal.BufferAttribute.array, itemSize: number): Float32BufferAttribute;

    export function Float64Attribute(array: __internal.BufferAttribute.array, itemSize: number): Float64BufferAttribute;

    export class ClosedSplineCurve3 extends CatmullRomCurve3 { }
    export class SplineCurve3 extends CatmullRomCurve3 { }
    export class Spline extends CatmullRomCurve3 { }

    export function AxisHelper(size: number): AxesHelper;

    export function BoundingBoxHelper(object: Box3, color: Color): BoxHelper;

    export function EdgesHelper(object: Object3D, hex: number): LineSegments;

    export function WireframeHelper(object: Object3D, hex: number): LineSegments;

    export function XHRLoader(manager: LoadingManager): FileLoader;

    export function BinaryTextureLoader(manager: LoadingManager): DataTextureLoader;

    export var GeometryUtils: {

        merge(geometry1: Geometry, geometry2: Geometry, materialIndexOffset: number): void,
        center(geometry): Geometry

    }

    export class Projector {

        projectVector(vector: Vector3, camera: Camera): void;
        unprojectVector(vector: Vector3, camera: Camera): void;
        pickingRay: VoidFunction;

    }

    export class CanvasRenderer {

        domElement: HTMLElement;
        clear: VoidFunction;
        render: VoidFunction;
        setClearColor: VoidFunction;
        setSize: VoidFunction;

    }

    export var SceneUtils: {

        createMultiMaterialObject: VoidFunction,
        detach: VoidFunction,
        attach: VoidFunction

    }

    export function LensFlare: VoidFunction;

    export var __esModule: true;

    module __internal {

        export module WebGLRenderTarget {

            export interface options {

                minFilter: number,
                generateMipmaps: boolean,
                depthBuffer: boolean,
                stencilBuffer: boolean

            }

        }

        export module EventDispatcher {

            export interface event {

                target: EventDispatcher

            }

        }

        export module WebGLRenderer {

            export interface parameters {

                canvas: HTMLElement,
                context: any,
                alpha: boolean,
                depth: boolean,
                stencil: boolean,
                antialias: boolean,
                premultipliedAlpha: boolean,
                preserveDrawingBuffer: boolean,
                powerPreference: string

            }

            export interface Size {

                width: number,
                height: number,

            }

        }

        export module Shader {

            export interface shader {

                uniforms: { },
                vertexShader: string,
                fragmentShader: string

            }

        }

        export module UniformsLib {

            export interface light {

                color: { },
                shadow: { },
                shadowBias: { },
                shadowRadius: { },
                shadowMapSize: { }

            }

        }

        export module JSONLoader {

            export interface parse {

                geometry: Geometry,
                materials: Material

            }

        }

        export module Loader {

            type _onLoad<T> =  (data: T) => any;
            type _onProgress =  (url: string, itemsLoaded: number, itemsTotal: number) => any;
            type _onError =  (error: Error) => any;
            export type loader<T> =  (url: string, onLoad: _onLoad<T>, onProgress: _onProgress, onError: _onError) => T;

        }

        export module PropertyMixer {

            export type mixer = (buffer: Array<any>, dstOffset: number, srcOffset: number, t: number) => void;
        }

        export module PropertyBinding {

            export interface TrackName {

                nodeName: string;
                objectName: string;
                objectIndex: string;
                propertyName: string;
                propertyIndex: string;

            }
            export type BindingFunction =  (buffer: Array<any>, offset: number) => void;
            export type get = Array<BindingFunction>;/* [ BindingFunction, BindingFunction, BindingFunction, BindingFunction ]; */
            export type set = Array<Array<BindingFunction>>;/* [ [ BindingFunction, BindingFunction, BindingFunction ], [ BindingFunction, BindingFunction, BindingFunction ], [ BindingFunction, BindingFunction, BindingFunction ] ]; */

        }

        export module AnimationObjectGroup {

            export type IArgument = Array<{ uuid: string }>
            export interface I_Indices { [uuid: string]: number }

        }

        export module AnimationMixer {

            export interface stats {

                total: number;
                inUse: number;

            }

        }

        export module Object3D {

            export type traverseFn = (object: Object3D) => any;

        }

        export module Layers {

            export type layerFn = (channel: number) => number;

        }

        export module Euler {

            export type order = 'XYZ' | 'YZX' | 'ZXY' | 'XZY' | 'YXZ' | 'ZYX';

        }

        export module Color {

            export interface hslObj {

                h: number,
                s: number,
                l: number

            }

        }

        export module Shape {

            export interface extract {

                shape: Array<Vector3>,
                holes: Array<Vector3>

            }

        }

        export module Curve {

            export interface frenetFrames {

                tangents: Array<Vector2>,
                normals: Array<Vector2>,
                binormals: Array<Vector2>

            }

        }

        export module Parametric {

            export interface parameters {

                func: Array<Function>,
                slices: number,
                stacks: number

            }

        }

        export module Hedron {

            export interface parameters {

                radius: number,
                detail: number

            }

            export interface poly {

                vertices: number,
                indices: number

            }

        }

        export module Text {

            export interface parameters extends ExtrudeShape.options {

                font: Font,
                size: number,
                height: number,

            }

        }

        export module ExtrudeShape {

            export interface options {

                curveSegments: number,
                bevelEnabled: boolean,
                bevelThickness: number,
                bevelSize: number

            }

            export interface parameters extends options {

                steps: number,
                depth: number,

                bevelSegments: number,
                extrudePath: Curve,
                UVGenerators: {

                    generateTopUV(geometry: ExtrudeGeometry, vertices: Array<Vector2>, lastIndex: number, index: number, nextIndex: number): Array<Vector2>,
                    generateSideWallUV(geometry: ExtrudeGeometry, vertices: Array<Vector2>, lastIndex: number, index: number, nextIndex: number): Array<Vector2>;

                }

            }

        }

        export module Material {

            export interface value {

                [key: string]: number | boolean | Color | Vector3 | string;

            }

            export interface ShaderParameter extends Shader.MaterialParameter { }

            export interface BasicParameter {

                wireframe: boolean,
                wireframeLinewidth: number,
                color: number,
                opacity: number,
                morphTargets: boolean,
                skinning: boolean

            }

            export interface StandardParameter extends BasicParameter {

                map: Texture
                lightMap: Texture,
                lightMapIntensity: number,
                aoMap: Texture,
                aoMapIntensity: number,
                emissive: number,
                emissiveIntensity: number,
                emissiveMap: Texture,
                bumpMap: Texture,
                bumpScale: number,
                normalMap: Texture,
                normalMapType: number,
                normalScale: Vector2,
                displacementMap: Texture,
                displacementScale: number,
                displacementBias: number,
                alphaMap: Texture,
                envMap: CubeTexture,
                reflectivity: number,
                morphNormals: boolean

            }

            export interface PointParameter {

                color: number,
                opacity: number,
                map: Texture,
                size: number,
                sizeAttenuation: boolean,
                morphTargets: boolean
    
            }

        }

        export module Shader {

            export interface MaterialParameter {

                defines: { [name: string]: string },
                uniforms: { [name: string]: { value: number } },
                fragmentShader: string,
                vertexShader: string,
                wireframe: boolean,
                wireframeLineWidth: number,
                lights: boolean,
                skinning: boolean,
                morphTargets: boolean,
                morphNormals: boolean

            }

        }

        export module BufferAttribute {

            export type array =  Float64Array | Float32Array | Uint32Array | Int32Array | Uint16Array | Int16Array | Uint8ClampedArray | Uint8Array | Int8Array;

        }

        export class WebXRManager {

            enabled: boolean;

            getController(id: number): Group;
            getDevice(): any;
            setDevice(value: any): void;
            setSession(value: any, options: WebXRManager.sessionOptions): void;
            updateCamera(camera: Camera, parent: Object3D): void;
            getCamera(camera: Camera): Camera;
            isPresenting(): boolean;
            setAnimationLoop(callback: Function): void;
            dispose: VoidFunction;
            getStandingMatrix(): Matrix4;
            submitFrame: VoidFunction;

        }

        export module WebXRManager {

            export interface sessionOptions {

                frameOfReferenceType: any

            }

        }

        export class WebVRManager {

            enabled: boolean;
            userHeight: number;

            getController(id: number): Group;
            getDevice(): any;
            setDevice(value: any): void;
            setPoseTarget(object: any): void;
            getCamera(camera: Camera): Camera;
            getStandingMatrix(): Matrix4;
            isPresenting(): boolean;
            setAnimationLoop(callback: Function): void;
            submitFrame: VoidFunction;
            dispose: VoidFunction;

        }

        export class WebGLShadowMap {

            enabled: boolean;
            autoUpdate: boolean;
            needsUpdate: boolean;
            type: number;
            render(lights: Array<Light>, scene: Scene, camera: Camera): void;

        }

        export interface WebGLInfo {

            memory: {

                geometries: number,
                textures: number

            },
            render: {

                frame: number,
                calls: number,
                triangles: number,
                points: number,
                lines: number

            },
            programs: any,
            autoReset: boolean,

            reset: VoidFunction,
            update(count: number, mode: number, instanceCount: number): void;

        }

        export interface WebGLCapabilities {

            isWebGL2: boolean,

            getMaxAnisotropy(): number,
            getMaxPrecision(precision: "highp" | "mediump" | "lowp"): "highp" | "mediump" | "lowp",

            precision: "highp" | "mediump" | "lowp",
            logarithmicDepthBuffer: boolean,
            maxTextures: number,
            maxVertexTextures: number,
            maxTextureSize: number,
            maxCubemapSize: number,
            maxAttributes: number,
            maxVertexUniforms: number, 
            maxVaryings: number,
            maxFragmentUniforms: number,
            vertexTextures: boolean,
            floatFragmentTextures: boolean,
            floatVertexTextures: boolean

        }

        export interface WebGLExtensions {

            get<T extends keyof Extensions>(name: T): Extensions[T];

        }

        export interface WebGLProperties {

            get(object: object): any,
            remove(object: object): void,
            update(object: object, key: string | number | symbol, value: any): void,
            dispose: VoidFunction,

        }

        export interface WebGLRenderLists {

            get(scene: Scene, camera: Camera): { [hash: string]: WebGLRenderList },
            dispose: VoidFunction

        }

        export interface WebGLState {

            buffers: {

                color: {

                    setMask(colorMask: boolean): void,
                    setLocked(lock: boolean): void,
                    setClear(r: number, g: number, b: number, a: number, premultipliedAlpha: boolean): void,
                    reset: VoidFunction

                },
                depth: {

                    setTest(depthTest: boolean): void,
                    setMask(depthMask: boolean): void,
                    setFunc(depthFunc: number): void,
                    setLocked(lock: boolean): void,
                    setClear(depth: number): void,
                    reset: VoidFunction

                },
                stencil: {

                    setTest(stencilTest: boolean): void,
                    setMask(stencilMask: boolean): void,
                    setFunc(stencilFunc: number, stencilRef: number, stencilMask: number): void,
                    setOp(stencilFail: number, stencilZFail: number, stencilZPass: number): void,
                    setLocked(lock: boolean): void,
                    setClear(stencil: number): void,
                    reset: VoidFunction

                }

            },

            initAttributes: VoidFunction,
            enableAttribute(attribute: string): void,
            enableAttributeAndDivisor(attribute: string, meshPerAttribute: number): void,
            disableUnusedAttributes: VoidFunction,
            enable(id: number): void,
            disable(id: number): void,
            getCompressedTextureFormats(): Array<number>,
            useProgram(program: number): boolean,
            setBlending(blending: number, blendEquation: number, blendSrc: number, blendDst: number, blendEquationAlpha: number, blendSrcAlpha: number, blendDstAlpha: number, premultiplidAlpha: boolean): void,
            setMaterial(material: Material, frontFaceCW: boolean): void,
            setFlipSided(flipSided: boolean): void,
            setCullFace(cullFace: number): void,
            setLineWidth(width: number): void,
            setPolygonOffset(polygonOffset: boolean, factor: number, units: number): void,
            setScissorTest(scissorTest: boolean): void,
            activeTexture(webglSlot: number): void,
            bindTexture(webglType: number, webglTexture: WebGLTexture): void,
            compressedTexImage2D(...arguments: Array<number>): void,
            texImage2D(...arguments: Array<number>): void,
            scissor(scissor: Vector4): void,
            viewport(viewport: Vector4): void,
            reset: VoidFunction

        }

        export interface Image { }

        export class Composite {

            _targetGroup: any;
            _bindings: Array<PropertyBinding>;

            getValue(array: Array<any>, offset: number): void;
            setValue(array: Array<any>, offset: number): void;
            bind: VoidFunction;
            unbind: VoidFunction;

        }

        export interface DirectGeometry {

            vertices: Array<Vector3>,
            normals: Array<Vector3>,
            colors: Array<Color>,
            uvs: Array<Vector2>,
            uvs2: Array<Vector2>,
            groups: Array<any>,
            morphTargets: object,
            skinWeights: Array<number>,
            skinIndices: Array<number>,
            boundingBox: Box3,
            boundingSphere: Sphere,
            verticesNeedUpdate: boolean,
            normalsNeedUpdate: boolean,
            colorsNeedUpdate: boolean,
            uvsNeedUpdate: boolean,
            groupsNeedUpdate: boolean,

            computeGroups(geometry: Geometry): void,
            fromGeometry(geometry: Geometry): DirectGeometry

        }

        export interface WebGLUtils {

            convert(p: number): number

        }

        export interface WebGLObjects {

            update(object: Object3D): BufferGeometry,
            dispose: VoidFunction

        }

        export interface WebGLRenderList {

            opaque: Array<WebGLRenderList.Item>,
            transparent: Array<WebGLRenderList.Item>,

            init: VoidFunction,
            push(object: Object3D, geometry: Geometry, material: Material, z: number, group: Group): void,
            sort: VoidFunction

        }

        module WebGLRenderList {

            export interface Item {

                id: number,
                object: Object3D,
                geometry: Geometry,
                material: Material,
                program: number,
                renderOrder: number,
                z: number,
                group: Group

            }

        }

        interface Extensions {
            "EXT_blend_minmax": EXT_blend_minmax,
            "EXT_texture_filter_anisotropic": EXT_texture_filter_anisotropic,
            "EXT_frag_depth": EXT_frag_depth,
            "EXT_shader_texture_lod": EXT_shader_texture_lod,
            "EXT_sRGB": EXT_sRGB,
            "OES_vertex_array_object": OES_vertex_array_object,
            "WEBGL_color_buffer_float": WEBGL_color_buffer_float,
            "WEBGL_compressed_texture_astc": WEBGL_compressed_texture_astc,
            "WEBGL_compressed_texture_s3tc_srgb": WEBGL_compressed_texture_s3tc_srgb,
            "WEBGL_debug_shaders": WEBGL_debug_shaders,
            "WEBGL_draw_buffers": WEBGL_draw_buffers,
            "WEBGL_lose_context": WEBGL_lose_context,
            "WEBGL_depth_texture": WEBGL_depth_texture,
            "WEBGL_debug_renderer_info": WEBGL_debug_renderer_info,
            "WEBGL_compressed_texture_s3tc": WEBGL_compressed_texture_s3tc,
            "OES_texture_half_float_linear": OES_texture_half_float_linear,
            "OES_texture_half_float": OES_texture_half_float,
            "OES_texture_float_linear": OES_texture_float_linear,
            "OES_texture_float": OES_texture_float,
            "OES_standard_derivatives": OES_standard_derivatives,
            "OES_element_index_uint": OES_element_index_uint,
            "ANGLE_instanced_arrays": ANGLE_instanced_arrays
        }

    }

}
