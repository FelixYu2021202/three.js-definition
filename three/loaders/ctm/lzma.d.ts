/// <reference path="./ctm.d.ts" />

declare module LZMA {

    export class OutWindow {

        _windowSize: number;
        _buffer: Array<number>;
        _pos: number;
        _streamPos: number;
        _stream: CTM.Stream;

        create(windowSize: number): void;
        flush(): void;
        releaseStream(): void;
        setStream(stream: CTM.Stream): void;
        init(solid: boolean): void;
        copyBlock(distance: number, len: number): void;
        putByte(b: number): void;
        getByte(distance: number): number;

    }

    export class RangeDecoder {

        _stream: CTM.Stream;

        setStream(stream: CTM.Stream): void;
        releaseStream(): void;
        init(): void;
        decodeDirectBits(numTotalBits: number): number;
        decodeBit(probs: Array<number>, index: number): number;

    }

    export function initBitModels(probs: Array<number>, len: number): void;

    export class BitTreeDecoder {

        constructor(numBitLevels: number);

        _models: Array<number>;
        _numBitLevels: number;

        init(): void;
        decode(rangeDecoder: RangeDecoder): number;
        reverseDecode(rangeDecoder: RangeDecoder): number;

    }

    export function reverseDecode2(models: Array<number>, startIndex: number, rangeDecoder: RangeDecoder, numBitLevels: number): number;

    export class LenDecoder {

        _choice: Array<number>;
        _lowCoder: Array<BitTreeDecoder>;
        _midCoder: Array<BitTreeDecoder>;
        _highCoder: BitTreeDecoder;
        _numPosStates: number;

        create(numPosStates: number): void;
        init(): void;
        decode(rabgeDecoder: RangeDecoder, posState: number): number;

    }

    export class Decoder2 {

        _decoders: Array<number>;

        init(): void;
        decodeNormal(rangeDecoder: RangeDecoder): number;
        decodeWithMatchByte(rangeDecoder: RangeDecoder, matchByte: number): number;

    }

    export class LiteralDecoder {

        _coders: Array<Decoder2>;
        _numPrevBits: number;
        _numPosBits: number;
        _posMask: number;

        create(numPosBits: number, numPrevBits: number): void;
        init(): void;
        getDecoder(pos: number, prevByte: number): void;

    }

    export class Decoder {

        _outWindow: OutWindow;
        _rangeDecoder: RangeDecoder;
        _isMatchDecoders: Array<number>;
        _isRepDecoders: Array<number>;
        _isRepG0Decoders: Array<number>;
        _isRepG1Decoders: Array<number>
        _isRepG2Decoders: Array<number>
        _isRep0LongDecoders: Array<number>
        _posSlotDecoder: Array<BitTreeDecoder>;
        _posDecoders: Array<number>;
        _posAlignDecoder: BitTreeDecoder;
        _lenDecoder: LenDecoder;
        _repLenDecoder: LenDecoder;
        _literalDecoder: LiteralDecoder;
        _dictionarySize: number;
        _dictionarySizeCheck: number;

        setDictionarySize(dictionarySize: number): boolean;
        setLcLpPd(lc: number, lp: number, pb: number): boolean;
        init(): void;
        decode(inStream: CTM.Stream, outStream: CTM.Stream, outSize: number): boolean;
        setDecoderProperties(properties: CTM.Stream): boolean;

    }

    export function decompress(properties: CTM.Stream, inStream: CTM.Stream, outStream: CTM.Stream, outSize: number): boolean;

}