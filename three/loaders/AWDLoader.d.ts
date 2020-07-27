/// <reference path="../three.d.ts" />

declare module THREE {

    export class AWDLoader {

        constructor(manager: LoadingManager);

        manager: LoadingManager;
        trunk: Object3D;
        materialFactory: any;
        _url: string;
        _baseDir: string;
        _data: any;
        _ptr: number;
        _version: Array<any>;
        _streaming: boolean;
        _optimized_for_accuracy: boolean;
        _compression: number;
        _bodylen: number;
        _blocks: Array<{

            id: string,
            data: any

        }>;
        _accuracyMatrix: boolean;
        _accuracyGeo: boolean;
        _accuracyProps: boolean;

        ["constructor"]: typeof AWDLoader;

        load: __internal.Loader.Loader2<Object3D>;
        parse(data: string): Object3D;
        parseNextBlock: VoidFunction;
        _parseHeader: VoidFunction;
        parseContainer(len: number): Object3D;
        parseMeshInstance(len: number): Mesh;
        parseMaterial(len: number): Material;
        parseTexture(len: number): Texture;
        loadTexture(url: string): Texture;
        parseSkeleton(len: number): Array<Bone>;
        parseSkeletonPose(blockID: number): Array<Matrix4>;
        parseSkeletonAnimation(blockID: number): Array<{

            pose: Array<Matrix4>,
            duration: number

        }>;
        parseVertexAnimationSet(len: number): Array<any>;
        parseAnimatorSet(len: number): {

            animationSet: any,
            skeleton: any

        };
        parseMeshData(len: number): Array<BufferGeometry>;
        parseMeshPoseAnimation(len: number, poseOnly: boolean): null;
        getBlock(id: number): any;
        parseMatrix4(): Matrix4;
        parseProperties(expected: boolean): {

            [key: string]: any,

            set(key: string, value: any): void,
            get(key: string, fallback: any): any

        }
        parseUserAttributes: VoidFunction;
        parseAttrValue(type: number, len: number): number;
        readU8(): number;
        readI8(): number;
        readU16(): number;
        readI16(): number;
        readU32(): number;
        readI32(): number;
        readF32(): number;
        readF64(): number;
        readUTF(): string;
        readUTFBytes(len: number): string;

    }

}
