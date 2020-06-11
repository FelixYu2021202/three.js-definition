/// <reference path="../three.d.ts" />

declare module THREE {

    export class DragControls extends EventDispatcher {

        constructor(_objects: Camera, _camera: Camera, _domElement: HTMLElement);

        enabled: boolean;

        activate: VoidFunction;
        deactivate: VoidFunction;
        dispose: VoidFunction;

        setObjects: VoidFunction;
        on(type: string, listener: any): void;
        off(type: string, listener: any): void;
        notify(type: string): void;

        ["constructor"]: typeof DragControls;

    }

}
