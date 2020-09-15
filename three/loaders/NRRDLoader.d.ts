/// <reference path="../three.d.ts" />
/// <reference path="../Volume/Volume.d.ts" />

declare module THREE {

    export class NRRDLoader {

        constructor(manager: LoadingManager);
        manager: LoadingManager;

        ["constructor"]: typeof NRRDLoader;

        load: __internal.Loader.Loader2<Volume>;
        parse(data: ArrayBuffer): Volume;
        parseChars(array: Array<number>, start: number, end: number): string;
        fieldFunctions: {

            type<T extends "uchar" | "unsigned char" | "uint8" | "uint8_t" | "signed char" | "int8" | "int8_t" | "short" | "short int" | "signed short" | "signed short int" | "int16" | "int16_t" | "ushort" | "unsigned short" | "unsigned short int" | "uint16" | "uint16_t" | "int" | "signed int" | "int32" | "int32_t" | "uint" | "unsigned int" | "uint32" | "uint32_t" | "float" | "double">(data: T): T,
            endian(data: string): string,
            encoding(data: string): string,
            dimension(data: string): string,
            sizes(data: string): Array<number>,
            space(data: any): any,
            'space origin'(data: string): Array<string>,
            'space directions'(data: string): Array<Array<number>>,
            spacings(data: string): Array<number>

        }

    }

}
