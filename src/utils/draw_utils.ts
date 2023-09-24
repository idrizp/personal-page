// Drawing utils taken from http://www.javascripter.net/faq/plotafunctiongraph.htm

export function clearCanvas(canvas: HTMLCanvasElement) {
    if (canvas === null || !canvas.getContext) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) {
        return;
    }
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}

export function draw(canvas: HTMLCanvasElement, pixels: number, f: (x: number) => number, color: string = "rgb(66,44,255)") {
    if (canvas === null || !canvas.getContext) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) {
        return;
    }
    const axes: { x0: number, y0: number, scale: number, doNegativeX: boolean } = {
        x0: 0.5 + 0.5 * canvas.width,  // x0 pixels from left to x=0
        y0: 0.5 + 0.5 * canvas.height, // y0 pixels from top to y=0
        scale: pixels,                     // 40 pixels from x=0 to x=1
        doNegativeX: true
    };
    showAxes(ctx, axes);
    funGraph(ctx, axes, f, color, 2);
}

function funGraph(ctx: CanvasRenderingContext2D, axes: { x0: number, y0: number, scale: number, doNegativeX: boolean }, func: (x: number) => number, color: string, thick: number) {
    let xx: number, yy: number, dx: number = 4, x0: number = axes.x0, y0: number = axes.y0, scale: number = axes.scale;
    let iMax: number = Math.round((ctx.canvas.width - x0) / dx);
    let iMin: number = axes.doNegativeX ? Math.round(-x0 / dx) : 0;
    ctx.beginPath();
    ctx.lineWidth = thick;
    ctx.strokeStyle = color;

    for (let i: number = iMin; i <= iMax; i++) {
        xx = dx * i;
        yy = scale * func(xx / scale);
        if (i === iMin) ctx.moveTo(x0 + xx, y0 - yy);
        else ctx.lineTo(x0 + xx, y0 - yy);
    }
    ctx.stroke();
}

function showAxes(ctx: CanvasRenderingContext2D, axes: { x0: number, y0: number, scale: number, doNegativeX: boolean }) {
    const x0: number = axes.x0, w: number = ctx.canvas.width;
    const y0: number = axes.y0, h: number = ctx.canvas.height;
    const xmin: number = axes.doNegativeX ? 0 : x0;
    ctx.beginPath();
    ctx.strokeStyle = "rgb(128,128,128)";
    ctx.moveTo(xmin, y0);
    ctx.lineTo(w, y0);  // X axis
    ctx.moveTo(x0, 0);
    ctx.lineTo(x0, h);  // Y axis
    ctx.stroke();
}
