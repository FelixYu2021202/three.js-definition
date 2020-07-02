
/// <reference path="./SEA3D.d.ts" />

declare module SEA3D.LZMA {

    export class OutWindow {

        _windowSize: number;
        _buffer: Array<number>;
        _pos: number;
        _streamPos: number;
        _stream: Stream;

        create(windowSize: number): void;
        flush: VoidFunction
        releaseStream: VoidFunction
        setStream(stream: Stream): void;
        init(solid: boolean): void;
        copyBlock(distance: number, len: number): void;
        putByte(b: number): void;
        getByte(distance: number): void;

    }

    export class RangeDecoder {

        _stream: Stream;
        _code: number;
        _range: number;

        setStream(stream: Stream): void;
        releaseStream: VoidFunction
        init: VoidFunction
        decodeDirectBits(numTotalBits: number): number;
        decodeBit(probs: Array<number>, index: number): number;

    }

    export function initBitModels(probs: Array<number>, len: number): void;

    export class BitTreeDecoder {

        constructor(numBitLevels: number);

        _models: Array<number>;
        _numBitLevels: number;

        init: VoidFunction
        decode(rangeDecoder: RangeDecoder): number;
        reverseDecode(rangeDecoder: RangeDecoder): number;

    }

    export function reverseDecode2(models: Array<number>, startIndex: number, rangeDecoder: RangeDecoder, numBitLevels: number): number;

    export class LenDecoder {

        _choice: Array<number>;
        _lowCoder: Array<BitTreeDecoder>;
        _midCpder: Array<BitTreeDecoder>;
        _highCoder: BitTreeDecoder;
        _numPosStates: number;

        create(numPosStates: number): void;
        init: VoidFunction
        decode(rangeDocoder: RangeDecoder, posState: number): number;

    }

    export class Decoder2 {

        _decoders: Array<number>;

        init: VoidFunction
        decodeNormal(rangeDocoder: RangeDecoder): void;
        decodeWithMatchByte(rangeDecoder: RangeDecoder, matchByte: number): void;

    }

    export class LiteralDecoder {

        _coders: Array<Decoder2>;
        _numPrevBits: number;
        _numPosBits: number;
        _posMask: number;

        create(numPosBits: number, numPrevBits: number): void;
        init: VoidFunction
        getDecoder(pos: number, prevByte: number): Decoder2;

    }

    export class Decoder {

        _outWindow: OutWindow;
        _rangeDecoder: RangeDecoder;
        _isMatchDecoders: Array<number>;
        _isRapDecoders: Array<number>;
        _isRepG0Decoders: Array<number>;
        _isRepG1Decoders: Array<number>;
        _isRepG2Decoders: Array<number>;
        _isRep0LongDecoders: Array<number>;
        _posSlotDecoder: Array<BitTreeDecoder>;
        _posDecoders: Array<number>;
        _posAlignDecoder: BitTreeDecoder;
        _lenDecoder: LenDecoder;
        _repLenDecoder: LenDecoder;
        _literalDecoder: LiteralDecoder;
        _dictionarySize: number;
        _dictionarySizeCheck: number;

        setDictionarySize(dictionarySize): boolean;
        setLcLpPb(lc: number, lp: number, pb: number): boolean;
        init: VoidFunction
        decode(inStream: Stream, outStream: Stream, outSize: number): boolean;
        setDecoderProperties(properties: object): boolean;

    }

    export function decompress(properties: object, inStream: Stream, outStream: Stream, outSize: number): boolean;
    export function decompressFile(inStream: Stream, outStream: Stream): boolean;

}

declare module SEA3D.File {

    export function LZMAUncompress(data: ArrayBuffer): Uint8Array;

}
