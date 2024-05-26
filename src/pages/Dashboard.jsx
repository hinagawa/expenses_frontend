import { useEffect, useState } from "react"

import Card from "../components/Card"
import Sidebar from "../components/Sidebar"
import CurrentTarget from "../components/CurrentTarget"
import ExpensesDashboard from "../components/ExpensesDashboard"

function Dashboard() {
    const [data, setData] = useState()
    const [expenses, setExpenses] = useState()
    const [incomes, setIncomes] = useState()

    useEffect(() => {
        fetch("http://localhost:8000/api/finances/finance/1")
            .then(response => response.json())
            .then(data => setData(data.finances))
            .catch(error => console.error(error));
    }, [])

    useEffect(() => {
        const expenses = data?.filter(item => item.is_expenses);
        const incomes = data?.filter(item => item.is_expenses === false);

        const totalExpenses = expenses?.reduce((accumulator, current) => {
            const amount = parseInt(current.sum, 10);
            return accumulator + amount;
        }, 0);

        const totalIncomes = incomes?.reduce((accumulator, current) => {
            const amount = parseInt(current.sum, 10);
            return accumulator + amount;
        }, 0);

        setExpenses(totalExpenses);
        setIncomes(totalIncomes);
    }, [data]);

    const getBalance = () => {
        const balance = incomes - expenses
        return balance <= 0 ? 0 : balance
    }

    return (
        <div className="flex flex-row bg-gray-100">
            <Sidebar />
            <div className="flex flex-col">
                <div className="flex flex-row">
                    <Card title="Income" sum={incomes} />
                    <Card title="Expense" sum={expenses} />
                    <Card title="Balance" sum={getBalance()} isBalance={true} />
                    <CurrentTarget />
                </div>
                <ExpensesDashboard />
            </div>
        </div>
    )

}

export default Dashboard