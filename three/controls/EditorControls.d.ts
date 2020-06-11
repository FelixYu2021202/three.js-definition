/// <reference path="../three.d.ts" />

declare module THREE {

    export class EditorControls extends EventDispatcher {

        constructor(object: Camera, domElement: HTMLElement | Document);

        enabled: boolean;
        center: Vector3;
        panSpeed: number;
        zoomSpeed: number;
        rotationSpeed: number;

        focus(target: any): void;
        pan(delta: Vector3): void;
        zoom(delta: Vector3): void;
        rotate(delta: Vector2): void;
        dispose: VoidFunction;

        ["constructor"]: typeof EditorControls;

    }

}
