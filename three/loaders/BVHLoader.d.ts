/// <reference path="../three.d.ts" />

declare module THREE {

    export class BVHLoader {

        constructor(manager: LoadingManager);

        manager: LoadingManager;
        animateBonePositions: boolean;
        animateBoneRotations: boolean;

        ["constructor"]: typeof BVHLoader;

        load: __internal.Loader.Loader2<{

            skeleton: Skeleton,
            clip: AnimationClip

        }>;
        parse(text: string): {

            skeleton: Skeleton,
            clip: AnimationClip

        }

    }

}
