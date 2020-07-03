/// <reference path="../../three.d.ts" />
/// <reference path="./SEA3D.d.ts" />

declare module THREE {

    export class SEA3D extends EventDispatcher {

        constructor(config: __internal.SEA3D.Config);

        config: __internal.SEA3D.Config;
        domain: SEA3D.Domain;
        scriptTargets: Array<any>;

        static useMultiMaterial: boolean;
        static MTXBUF: Matrix4;
        static VECBUF: Vector3;
        static QUABUF: Quaternion;
        static BACKGROUND_COLOR: number;
        static HELPER_COLOR: number;
        static RTT_SIZE: number;
        static identityMatrixScale(): Matrix4;

        ["constructor"]: typeof SEA3D;

        setShadowMap(light: Light): void;

        set container(val: Scene);
        get container(): Scene;
        get elapsedTime(): number;

        getMesh(name: string): SEA3D.Mesh;
        getDummy(name: string): SEA3D.Dummy;
        getLine(name: string): SEA3D.Line;
        getSound3D(name: string): SEA3D.Sound;
        getMaterial(name: string): SEA3D.Material;
        getLight(name: string): SEA3D.Light;
        getGLSL(name: string): SEA3D.GLSL;
        getCamera(name: string): SEA3D.Camera;
        getTexture(name: string): SEA3D.Texture;
        getCubeMap(name: string): SEA3D.CubeMap;
        getJointObject(name: string): SEA3D.JointObject;
        getContainer3D(name: string): SEA3D.Container3D;
        getSprite(name: string): SEA3D.Sprite;
        getProperties(name: string): SEA3D.Properties;

        isPowerOfTwo(num: number): boolean;
        nearestPowerOfTwo(num: number): number;
        updateTransform(obj3d: Object3D, sea: any): void;
        toVector3(data: { x: number, y: number, z: number }): Vector3;
        toFaces(faces: Array<number>): Array<number>;
        updateScene(): void;
        addSceneObject(sea: any, obj3d: Object3D): void;
        createObjectURL(raw: string, mime: string): string;
        parsePath(url: string): string;
        addDefaultAnimation(sea: any, animatorClass: any): void;
        readGeometryBuffer(sea: any): void;
        readDummy(sea: any): void;
        readLine(sea: any): void;
        readContainer3D(sea: any): void;
        readSprite(sea: any): void;
        readMesh(sea: any): void;
        readSoundPoint(sea: any): void;
        reaedCubeRender(sea: any): void;
        readTexture(sea: any): void;
        readCubeMap(sea: any): void;
        readTextureUpdate(sea: any): void;
        readSound(sea: any): void;
        readScriptURL(sea: any): void;
        readTextureURL(sea: any): void;
        readCubeMapURL(sea: any): void;
        getJSMList(target: any, scripts: Array<any>): Array<any>;
        readJavaScriptMethod(sea: any): void;
        readGLSL(sea: any): void;

        materialTechnique: {

            onComplete(mat: Material, sea: any): any,

            24: __internal.SEA3D.Technique,
            27: __internal.SEA3D.Technique,
            28: __internal.SEA3D.Technique,
            0: __internal.SEA3D.Technique,
            2: __internal.SEA3D.Technique,
            25: __internal.SEA3D.Technique,
            26: __internal.SEA3D.Technique,
            3: __internal.SEA3D.Technique,
            6: __internal.SEA3D.Technique,
            4: __internal.SEA3D.Technique,
            7: __internal.SEA3D.Technique,
            21: __internal.SEA3D.Technique,
            5: __internal.SEA3D.Technique,
            9: __internal.SEA3D.Technique,
            23: __internal.SEA3D.Technique,
            17: __internal.SEA3D.Technique,
            16: __internal.SEA3D.Technique

        }

