import { Input } from "@mui/material";
import React from "react";

function Watchlist() {
  return (
    <>


     <div className="flex justify-center flex-wrap m-4">
         <div className="flex justify-center items-center bg-blue-400 h-[3rem] w-[9rem] rounded-xl text-white font-bold mx-4"> Action</div>
         <div className="flex justify-center items-center bg-gray-400/60 h-[3rem] w-[9rem] rounded-xl text-white font-bold mx-4"> Action</div>
         <div className="flex justify-center items-center bg-gray-400/60 h-[3rem] w-[9rem] rounded-xl text-white font-bold mx-4"> Action</div>
      </div> 

      {/* search field */}
      <div className="flex justify-center my-4">
        <input
          type="text"
          placeholder="Search Movies"
          className="h-[2rem] w-[18rem] bg-gray-200 px-4 outline-none "
        />
      </div>

      {/* table  */}
      <div className="overflow-hidden rounded-lg border border-gray-300 bg-gray-100 m-8">
        <table className="w-full text-gray-600 text-center">
          <thead className="border-b-2">
            <tr>
              <th> Name </th>
              <th> Ratings </th>
              <th> Popularity</th>
              <th> Genre </th>
            </tr>
          </thead>

          <tbody>
            <tr className="border-b-2">
              <td className="flex items-center px-6 py-4">
                <img
                  className="h-[6rem] w-[10rem]"
                  src={`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSh3Zc8nSze5S8vtzX49maUGoedcdli-2aj-Q&s`}
                />
                <div className="mx-10"> <b> The Matrix </b> </div>
              </td>
              <td>
                  8.5
              </td>
              <td> 
                  9
              </td>
              <td> 
                Action
              </td>
              <td className="text-red-800 "> 
                Delete
              </td>
            </tr>
            <tr className="border-b-2">
              <td className="flex items-center px-6 py-4">
                <img
                  className="h-[6rem] w-[10rem]"
                  src={`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSh3Zc8nSze5S8vtzX49maUGoedcdli-2aj-Q&s`}
                />
                <div className="mx-10"> <b> The Matrix </b> </div>
              </td>
              <td>
                  8.5
              </td>
              <td> 
                  9
              </td>
              <td> 
                Action
              </td>
              <td className="text-red-800 "> 
                Delete
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Watchlist;
