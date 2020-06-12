/// <reference path="../three.d.ts" />

declare module THREE {

    export class VRControls {

        constructor(object: Object3D, onError: (error: Error) => any);

        scale: number;
        standing: boolean;
        userHeight: number;

        getVRDisplay(): VRDisplay;
        setVRDisplay(value: VRDisplay): void;
        getVRDisplays(): Array<VRDisplay>;
        getStandingMatrix(): Matrix4;
        update: VoidFunction;
        dispose: VoidFunction;

    }

}