        createMaterial(sea: any): MeshPhysicalMaterial | MeshStandardMaterial | MeshPhongMaterial;
        setBlending(mat: Material, blendMode: string): void;
        readMaterial(sea: any): void;
        readPointLight(sea: any): void;
        readHemisphereLight(sea: any): void;
        readAmbientLight(sea: any): void;
        readDirectionalLight(sea: any): void;
        readCamera(sea: any): void;
        readOrthographicCamera(sea: any): void;
        getSkeletonFromBones(bonesData: Array<any>): Skeleton;
        readSkeletonLocal(sea: any): void;
        readJointObject(sea: any): void;
        readMorph(sea: any): void;
        readAnimation(sea: any): void;
        readSkeletonAnimation(sea: any, skl: any): void;
        readVertexAnimation(sea: any): void;
        getModifier(req: any): any;
        applyEnvironment(envMap: CubeTexture): void;
        readActions(sea: any): void;
        updatePropertiesAssets(sea: any, props: object): object;
        readProperties(sea: any): void;
        readFileInfo(sea: any): void;

        static Event: {

            PROGRESS: string,
            LOAD_PROGRESS: string,
            DOWNLOAD_PROGRESS: string,
            COMPLETE: string,
            OBJECT_COMPLETE: string,
            PARSE_PROGRESS: string,
            PARSE_COMPLETE: string,
            ERROR: string

        }

        onProgress(e: object): void;
        onLoadProgress(e: object): void;
        onDownloadProgress(e: object): void;
        onComplete(e: object): void;
        onCompleteObject(e: object): void;
        onParseProgress(e: object): void;
        onParseComplete(e: object): void;
        onError(e: object): void;
        createDomain(): void;
        clone(config: __internal.SEA3D.Config, onParseComplete: Function, onParseProgress: Function): SEA3D.Domain;
        loadConfig(config: __internal.SEA3D.Config): void;
        parse(onParseComplete: Function, onParseProgress: Function): SEA3D.Domain;
        onHead(args: any): never;

        static EXTENSIONS_LOADER: Array<{

            setTypeRead(): void

        }>;
        static EXTENSIONS_DOMAIN: Array<any>;

        setTypeRead(): void;
        load(data: string): void;

    }

    export module SEA3D {

        export class Domain {

            constructor(id: number, objects: Object3D, container: Scene);

            id: number;
            objects: Object3D;
            container: Scene;
            sources: Array<string>;
            local: object;
            scriptTargets: Array<__internal.SEA3D.JSMListTarget>;
            events: EventDispatcher;
            methods: {

                [method: string]: __internal.SEA3D.DomainMethod

            }

            static global: object;

            ["constructor"]: typeof Domain;

            add(src: string): void;
            remove(src: string): void;
            contains(src: string): boolean;
            addEventListener: EventDispatcher["addEventListener"];
            hasEventListener: EventDispatcher["addEventListener"];
            removeEventListener: EventDispatcher["removeEventListener"];
            print(...arguments: Array<any>): void;
            watch(...arguments: Array<any>): void;
            runScripts: VoidFunction;
            runJSMList(target: __internal.SEA3D.JSMListTarget): __internal.SEA3D.JSMListTarget["scripts"];
            runJSM(target: __internal.SEA3D.JSMListTarget, script: __internal.SEA3D.JSMListTarget["scripts"][0]): void;
            getReference(ns: string): any;
            disposeList(list: Array<{

                dispose(): any

            }>): void;
            dispatchEvent: EventDispatcher["dispatchEvent"];
            dispose: VoidFunction;

            getMesh(name: string): SEA3D.Mesh;
            getDummy(name: string): SEA3D.Dummy;
            getLine(name: string): SEA3D.Line;
            getSound3D(name: string): SEA3D.Sound;
            getMaterial(name: string): SEA3D.Material;
            getLight(name: string): SEA3D.Light;
            getGLSL(name: string): SEA3D.GLSL;
            getCamera(name: string): SEA3D.Camera;
            getTexture(name: string): SEA3D.Texture;
            getCubeMap(name: string): SEA3D.CubeMap;
            getJointObject(name: string): SEA3D.JointObject;
            getContainer3D(name: string): SEA3D.Container3D;
            getSprite(name: string): SEA3D.Sprite;
            getProperties(name: string): SEA3D.Properties;

        }

