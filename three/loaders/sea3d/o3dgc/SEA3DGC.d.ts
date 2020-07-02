/// <reference path="../SEA3D.d.ts" />

declare module SEA3D {

    export class GeometryGC {

        constructor(name: string, data: Stream, sea3d: any);

        name: string;
        data: Stream;
        sea3d: any;
        isBig: number;
        groups: Array<{

            start: number,
            count: number

        }>;
        uv: Array<Float32Array>;
        indexes: Uint32Array | Uint16Array;
        vertex: Float32Array;
        normal: Float32Array;
        jointPerVertex: any;
        joint: Uint16Array;
        weight: Float32Array;
        type: string;

    }

}
