const Module = () => {
  return (
    <>
      <div>
        <div className="bg-gradient-to-b from-blue-700 to-transparent p-2 shadow-md shadow-slate-500">
          <span className="font-bold">MERN STACK</span>
          <div className="flex justify-between">
            <span>remaining fees ($0)</span>
            <span>Your Progress</span>
          </div>
          <div className="w-full h-4 border rounded-md border-slate-100">
            <div className="w-2/4 h-full bg-green-500 border-0 rounded-md "></div>
          </div>
          <div className="flex flex-col gap-4">
            <span>50% Completed</span>
            <span className="font-bold">Registered on: 5 Feb,2024</span>
          </div>
        </div>
        <div className="flex flex-wrap p-4">
          <div className="flex flex-col gap-4 shadow-md shadow-blue-700 p-2">
            <div className="flex gap-4 col font-bold">
              <span>12pm/MERN/NITIN/5-FEB</span>
              <span>Attendance</span>
              <span>96%</span>
            </div>
            <span className="font-medium">Current Batch</span>
            <span>Course:MERN STACK</span>
            <span>Trainer:Nitin Bale</span>
            <span className="border-b-2 border-dashed border-slate-500">
              Duration:jan - Aug
            </span>
            <span>Timming : 12:00pm - 2:00pm</span>
          </div>
        </div>
      </div>
    </>
  );
};
export default Module;
