/// <reference path="../three.d.ts" />

declare module THREE {

    export module UniformsLib {
        
        export var LTC_MAT_TEXTURE: DataTexture;
        export var LTC_MAG_TEXTURE: DataTexture;
        
    }

    export module ShaderLib {

        export var standard: __internal.Shader.shader & {
            ltcMat: __internal.Others.DescriptionMap<DataTexture>;
        }
        export var physical: __internal.Shader.shader & {
            ltcMat: __internal.Others.DescriptionMap<DataTexture>;
        }

    }

}
