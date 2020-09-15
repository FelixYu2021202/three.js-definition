/// <reference path="../three.d.ts" />

declare module THREE {

    export class NodeMaterialLoader {

        constructor(manager: LoadingManager, library: object);

        manager: LoadingManager;
        nodes: {
            [uuid: string]: any
        };
        materials: {
            [uuid: string]: any
        };
        passes: {
            [uuid: string]: any
        };
        names: {
            [uuid: string]: any
        };
        library: {
            [uuid: string]: any
        };
        material: any;
        pass: any;

        load: __internal.Loader.Loader2<any, NodeMaterialLoader>;
        getObjectByName(uuid: string): any;
        getObjectById(uuid: string): any;
        getNode(uuid: string): any;
        parse(json: __internal.NodeMaterialLoader.JSON): any;

    }

    export module NodeMaterialLoaderUtils {

        export function replaceUUIDObject(object: object, uuid: string, value: any, recursive: boolean): void;
        export function replaceUUIDObject(object: object, uuidObject: { uuid: string }, value: any, recursive: boolean): void;
        export function replaceUUID(json: __internal.NodeMaterialLoader.JSON, value: any): __internal.NodeMaterialLoader.JSON;

    }

    module __internal {

        export module NodeMaterialLoader {

            export interface JSON {

                [uuid: string]: any,
                nodes: {
                    [uuid: string]: {
                        type: string,
                        name: string,
                        readonly: boolean,
                        value: Color | number,
                        x: number,
                        y: number,
                        z: number,
                        w: number,
                        a: string,
                        b: string,
                        op: string,
                        method: number,
                        c: string,
                        index: number,
                        rgb: string,
                        scope: object,
                        node: string,
                        components: Array<any>,
                        inputs: {
                            [prop: string]: string
                        },
                        camera: string,
                        near: number,
                        far: number,
                        adjustment: string,
                        transform: Float32Array | string,
                        coord: Vector2,
                        scale: number,
                        radius: number,
                        size: Vector2,
                        blurX: number,
                        blurY: number,
                        renderer: string,
                        resolution: string,
                        target: string,
                        params: any,
                        out: number,
                        useDefine: boolean,
                        mirror: string,
                        offset: Vector2,
                        isMethod: boolean,
                        useKeywords: boolean,
                        extensions: {
                            [name: string]: any
                        },
                        keywords: {
                            [prop: string]: string
                        },
                        includes: Array<string>,
                        bias: string,
                        project: any,
                        alpha: string,
                        specular: string,
                        shininess: string,
                        roughness: string,
                        metalness: string,
                        reflectivity: string,
                        clearCoat: string,
                        clearCoatRoughness: string,
                        normal: string,
                        normalScale: string,
                        emissive: string,
                        ambient: string,
                        shadow: string,
                        light: string,
                        ao: string,
                        environment: string,
                        environmentAlpha: string,
                        spherical: boolean
                    }
                },
                mateirals: {
                    [uuid: string]: {
                        type: string,
                        name: string,
                        blending: number,
                        flatShading: number,
                        side: number,
                        depthFunc: number,
                        depthTest: number,
                        depthWrite: number,
                        wireframe: boolean,
                        wireframeLinewidth: number,
                        wireframeLinecap: number,
                        wireframeLinejoin: number,
                        skinning: boolean,
                        morphTargets: boolean,
                        visible: boolean,
                        userData: object,
                        vertex: string,
                        fragment: string,
                        fog: boolean,
                        lights: boolean,
                        transparent: boolean
                    }
                },
                passes: {
                    [uuid: string]: {
                        type: string,
                        name: string,
                        value: string
                    }
                },
                library: {
                    [uuid: string]: any
                }

            }

        }

    }

}
