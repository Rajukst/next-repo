"use client"
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import UserRenderData from './UserRenderData';
import { useQuery } from 'react-query';
const UserList = () => {
    // const [user, setUser] = useState([]);
    const [search, setSearch] = useState("");

    const url = `https://asadtelecom.onrender.com/detaCollection`;

  const {
    data: user = [],
    isLoading,
  } = useQuery({
    queryKey: ["detaCollection", ],
    queryFn: async () => {
      const res = await fetch(url);
      const data = await res.json();
      return data;
    },
  });




    // useEffect(() => {
    //   async function fetchData() {
    //     try {
    //       const response = await fetch(url);
    //       if (!response.ok) {
    //         throw new Error('Network response was not ok');
    //       }
  
    //       const data = await response.json();
    //       setUser(data);
    //     } catch (error) {
    //       console.error('An error occurred:', error);
    //       // Handle the error or set some state to indicate the error to the user
    //     }
    //   }
  
    //   fetchData();
    // }, []);

    return (
<>
        {/* <div className="serarchUser">
        <div className="serarchInp">
        <div className="dataSearch">
    <h5 className="pt-1 pe-3">Search User:</h5>
    <input
      className="searchInp"
      type="text"
      name=""
      id=""
      onChange={(e) => setSearch(e.target.value)}
      placeholder="Search User"
    />
  </div>
        </div>
        </div>
         */}
        <table>
        <thead>
          <tr>
            <th>SL No</th>
            <th>Name</th>
            <th>Father's Name</th>
            <th>Address</th>
            <th>Phone Number</th>
            <th>Actions</th>
          </tr>
        </thead>
        {user
          .filter((item) => {
            return search.toLowerCase() === ""
              ? item
              : item?.name?.toLowerCase().includes(search);
          })
          ?.map((singleData, index) => (
            <UserRenderData
              key={singleData._id}
              userData={singleData}
              index={index}
            ></UserRenderData>
          ))}
      </table>
        </>
    );
};

export default UserList;