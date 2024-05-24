import Card from "../components/Card"
import Sidebar from "../components/Sidebar"
import CurrentTarget from "../components/CurrentTarget"
import ExpensesDashboard from "../components/ExpensesDashboard"

function Dashboard() {
    return (
        <div className="flex flex-row bg-gray-100">
            <Sidebar />
            <div className="flex flex-col">
                <div className="flex flex-row">
                    <Card title="Income" sum={1000} />
                    <Card title="Expenses" sum={100} />
                    <Card title="Balance" sum={34243} isBalance={true} />
                    <CurrentTarget value={0.5} />
                </div>
                <ExpensesDashboard />
            </div>
        </div>
    )

}

export default Dashboard