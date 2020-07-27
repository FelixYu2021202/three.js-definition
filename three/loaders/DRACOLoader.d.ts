/// <reference path="../three.d.ts" />

declare module THREE {

    export class DRACOLoader {

        constructor(manager: LoadingManager);

        timeLoaded: number;
        manager: LoadingManager;
        materials: any;
        verbosity: number;
        attributeOptions: {

            [attributeName: string]: object

        };
        drawMode: number;
        nativeAttributeMap: {

            position: string,
            normal: string,
            color: string,
            uv: string

        }

        ["constructor"]: typeof DRACOLoader;

        path: string;
        crossOrigin: string;

        load: __internal.Loader.Loader2<BufferGeometry>;
        setPath(value: string): void;
        setCrossOrigin(value: string): void;
        setVerbosity(level: number): void;
        setDrawMode(drawMode: number): void;
        setSkipDequantization(attributeName: string, skip: boolean): void;
        decodeDracoFile(rawBuffer: ArrayBuffer, callback: __internal.Loader._onLoad<BufferGeometry>, attributeUniqueIdMap: object, attributeTypeMap: object): void;
        decodeDracoFileInternal(rawBuffer: ArrayBuffer, dracoDecoder: any, callback: __internal.Loader._onLoad<BufferGeometry>, attributeUniqueIdMap: object, attributeTypeMap: object): void;
        addAttributeToGeometry(dracoDecoder: any, decoder: any, dracoGeometry: any, attributeName: string, attributeType: string, attribute: any, geometry: BufferGeometry, geometryBuffer: BufferGeometry): void;
        convertDracoGeometryTo3JS(dracoDecoder: any, decoder: any, geometryType: string, buffer: ArrayBuffer, attributeUniqueIdMap: object, attributeTypeMap: object): BufferGeometry;
        isVersionSupported(version: string, callback: (isSupported: boolean) => any): void;
        getAttributeOptions(attributeName: string): any;

        static decoderPath: string;
        static decoderConfig: object;
        static decoderModulePromise: Promise<{
            decoder: any
        }>;

        static setDecoderPath(path: string): void;
        static setDecoderConfig(config: object): void;
        static releaseDecoderModule: VoidFunction;
        static getDecoderModule(): Promise<{

            decoder: any

        }>;
        static _loadScript(src: string): Promise<Event>;
        static _loadArrayBuffer(src: string): Promise<ArrayBuffer>;

    }

}
