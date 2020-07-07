/// <reference path="./SEA3DRigidBody.d.ts" />
/// <reference path="../../../three.d.ts" />

declare module SEA3D.AMMO {

    export var world: any;
    export var rigidBodies: Array<RigidBody>;
    export var rigidBodiesTarget: Array<RigidBody>;
    export var rigidBodiesEnabled: Array<boolean>;
    export var constraints: Array<Constraints>;
    export var vehicles: Array<any>;
    export var vehiclesWheels: Array<Array<Wheel>>;
    export var ACTIVE: number;
    export var ISLAND_DEACTIVATION: number;
    export var WANTS_DEACTIVATION: number;
    export var DISABLE_DEACTIVATION: number;
    export var DISABLE_SIMULATION: number;
    export var VERSION: number;

    export function init(gravity: number, worldScale: number, broadphase: 'bvt' | 'sap' | 'simple'): void;

    export var worldScale: number;
    export var broadphase: 'bvt' | 'sap' | 'simple';
    export var solver: any;
    export var collisionConfig: any;
    export var dispatcher: any;
    export var world: any;

    export function setGravity(gravity: number): typeof AMMO;

    export var gravity: number;

    export function getGravity(): number;
    export function setEnabledRigidBody(rb: RigidBody, enabled: boolean): typeof AMMO;
    export function getEnabledRigidBody(rb: RigidBody): RigidBody;
    export function addRigidBody(rb: RigidBody, target: RigidBody, enabled: boolean): typeof AMMO;
    export function removeRigidBody(rb: RigidBody, destroy: boolean): typeof AMMO;
    export function containsRigidBody(rb: RigidBody): boolean;
    export function addConstraint(ctrt: Constraints, disableCollisionsBetweenBodies: boolean): typeof AMMO;
    export function removeConstraint(ctrt: Constraints, destroy: boolean): typeof AMMO;
    export function containsConstraint(ctrt: Constraints): boolean;
    export function addVehicle(vehicle: any, wheels: Array<Wheel>): typeof AMMO;
    export function removeVehicle(vehicle: any, destroy: boolean): typeof AMMO;
    export function containsVehicle(vehicle: any): boolean;
    export function createTriangleMesh(geometry: THREE.BufferAttribute, index: number, removeDuplicateVertices: boolean): any;
    export function createConvexHull(geometry: THREE.BufferAttribute, index: number): any;
    export function getTargetByRigidBody(rb: RigidBody): RigidBody;
    export function getRigidBodyByTarget(target: RigidBody): RigidBody;
    export function getTransformFromMatrix(mtx: THREE.Matrix4): any;
    export function getMatrixFromTransform(transform: any, matrix: THREE.Matrix4): THREE.Matrix4;
    export function updateTargetTransform(obj3d: THREE.Object3D, transform: any, offset: number): typeof AMMO;
    export function update(delta: number, iteration: number, fixedDelta: number): typeof AMMO;

}
