/// <reference path="../three.d.ts" />
/// <reference path="./ColladaLoader.d.ts" />

declare module THREE {

    export class KMZLoader {

        constructor(manager: LoadingManager);

        manager: LoadingManager;

        ["constructor"]: typeof KMZLoader;

        load: __internal.Loader.Loader2<__internal.ColladaLoader.R>;
        parse(data: string): __internal.ColladaLoader.R;

    }

}
