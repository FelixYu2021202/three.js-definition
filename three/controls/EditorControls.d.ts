/// <reference path="../three.d.ts" />

declare module THREE {

    export class EditorControls extends /* THREE. */EventDispatcher {

        constructor(object: /* THREE. */Object3D, domElement: HTMLElement | Document);

        enabled: boolean;
        center: /* THREE. */Vector3;
        panSpeed: number;
        zoomSpeed: number;
        rotationSpeed: number;

        focus(target: any): void;
        pan(delta: /* THREE. */Vector3): void;
        zoom(delta: /* THREE. */Vector3): void;
        rotate(delta: /* THREE. */Vector2): void;
        dispose(): void;

        ["constructor"]: typeof EditorControls;

    }

}
