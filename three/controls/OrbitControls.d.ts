///<reference path="../three.d.ts"/>

declare module THREE {

    export class OrbitControls extends /* THREE. */EventDispatcher {

        constructor(object: /* THREE. */Camera, domElement: HTMLElement | Document);

        object: /* THREE. */Object3D;
        domElement: HTMLElement | Document;
        enabled: boolean;
        target: /* THREE. */Vector3;
        minDistance: number;
        maxDistance: number;
        minZoom: number;
        maxZoom: number;
        minPolarAngle: number;
        maxPolarAngle: number;
        minAzimuthAngle: number;
        maxAzimuthAngle: number;
        enableDamping: boolean;
        dampingFactor: number;
        enableZoom: boolean;
        zoomSpeed: number;
        enableRotate: boolean;
        rotateSpeed: number;
        enablePan: boolean;
        panSpeed: number;
        screenSpacePanning: boolean;
        keyPanSpeed: number;
        autoRotate: boolean;
        autoRotateSpeed: number;
        enableKeys: boolean;
        keys: {

            LEFT: number,
            UP: number,
            RIGHT: number,
            BOTTOM: number

        }
        mouseButtons: {

            ORBIT: number,
            ZOOM: number,
            PAN: number

        }

        target0: /* THREE. */Vector3;
        position0: /* THREE. */Vector3;
        zoom0: number;

        getPolarAngle(): number;
        getAzimuthAngle(): number;
        saveState(): void;
        reset(): void;
        update(): boolean;
        dispose(): void;

        ["constructor"]: typeof OrbitControls;

        get center(): /* THREE. */Vector3;
        get noZoom(): boolean;
        set noZoom(value: boolean);
        get noRotate(): boolean;
        set noRotate(value: boolean);
        get noPan(): boolean;
        set noPan(value: boolean);
        get noKeys(): boolean;
        set noKeys(value: boolean);
        get staticMoving(): boolean;
        set staticMoving(value: boolean);
        get dynamicDampingFactor(): number;
        set dynamicDampingFactor(value: number);

    }

}