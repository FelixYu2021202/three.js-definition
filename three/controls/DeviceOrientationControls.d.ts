/// <reference path="../three.d.ts" />

declare module THREE {

    export class DeviceOrientationControls {

        constructor(object: Camera);

        object: Camera;
        enabled: boolean;
        devicedOrientation: { };
        screenOrientation: number;
        alphaOffset: number;

        connect: VoidFunction;
        disconnect: VoidFunction;
        update: VoidFunction;
        dispose: VoidFunction;

    }

}
