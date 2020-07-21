/// <reference path="../three.d.ts" />

declare module THREE {

    export class FBXLoader {

        constructor(manager: LoadingManager);

        manager: LoadingManager;

        load: __internal.Loader.Loader2<Group>;
        parse(FBXBuffer: ArrayBuffer, resourceDirectory: string): Group;

    }

}
