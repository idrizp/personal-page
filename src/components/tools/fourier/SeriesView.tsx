import { useEffect, useRef } from "react";
import { draw, clearCanvas } from "@/utils/draw_utils";

export interface SeriesViewProps {
    w_0: number;
    frequencies: {
        real: number;
        imaginary: number;
    }[];
}

function fourier(x: number, { frequencies, w_0 }: SeriesViewProps) {
    let y = 0;
    for (let i = 0; i < frequencies.length; i++) {
        const { real, imaginary } = frequencies[i];
        y += ((real * Math.cos(w_0 * (i + 1) * x)) + (imaginary * Math.sin(w_0 * (i + 1) * x)));
    }
    return y;
}

const FrequencyView = ({ real, imaginary, w_0, i }: { real: number, imaginary: number, i: number, w_0: number }) => {
    const ref = useRef(null);
    useEffect(() => {
        if (!ref || !ref.current) {
            return;
        }
        const canvas = ref.current as HTMLCanvasElement;

        clearCanvas(canvas);
        draw(canvas, 100, x => real * Math.cos((i + 1) * w_0 * x), "rgba(255, 0, 0, 0.25)")
        draw(canvas, 100, x => imaginary * Math.sin((i + 1) * w_0 * x), "rgba(0, 255, 0, 0.25)")

    }, [ref, real, imaginary]);
    return <canvas className="scale-75" ref={ref} width={1024} height={400} />
}

export default function SeriesView(props: SeriesViewProps) {
    const ref = useRef(null);
    useEffect(() => {
        if (!ref || !ref.current) {
            return;
        }
        const canvas = ref.current as HTMLCanvasElement;

        clearCanvas(canvas);
        draw(canvas, 100, (x) => fourier(x, props), "white");

    }, [ref, props]);
    return <div>
        <canvas width={1024} height={400} ref={ref} />
        <p className="text-center font-black my-10 text-xl">Components:</p>
        <div className="max-h-96 overflow-y-scroll">
            {props.frequencies.map((frequency, i) =>
                i < 20 ? <FrequencyView key={Math.random() * 100 * i} real={frequency.real} imaginary={frequency.imaginary} i={i} w_0={props.w_0} /> : null
            )}
            {props.frequencies.length > 20 && <p className="text-emerald-500">Truncated beyond 20 sinusoids.</p>}
        </div>
    </div>
}