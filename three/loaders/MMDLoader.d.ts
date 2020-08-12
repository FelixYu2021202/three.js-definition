/// <reference path="../three.d.ts" />
/// <reference path="./TGALoader.d.ts" />

declare module THREE {

    export class MMDLoader {

        constructor(manager: LoadingManager);

        manager: LoadingManager;
        loader: FileLoader;
        parser: any;
        meshBuilder: __internal.MMDLoader.MeshBuilder;
        animationBuilder: __internal.MMDLoader.AnimationBuilder;

        ["constructor"]: typeof MMDLoader;

        crossOrigin: string;

        setCrossOrigin(crossOrigin: string): MMDLoader;
        load: __internal.Loader.Loader2<SkinnedMesh>;
        loadAnimaion(url: string, object: SkinnedMesh | Camera, onLoad: __internal.Loader._onLoad<AnimationClip>, onProgress: __internal.Loader._onProgress, onError: __internal.Loader._onError): void;
        loadWithAnimaion(modelUrl: string, vmdUrl: string, onLoad: __internal.Loader._onLoad<{

            mesh: SkinnedMesh,
            animaion: AnimationClip

        }>, onProgress: __internal.Loader._onProgress, onError: __internal.Loader._onError): void;
        loadPMD: __internal.Loader.Loader2<SkinnedMesh>;
        loadPMX: __internal.Loader.Loader2<SkinnedMesh>;
        loadVMD(url: string, onLoad: __internal.Loader._onLoad<any>, onProgress: __internal.Loader._onProgress, onError: __internal.Loader._onError): void;
        loadVMD(urls: Array<string>, onLoad: __internal.Loader._onLoad<any>, onProgress: __internal.Loader._onProgress, onError: __internal.Loader._onError): void;
        loadVPD(url: string, isUnicode: boolean, onLoad: __internal.Loader._onLoad<any>, onProgress: __internal.Loader._onProgress, onError: __internal.Loader._onError): void;
        _extractExtension(url: string): string;
        _getParser(): any;

    }

    module __internal.MMDLoader {

        export class MeshBuilder {

            constructor(manager: LoadingManager);

            geometryBuilder: GeometryBuilder;
            materialBuilder: MaterialBuilder;

            ["constructor"]: typeof MeshBuilder;

            crossOrigin: string;
            setCrossOrigin(crossOrigin: string): string;
            biuld(data: Parameters<GeometryBuilder["build"]>[0] & Parameters<MaterialBuilder["build"]>[0], texturePath: string, onProgress: Loader._onProgress, onError: Loader._onError): SkinnedMesh;

        }

        class GeometryBuilder {

            ["constructor"]: typeof GeometryBuilder;

            build(data: {

                metadata: {

                    vertexCount: number,
                    faceCount: number,
                    materialCount: number,
                    rigidBodyCount: number,
                    boneCount: number,
                    ikCount: number,
                    morphCount: number,
                    constraintCount: number

                },
                vertices: Array<{

                    position: Array<number>,
                    normal: Array<number>,
                    uv: Array<number>,
                    skinIndices: Array<number>,
                    skinWeights: Array<number>

                }>,
                faces: Array<{

                    indices: Array<number>

                }>,
                materials: Array<{

                    faceCount: number

                }>,
                rigidBodies: Array<{

                    boneIndex: number,
                    type: number

                }>,
                bones: Array<{

                    parentIndex: number,
                    name: string,
                    position: Array<number>,
                    grant: {

                        parentIndex: number,
                        ratio: number,
                        isLocal: boolean,
                        affectRotation: number,
                        affectPosition: number

                    },
                    transformationClass: number

                }>,
                iks: Array<{

                    target: number,
                    effector: number,
                    iteration: number,
                    maxAngle: number,
                    links: Array<{

                        index: number,
                        angleLimitation: number,
                        lowerLimitationAngle: number,
                        upperLimitationAngle: number

                    }>

                }>,
                morphs: Array<{

                    name: string,
                    elements: Array<{

                        index: number,
                        position: Array<number>

                    }>,
                    type: number,
                    elementCount: number,
                    ratio: number

                }>,
                constraints: Array<{

                    rigidBodyIndex1: number,
                    rigidBodyIndex2: number,

                }>

            })

        }

