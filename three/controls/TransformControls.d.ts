/// <reference path="../three.d.ts" />

declare module THREE {

    export class TransformGizmo extends Object3D {

        init: VoidFunction;

        handlers: Object3D;
        pickers: Object3D;
        planes: Object3D;
        activePlane: Mesh;

        highlight(axis: string): void;

        ["constructor"]: typeof Object3D & typeof TransformGizmo;

        update(rotation: Euler, eye: Vector3): void;

    }

    export class TransformGizmoTranslate extends TransformGizmo {

        handleGizmos: __internal.TransformGizmoTranslate.Gizmos;
        pickerGizmos: __internal.TransformGizmoTranslate.Gizmos;

        setActivePlane(axis: __internal.TransformGizmo.Axis | "XY" | "YZ" | "XZ", eye: Vector3): void;

        ["constructor"]: typeof TransformGizmo.prototype.constructor & typeof TransformGizmoTranslate;

    }

    export class TransformGizmoRotate extends TransformGizmo {

        handleGizmos: __internal.TransformGizmoRotate.Gizmos;
        pickerGizmos: __internal.TransformGizmoRotate.Gizmos;

        setActivePlane(axis: "X" | "Y" | "Z" | "E"): void;
        update(rotation: Euler, eye2: Vector3): void;

        ["constructor"]: typeof TransformGizmo.prototype.constructor & typeof TransformGizmoRotate;

    }

    export class TransformGizmoScale extends TransformGizmo {

        handleGizmos: __internal.TransformGizmoScale.Gizmos;
        pickerGizmos: __internal.TransformGizmoScale.Gizmos;

        setActivePlane(axis: __internal.TransformGizmo.Axis, eye: Vector3): void;

        ["constructor"]: typeof TransformGizmo.prototype.constructor & typeof TransformGizmoScale;

    }

    export class TransformControls extends Object3D {

        constructor(camera: Camera, domElement: HTMLElement | Document);

        object: Object3D;
        trnaslationSnap: number;
        rotationSnap: number;
        space: string;
        size: number;
        axis: __internal.TransformGizmo.Axis;

        dispose: VoidFunction;
        attach(object: Object3D): void;
        detach: VoidFunction;
        getMode(): string;
        setMode(mode: string): void;
        setTranslationSnap(translationSnap: number): void;
        setRotationSnap(rotationSnap: number): void;
        setSize(size: number): void;
        setSpace(space: string): void;
        update: VoidFunction;

        ["constructor"]: typeof Object3D & typeof TransformControls;

    }

    module __internal {

        module TransformGizmo {

            export type gizmo = [[Mesh], [Line]];
            export type gizmo2 = [[Mesh]];

            export interface Gizmos<T extends (gizmo | gizmo2)> {

                X: T;
                Y: T;
                Z: T;

            }

            type Axis = "X" | "Y" | "Z" | "XYZ";

        }

        export module TransformGizmoTranslate {

            export interface Gizmos extends TransformGizmo.Gizmos<TransformGizmo.gizmo> {

                XYZ: __internal.TransformGizmo.gizmo2;
                XY: __internal.TransformGizmo.gizmo2;
                YZ: __internal.TransformGizmo.gizmo2;
                XZ: __internal.TransformGizmo.gizmo2;
    
            }

        }

        export module TransformGizmoRotate {

            export interface Gizmos extends TransformGizmo.Gizmos<TransformGizmo.gizmo2> {

                E: TransformGizmo.gizmo2;
                XYZE: TransformGizmo.gizmo2;

            }

        }

        export module TransformGizmoScale {

            export interface Gizmos extends TransformGizmo.Gizmos<TransformGizmo.gizmo> { XYZ: TransformGizmo.gizmo2; }

        }

    }

}
