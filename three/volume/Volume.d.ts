/// <reference path="../three.d.ts" />
/// <reference path="./VolumeSlice.d.ts" />

declare module THREE {

    export class Volume {

        constructor(xLength: number, yLength: number, zLength: number, type: 'Uint8' | 'uint8' | 'uchar' | 'unsigned char' | 'uint8_t' | 'Int8' | 'int8' | 'signed char' | 'int8_t' | 'Int16' | 'int16' | 'short' | 'short int' | 'signed short' | 'signed short int' | 'Uint16' | 'uint16' | 'ushort' | 'unsigned short' | 'unsigned short int' | 'uint16_t' | 'Int32' | 'int32' | 'int' | 'signed int' | 'int32_t' | 'Uint32' | 'uint32' | 'uint' | 'unsigned int' | 'uint32_t' | 'longlong' | 'long long' | 'long long int' | 'signed long long' | 'signed long long int' | 'int64' | 'int64_t' | 'ulonglong' | 'unsigned long long' | 'unsigned long long int' | 'uint64' | 'uint64_t' | 'Float32' | 'float32' | 'float' | 'Float64' | 'float64' | 'double', arrayBuffer: ArrayBuffer);

        xLength: number;
        yLength: number;
        zLength: number;
        data: Uint8Array | Int8Array | Int16Array | Uint16Array | Int32Array | Uint32Array | Float32Array | Float64Array;
        spacing: Array<number>;
        offset: Array<number>;
        matrix: Matrix3;
        get lowerThreshold(): number;
        set lowerThreshold(value: number);
        get upperThreshold(): number;
        set upperThreshold(value: number);
        sliceList: Array<VolumeSlice>;

        ["constructor"]: typeof Volume;
        getData(i: number, j: number, k: number): number;
        access(i: number, j: number, k: number): number;
        reverseAccess(index: number): [number, number, number];
        map(functionToMap: (data: number, i: number, dataArray: number) => number, context: object): Volume;

    }

}
