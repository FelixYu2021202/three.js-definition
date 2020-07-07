/// <reference path="../three.d.ts" />

declare module THREE {

    export class AssimpLoader {

        constructor(manager: LoadingManager);

        manager: LoadingManager;

        ["constructor"]: typeof AssimpLoader;

        crossOrigin: string;

        load: __internal.Loader.Loader2<__internal.AssimpLoader.result>;

        setCrossOrigin(value: string): void;
        parse(buffer: string, path: string): __internal.AssimpLoader.result;

    }

    export module __internal {

        export module AssimpLoader {

            export interface result {

                object: Object3D,
                a: AnimationClip

            }

        }

    }

}
