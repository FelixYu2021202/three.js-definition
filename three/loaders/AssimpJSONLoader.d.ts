/// <reference path="../three.d.ts" />

declare module THREE {

    export class AssimpJSONLoader {

        constructor(manager: LoadingManager);

        manager: LoadingManager;

        ["constructor"]: typeof AssimpJSONLoader;

        crossOrigin: string;

        load: __internal.Loader.Loader2<Object3D>;
        setCrossOrigin(value: string): void;
        parse(json: object, path: string): Object3D;

    }

}
