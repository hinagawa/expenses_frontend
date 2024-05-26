import { useEffect, useState } from "react"

function CurrentTarget() {
    const [data, setData] = useState()
    const [error, setError] = useState(false)
    useEffect(() => {
        fetch('http://localhost:8000/api/finances/goals/1')
            .then(response => response.json())
            .then(data => setData(data.goals[0]))
            .catch(error => setError(true));
        return (() => setError(false))
    }, [])
    return (
        < div className="flex flex-col bg-white w-64 h-32 m-5 p-3 justify-start items-start rounded-lg shadow-lg" >

            <p className="font-bold">Current target</p>
            <p>{data?.name}</p>
            {error ? (<p className="pt-3">No active target</p>) : (<progress className="w-full" value={data?.current_sum} max={data?.target_sum} />)}
            {!error && <p>{data?.current_sum} / {data?.target_sum} $ </p>}
        </div >
    )
}

export default CurrentTarget