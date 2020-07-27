/// <reference path="../three.d.ts" />

declare module THREE.LoaderSupport {

    export module Validator {

        export function isValid(input: any): boolean;

        export function verifyInput<T, T2>(input: T, defaultValue: T2): T | T2;

    }

    export class Callbacks {

        onProgress: Function;
        onMeshAlter: Function;
        onLoad: Function;
        onLoadMaterials: Function;

        setCallbackOnProgress(callbackOnProgress: Function): void;
        setCallbackOnMeshAlter(callbackOnMeshAlter: Function): void;
        setCallbackOnLoad(callbackOnLoad: Function): void;
        setCallbackOnLoadMaterials(callbackOnLoadMaterials: Function): void;

    }

    export class LoadedMeshUserOverride {

        constructor(disregardMesh: boolean, alteredMesh: boolean);

        disregardMesh: boolean;
        alteredMesh: boolean;
        meshes: Array<Mesh>;

        addMesh(mesh: Mesh): void;
        isDisregardMesh(): boolean;
        providesAlteredMeshed(): boolean;

    }

    export class ResourceDescriptor {

        constructor(url: string, extension: string);

        path: string;
        name: string;
        url: string;
        extension: string;
        content: object;

        setContent(content: object): void;

    }

    export class PrepData {

        constructor(modelName: string);

        logging: {

            enable: boolean,
            debug: boolean

        }
        modelName: string;
        resources: Array<ResourceDescriptor>;
        callbacks: Callbacks;

        setLogging(enabled: boolean, debug: boolean): void;
        getCallbacks(): Callbacks;
        addResource(resource: ResourceDescriptor): void;
        clone(): PrepData;
        checkResourceDescriptorFiles(resources: Array<ResourceDescriptor>, fileDesc: object): {

            [ext: string]: ResourceDescriptor

        }

    }

    export class MeshBuilder {

        logging: {

            enabled: boolean,
            debug: boolean

        }
        callbacks: Callbacks;
        materials: Array<Material>;

        setLogging(enabled: boolean, debug: boolean): void;
        init: VoidFunction;
        setMaterials(materials: Material): void;
        _setCallbacks(callbacks: Callbacks): void;
        processPayload(payload: __internal.Payload): Array<any>;
        buildMeshes(meshPayload: __internal.Payload): Array<any>;
        updateMaterials(materialPayload: __internal.Payload): void;
        getMaterialsJSON(): {

            [materialName: string]: object

        }
        getMaterials(): Array<Material>;

    }

    export class WorkerRunnerRefImpl {

        applyProperties(parser: __internal.Parser, params: {

            [property: string]: any

        }): void;
        processMessage(payload: __internal.Payload): void;

    }

    export class WorkerSupport {

        logging: {

            enabled: boolean,
            debug: boolean

        }
        loaderWorker: {

            logging: {

                enabled: boolean,
                debug: boolean

            },
            worker: Worker,
            runnerImplName: string,
            callbacks: {

                meshBuilder: Function,
                onLoad: Function

            },
            terminateRequested: boolean,
            queuedMessage: __internal.Payload,
            started: boolean,
            forceCopy: boolean,

            _reset: VoidFunction,
            setLogging(enabled: boolean, debug: boolean): void,
            setForceCopy(forceCopy: boolean): void,
            initWorker(code: BlobPart, runnerImplName: string): void,
            _receiveWorkerMessage(e: MessageEvent): void,
            setCallbacks(meshBuilder: Function, onLoad: Function): void,
            run(payload: __internal.Payload): void,
            _postMessage: VoidFunction,
            setTetminateRequested(terminateRequested: boolean): void,
            _terminate: VoidFunction

        }

        setLogging(enabled: boolean, debug: boolean): void;
        setForceWorkerDataCopy(forceWorkerDataCopy: boolean): void;
        validate(functionCodeBuilder: Function, parserName: string, libLocations: Array<string>, libPath: string, runnerImpl: WorkerRunnerRefImpl): void;
        setCallbacks(meshBuilder: Function, onLoad: Function): void;
        run(payload: __internal.Payload): void;
        setTerminateRequested(terminateRequested: boolean): void;

    }

    export class WorkerDirector {

        constructor(classDef: string);

        logging: {

            enabled: boolean,
            debug: boolean,

        }
        maxQueueSize: number;
        maxWebWorkers: number;
        crossOrigin: string;
        workerDescription: {

            classDef: string,
            globalCallbacks: {

                [name: string]: Function

            },
            workerSupports: {

                [name: string]: WorkerSupport

            },
            forceWorkerDataCopy: boolean

        }
        objectsCompleted: number;
        instructionQueue: Array<PrepData>;
        instructionQueuePointer: number;
        callbackOnFinishedProcessing: Function;

        setLogging(enabled: boolean, debug: boolean): void;
        getMaxQueueSize(): number;
        getMaxWebWorkers(): number;
        setCrossOrigin(crossOrigin: string): void;
        setForceWorkerDataCopy(forceWorkerDataCopy: boolean): void;
        prepareWorkers(globalCallbacks: WorkerDirector["workerDescription"]["globalCallbacks"], maxQueueSize: number, maxWebWorkers: number): void;
        enqueueForRun(prepData: PrepData): void;
        isRunning(): boolean;
        processQueue(): void;
        _kickWorkerRun(prepData: PrepData, supportDesc: WorkerSupport): void;
        _buidLoader(instanceNo: number): any;
        _deregister(supportDesc: WorkerSupport): void;
        tearDown(): void;

    }

    module __internal {

        export interface Payload {

            cmd: string,
            materials: {

                materialCloneInstructions: {

                    materialNameOrg: string,
                    materialName: string,
                    materialProperties: object

                },
                serializedMaterials: Array<Material>,
                runtimeMaterials: Array<Material>

            },
            params: {

                meshName: string

            },
            buffers: {

                vertices: Iterable<number>,
                indices: Iterable<number>,
                colors: Iterable<number>,
                normals: Iterable<number>,
                uvs: Iterable<number>,

            },
            geometryType: number,
            computeBoundingSphere: boolean,
            progress: {

                numericalValue: number,

            },
            logging: {

                enabled: boolean,
                debug: boolean

            },
            msg: string,

        }

        export interface Parser {

            [funcName: string]: {

                (values: any): void

            }

        }

    }

}
