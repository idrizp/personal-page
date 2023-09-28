import { useEffect, useState } from "react";

export interface FrequencyComputerProps {
    onFrequenciesUpdated(frequencies: { real: number, imaginary: number }[]): void;
}
// Evaluation context definitions
const pi = Math.PI;
const e = Math.E;
const sin = Math.sin;
const cos = Math.cos;
const tan = Math.tan;
const sqrt = Math.sqrt;
const pow = Math.pow;
const abs = Math.abs;
const ln = Math.log;
const log = Math.log10;
// End evaluation context definitions

const FrequencyComputer = ({ onFrequenciesUpdated }: FrequencyComputerProps) => {
    const [max, setMax] = useState<number>(1);
    const [realCoefficients, setRealCoefficients] = useState<string>("1");
    const [imaginaryCoefficients, setImaginaryCoefficients] = useState<string>("0");
    const [frequencies, setFrequencies] = useState<{ real: number, imaginary: number }[]>([{ real: 0, imaginary: 0 }]);

    useEffect(() => {
        try {
            // Some more common replacements, we want exponentiation to be ^ instead of ** in the input.
            const realCoefficientsParsed = realCoefficients.replace("^", "**");
            const imaginaryCoefficientsParsed = imaginaryCoefficients.replace("^", "**");

            const evaluatedRealCoefficients = eval(`(n) => ${realCoefficientsParsed}`);
            const evaluatedImaginaryCoefficients = eval(`(n) => ${imaginaryCoefficientsParsed}`);
            const newFrequencies = [];
            for (let i = 0; i < max; i++) {
                newFrequencies[i] = {
                    real: evaluatedRealCoefficients(i + 1),
                    imaginary: evaluatedImaginaryCoefficients(i + 1),
                };
            }
            setFrequencies(newFrequencies);
        } catch (err) {
            console.error(err);
            if (err instanceof SyntaxError) {
                // TODO: Show error to user
                setFrequencies([{ real: 0, imaginary: 0 }]);
                return;
            }
        }
    }, [max, realCoefficients, imaginaryCoefficients]);

    useEffect(() => {
        onFrequenciesUpdated(frequencies);
    }, [frequencies]);
    return (
        <div>
            <p>Coefficients:</p>
            <small>Use n as the iteration variable. It accepts JS syntax.</small>
            <div className="flex flex-col gap-y-2 lg:max-w-lg m-2">
                <p>Number of sinusoids: {max}</p>
                <input type="range" min={1} max={100} value={max} onChange={(e) => setMax(Number(e.currentTarget.value))} className="bg-stone-800 rounded-md px-2 py-2 text-white placeholder:text-white/50" placeholder="1" />
                <p>Real coefficient formula:</p>
                <input type="text" className="bg-stone-800 rounded-md px-2 py-2 text-white placeholder:text-white/50" placeholder="1" onChange={(e) => setRealCoefficients(e.currentTarget.value)} />
                <p>Imaginary coefficient formula:</p>
                <input type="text" className="bg-stone-800 rounded-md px-2 py-2 text-white placeholder:text-white/50" placeholder="0" onChange={(e) => setImaginaryCoefficients(e.currentTarget.value)} />
            </div>
        </div>
    )
}
export default FrequencyComputer