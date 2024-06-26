import { useEffect, useState } from "react"

import DeleteIcon from '@mui/icons-material/Delete';

import Sidebar from "../components/Sidebar"
import Table from "../components/Table"


const columns = [
  { field: "name", headerName: "Name", width: 150 },
  {
    field: "category",
    width: 150,
    headerName: "Category",
  },
  {
    field: "created_at",
    headerName: "Date",
    width: 150,
    editable: true,
  },
  {
    field: "sum",
    headerName: "Amount",
    width: 150,
    editable: true,
  },
  {
    field: 'actions',
    headerName: 'Actions',
    width: 150,
    renderCell: (params) => (
      <button variant="contained" color="secondary" onClick={() => { console.log(this.id) }}>
        <DeleteIcon />
      </button>
    ),
  },
];

function History() {
  const [expenses, setExpenses] = useState()
  const [incomes, setIncomes] = useState()
  const [loading, setLoading] = useState()
  const [error, setError] = useState()
  const [isExpenses, setIsExpenses] = useState()

  useEffect(() => {
    console.log('useEffect');
    fetch('http://localhost:8000/api/finances/finances/1')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        const expenses = data?.finances?.filter(item => item.is_expenses);
        const flattenedExpenses = expenses?.map((item) => ({
          ...item,
          category: item.category.category,
        }));

        const incomes = data?.finances?.filter(item => item.is_expenses === false);
        const flattenedIncomes = incomes?.map((item) => ({
          ...item,
          category: item.category.category,
        }));
        setExpenses(flattenedExpenses);
        setIncomes(flattenedIncomes)
        setLoading(false);
      })
      .catch(error => {
        console.error(error);
        setError(error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  const handleDelete = async (id) => {
    try {
      const response = await fetch(`http://localhost:8000/api/finances/finances/${id}/`, {
        method: 'DELETE',
      });

      if (response.ok) {
        console.log('Item deleted successfully');
      } else {
        console.error('Error deleting item');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="flex flex-row bg-gray-100">
      <Sidebar />
      <div className="flex flex-col w-full h-screen">
        <div className="flex flex-row justify-start m-4 gap-4">
          <button
            className={`font-bold py-2 px-4 rounded ${isExpenses ? 'bg-blue-700 text-white' : 'bg-white'}`}
            onClick={() => setIsExpenses(true)}>Expenses</button>
          <button
            className={`font-bold py-2 px-4 rounded ${isExpenses ? 'bg-white' : 'bg-blue-700 text-white'}`}
            onClick={() => setIsExpenses(false)}>Incomes</button>
        </div>
        {!expenses || !incomes || loading ? <p>Loading...</p> : <Table columns={columns} rows={isExpenses ? expenses : incomes} />}
      </div>
    </div>
  )
}

export default History