        export class DomainManager {

            constructor(autoDisposeRootDomain: boolean);

            domains: Array<__internal.SEA3D.Disposable>;
            autoDisposeRootDomain: boolean;
            textures: Array<__internal.SEA3D.Disposable>;
            cubemaps: Array<__internal.SEA3D.Disposable>;
            geometries: Array<__internal.SEA3D.Disposable>;

            _onDisposeDomain(e: any): void;
            onDisposeDomain(e: any): void;
            add(domain: any): void;
            remove(domain: any): void;
            contains(domain: any): boolean;
            disposeList(list: Array<__internal.SEA3D.Disposable>): void;
            dispose: VoidFunction

        }

        export class ScriptDomain {

            constructor(domain: Domain, root: any);

            getId(): number;
            isRoot(): any;
            addEventListener: EventDispatcher["addEventListener"];
            hasEventListener: EventDispatcher["hasEventListener"];
            removeEventListener: EventDispatcher["removeEventListener"];
            dispatchEvent: EventDispatcher["dispatchEvent"];
            dispose: VoidFunction

        }

        export class ScriptManager {

            scripts: Array<ScriptDomain>;
            add(src: ScriptDomain): void;
            remove(src: ScriptDomain): void;
            contains(src: ScriptDomain): boolean;
            dispatchEvent: ScriptDomain["dispatchEvent"];

        }

        export var ScriptHandler: ScriptManager & {

            dispatchUpdate(delta: number): void

        };

        export class AnimationClip extends THREE.AnimationClip {

            constructor(name: string, duration: number, tracks: KeyframeTrack, repeat: boolean);

            repeat: boolean;

            static fromClip(clip: AnimationClip, repeat: boolean): AnimationClip;

            ["constructor"]: typeof AnimationClip;

        }

        export class Animation extends EventDispatcher {

            constructor(clip: AnimationClip, timeScale: number);

            clip: AnimationClip;
            timeScale: number;

            static COMPLETE: string;

            ["constructor"]: typeof Animation;
            onComplete(scope: any): void;

            get name(): string;
            get repeat(): boolean;
            get duration(): number;
            set mixer(val: AnimationMixer);
            get mixer(): AnimationMixer;

        }

        export class Animator {

            constructor(clips: Array<AnimationClip>, mixer: AnimationMixer);

            mixer: AnimationMixer;
            relative: boolean;
            playing: boolean;
            paused: boolean;
            timeScale: number;
            animtions: Array<Animation>;
            animation: {

                [name: string]: Animation;

            }
            clips: Array<AnimationClip>;

            currentAnimation: Animation;
            previousAnimation: Animation;

            clone(scope: any): Animator;
            update(dt: number): Animator;
            updateAnimations(clips: Array<AnimationClip>, mixer: AnimationMixer): Animator;
            addAnimation(animation: AnimationClip | Animation): Animation;
            removeAnimation(animation: AnimationClip | Animation): Animation | AnimationClip;
            getAnimationByClip(clip: AnimationClip): AnimationClip;
            getAnimationByName(name: string): Animation;
            getAnimationByName(index: number): Animation;
            setAnimationWeight(name: string | number, val: number): void;
            getAnimationWeight(name: string | number): number;
            pause(): Animator;
            resume(): Animator;
            setTimeScale(val: number): Animator;
            getTimeScale(): number;
            updateTimeScale(): Animator;
            play(name: string, crossfade: number, offset: number, weight: number): Animator;
            stop(): Animator;
            playw(name: string, weight: number): __internal.AnimationMixer.AnimationAction;
            crossFade(fromanimName: string, toAnimNAme: string, duration: number, wrap): Animator;
            stopAll(): Animator;
            unPauseAll(): Animator;
            pauseAll(): Animator;
            setRelative(val: boolean): Animator;
            getRelative(): boolean;
            copyFrom(scope: Animator): Animator;

        }

