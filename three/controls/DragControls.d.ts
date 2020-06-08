/// <reference path="../three.d.ts" />

declare module THREE {

    export class DragControls extends /* THREE. */EventDispatcher {

        constructor(_objects: /* THREE. */Camera, _camera: /* THREE. */Camera, _domElement: HTMLElement);

        enabled: boolean;

        activate(): void;
        deactivate(): void;
        dispose(): void;

        setObjects(): void;
        on(type: string, listener: any): void;
        off(type: string, listener: any): void;
        notify(type: string): void;

        ["constructor"]: typeof DragControls;

    }

}
