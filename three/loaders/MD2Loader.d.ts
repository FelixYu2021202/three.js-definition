/// <reference path="../three.d.ts" />

declare module THREE {

    export class MD2Loader {

        constructor(manager: LoadingManager);

        manager: LoadingManager;

        ["constructor"]: typeof MD2Loader;

        load: __internal.Loader.Loader2<Geometry>;
        parse(): Geometry;

    }

}
