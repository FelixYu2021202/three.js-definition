declare var Stats: {

    (): {

        REVISION: number,
        dom: HTMLDivElement
    
        addPanel<T extends HTMLElement>(pannel: {dom: T}): {dom: T},
        showPanel(id: number): void,
        begin(): void,
        end(): number,
        update(): void,

        domElement: HTMLDivElement,
        setMode(id: number): void
    
    }

    Panel(name: string, fg: string | CanvasGradient | CanvasPattern, bg: string | CanvasGradient | CanvasPattern): {

        dom: HTMLCanvasElement,
        update(value: number, maxValue: number): void

    }

}
