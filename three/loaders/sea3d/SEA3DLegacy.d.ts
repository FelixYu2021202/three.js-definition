/// <reference path="./SEA3DLoader.d.ts" />

declare module THREE {

    export class SEA3D {

        _onHead: SEA3D["onHead"];
        _updateTransform: SEA3D["updateTransform"];
        _readMorph: SEA3D["readMorph"];
        _readVertexAnimation: SEA3D["readVertexAnimation"];
        _readGeometryBuffer: SEA3D["readGeometryBuffer"];
        _readLine: SEA3D["readLine"];
        _getModifier: SEA3D["getModifier"];
        _readAnimation: SEA3D["readAnimation"];

        isLegacy(sea: any): boolean;
        flipVec3(v: Array<number>): Array<number>;
        addVector(v: Array<number>, t: Array<number>): Array<number>;
        expandJoints(sea: any): void;
        compressJoints(sea: any): void;
        flipIndexes(v: Array<number>): Array<number>;
        flipBoneMatrix(mtx: Matrix4): Matrix4;
        flipScaleMatrix(local: Matrix4, rotate: boolean, parent: Matrix4, parentRotate: boolean): Matrix4;
        flipDefaultAnimation(animation: any, obj3d: Object3D, relative: boolean): void;
        readAnimation(sea: any): void;
        getModifier(req: any): any;
        updateTransform(obj3d: Object3D, sea: any): void;
        readSkeleton(sea: any): Array<{

            name: string,
            pos: [number, number, number],
            rotq: [number, number, number, number],
            parent: number

        }>;
        readSkeletonAnimationLegacy(sea: any, skl: any): void;
        readMorphLegacy(sea: any, geo: any): void;
        readMorph(sea: any): void;
        readVertexAnimation(sea: any): void;
        readGeometryBuffer(sea: any): void;
        readLines(sea: any): void;
        onHead(args: {

            sign: string

        }): never;

    }

}
