/// <reference path="../three.d.ts" />

declare module THREE {

    export class TrackballControls extends EventDispatcher {

        constructor(object: Camera, domElement: HTMLElement | Document);

        object: Camera;
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
        target: Vector3;
        target0: Vector3;
        position0: Vector3;
        up0: Vector3;

        handleResize: VoidFunction;
        handleEvent(event: Event): void;
        rotateCamera: VoidFunction;
        zoomCamera: VoidFunction;
        panCamera: VoidFunction;
        checkDistances: VoidFunction;
        update: VoidFunction;
        reset: VoidFunction;
        dispose: VoidFunction;

        ["constructor"]: typeof TrackballControls;

    }

}
