/// <reference path="../three.d.ts" />

declare module THREE {

    export class ConvexGeometry extends Geometry {

        constructor(points: Array<Vector3>);

        ["constructor"]: typeof Geometry & typeof ConvexGeometry;

    }

    export class ConvexBufferGeometry extends BufferGeometry {

        constructor(points: Array<Vector3>);

        ["constructor"]: typeof BufferGeometry & typeof ConvexBufferGeometry;

    }

}
