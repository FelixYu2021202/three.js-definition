declare module CTM {

    export module CompressionMethod {

        export var RAW: number;
        export var MG1: number;
        export var MG2: number;

    }

    export module Flags {

        export var NORMALS: number;

    }

    export class File {

        constructor(stream: Stream);

        header: FileHeader;
        body: FileBody;

        load(stream: Stream): void;
        getReader(): ReaderRAW | ReaderMG1 | ReaderMG2;

    }

    export class FileHeader {

        constructor(stream: Stream);

        fileFormat: number;
        compressionMethod: number;
        vertexCount: number;
        triangleCount: number;
        uvMapCount: number;
        attrMapCount: number;
        flags: number;
        comment: string;

        hasNormals(): number;

    }

    export class FileBody {

        constructor(header: FileHeader);

        indices: Uint32Array;
        vertices: Float32Array;

    }

    export class ReaderMG2 {

        MG2Header: FileMG2Header;

        read(stream: Stream, body: FileBody): void;
        readVertices(stream: Stream, vertices: Float32Array): void;
        readGridIndices(stream: Stream, vertices: Float32Array): Uint32Array;
        readIndices(stream: Stream, indices: Uint32Array): void;
        readNormals(stream: Stream, body: FileBody): void;
        readUVMaps(stream: Stream, uvMaps: Array<__internal.UVMap>): void;
        readAttrMaps(stream: Stream, attrMaps: Array<__internal.AttrMap>): void;

    }

    export function restoreIndices(indices: Uint32Array, len: number): void;

    export function restoreGridIndices(gridIndices: Uint32Array, len: number): void;

    export function restoreVertices(vertices: Float32Array, grid: FileMG2Header, gridIndices: Uint32Array, precision: number): void;

    export function restoreNormals(normals: Uint32Array, smooth: Float32Array, precision: number): void;

    export function restoreMap(map: Uint32Array, count: number, precision: number): void;

    export function calcSmoothNormals(indices: Uint32Array, vertices: Float32Array): Float32Array;

    export var isLittleEndian: boolean;

    export class InterleavedStream {

        constructor(data: Uint32Array, count: number);

        data: Uint32Array;
        offset: number;
        count: number;
        len: number;

        writeByte(value: number): void;

    }

    export class Stream {

        constructor(data: Int32Array | Float32Array | Uint32Array);

        data: Int32Array | Float32Array | Uint32Array;
        offset: number;
        TWO_POW_MINUS32: number;
        TWO_POW_MINUS126: number;

        readByte(): number;
        readInt32(): number;
        readFloat32(): number;
        readString(): string;
        readArrayInt32(array: Int32Array): Int32Array;
        readArrayFloat32(array: Float32Array): Float32Array;

    }

    export class FileMG2Header {

        constructor(stream: Stream);
        vertexPrecision: number;
        normalPrecision: number;
        lowerBoundx: number;
        lowerBoundy: number;
        lowerBoundz: number;
        higherBoundx: number;
        higherBoundy: number;
        higherBoundz: number;
        divx: number;
        divy: number;
        divz: number;
        sizex: number;
        sizey: number;
        sizez: number;

    }

    export class ReaderRAW { }

    export class ReaderMG1 { }

    module __internal {

        export interface UVMap {

            name: string,
            filename: string,
            uv: Uint32Array

        }

        export interface AttrMap {

            name: string,
            attr: Uint32Array

        }

    }

}