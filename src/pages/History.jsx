import { useEffect, useState } from "react"
import Sidebar from "../components/Sidebar"
import Table from "../components/Table"


const columns = [
    { field: "name", headerName: "Name", width: 150 },
    { field: "category", headerName: "Category", width: 150 },
    {
        field: "date_added",
        headerName: "Date",
        width: 150,
        editable: true,
    },
    {
        field: "sum",
        headerName: "Amount",
        width: 150,
        editable: true,
    }
];

function History() {
    const [data, setData] = useState()
    const [loading, setLoading] = useState()
    const [error, setError] = useState()
    
    useEffect(() => {
        console.log('useEffect');
        fetch('http://localhost:8000/api/finances/finance/1')
          .then(response => {
            console.log(response);
            if (!response.ok) {
              throw new Error('Network response was not ok');
            }
            return response.json();
          })
          .then(data => {
            console.log(data, 'data2');
            setData(data.finances);
            setLoading(false);
          })
          .catch(error => {
            console.error(error);
            setError(error);
            setLoading(false);
          });
      }, []); // Empty dependency array to run only once on component mount
    
      if (loading) {
        return <p>Loading...</p>;
      }
    
      if (error) {
        return <p>Error: {error.message}</p>;
      }

    return (
        <div className="flex flex-row bg-gray-100">
            <Sidebar />
            <div className="flex flex-col">
                <div className="flex flex-row">
                    <button>Expenses</button>
                    <button>Incomes</button>
                </div>
                <Table columns={columns} rows={data} />

            </div>
        </div>
    )
}

export default History