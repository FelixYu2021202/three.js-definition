/// <reference path="../../three.d.ts" />
/// <reference path="./ctm.d.ts" />

declare module THREE {

    export class CTMLoader extends Loader {

        ["constructor"]: typeof CTMLoader;

        loadParts(url: string, callback: (geometries: Array<Geometry>, materials: Array<Material>) => any, parameters: __internal.Loaders.CTMParameters): void;
        load(url: string, callback: (geometry: __internal.Loaders.CTMModel) => any, parameters: __internal.Loaders.CTMParameters & { offset: number }): void;
        createModel(file: CTM.FileBody, callback: (geometry: __internal.Loaders.CTMModel) => any): void;

    }

    module __internal {

        export module Loaders {

            export interface CTMParameters {

                basePath: string,
                useWorker: boolean,
                worker: Worker

            }

            export class CTMModel extends BufferGeometry {

                materials: Array<Material>;
                position: BufferAttribute;
                normal: BufferAttribute;
                uv: BufferAttribute;
                color: BufferAttribute;

                ["constructor"]: typeof BufferGeometry & typeof CTMModel;

            }

        }

    }

}
