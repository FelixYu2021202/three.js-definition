/// <reference path="../three.d.ts" />

declare module THREE {

    export class KTXLoader extends CompressedTextureLoader {

        _parse: (typeof KTXLoader)["parse"];

        ["constructor"]: typeof KTXLoader;

        static parse(buffer: ArrayBuffer, loadMipmaps: boolean): {

            mipmaps: ReturnType<KhronosTextureContainer["mipmaps"]>;
            width: number,
            height: number,
            format: number,
            isCubemap: boolean,
            mipmapCount: number

        };

    }

}

declare class KhronosTextureContainer {

    constructor(arrayBuffer: ArrayBuffer, facesExpected: number, threeDExpected: boolean, textureArrayExpected: boolean);

    arrayBuffer: ArrayBuffer;
    glType: number;
    glTypeSize: number;
    glFormat: number;
    glInternalFormat: number;
    glBaseInternalFormat: number;
    pixelWidth: number;
    pixelHeight: number;
    pixelDepth: number;
    numberOfArrayElements: number;
    numberOfFaces: number;
    numberOfMipmapLevels: number;
    bytesOfKeyValueData: number;
    loadType: number;

    switchEndianness(val: number): number;
    mipmaps(loadMipmaps: boolean): Array<{

        data: Uint8Array,
        width: number,
        height: number

    }>;

    static HEADER_LEN: number;
    static COMPRESSED_2D: number;
    static COMPRESSED_3D: number;
    static TEX_2D: number;
    static TEX_3D: number;

}
