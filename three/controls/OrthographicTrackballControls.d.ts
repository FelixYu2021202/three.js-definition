/// <reference path="../three.d.ts" />

declare module THREE {

    export class OrthographicTrackballControls extends EventDispatcher {

        constructor(object: OrthographicCamera, domElement: HTMLElement | Document);

        object: Object3D;
        domElement: HTMLElement | Document;
        enabled: boolean;
        screen: {

            left: number,
            top: number,
            width: number,
            height: number

        }
        radius: number;
        noRotate: boolean;
        noZoom: boolean;
        noPan: boolean;
        noRoll: boolean;
        staticMoving: boolean;
        dynamicDampingFactor: number;
        keys: Array<number>;
        target: Vector3;
        target0: Vector3;
        position0: Vector3;
        up0: Vector3;
        left0: number;
        right0: number;
        top0: number;
        bottom0: number;

        handleResize: VoidFunction;
        handleEvent(event: Event): void;
        rotateCamera: VoidFunction;
        zoomCamera: VoidFunction;
        panCamera: VoidFunction;
        update: VoidFunction;
        reset: VoidFunction;
        dispose: VoidFunction;

        ["constructor"]: typeof OrthographicTrackballControls;

    }

}
