/// <reference path="../three.d.ts" />

declare module THREE {

    export class QuickHull {

        tolerance: number;
        faces: Array<__internal.QuickHull.classes.Face>;
        assigned: __internal.QuickHull.classes.VertexList;
        unassigned: __internal.QuickHull.classes.VertexList;
        vertices: Array<__internal.QuickHull.classes.VertexNode>;

        setFromPoints(points: Array<Vector3>): QuickHull;
        setFromObject(object: Object3D): QuickHull;
        makeEmpty(): QuickHull;
        addVertexToFace(vertex: __internal.QuickHull.classes.VertexNode, face: __internal.QuickHull.classes.Face): QuickHull;
        removeVertexFromFace(vertex: __internal.QuickHull.classes.VertexNode, face: __internal.QuickHull.classes.Face): QuickHull;
        removeAllVerticesFromFace(face: __internal.QuickHull.classes.Face): __internal.QuickHull.classes.VertexList;
        deleteFaceVertices(face: __internal.QuickHull.classes.Face, absorbingFace: __internal.QuickHull.classes.Face): QuickHull;
        resolveUnassignedPoints(newFaces: Array<__internal.QuickHull.classes.Face>): QuickHull;
        computeExtremes(): __internal.QuickHull.Extremes;
        computeInitialHull(): QuickHull;
        reindexFaces(): QuickHull;
        nextVertexToAdd(): __internal.QuickHull.classes.VertexNode;
        computeHorizon(eyePoint: Vector3, crossEdge: __internal.QuickHull.classes.HalfEdge, face: __internal.QuickHull.classes.Face, horizon: Array<__internal.QuickHull.classes.HalfEdge>): QuickHull;
        addAdjoiningFace(eyeVertex: Vector3, horizonEdge: __internal.QuickHull.classes.HalfEdge): __internal.QuickHull.classes.HalfEdge;
        addNewFaces(eyeVertex: Vector3, horizon: Array<__internal.QuickHull.classes.HalfEdge>): QuickHull;
        addVertexToHull(eyeVertex: Vector3): QuickHull;
        cleanup(): QuickHull;
        compute(): QuickHull;

    }

    module __internal {

        export module QuickHull {

            export module classes {

                export interface VertexList {
    
                    head: VertexNode,
                    tail: VertexNode,
    
                    first(): VertexNode,
                    last(): VertexNode,
                    clear(): VertexList,
                    insertBefore(target: VertexNode, vertex: VertexNode): VertexList,
                    insertAfter(target: VertexNode, vertex: VertexNode): VertexList,
                    append(vertex: VertexNode): VertexList,
                    appendChain(vertex: VertexNode): VertexNode,
                    remove(vertex: VertexNode): VertexList,
                    removeSubList(a: VertexNode, b: VertexNode): VertexList,
                    isEmpty(): boolean
    
                }
                export interface VertexNode {
    
                    point: Vector3,
                    prev: VertexNode,
                    next: VertexNode,
                    face: Face
    
                }
                export interface Face {
    
                    normal: Vector3,
                    midpoint: Vector3,
                    area: number,
                    constant: number,
                    outside: VertexList,
                    mark: number,
                    edge: HalfEdge,
    
                    getEdge(i: number): HalfEdge,
                    compute(): Face,
                    distanceToPoint(point: Vector3): number
    
                }
                export interface HalfEdge {
    
                    vertex: VertexNode,
                    prev: HalfEdge,
                    next: HalfEdge,
                    twin: HalfEdge,
                    face: Face,
    
                    head(): VertexNode,
                    tail(): VertexNode,
                    length(): number,
                    lengthSquared(): number,
                    setTwin(edge: HalfEdge): HalfEdge
    
                }

            }

            export interface Extremes {

                min: Array<classes.VertexNode>,
                max: Array<classes.VertexNode>

            }

        }

    }

}
