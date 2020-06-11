///<reference path="../three.d.ts"/>

declare module THREE {

    export class FlyControls {

        constructor(object: Camera, domElement: HTMLElement | Document);

        object: Object3D;
        domElement: HTMLElement | Document;
        movementSpeed: number;
        rollSpeed: number;
        dragToLook: boolean;
        autoForward: boolean;
        tmpQuaternion: Quaternion;
        mouseStatus: number;
        moveState: {

            up: number,
            down: number, 
            left: number,
            right: number,
            forward: number,
            back: number,
            pitchUp: number,
            pitchDown: number,
            yawLeft: number,
            yawRight: number,
            rollLeft: number,
            rollRight: number

        };
        moveVector: Vector3;
        rotationVector: Vector3;
        handleEvent(event: Event): void;
        keydown(event: KeyboardEvent): void;
        keyup(event: KeyboardEvent): void;
        mousedown(event: MouseEvent): void;
        mouseup(event: MouseEvent): void;
        update(delta: number): void;
        updateMovementVector: VoidFunction;
        updateRotationVector: VoidFunction;
        getContainerDimensions(): __internal.FlyControls.containerDimension;
        dispose: VoidFunction;

    }

    module __internal {

        export module FlyControls {

            export interface containerDimension {

                size: Array<number>/* [number, number] */,
                offset: Array<number>/* [number, number] */

            }

        }

    }

}