        class MaterialBuilder {

            constructor(manager: LoadingManager);

            manager: LoadingManager;
            textureLoader: TextureLoader;

            ["constructor"]: typeof MaterialBuilder;

            crossOrigin: string;
            texturePath: string;
            tgaLoader: TGALoader;

            setCrossOrigin(crossOrigin: string): MaterialBuilder;
            setTexturePath(texturePath: string): MaterialBuilder;
            build(data: {

                metadata: {

                    materialCount: number,
                    format: string

                },
                materials: Array<{

                    name: string,
                    diffuse: [number, number, number, number],
                    specular: [number, number, number],
                    ambient: [number, number, number],
                    shininess: number,
                    fileName: string,
                    toonIndex: number,
                    edgeFlag: number,
                    textureIndex: number,
                    envTextureIndex: number,
                    envFlag: number,
                    toonFlag: number,
                    edgeSize: number,
                    edgeColor: [number, number, number, number],
                    flag: number

                }>,
                toonTextures: Array<{

                    fileName: string

                }>,
                textures: Array<string>,
                morphs: Array<{

                    elements: Array<{

                        index: number

                    }>,
                    type: number

                }>

            }, geometry: BufferGeometry, onProgress: Loader._onProgress, onError: Loader._onError): Array<MeshToonMaterial>;
            _getTGALoader(): TGALoader;
            _isDefaultToonTexture(name: string): boolean;
            _loadTexture(filePath: string, textures: {

                [path: string]: Texture

            }, params: {

                isDefaultToonTexture: boolean,
                isToonTexture: boolean,
                sphericalReflectionMapping: boolean

            }, onProgress: __internal.Loader._onProgress, onError: __internal.Loader._onError);
            _getRotatedImage(image: CanvasImageSource): ImageData;
            _checkImageTransparency(map: Texture, geometry: BufferGeometry, groupIndex: number): boolean

        }

        class AnimationBuilder {

            ["constructor"]: typeof AnimationBuilder;

            build(vmd: VMD, mesh: SkinnedMesh): AnimationClip;
            buildSkeletalAnimaion(vmd: VMD, mesh: SkinnedMesh): AnimationClip;
            buildMorphAnimaion(vmd: VMD, mesh: SkinnedMesh): AnimationClip;
            buildCameraAnimaion(vmd: VMD): AnimationClip;
            _createTrack<T extends keyof KeyframeTracks>(node: string, typedKeyframeTrack: KeyframeTracks[T], times: Array<number>, value: Array<Types[T]>): InstanceType<typeof typedKeyframeTrack>;

        }

        interface KeyframeTracks {

            boolean: typeof BooleanKeyframeTrack,
            color: typeof ColorKeyframeTrack,
            number: typeof NumberKeyframeTrack,
            quaternion: typeof QuaternionKeyframeTrack,
            string: typeof StringKeyframeTrack
            vector: typeof VectorKeyframeTrack

        }

        interface Types {

            boolean: boolean,
            color: Color,
            number: number,
            quaternion: Quaternion,
            string: string,
            vector: Vector3

        }

        interface VMD {

            metadata: {

                motionCount: number,
                morphCount: number

            },
            motions: Array<{

                boneName: string,
                frameNum: number,
                position: number,
                rotation: number,
                interpolation: Array<number>

            }>,
            morphs: Array<{

                morphName: string,
                frameNum: number,
                weight: number

            }>,
            cameras: {

                frameNum: number,
                position: [number, number, number],
                rotation: [number, number, number],
                distance: number,
                fov: number,
                interpolation: Array<number>

            }

        }

    }

}
