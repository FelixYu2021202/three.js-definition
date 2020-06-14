/// <reference path="../three.d.ts" />

declare module THREE.ParametricGeometries {

    export var klein: __internal.ParametricFunction;

    export function plane(width: number, height: number): __internal.ParametricFunction;

    export var mobius: __internal.ParametricFunction;
    export var mobius3d: __internal.ParametricFunction;

    export class TubeGeometry extends ParametricGeometry {

        constructor(path: Path, segments: number, radius: number, segmentsRadius: number, closed: boolean, debug: boolean);

        path: Path;
        segments: number;
        radius: number;
        segmentsRadius: number;
        closed: boolean;
        debug: Object3D;
        tangents: Array<Vector3>;
        normals: Array<Vector3>;
        binormals: Array<Vector3>;

        ["constructor"]: typeof ParametricGeometry.prototype.constructor & typeof TubeGeometry;

    }

    export class TorusKnotGeometry extends TubeGeometry {

        constructor(radius: number, tube: number, segmentsT: number, segmentsR: number, p: number, q: number);

        radius: number;
        tube: number;
        segmentsT: number;
        segmentsR: number;
        p: number;
        q:  number;

        ["constructor"]: typeof TubeGeometry.prototype.constructor & typeof TorusKnotGeometry;

    }

    export class SphereGeometry extends ParametricGeometry {

        constructor(size: number, u: number, v: number);

        ["constructor"]: typeof ParametricGeometry.prototype.constructor & typeof SphereGeometry;

    }

    export class PlaneGeometry extends ParametricGeometry {

        constructor(width: number, depth: number, segmentsWidth: number, segmentsDepth: number);

        ["constructor"]: typeof ParametricGeometry.prototype.constructor & typeof PlaneGeometry;

    }

    module __internal {

        interface ParametricFunction {

            (u: number, v: number, optionalTarget: Vector3): Vector3

        }

    }

}
