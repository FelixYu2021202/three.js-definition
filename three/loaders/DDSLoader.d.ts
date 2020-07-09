/// <reference path="../three.d.ts" />

declare module THREE {

    export class DDSLoader {

        _parser(buffer: ArrayBuffer, loadMipmaps: boolean): {

            mipmaps: Array<{

                data: Uint8Array,
                width: number,
                height: number

            }>,
            width: number,
            height: number,
            format: number,
            mipmapCount: number

        }

        ["constructor"]: typeof DDSLoader;

        static parse: DDSLoader["_parser"]

    }

}
