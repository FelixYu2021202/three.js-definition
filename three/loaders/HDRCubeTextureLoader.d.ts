/// <reference path="../three.d.ts" />
/// <reference path="./RGBELoader.d.ts" />

declare module THREE {

    export class HDRCubeTextureLoader {

        constructor(manager: LoadingManager);

        manager: LoadingManager;
        hdrLoader: HDRLoader;

        load(type: number, urls: Array<string>, onLoad: __internal.Loader._onLoad<CubeTexture>, onProgress: __internal.Loader._onProgress, onError: __internal.Loader._onError): CubeTexture;

    }

}
