declare var Stats: {

    (): {

        REVISION: number,
        dom: HTMLDivElement
    
        addPanel<T extends HTMLElement>(pannel: {dom: T}): {dom: T},
        showPanel(id: number): void,
        begin: VoidFunction,
        end(): number,
        update: VoidFunction,

        domElement: HTMLDivElement,
        setMode(id: number): void
    
    }

    Panel(name: string, fg: string | CanvasGradient | CanvasPattern, bg: string | CanvasGradient | CanvasPattern): {

        dom: HTMLCanvasElement,
        update(value: number, maxValue: number): void

    }

}
