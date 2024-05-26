import DonutChart from '../../charts/DonutChart'

const data = [
   { value: 40 },
   { value: 60 }
];


function ExpensesDashboard() {
   return (
      <div className="bg-white flex flex-row m-5 rounded-lg shadow-lg justify-start items-center">
         <div>
            <DonutChart data={data} />
         </div>
         <div id="labelContainer">
            data
         </div>
      </div>
   )
}

export default ExpensesDashboard