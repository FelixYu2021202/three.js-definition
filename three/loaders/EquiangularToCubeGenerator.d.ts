/// <reference path="../three.d.ts" />

declare module THREE {

    export class EquiangularToCubeGenerator {

        constructor(sourceTexture: Texture, resolution: number);

        sourceTexture: Texture;
        resolution: number;
        views: Array<{

            t: Array<number>,
            u: Array<number>

        }>;
        camera: PerspectiveCamera;
        boxMesh: Mesh;
        scene: Scene;
        renderTarget: WebGLRenderTargetCube;

        ["constructor"]: typeof EquiangularToCubeGenerator;

        update(renderer: WebGLRenderer): Texture;
        getShader(): ShaderMaterial;
        dispose: VoidFunction;

    }

}
