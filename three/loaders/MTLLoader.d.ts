/// <reference path="../three.d.ts" />

declare module THREE {

    export class MTLLoader {

        constructor(manager: LoadingManager);

        manager: LoadingManager;

        ["constructor"]: typeof MTLLoader;

        load: __internal.Loader.Loader2<MTLLoader.MaterialCreator>;

    }

    export module MTLLoader {

        export class MaterialCreator {

            constructor(baseUrl: string, options: __internal.MaterialOptions);

            baseUrl: string;
            options: __internal.MaterialOptions;
            materialsInfo: {

                [materialName: string]: {

                    kd: [number, number, number],
                    ka: [number, number, number],
                    ks: [number, number, number],
                    map_kd: string,
                    map_ks: string,
                    norm: string,
                    map_bump: string,
                    bump: string,
                    ns: string,
                    d: string,
                    tr: string

                }

            };
            materials: {

                [materialName: string]: MeshPhongMaterial

            };
            materialsArray: Array<MeshPhongMaterial>;
            nameLookup: {

                [materialName: string]: number

            };
            side: number;
            wrap: number;

            ["constructor"]: typeof MaterialCreator;

            crossOrigin: string;
            manager: LoadingManager;

            setCrossOrigin(value: string): void;
            setManager(value: LoadingManager): void;
            setMaterials(materialsInfo: MaterialCreator["materialsInfo"]): void;
            convert(materialsInfo: MaterialCreator["materialsInfo"]): MaterialCreator["materialsInfo"];
            preload(): void;
            getIndex(materialName: string): number;
            getAsArray(): Array<MeshPhongMaterial>;
            create(materialName: string): MeshPhongMaterial;
            createMaterial_(materialName: string): MeshPhongMaterial;
            getTextureParams(value: string, matParams: {

                bumpScale: number

            }): {

                scale: Vector2,
                offset: Vector2,
                url: string

            };
            loadTexture(url: string, mapping: string, onLoad: THREE.__internal.Loader._onLoad<Texture>, onProgress: THREE.__internal.Loader._onProgress, onError: THREE.__internal.Loader._onError): Texture;

        }

        module __internal {

            export interface MaterialOptions {

                side: number,
                wrap: number,
                normalizeRGB: boolean,
                ignoreZeroRGBs: boolean

            }

        }

    }

}
