import { useContext } from "react";

import { MyContext } from "../../context/MyContext"

import SpaceDashboardRoundedIcon from "@mui/icons-material/SpaceDashboardRounded";
import ReceiptLongRoundedIcon from "@mui/icons-material/ReceiptLongRounded"
import AssessmentRoundedIcon from "@mui/icons-material/AssessmentRounded";
import SavingsRoundedIcon from "@mui/icons-material/SavingsRounded";
import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";

import avatar from "../../assets/img/avatar.png"

const dataArray = [
    {
        icon: <SpaceDashboardRoundedIcon />,
        text: "Dashboard",
        url: "/",
        id: 1
    },
    {
        icon: <ReceiptLongRoundedIcon />,
        text: "History",
        url: "/history",
        id: 2
    },
    {
        icon: <AssessmentRoundedIcon />,
        text: "Statistic",
        url: "/statistic",
        id: 3
    },
    {
        icon: <SavingsRoundedIcon />,
        text: "Target",
        url: "/target",
        id: 4
    },
    {
        icon: <AccountCircleRoundedIcon />,
        text: "Profile",
        url: "/profile",
        id: 5
    }
];


function Sidebar() {
    const { state } = useContext(MyContext);

    return (
        <div className="flex flex-col bg-white shadow-lg">
            <div className="flex flex-row justify-around gap-2 m-5">
                <img className="rounded-full w-12 h-12" src={avatar} alt="User"></img>
                <div className="flex flex-col">
                    <p className="font-bold">{state.userData?.name}</p>
                    <p className="text-xs">{state.userData?.email}</p>
                </div>
            </div>
            <nav>
                <ul className="list-none flex flex-col">
                    {
                        dataArray.map((data) =>
                            <li key={data.id} className="hover:bg-gray-200 h-20 flex flex-row items-center gap-1 pl-4">
                                {data.icon}
                                <a href={data.url}>{data.text}</a>
                            </li>
                        )
                    }

                </ul>
            </nav>
        </div>
    )
}

export default Sidebar