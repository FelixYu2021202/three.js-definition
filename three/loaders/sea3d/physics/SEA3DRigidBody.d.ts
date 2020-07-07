/// <reference path="../SEA3D.d.ts" />

declare module SEA3D {

    export class Sphere {

        constructor(name: string, data: Stream, sea3d: any);

        name: string;
        data: Stream;
        sea3d: any;
        radius: number;
        type: string;

    }

    export class Box {

        constructor(name: string, data: Stream, sea3d: any);

        name: string;
        data: Stream;
        sea3d: any;
        width: number;
        height: number;
        depth: number;
        type: string;

    }

    export class Cone {

        constructor(name: string, data: Stream, sea3d: any);

        name: string;
        data: Stream;
        sea3d: any;
        radius: number;
        height: number;
        type: string;

    }

    export class Capsule {

        constructor(name: string, data: Stream, sea3d: any);

        name: string;
        data: Stream;
        sea3d: any;
        radius: number;
        height: number;
        type: string;

    }

    export class Cylinder {

        constructor(name: string, data: Stream, sea3d: any);

        name: string;
        data: Stream;
        sea3d: any;
        radius: number;
        height: number;
        type: string;

    }

    export class ConvexGeometry {

        constructor(name: string, data: Stream, sea3d: any);

        name: string;
        data: Stream;
        sea3d: any;
        geometry: any;
        subGeometryIndex: number;
        type: string;

    }

    export class TriangleGeometry {

        constructor(name: string, data: Stream, sea3d: any);

        name: string;
        data: Stream;
        sea3d: any;
        geometry: any;
        subGeometryIndex: number;
        type: string;

    }

    export class Compound {

        constructor(name: string, data: Stream, sea3d: any);

        name: string;
        data: Stream;
        sea3d: any;
        compounds: Array<{

            shape: any,
            transform: Float32Array

        }>;
        type: string;

    }

    export class Physics {

        constructor(name: string, data: Stream, sea3d: any);

        name: string;
        data: Stream;
        sea3d: any;
        attrib: number;
        shape: any;
        target: any;
        offset: Float32Array;
        scripts: Array<__internal.Script>;
        attributes: __internal.Sea3d;

        readTag(kind: number, data: Stream, size: number): void;

    }

    export class RigidBodyBase extends Physics {

        linearDamping: number;
        angularDamping: number;
        mass: number;
        friction: number;
        restitution: number;

        ["constructor"]: typeof RigidBodyBase;

    }

    export class RigidBody extends RigidBodyBase {

        ["constructor"]: typeof RigidBody;

        type: string;

    }

    export class CarController extends RigidBodyBase {

        suspensionStiffness: number;
        suspensionCompression: number;
        suspensionDamping: number;
        maxSuspensionTravelCm: number;
        frictionSlip: number;
        maxSuspensionForce: number;
        dampingCompression: number;
        dampingRelaxation: number;
        wheel: Array<Wheel>;

    }

    export class Wheel extends RigidBodyBase {

        constructor(data: Stream, sea3d: any);

        data: Stream;
        sea3d: any;
        attrib: number;
        isFront: boolean;
        target: any;
        offset: Float32Array;
        pos: __internal.Vector3;
        dir: __internal.Vector3;
        axle: __internal.Vector3;
        radius: number;
        suspensionRestLength: number;
        type: string;

    }

    export class Constraints {

        constructor(name: string, data: Stream, sea3d: any);

        name: string;
        data: Stream;
        sea3d: any;
        attrib: number;
        disableCollisionsBetweenBodies: boolean;
        targetA: any;
        pointA: __internal.Vector3;
        targetB: any;
        pointB: __internal.Vector3;

    }

    export class P2PConstraint extends Constraints {

        ["constructor"]: typeof P2PConstraint;

        type: string;

    }

    export class HingeConstraint extends Constraints {

        axisA: __internal.Vector3;
        axisB: __internal.Vector3;
        limit: {

            low: number,
            high: number;
            softness: number,
            biasFactor: number,
            relaxationFactor: number

        }
        angularMotor: {

            velocity: number,
            impulse: number

        }

        ["constructor"]: typeof HingeConstraint;

        type: string;

    }

    export class ConeTwistConstraint extends Constraints {

        axisA: __internal.Vector3;
        axisB: __internal.Vector3;
        limit: {

            swingSpan1: number,
            swingSpan2: number,
            twistSpan: number,
            softness: number,
            biasFactor: number,
            relaxationFactor: number

        }

        ["constructor"]: typeof ConeTwistConstraint;
        type: string;

    }

    export class File {

        typeClass: __internal.TypeClasses & {

            [type: string]: __internal.TypeClasses[typeof type] | Sphere | Box | Cone | Capsule | Cylinder | ConvexGeometry | TriangleGeometry | Compound | RigidBody | P2PConstraint | HingeConstraint | ConeTwistConstraint | CarController

        }

    }

}
