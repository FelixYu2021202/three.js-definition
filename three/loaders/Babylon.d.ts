/// <reference path="../three.d.ts" />

declare module THREE {

    export class BabylonLoader {

        constructor(manager: LoadingManager)

        manager: LoadingManager;

        ["constructor"]: typeof BabylonLoader;

        load: __internal.Loader.Loader2<Scene>;
        parse(json: object): Scene;

    }

}
