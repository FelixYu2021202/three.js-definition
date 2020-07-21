/// <reference path="../three.d.ts" />

declare module THREE {

    export class GCodeLoader {

        constructor(manager: LoadingManager);

        manager: LoadingManager;
        splitLayer: boolean;

        load: __internal.Loader.Loader2<Group>;
        parse(data: string): Group;

    }

}
