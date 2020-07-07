/// <reference path="../three.d.ts" />

declare module THREE {

    export class THREEMFLoader {

        constructor(manager: LoadingManager);

        manager: LoadingManager;
        availableExtensions: Array<any>;

        ["constructor"]: typeof THREEMFLoader;

        load: __internal.Loader.Loader2<Group>;
        parse(data: string): THREE.Group;
        addExtension(extension: any): void;

    }

}
