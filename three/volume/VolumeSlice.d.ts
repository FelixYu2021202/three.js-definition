/// <reference path="../three.d.ts" />
/// <reference path="./Volume.d.ts" />


declare module THREE {

    export class VolumeSlice {

        constructor(volume: Volume, index: number, axis: 'x' | 'y' | 'z');

        volume: Volume;
        get index(): number;
        set index(value: number);
        axis: 'x' | 'y' | 'z';
        canvas: HTMLCanvasElement;
        canvasBuffer: HTMLCanvasElement;
        mesh: Mesh;
        geometryNeedsUpdate: boolean;

        ["constructor"]: typeof VolumeSlice;

        repaint(): void;
        updateGeometry(): void;

    }

}
