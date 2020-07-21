/// <reference path="../three.d.ts" />

declare module THREE {

    export class EXRLoader extends DataTextureLoader {

        constructor(manager: LoadingManager);

        manager: LoadingManager;

        _parse(buffer: ArrayBuffer): {

            header: {

                [attributeName: string]: string | Array<{

                    name: string,
                    pixelType: number,
                    pLinear: number,
                    xSampling: number,
                    ySampling: number

                }> | {

                    redX: number,
                    redY: number,
                    greenX: number,
                    greenY: number,
                    blueX: number,
                    blueY: number,
                    whiteX: number,
                    whiteY: number

                } | {

                    xMin: number,
                    yMin: number,
                    xMax: number,
                    yMax: number

                } | number | [number, number]

            },
            width: number,
            height: number,
            data: Float32Array,
            format: number,
            type: number

        }

    }

}
