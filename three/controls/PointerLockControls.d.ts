/// <reference path="../three.d.ts" />

declare module THREE {

    export class PointerLockControls {

        constructor(camera: Camera);

        enabled: boolean;

        dispose: VoidFunction;
        getObject(): Object3D;
        getDirection(v: Vector3): Vector3;

    }

}
