"use client";

import { useEffect, useRef, useState } from "react";
import SeriesView from "./fourier/SeriesView";
import FrequencyComputer from "./fourier/FrequencyComputer";

const pi = Math.PI;
const FourierSeries = () => {
    const [frequencies, setFrequencies] = useState<{ real: number, imaginary: number }[]>([{ real: 0, imaginary: 0 }]);
    return <div className="flex flex-col lg:items-center lg:justify-center">
        <div className="mt-5">
            <FrequencyComputer onFrequenciesUpdated={(freq) => setFrequencies(freq)} />
            <div className="mt-12 bg-stone-950 rounded-md p-6">
                <SeriesView w_0={pi} frequencies={frequencies} />
            </div>
        </div>
    </div>;
}
export default FourierSeries