        export class Object3DAnimator extends Animator {

            constructor(clips: Array<AnimationClip>, object3d: Object3D);

            object3d: Object3D;

            ["constructor"]: typeof Object3DAnimator;

            clone(scope: Object3D): Object3DAnimator;
            stop: VoidFunction
            setRelative(val: boolean): void;

        }

        export class CameraAnimator extends Object3DAnimator {

            ["constructor"]: typeof CameraAnimator;

        }

        export class SoundAnimator extends Object3DAnimator {

            ["constructor"]: typeof SoundAnimator;

        }

        export class LightAnimator extends Object3DAnimator {

            ["constructor"]: typeof LightAnimator;

        }

        export class Object3D extends THREE.Object3D {

            animate: THREE.Object3D;

            ["constructor"]: typeof Object3D;

            updateAnimateMatrix(force: boolean): void;
            setAnimator(val: boolean): void;
            getAnimator(): boolean;
            copy(source: Object3D): Object3D;

        }

        export class Dummy extends THREE.Mesh {

            constructor(width: number, height: number, depth: number);

            width: number;
            height: number;
            depth: number;

            static MATERIAL: MeshBasicMaterial;

            ["constructor"]: typeof Object3D & typeof THREE.Mesh & typeof Dummy;

            copy(source: Dummy): Dummy;
            dispose: VoidFunction;

        }

        export class Mesh extends THREE.Mesh {

            ["constructor"]: typeof Object3D & typeof THREE.Mesh & typeof Mesh;

            setWeight(name: number, val: number): void;
            getWeight(name: number): number;
            copy(source: Mesh): Mesh;

        }

        export class SkinnedMesh extends THREE.SkinnedMesh {

            mixer: AnimationMixer;
            relative: boolean;
            playing: boolean;
            paused: boolean;
            timeScale: number;
            animtions: Array<Animation>;
            animation: {
                [name: string]: Animation
            };
            clips: Array<AnimationClip>;
            currentAnimation: Animation;
            previousAnimation: Animation;

            clone(scope: any): Animator;
            update(dt: number): Animator;
            updateAnimations(clips: Array<AnimationClip>, mixer: AnimationMixer): Animator;
            addAnimation(animation: AnimationClip | Animation): Animation;
            removeAnimation(animation: AnimationClip | Animation): AnimationClip | Animation;
            getAnimationByClip(clip: AnimationClip): AnimationClip;
            getAnimationByName(name: string): Animation;
            getAnimationByName(index: number): Animation;
            setAnimationWeight(name: string | number, val: number): void;
            getAnimationWeight(name: string | number): number;
            pause(): Animator;
            resume(): Animator;
            setTimeScale(val: number): Animator;
            getTimeScale(): number;
            updateTimeScale(): Animator;
            play(name: string, crossfade: number, offset: number, weight: number): Animator;
            stop(): Animator;
            playw(name: string, weight: number): __internal.AnimationMixer.AnimationAction;
            crossFade(fromanimName: string, toAnimNAme: string, duration: number, wrap: any): Animator;
            stopAll(): Animator;
            unPauseAll(): Animator;
            pauseAll(): Animator;
            setRelative(val: boolean): Animator;
            getRelative(): boolean;
            copyFrom(scope: Animator): Animator;

            ["constructor"]: typeof Object3D & typeof THREE.Mesh & typeof THREE.SkinnedMesh & typeof Animator & typeof SkinnedMesh;

            getBoneByName(name: string): Bone;
            copy(source: SkinnedMesh): SkinnedMesh;

        }

