/// <reference path="../../../three.d.ts" />

declare module THREE {

    export class SEA3D {

        toAmmoVec3(v: Vector3): any;
        readSphere(sea: any): void;
        readBox(sea: any): void;
        readCone(sea: any): void;
        readCylinder(sea: any): void;
        readCapsule(sea: any): void;
        readConvexGeometry(sea: any): void;
        readTriangleGeometry(sea: any): void;
        readCompound(sea: any): void;
        readRigidBodyBase(sea: any): void;
        readRigidBody(sea: any): void;
        readCarController(sea: any): void;
        readP2PConstraint(sea: any): void;
        readHingeConstraint(sea: any): void;
        readConTwistConstraint(sea: any): void;
        enabledPhysics(enabled: boolean): void;
        applyContainerTransform: VoidFunction;
        applyTransform: VoidFunction;
        getShape(name: string): void;
        getRigidBody(name: string): void;
        getConstraint(name: string): void;

    }

    export module SEA3D {

        export class Domain {

            getShape(name: string): void;
            getRigidBody(name: string): void;
            getConstraint(name: string): void;

        }

    }

}