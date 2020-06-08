/// <reference path="../three.d.ts" />

declare module THREE {

    export class OrthographicTrackballControls extends /* THREE. */EventDispatcher {

        constructor(object: /* THREE. */OrthographicCamera, domElement: HTMLElement | Document);

        object: /* THREE. */Object3D;
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
        target: /* THREE. */Vector3;
        target0: /* THREE. */Vector3;
        position0: /* THREE. */Vector3;
        up0: /* THREE. */Vector3;
        left0: number;
        right0: number;
        top0: number;
        bottom0: number;

        handleResize(): void;
        handleEvent(event: Event): void;
        rotateCamera(): void;
        zoomCamera(): void;
        panCamera(): void;
        update(): void;
        reset(): void;
        dispose(): void;

        ["constructor"]: typeof OrthographicTrackballControls;

    }

}
