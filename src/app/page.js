"use client";
import React, { useState } from "react";
const page = () => {
  // add data in table
  const [Name, setName] = useState("");
  const [Task, setTask] = useState("");
  const [Data, setData] = useState([]);
  let h3 = "none";
  if (Data.length === 0) {
    h3 = "block";
  } else {
    h3 = "none";
  }

  // add data in table function
  function addData(e) {
    e.preventDefault();
    setData([...Data, { name: Name, task: Task }]);
    setName("");
    setTask("");
  }
  // delData  in table function
  var dataTable = Data.map(function (item, index) {
    return (
      <tr
        key={index}
        className="bg-white border-b dark:bg-gray-900 dark:border-gray-700"
      >
        <th
          scope="row"
          className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
        >
          {index + 1}
        </th>
        <td className="px-6 py-4">{item.name}</td>
        <td className="px-6 py-4">{item.task}</td>
        <td className="px-6">
          <button
            className="bg-red-700 text-white px-3 py-2 rounded-lg"
            onClick={() => delVal(index)}
          >
            Delete
          </button>
        </td>
      </tr>
    );
  });

  function delVal(index) {
    const updatedData = Data.filter((_, i) => i !== index);
    setData(updatedData);
  }

  return (
    <div>
      <form
        className="w-1/3 bg-white mx-auto mt-3 p-6 shadow-2xl rounded-2xl"
        onSubmit={addData}
      >
        <div className="mb-6">
          <label
            htmlFor="Name"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Your Name
          </label>
          <input
            type="text"
            id="Name"
            className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Enter the Name"
            value={Name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="Task"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Your Task
          </label>
          <input
            type="text"
            id="Task"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Enter the Task"
            value={Task}
            onChange={(e) => setTask(e.target.value)}
            required
          />
        </div>

        <button
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full  px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 block"
        >
          Add
        </button>
      </form>

      <div className="relative overflow-x-auto sm:rounded-lg w-1/2 bg-white mx-auto mt-3 shadow-2xl rounded-2xl">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Id
              </th>
              <th scope="col" className="px-6 py-3">
                Names
              </th>
              <th scope="col" className="px-6 py-3">
                Task
              </th>
              <th scope="col" className="px-6 py-3">
                Action
              </th>
            </tr>
          </thead>

          <tbody>
            {dataTable}
            {/* {Data.length === 0 && <h3>Data is Empty.... Add Some Data</h3>} */}
            <h3
              style={{ display: h3 }}
              className="text-center p-4 text-xl w-full"
            >
              Data is Empty.... Add Some Data
            </h3>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default page;
