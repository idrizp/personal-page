import { useEffect, useState } from "react";

export interface FrequencyComputerProps {
    onFrequenciesUpdated(frequencies: { real: number, imaginary: number }[]): void;
}

const FrequencyComputer = ({ onFrequenciesUpdated }: FrequencyComputerProps) => {
    const [max, setMax] = useState<number>(10);
    const [realCoefficients, setRealCoefficients] = useState<string>("1");
    const [imaginaryCoefficients, setImaginaryCoefficients] = useState<string>("0");
    const [frequencies, setFrequencies] = useState<{ real: number, imaginary: number }[]>([{ real: 0, imaginary: 0 }]);

    useEffect(() => {
        try {
            // Evaluation context
            const pi = Math.PI;
            const e = Math.E;
            const sin = Math.sin;
            const cos = Math.cos;
            const tan = Math.tan;
            const sqrt = Math.sqrt;

            const evaluatedRealCoefficients = eval(`(n) => ${realCoefficients}`);
            const evaluatedImaginaryCoefficients = eval(`(n) => ${imaginaryCoefficients}`);
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
            <div className="flex flex-col gap-y-2 max-w-lg m-2">
                <p>Number of sinusoids:</p>
                <input type="number" onChange={(e) => setMax(Number(e.currentTarget.value))} className="bg-stone-800 rounded-md px-2 py-2 text-white placeholder:text-white/50" placeholder="10" />
                <p>Real coefficient formula:</p>
                <input type="text" className="bg-stone-800 rounded-md px-2 py-2 text-white placeholder:text-white/50" placeholder="1" onChange={(e) => setRealCoefficients(e.currentTarget.value)} />
                <p>Imaginary coefficient formula:</p>
                <input type="text" className="bg-stone-800 rounded-md px-2 py-2 text-white placeholder:text-white/50" placeholder="0" onChange={(e) => setImaginaryCoefficients(e.currentTarget.value)} />
            </div>
        </div>
    )
}
export default FrequencyComputer