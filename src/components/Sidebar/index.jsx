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
        url: "/"
    },
    {
        icon: <ReceiptLongRoundedIcon />,
        text: "History",
        url: "/history"
    },
    {
        icon: <AssessmentRoundedIcon />,
        text: "Statistic",
        url: "/statistic"
    },
    {
        icon: <SavingsRoundedIcon />,
        text: "Target",
        url: "/target"
    },
    {
        icon: <AccountCircleRoundedIcon />,
        text: "Profile",
        url: "/profile"
    }
];


function Sidebar() {
    return (
        <div className="flex flex-col bg-white shadow-lg h-screen">
            <div className="flex flex-row justify-around gap-2 m-5">
                <img className="rounded-full w-12 h-12" src={avatar} alt="User"></img>
                <div className="flex flex-col">
                    <p className="font-bold">Polina</p>
                    <p className="text-xs">test@gmail.com</p>
                </div>
            </div>
            <nav className="h-full mb-24">
                <ul className="list-none flex flex-col h-screen">
                    {
                        dataArray.map((data) =>
                            <li className="hover:bg-gray-200 h-20 flex flex-row items-center gap-1 pl-4">
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