import Container from "@/components/Container"
import FourierSeries from "@/components/tools/FourierSeries"

const Tools = () => {
    return (
        <Container screen>
            <div className="px-9 py-5 mx-9 space-y-5 mt-32">
                <p className="font-black text-6xl">Tools:</p>
                <small className="text-emerald-500 tracking-tighter italic">These are some tools I use in my studies in order to evaluate if my homework is OK.</small>
                <div className="border-2 rounded-md px-9 py-5">
                    <p className="font-black tracking-tighter text-emerald-500">Fourier Series:</p>
                    <small>A visualization of the fourier series, and all of its components.</small>
                    <details className="cursor-pointer">
                        <summary>Fourier Series</summary>
                        <FourierSeries />
                    </details>
                </div>
                <p className="text-emerald-500"><span className="font-black">Coming soon:</span> Fourier Transform visualization</p>
            </div>
        </Container>
    )
}
export default Tools