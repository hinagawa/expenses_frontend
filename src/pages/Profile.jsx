import MailIcon from '@mui/icons-material/Mail';
import EditIcon from '@mui/icons-material/Edit';

import Sidebar from "../components/Sidebar"

import avatar from "../assets/img/avatar.png"

function Profile() {
    return (
        <div className="flex flex-row">
            <Sidebar />
            <div className="flex flex-row">
                <img className="h-64 w-64 rounded-lg" src={avatar} />
                <div className="flex flex-col">
                    <p className="font-bold">Test test</p>
                    <span>
                        <MailIcon />
                        test@test.com
                    </span>
                    <span>
                        <EditIcon />
                        Edit
                    </span>
                </div>
            </div>
        </div>
    )
}

export default Profile