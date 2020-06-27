declare module SEA3D {

    export function Deflate(): {

        inflate(data: ArrayBuffer): Uint8Array | ArrayBuffer

    }

    export class File {

        static DeflateUncompression(data: ArrayBuffer): Uint8Array | ArrayBuffer;

    }

}