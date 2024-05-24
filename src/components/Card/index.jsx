function Card({ title, sum, isBalance }) {
    return (
        <div className="flex flex-col justify-center items-center bg-white w-64 h-32 m-5">
            <p>{title}</p>
            <p>{sum} $</p>
            {!isBalance && <p>for last month</p>}
        </div>
    )
}

export default Card