/// <reference path="../three.d.ts" />

declare module THREE {

    export class BinaryLoader {

        constructor(manager: LoadingManager)

        manager: LoadingManager;

        ["constructor"]: typeof BinaryLoader;

        crossOrigin: string;
        binaryPath: string;
        texturePath: string;

        load(url: string, onLoad: (geometry: Geometry, material: Material) => any, onProgress: __internal.Loader._onProgress, onError: __internal.Loader._onError): void;
        setBinaryPath(value: string): void;
        setCrossOrigin(value: string): void;
        setTexturePath(value: string): void;
        parse(data: string, callback: (geometry: Geometry, material: Material) => any, texturePath: string, jsonMaterials: Array<object>): void;

    }

}
