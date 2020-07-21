/// <reference path="../three.d.ts" />

declare module THREE {

    export class HDRLoader extends DataTextureLoader {

        constructor(manager: LoadingManager);

        manager: LoadingManager;

        _parse(buffer: ArrayBuffer): {

            width: number,
            height: number,
            data: number | Uint8Array,
            header: string,
            gamma: number,
            exposure: number,
            format: number,
            type: number

        }

    }

    export class RGBELoader extends HDRLoader { }

}
