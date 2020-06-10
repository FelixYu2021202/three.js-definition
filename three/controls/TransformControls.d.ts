/// <reference path="../three.d.ts" />

declare module THREE {

    // export class GizmoMaterial extends /* THREE. */MeshBasicMaterial {

    //     constructor(parameters: /* THREE. */__internal.Material.BasicParameter);

    //     oldColor: /* THREE. */Color;
    //     oldOpacity: number;

    //     highlight(highlighted: boolean): void;

    //     ["constructor"]: typeof /* THREE. */MeshBasicMaterial.prototype.constructor & typeof GizmoMaterial;

    // }

    // export class GizmoLineMaterial extends /* THREE. */LineBasicMaterial {

    //     constructor(parameters: {

    //         color: number,
    //         opacity: number,
    //         linewidth: number,
    //         linecap: string,
    //         linejoin: string

    //     });

    //     oldColor: /* THREE. */Color;
    //     oldOpacity: number;

    //     highlight(highlighted: boolean): void;

    //     ["constructor"]: typeof /* THREE. */LineBasicMaterial.prototype.constructor & typeof GizmoLineMaterial;

    // }

    export class TransformGizmo extends /* THREE. */Object3D {

        init(): void;

        handlers: /* THREE. */Object3D;
        pickers: /* THREE. */Object3D;
        planes: /* THREE. */Object3D;
        activePlane: /* THREE. */Mesh;

        highlight(axis: string): void;

        ["constructor"]: typeof Object3D & typeof TransformGizmo;

        update(rotation: /* THREE. */Euler, eye: Vector3): void;

    }

    export class TransformGizmoTranslate extends TransformGizmo {

        handleGizmos: __internal.TransformGizmoTranslate.Gizmos;
        pickerGizmos: __internal.TransformGizmoTranslate.Gizmos;

    }

    module __internal {

        export module TransformGizmoTranslate {

            export type gizmo = [[/* THREE. */Mesh], [/* THREE. */Line]];
            export type gizmo2 = [[/* THREE. */Mesh]];
            export interface Gizmos {

                X: __internal.TransformGizmoTranslate.gizmo;
                Y: __internal.TransformGizmoTranslate.gizmo;
                Z: __internal.TransformGizmoTranslate.gizmo;
                XYZ: __internal.TransformGizmoTranslate.gizmo2;
                XY: __internal.TransformGizmoTranslate.gizmo2;
                YZ: __internal.TransformGizmoTranslate.gizmo2;
                XZ: __internal.TransformGizmoTranslate.gizmo2;
    
            }

        }

    }

}
