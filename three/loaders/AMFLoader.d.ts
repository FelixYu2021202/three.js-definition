/// <reference path="../three.d.ts" />

declare module THREE {

    export class AMFLoader {

        constructor(manager: LoadingManager);

        manager: LoadingManager;

        ["constructor"]: typeof AMFLoader;

        load: __internal.Loader.Loader2<Group>;
        parse(data: string): Group;

    }

}
