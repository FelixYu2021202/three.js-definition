/// <reference path="../three.d.ts" />

declare module THREE {

    export class TGALoader {

        constructor(manager: LoadingManager);

        manager: LoadingManager;

        ["constructor"]: typeof TGALoader;

        load: __internal.Loader.Loader2<Texture>;
        parse(buffer: ArrayBuffer): HTMLCanvasElement;

    }

}
