/// <reference path="../three.d.ts" />

declare module THREE.LoaderSupport {

    export module Validator {

        export function isValid(input: any): boolean;

        export function verifyInput<T, T2>(input: T, defaultValue: T2): T | T2;

    }

    export class Callbacks {

        onProgress: Function;
        onMeshAlter: Function;
        onLoad: Function;
        onLoadMaterials: Function;

        setCallbackOnProgress(callbackOnProgress: Function): void;
        setCallbackOnMeshAlter(callbackOnMeshAlter: Function): void;
        setCallbackOnLoad(callbackOnLoad: Function): void;
        setCallbackOnLoadMaterials(callbackOnLoadMaterials: Function): void;

    }

}
