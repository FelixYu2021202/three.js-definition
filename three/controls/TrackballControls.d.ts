/// <reference path="../three.d.ts" />

declare module THREE {

    export class TrackballControls extends /* THREE. */EventDispatcher {

        constructor(object: /* THREE. */Camera, domElement: HTMLElement | Document);

        object: /* THREE. */Camera;
        domElement: HTMLElement | Document;
        enabled: boolean;
        screen: {

            left: number,
            top: number,
            width: number,
            height: number

        }
        rotateSpeed: number;
        zoomSpeed: number;
        panSpeed: number;
        noRotate: boolean;
        noZoom: boolean;
        noPan: boolean;
        staticMoving: boolean;
        dynamicDampingFactor: number;
        minDistance: number;
        maxDistance: number;
        keys: Array<number>;
        target: /* THREE. */Vector3;
        target0: /* THREE. */Vector3;
        position0: /* THREE. */Vector3;
        up0: /* THREE. */Vector3;

        handleResize(): void;
        handleEvent(event: Event): void;
        rotateCamera(): void;
        zoomCamera(): void;
        panCamera(): void;
        checkDistances(): void;
        update(): void;
        reset(): void;
        dispose(): void;

        ["constructor"]: typeof TrackballControls;

    }

}
