import { useContext } from 'react';

import AddCircleIcon from '@mui/icons-material/AddCircle';
import EditIcon from '@mui/icons-material/Edit';

import { MyContext } from "../../context/MyContext"

function Card({ title, sum, isBalance }) {
    const { state } = useContext(MyContext);

    return (
        <div className="flex flex-col justify-start items-start bg-white w-64 h-32 m-5 p-3 rounded-lg shadow-lg">
            <div className="flex flex-row justify-between w-full">
                <p className="font-bold">{title}</p>
                <button>
                    {isBalance ? <EditIcon /> : <AddCircleIcon />}
                </button>
            </div>
            <p className="text-3xl font-medium pt-1"> {state.userData?.currency.currency_abbr} {sum}</p>
            {!isBalance && <p className="text-sm pt-3">for last month</p>}
        </div>
    )
}

export default Card