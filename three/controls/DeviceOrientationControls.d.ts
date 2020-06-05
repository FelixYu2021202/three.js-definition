/// <reference path="../three.d.ts" />

declare module THREE {

    export class DeviceOrientationControls {

        constructor(object: Camera);

        object: Camera;
        enabled: boolean;
        devicedOrientation: { };
        screenOrientation: number;
        alphaOffset: number;

        connect(): void;
        disconnect(): void;
        update(): void;
        dispose(): void;

    }

}
