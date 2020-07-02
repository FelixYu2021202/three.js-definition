declare module SEA3D {

    export var VERSION: number;

    export function getVersion(): string;

    export class Stream {

        constructor(buffer: ArrayBuffer);

        position: number;
        buf: ArrayBuffer;
        data: DataView;

        static NONE: number;
        static BOOLEAN: number;
        static BYTE: number;
        static UBYTE: number;
        static SHORT: number;
        static USHORT: number;
        static INT24: number;
        static UINT24: number;
        static INT: number;
        static UINT: number;
        static FLOAT: number;
        static DOUBLE: number;
        static DECIMAL: number;
        static VECTOR3D: number;
        static VECTOR4D: number;
        static STRING_TINY: number;
        static STRING_SHORT: number;
        static STRING_LONE: number;
        static ASSET: number;
        static GROUP: number;
        static BLEND_MODE: Array<string>;
        static INTERPOLATION_TABLE: Array<string>;
        static sizeOf(kind: number): number;

        ["constructor"]: Stream;

        set buffer(val: ArrayBuffer);
        get buffer(): ArrayBuffer;
        get bytesAvailable(): number;
        get length(): number;

        getByte(pos: number): number;
        readBytes(len: number): ArrayBuffer;
        readByte(): number;
        readUByte(): number;
        readBool(): number;
        readShort(): number;
        readUShort(): number;
        readUInt24(): number;
        readUInt24F(): number;
        readInt(): number;
        readUInt(): number;
        readFloat(): number;
        readUInteger(): number;
        readVector2(): __internal.Vector2;
        readVector3(): __internal.Vector3;
        readVector4(): __internal.Vector4;
        readMatrix(): Float32Array;
        readUTF8(len: number): string;
        readExt(): string;
        readUTF8Tiny(): string;
        readUTF8Short(): string;
        readUTF8Long(): string;
        readUByteArray(length: number): Uint32Array;
        readUShortArray(length: number): Uint16Array;
        readUInt24Array(length: number): Uint32Array;
        readUIntArray(length: number): Uint32Array;
        readFloatArray(length: number): Float32Array;
        readBlendMode(): string;
        readInterpolation(): string;
        readTags(callback: (kind: number, stream: Stream, size: number) => any): void;
        readProperties(sea3d: any) : __internal.Sea3d;
        readAnimationList(sea3d: any): Array<__internal.Animation>;
        readScriptList(sea3d: any): Array<__internal.Script>;
        readObject(sea3d: any): __internal.Token;
        readToken(type: number, sea3d: any): __internal.Token;
        readVector(type: number, length: number, offset: number): Uint16Array | Uint32Array | Float32Array;
        append(data: ArrayBuffer): void;
        concat(position: number, length: number): Stream;

        static memcpy(dst: number, dstOffset: number, src: number, srcOffset: number, byteLength: number): void;

    }

    export class UByteArray {

        ubytes: Array<number>;
        length: number;

        ["constructor"]: typeof UByteArray;

        add(ubytes: number): void;
        toBuffer(): ArrayBufferLike;

    }

    export module Math {

        export var RAD_TO_DEG: number;
        export var DEG_TO_RAD: number;

        export function angle(val: number): number;

        export function angleDiff(a: number, b: number): number;

        export function angleArea(angle: number, target: number, area: number): boolean;

        export function direction(x1: number, y1: number, x2: number, y2: number): number;

        export function physicalLerp(val: number, to: number, deltaTime: number, duration: number): number;

        export function physicalAngle(val: number, to: number, deltaTime: number, duration: number): number;

        export function zero(value: number, precision: number): number;

        export function round(value: number, precision: number): number;

        export function lerpAngle(val: number, tar: number, t: number): number;

        export function lerpColor(val: number, tar: number, t:  number): number;

        export function lerp(val: number, tar: number, t: number): number;

    }

    export class Timer {

        start: number;
        time: number;

        ["constructor"]: typeof Timer;

        get now(): number;
        get deltaTime(): number;
        get elapsedTime(): number;

        update: VoidFunction;

    }

    export class Object {

        constructor(name: string, data: DataView, type: string, sea3d: any);

        name: string;
        data: DataView;
        type: string;
        sea3d: any;

    }

    export class GeometryBase {

        constructor(name: string, data: Stream, sea3d: any);

        name: string;
        data: Stream;
        sea3d: any;
        attrib: number;
        isBig: number;
        numVertex: number;
        length: number;

    }

    export class Geometry extends GeometryBase {

        normal: Float32Array;
        tangent: Float32Array;
        uv: Array<Float32Array>;
        jointPerVertex: number;
        joint: Uint16Array;
        weight: Float32Array;
        numColor: number;
        color: Array<Float32Array>;
        vertex: Float32Array;
        groups: Array<{

            start: number,
            count: number

        }>;
        indexes: Uint32Array | Uint16Array;

        ["constructor"]: typeof Geometry;

        type: string;

    }

    export class Object3D {

        constructor(name: string, data: Stream, sea3d: any);

        name: string;
        data: Stream;
        sea3d: any;
        isStatic: boolean;
        visible: boolean;
        attrib: number;
        parent: any;
        animations: Array<__internal.Animation>;
        scripts: Array<__internal.Script>;
        attributes: any;

        readTag(kind: number, data: Stream, size: number): void;

    }

    export class Entity3D extends Object3D {

        constructor(name: string, data: Stream, sea3d: any);

        castShadows: boolean;

        ["constructor"]: typeof Entity3D;

    }

    export class Sound3D extends Object3D {

        autoPlay: boolean;
        mixer: any;
        sound: any;
        volume: number;

        ["constructor"]: typeof Sound3D;

    }

    export class SoundPoint extends Sound3D {

        position: __internal.Vector3;
        distance: number;

        ["constructor"]: typeof Sound3D & typeof SoundPoint;

        type: string;

    }

    export class Container3D extends Object3D {

        transform: Float32Array;

        ["constructor"]: typeof Container3D;

        type: string;

    }

    export class ScriptURL {

        constructor(name: string, data: Stream, sea3d: any);

        name: string;
        data: Stream;
        sea3d: any;
        url: string;

        type: string;

    }

    export class TextureURL {

        constructor(name: string, data: Stream, sea3d: any);

        name: string;
        data: Stream;
        sea3d: any;
        url: string;

        type: string;

    }

    export class CubeMapURL {

        constructor(name: string, data: Stream, sea3d: any);

        name: string;
        data: Stream;
        sea3d: any;
        faces: Array<string>;

        type: string;

    }

    export class Actions {

        constructor(name: string, data: Stream, sea3d: any);

        name: string;
        data: Stream;
        sea3d: any;
        count: number;
        actions: Array<__internal.Action>;

        static SCENE: number;
        static ENVIRONMENT_COLOR: number;
        static ENVIRONMENT: number;
        static FOG: number;
        static PLAY_ANIMATION: number;
        static PLAY_SOUND: number;
        static ANIMATION_AUDIO_SYNC: number;
        static LOOK_AT: number;
        static RTT_TARGET: number;
        static CAMERA: number;
        static SCRIPTS: number;
        static CLASS_OF: number;
        static ATTRIBUTES: number;

        type: string;

    }

    export class Properties {

        constructor(name: string, data: Stream, sea3d: any);

        name: string;
        data: Stream;
        sea3d: any;
        props: __internal.Sea3d;
        type: string;

    }

    export class FileInfo {

        constructor(name: string, data: Stream, sea3d: any);

        name: string;
        data: Stream;
        sea3d: any;
        info: __internal.Sea3d;
        type: string;

    }

    export class JavaScript {

        constructor(name: string, data: Stream, sea3d: any);

        name: string;
        data: Stream;
        sea3d: any;
        src: string;
        type: string;

    }

    export class JavaScriptMethod {

        constructor(name: string, data: Stream, sea3d: any);

        name: string;
        data: Stream;
        sea3d: any;
        methods: {

            [methodName: string]: string

        }
        type: string;

    }

    export class GLSL {

        constructor(name: string, data: Stream, sea3d: any);

        name: string;
        data: Stream;
        sea3d: any;
        src: string;
        type: string;

    }

    export class Dummy extends Object3D {

        transform: Float32Array;
        width: number;
        height: number;
        depth: number;

        ["constructor"]: typeof Dummy;

        type: string;

    }

    export class Line extends Object3D {

        count: number;
        closed: boolean;
        transform: Float32Array;
        vertex: Array<number>;

        ["constructor"]: typeof Line;

        type: string;

    }

    export class Sprite extends Object3D {

        position: __internal.Vector3;
        width: number;
        height: number;

        ["constructor"]: typeof Sprite;

        type: string;

    }

    export class Mesh extends Entity3D {

        materials: Array<any>;
        modifiers: Array<any>;
        reference: {

            type: number,
            ref: any

        }
        transform: Float32Array;
        geometry: any;

        ["constructor"]: typeof Mesh;

        type: string;

    }

    export class Skeleton {

        constructor(name: string, data: Stream, sea3d: any);

        name: string;
        data: Stream;
        sea3d: any;
        joint: Array<{

            name: string,
            parentIndex: number,
            inverseBindMatrix: Float32Array

        }>;
        type: string;

    }

    export class SkeletonLocal {

        constructor(name: string, data: Stream, sea3d: any);

        name: string;
        data: Stream;
        sea3d: any;
        joint: Array<{

            name: string,
            parentIndex: number,
            x: number,
            y: number,
            z: number,
            qx: number,
            qy: number,
            qz: number,
            qw: number

        }>;
        type: string;

    }

    export class AnimationBase {

        constructor(name: string, data: Stream, sea3d: any);

        name: string;
        data: Stream;
        sea3d: any;
        sequence: Array<{

            name: string,
            start: number,
            count: number,
            repeat: boolean,
            intrpl: boolean

        }>;
        frameRate: number;
        numFrames: number;

    }

    export class Animation extends AnimationBase {

        dataList: Array<{

            kind: number,
            type: number,
            blockSize: number,
            data: Uint16Array | Uint32Array | Float32Array

        }>;

        static POSITION: number;
        static ROTATION: number;
        static SCALE: number;
        static COLOR: number;
        static MULTIPLIER: number;
        static ATTENUATION_START: number;
        static ATTENUATION_END: number;
        static FOV: number;
        static OFFSET_U: number;
        static OFFSET_V: number;
        static SCALE_U: number;
        static SCALE_V: number;
        static ANGLE: number;
        static ALPHA: number;
        static VOLUME: number;
        static MORPH: number;

        ["constructor"]: typeof Animation;
        type: string;

    }

    export class SkeletonAnimation extends AnimationBase {

        numJoints: number;
        raw: Float32Array;
        type: string;

    }

    export class UVWAnimation extends Animation {

        type: string;

    }

    export class Morph extends GeometryBase {

        node: Array<{

            verts: Float32Array,
            normal: Float32Array,
            name: string

        }>;

        ["constructor"]: typeof Morph;

        type: string;

    }

    export class MorphAnimation extends AnimationBase {

        dataList: Array<{

            kind: number,
            type: number,
            name: string,
            blockSize: number,
            data: Uint16Array | Uint32Array | Float32Array

        }>;
        type: string;

    }

    export class VertexAnimation extends AnimationBase {

        isBig: boolean;
        numVertex: number;
        length: number;
        frame: Array<{

            vertex: Float32Array,
            normal: Float32Array

        }>;

        ["constructor"]: typeof VertexAnimation;

        type: string;

    }

    export class Camera extends Object3D {

        dof: {

            distance: number,
            range: number

        };

        transform: Float32Array;
        fov: number;

        ["constructor"]: typeof Camera;

    }

    export class OrthographicCamera extends Object3D {

        transform: Float32Array;
        height: number;

        ["constructor"]: typeof OrthographicCamera;

        type: string;

    }

    export class JointObject extends Object3D {

        target: any;
        joint: number;

        ["constructor"]: typeof JointObject;

        type: string;

    }

    export class Light extends Object3D {

        attenStart: number;
        attenEnd: number;
        shadow: {

            opacity: number,
            color: number

        };
        color: number;
        multiplier: number;

        ["constructor"]: typeof Light;

    }

    export class PointLight extends Light {

        attenuation: {

            start: number,
            end: number

        }
        position: __internal.Vector3;

        ["constructor"]: typeof PointLight;

        type: string;

    }

    export class HemisphereLight extends Light {

        attenuation: {

            start:  number,
            end: number

        }
        secondColor: number

        ["constructor"]: typeof HemisphereLight;

        type: string;

    }

    export class AmbientLight extends Light {

        ["constructor"]: typeof AmbientLight;

        type: string;

    }

    export class DirectionalLight extends Light {

        transform: Float32Array;

        ["constructor"]: typeof DirectionalLight;

        type: string;

    }

    export class Material {

        constructor(name: string, data: Stream, sea3d: any);

        name: string;
        data: Stream;
        sea3d: any;
        technique: Array<__internal.Technique>;
        tecniquesDict: {

            [kind: string]: __internal.Technique;

        }

        static PHONG: number;
        static COMPOSITE_TEXTURE: number;
        static DIFFUSE_MAP: number;
        static SPECULAR_MAP: number;
        static REFLECTION: number;
        static REFRACTION: number;
        static NORMAL_MAP: number;
        static FRESNEL_REFLECTION: number;
        static RIM: number;
        static LIGHT_MAP: number;
        static DETAIL_MAP: number;
        static CEL: number;
        static TRANSLUCENT: number;
        static BLEND_NORMAL_MAP: number;
        static VERTEX_COLOR: number;
        static WRAP_LIGHTING: number;
        static COLOR_REPLACE: number;
        static REFLECTION_SPHERICAL: number;
        static ANISOTROPIC: number;
        static EMISSIVE: number;
        static PHYSICAL: number;
        static ROUGHNESS_MAP: number;
        static METALNESS_MAP: number;
        static REFLECTIVITY: number;
        static CLEAR_COAT: number;
        static FLACCIDITY: number;

        type: string;

    }

    export class Composite {

        constructor(name: string, data: Stream, sea3d: any);

        name: string;
        data: Stream;
        sea3d: any;
        layer: Array<__internal.Layer>;

        getLayerByName(name: string): __internal.Layer;

        Layer: typeof __internal.Layer;
        static LayerBitmap: typeof __internal.LayerBitmap;

        type: string;

    }

    export class PlanarRender {

        constructor(name: string, data: Stream, sea3d: any);

        name: string;
        data: Stream;
        sea3d: any;
        attrib: number;
        quality: number;
        transform: Float32Array;
        type: string;

    }

    export class CubeRender {

        constructor(name: string, data: Stream, sea3d: any);

        name: string;
        data: Stream;
        sea3d: any;
        attrib: number;
        quality: number;
        position: __internal.Vector3;
        type: string;

    }

    export class CubeMap {

        constructor(name: string, data: Stream, sea3d: any);

        name: string;
        data: Stream;
        sea3d: any;
        transparent: boolean;
        extension: string;
        faces: Array<Stream>;
        type: string;

    }

    export class JPEG {

        constructor(name: string, data: Stream, sea3d: any);

        name: string;
        data: Stream;
        sea3d: any;
        transparent: boolean;
        type: string;

    }

    export class JPEG_XR {

        constructor(name: string, data: Stream, sea3d: any);

        name: string;
        data: Stream;
        sea3d: any;
        transparent: boolean;
        type: string;

    }

    export class PNG {

        constructor(name: string, data: Stream, sea3d: any);

        name: string;
        data: Stream;
        sea3d: any;
        transparent: boolean;
        type: string;

    }

    export class GIF {

        constructor(name: string, data: Stream, sea3d: any);

        name: string;
        data: Stream;
        sea3d: any;
        transparent: boolean;
        type: string;

    }

    export class OGG {

        constructor(name: string, data: Stream, sea3d: any);

        name: string;
        data: Stream;
        sea3d: any;
        type: string;

    }

    export class MP3 {

        constructor(name: string, data: Stream, sea3d: any);

        name: string;
        data: Stream;
        sea3d: any;
        type: string;

    }

    export class TextureUpdate {

        constructor(name: string, data: Stream, sea3d: any);

        name: string;
        data: Stream;
        sea3d: any;
        index: number;
        bytes: Stream;
        type: string;

    }

    export class File {

        constructor(config: __internal.FileConfig);

        config: __internal.FileConfig;
        version: number;
        objects: Array<any> & {
            [name: string]: any
        };
        typeClass: __internal.TypeClasses;
        typeRead: {

            [T in keyof __internal.TypeClasses]: __internal.TypeClasses[T]

        };
        typeUnique: {

            [T in keyof __internal.TypeClasses]: boolean

        }
        position: number;
        dataPosition: number;
        scope: File;

        timer: Timer;
        resume: boolean;
        stream: Stream;

        state(): boolean;

        static Extensions: Array<__internal.FileExtension>;
        static CompressionLibs: {

            [id: string]: string

        }
        static DecompressionMethod: {

            [id: string]: (data: ArrayBuffer) => ArrayBuffer | Uint8Array;

        }
        static setExtension(callback: __internal.FileExtension): void;
        static setDecompressionEngine(id: string, name: string, method: (data: ArrayBuffer) => ArrayBuffer | Uint8Array): void;
        addClass(clazz: __internal.Constructable, unique: boolean): void;
        readHead(): boolean;
        getObject(index: number): any;
        getObjectByName(name: string): any;
        readSEAObject(): __internal.SEAClasses & {

            streaming: boolean,
            meta: __internal.Sea3d

        }
        isDone(): boolean;
        readBody(): boolean;
        initParse(): boolean;
        parse: VoidFunction
        praseObject: VoidFunction
        readComplete(): boolean;
        readState: VoidFunction
        append(buffer: ArrayBuffer): void;
        read(buffer: ArrayBuffer): void;
        dispatchCompleteObject(obj: __internal.SEAClasses): void;
        dispatchProgress: VoidFunction
        dispatchDownloadProgress(position: number, length: number): void;
        dispatchComplete: VoidFunction
        dispatchError: VoidFunction
        load(url: string): void;

        onParseComplete(file: {

            file: File,
            timeTotal: number,
            message: string

        }): any;
        onParseProgress(file: {

            file: File,
            loaded: number,
            total: number

        }): any;
        onCompleteObject(file: {

            file: File,
            object: __internal.SEAClasses

        }): any;
        onProgress(file: {

            file: File,
            loaded: number,
            total: number

        }): any;
        onDownloadProgress(file: {

            file: File,
            loaded: number,
            total: number

        }): any;
        onComplete(file: {

            file: File,
            timeTotal: number,
            message: string

        }): any;
        onError(file: {

            file: File,
            id: number,
            message: string

        }): any;

    }

    module __internal {

        export type Token = boolean | number | Vector3 | Vector4 | object;

        export interface Sea3d {

            __type: Sea3dType;
            __name: string;
            [name: string]: Token;

        }

        interface Sea3dType {

            [name: string]: number

        }

        export interface Vector2 {

            x: number,
            y: number

        }

        export interface Vector3 extends Vector2 {

            z: number

        }

        export interface Vector4 extends Vector3 {

            w: number

        }

        export interface Animation {

            relative: boolean,
            timeScale: number,
            tag: any

        }

        export interface Script {

            params: { [name: string]: any },
            method: string,
            tag: any

        }

        export interface Action {

            kind: number,
            source: any,
            target: any,
            offset: number,
            object: any,
            name: string,
            color: number,
            min: number,
            max: number,
            texture: any,
            camera: any,
            scripts: Array<Script>,
            classof: any,
            attributes: any

        }

        export interface Technique {

            ambientColor: number,
            diffuseColor: number,
            specularColor: number,
            specular: number,
            gloss: number,
            color: number,
            roughness: number,
            metalness: number,
            composite: any,
            texture: any,
            alpha: number,
            power: number,
            normal: number,
            ior: number,
            strength: number,
            blendMode: number,
            channel: number,
            scale: number,
            levels: number,
            size: number,
            specularCutOff: number,
            smoothness: number,
            translucency: number,
            scattering: number,
            secondaryTexture: number,
            offsetX0: number,
            offsetY0: number,
            offsetX1: number,
            offsetY1: number,
            animate: boolean,
            red: number,
            green: number,
            blue: number,
            mask: any,
            target: any,
            spring: number,
            damping: number

        }

        export class Layer {

            constructor(data: Stream, sea3d: any);

            color: number;
            mask: LayerBitmap;
            name: string;
            blendMode: string;
            opacity: number;

        }

        export class LayerBitmap {

            constructor(data: Stream, sea3d: any);

            map: any;
            channel: number;
            repeat: number;
            offsetU: number;
            offsetV: number;
            scaleU: number;
            scaleV: number;
            rotation: number;
            animation: Array<Animation>;

        }

        export interface FileConfig {

            streaming: boolean,
            timeLimit: number,
            progressive: boolean

        }

        export interface FileExtension {

            (file: File): any;

        }

        export interface Constructable<T = object> extends Function {

            prototype: T;
            new (...args: Array<any>): T;

        }

        export interface TypeClasses {

            geo: typeof Geometry,
            sp: typeof SoundPoint,
            c3d: typeof Container3D,
            src: typeof ScriptURL,
            urlT: typeof TextureUpdate,
            cURL: typeof CubeMapURL,
            act: typeof Actions,
            prop: typeof Properties,
            info: typeof FileInfo,
            js: typeof JavaScript,
            jsm: typeof JavaScriptMethod,
            glsl: typeof GLSL,
            dmy: typeof Dummy,
            line: typeof Line,
            m2d: typeof Sprite,
            m3d: typeof Mesh,
            skl: typeof Skeleton,
            sklq: typeof SkeletonLocal,
            anm: typeof Animation,
            skla: typeof SkeletonAnimation,
            auvw: typeof UVWAnimation,
            mph: typeof Morph,
            mpha: typeof MorphAnimation,
            vtxa: typeof VertexAnimation,
            cam: typeof Camera,
            camo: typeof OrthographicCamera,
            jnt: typeof JointObject,
            phlt: typeof PointLight,
            hlht: typeof HemisphereLight,
            alht: typeof AmbientLight,
            dlht: typeof DirectionalLight,
            mat: typeof Material,
            ctex: typeof Composite,
            rttp: typeof PlanarRender,
            rttc: typeof CubeRender,
            cmap: typeof CubeMap,
            jpg: typeof JPEG,
            wdp: typeof JPEG_XR,
            png: typeof PNG,
            gif: typeof GIF,
            ogg: typeof OGG,
            mp3: typeof MP3,
            uTex: typeof TextureUpdate,


        }

        export type SEAClasses = SEA3D.Actions | SEA3D.AmbientLight | SEA3D.Animation | SEA3D.Camera | SEA3D.Composite | SEA3D.Container3D | SEA3D.CubeMap | SEA3D.CubeMapURL | SEA3D.CubeRender | SEA3D.DirectionalLight | SEA3D.Dummy | SEA3D.Entity3D | SEA3D.FileInfo | SEA3D.GIF | SEA3D.GLSL | SEA3D.Geometry | SEA3D.HemisphereLight | SEA3D.JPEG | SEA3D.JPEG_XR | SEA3D.JavaScript | SEA3D.JavaScriptMethod | SEA3D.JointObject | SEA3D.Line | SEA3D.MP3 | SEA3D.Material | SEA3D.Mesh | SEA3D.Morph | SEA3D.MorphAnimation | SEA3D.OGG | SEA3D.OrthographicCamera | SEA3D.PNG | SEA3D.PlanarRender | SEA3D.PointLight | SEA3D.Properties | SEA3D.ScriptURL | SEA3D.Skeleton | SEA3D.SkeletonAnimation | SEA3D.SkeletonLocal | SEA3D.Sound3D | SEA3D.SoundPoint | SEA3D.Sprite | SEA3D.TextureURL | SEA3D.TextureUpdate | SEA3D.UVWAnimation | SEA3D.VertexAnimation | SEA3D.Object;

    }

}
