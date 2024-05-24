function CurrentTarget({value}) {
    return(
        <div className="flex flex-col bg-white w-64 h-32 m-5 justify-center items-center">
        <p>Current target</p>
        <progress value={value} />
        </div>
    )
}

export default CurrentTarget