        export class VertexAnimationMesh extends THREE.Mesh {

            mixer: AnimationMixer;
            relative: boolean;
            playing: boolean;
            paused: boolean;
            timeScale: number;
            animtions: Array<Animation>;
            animation: {
                [name: string]: Animation
            };
            clips: Array<AnimationClip>;
            currentAnimation: Animation;
            previousAnimation: Animation;

            clone(scope: any): Animator;
            update(dt: number): Animator;
            updateAnimations(clips: Array<AnimationClip>, mixer: AnimationMixer): Animator;
            addAnimation(animation: AnimationClip | Animation): Animation;
            removeAnimation(animation: AnimationClip | Animation): AnimationClip | Animation;
            getAnimationByClip(clip: AnimationClip): AnimationClip;
            getAnimationByName(name: string): Animation;
            getAnimationByName(index: number): Animation;
            setAnimationWeight(name: string | number, val: number): void;
            getAnimationWeight(name: string | number): number;
            pause(): Animator;
            resume(): Animator;
            setTimeScale(val: number): Animator;
            getTimeScale(): number;
            updateTimeScale(): Animator;
            play(name: string, crossfade: number, offset: number, weight: number): Animator;
            stop(): Animator;
            playw(name: string, weight: number): __internal.AnimationMixer.AnimationAction;
            crossFade(fromanimName: string, toAnimNAme: string, duration: number, wrap: any): Animator;
            stopAll(): Animator;
            unPauseAll(): Animator;
            pauseAll(): Animator;
            setRelative(val: boolean): Animator;
            getRelative(): boolean;
            copyFrom(scope: Animator): Animator;

            type: string;

            ["constructor"]: typeof Object3D & typeof THREE.Mesh & typeof Animator & typeof VertexAnimationMesh;

            copy(source: VertexAnimationMesh): VertexAnimationMesh;

        }

        export class Camera extends PerspectiveCamera { }

        export class OrthographicCamera extends THREE.OrthographicCamera { }

        export class PointLight extends THREE.PointLight { }

        export class PointSound extends PositionalAudio {

            constructor(listener: AudioListener, sound: boolean);

            ["constructor"]: typeof Object3D & typeof Audio & typeof PositionalAudio & typeof PointSound;

            setSound(sound: boolean): PointSound;
            copy(source: PointSound): PointSound;

        }

        export module AnimationHandler {

            export var animators: Array<Animator>;

            export function update(dt: number): void;

            export function add(animator: Animator): void;

            export function remove(animator: Animator): void;

        }

        export class Sound {

            constructor(src: string);

            uuid: string;
            src: string;
            buffer: AudioBuffer;

            ["constructor"]: typeof Sound;

        }

    }

    module __internal {

        export module SEA3D {

            export interface Config {

                id: string,
                scripts: boolean,
                runScripts: boolean,
                autoPlay: boolean,
                dummys: boolean,
                multiplier: number,
                bounding: boolean,
                audioRolloffFactor: number,
                lights: boolean,
                useEnvironment: boolean,
                useVertexTexture: boolean,
                forceStatic: boolean,
                streaming: boolean,
                async: boolean,
                paths: object,
                timeLimit: number,

                container: Scene

            }

            export interface JSMListTarget {

                scripts: Array<{

                    method: string,
                    params: Array<any>

                }>

            }

            export interface DomainMethod {

                (include: {

                    print: THREE.SEA3D.Domain["print"],
                    watch: THREE.SEA3D.Domain["watch"],
                    sea3d: THREE.SEA3D.Domain,
                    scene: Scene,
                    source: THREE.SEA3D.ScriptDomain

                }, getReference: THREE.SEA3D.Domain["getReference"], global: object, local: object, target: JSMListTarget, params: Array<any>): any

            }

            export interface Disposable {

                dispose(): any

            }

            export interface Technique {

                (mat: Material, tech: any): void

            }

        }

    }

}