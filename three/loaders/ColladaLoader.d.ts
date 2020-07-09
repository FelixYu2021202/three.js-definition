/// <reference path="../three.d.ts" />

declare module THREE {

    export class ColladaLoader {

        constructor(manager: LoadingManager);

        manager: LoadingManager;

        ["constructor"]: typeof ColladaLoader;

        crossOrigin: string;
        path: string;

        load: __internal.Loader.Loader2<__internal.ColladaLoader.R>;
        setPath(value: string): void;

        options: {

            convertUpAxis: any;

        }

        setCrossOrigin(value: string): void;
        parse(text: string, path: string): __internal.ColladaLoader.R;

    }

    module __internal.ColladaLoader {

        export interface R {

            animations: Array<AnimationClip>,
            kinematics: {

                joints: object,

                getJointValue(jointIndex: number): number,
                setJointValue(jointIndex: number, value: number): void

            },
            library: {

                animations: {

                    [id: string]: {

                        sources: {

                            [id: string]: {

                                array: Array<number | string>,
                                stride: number

                            }

                        },
                        samplers: {

                            inputs: {

                                [semantic: string]: string

                            }

                        },
                        channels: {

                            member: string,
                            indices: Array<number>,
                            id: string,
                            sid: string,
                            arraySyntax: boolean,
                            memverSyntax: boolean,
                            sampler: string

                        }

                    }

                },
                clips: {

                    [id: string]: {

                        name: string,
                        start: number,
                        end: number,
                        animations: Array<string>

                    }

                },
                controllers: {

                    [id: string]: {

                        id: string,
                        skin: {

                            bindShapeMatrix: Array<number>,
                            sources: {

                                [id: string]: {

                                    array: Array<number | string>,
                                    stride: number

                                }

                            },
                            joints: {

                                inputs: {

                                    [semantic: string]: string

                                }

                            },
                            vertexWeights: {

                                inputs: {

                                    [semantic: string]: {

                                        id: string,
                                        offset: number

                                    }

                                },
                                vcount: Array<number>,
                                v: Array<number>

                            }

                        }

                    }

                },
                images: {

                    [id: string]: {

                        init_from: string

                    }

                },
                effects: {

                    [id: string]: {

                        profile: {

                            surfaces: {

                                [sid: string]: {

                                    init_from: string

                                }

                            },
                            samplers: {

                                [sid: string]: {

                                    source: string

                                }

                            },
                            technique: {

                                type: string,
                                parameters: {

                                    [name: string]: {

                                        [name: string]: Array<number> | number | {

                                            id: string,
                                            extra: {

                                                technique: {

                                                    [name: string]: number

                                                }

                                            }

                                        }

                                    } | {

                                        opaque: string,
                                        data: {

                                            [name: string]: Array<number> | number | {
    
                                                id: string,
                                                extra: {
    
                                                    technique: {
    
                                                        [name: string]: number
    
                                                    }
    
                                                }
    
                                            }
    
                                        }

                                    }

                                }

                            },
                            extra: {

                                technique: {

                                    [name: string]: number

                                }

                            }

                        }

                    }

                },
                materials: {

                    [id: string]: {

                        name: string,
                        url: string

                    }

                },
                cameras: {

                    [id: string]: {

                        name: string,
                        optics: {

                            technique: string,
                            parameters: {

                                [name: string]: number

                            }

                        }

                    }

                },
                lights: {

                    [id: string]: {

                        technique: string,
                        parameters: {

                            color: Color,
                            falloffAngle: number,
                            distance: number

                        }

                    }

                },
                geometries: {

                    [id: string]: {

                        name: string,
                        sources: {

                            array: Array<number | string>,
                            stride: number

                        },
                        vertices: {

                            [semantic: string]: string

                        },
                        primitives: Array<{

                            type: string,
                            material: string,
                            count: number,
                            inputs: {

                                [semantic: string]: {

                                    id: string,
                                    offset: number

                                }

                            },
                            stride: number,
                            hasUV: boolean,
                            vcount: Array<number>,
                            p: Array<number>

                        }>

                    }

                },
                nodes: {

                    [id: string]: {

                        name: string,
                        type: string,
                        id: string,
                        sid: string,
                        matrix: Matrix4,
                        nodes: Array<string>,
                        instanceCameras: Array<string>,
                        instanceControllers: Array<{

                            id: string,
                            materials: {

                                [symbol: string]: string

                            },
                            skeletons: Array<string>

                        }>,
                        instanceLights: Array<string>,
                        instanceGeometries: Array<{

                            id: string,
                            materials: {

                                [symbol: string]: string

                            },
                            skeletons: Array<string>

                        }>,
                        instanceNodes: Array<string>,
                        transforms: object

                    }

                },
                visualScenes: {

                    [id: string]: {

                        name: string,
                        children: Array<R["library"]["nodes"]>

                    }

                },
                kinematicsModels: {

                    [id: string]: {

                        name: string,
                        joints: {

                            [sid: string]: {

                                sid: string,
                                name: string,
                                axis: Vector3,
                                limits: {

                                    min: number,
                                    max: number

                                },
                                type: string,
                                static: boolean,
                                zeroPosition: number,
                                middlePosition: number

                            }

                        },
                        links: Array<{

                            sid: string,
                            name: string,
                            attachments: Array<{

                                joint: string,
                                transforms: Array<{

                                    type: string,
                                    obj: Matrix4,
                                    angle: number

                                }>,
                                links: R["library"]["kinematicsModels"][""]["links"]

                            }>,
                            transforms: Array<any>

                        }>

                    }

                },
                kinematicsScenes: {

                    [id: string]: {

                        bindJointAxis: Array<{

                            target: string,
                            axis: string,
                            jointIndex: string

                        }>

                    }

                }

            },
            scene: Group

        }

    }

}
