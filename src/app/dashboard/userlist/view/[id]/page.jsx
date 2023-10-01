"use client";
import React, { useEffect, useState } from 'react';

const page = ({params}) => {
    const [viewData, setViewData] = useState({});
    useEffect(() => {
        fetch(`https://asadtelecom.onrender.com/detaCollection/${params.id}`)
          .then((res) => res.json())
          .then((data) => setViewData(data));
      }, []);
    return (
        <div>
            <h1>Personal User{viewData.name}</h1>
        </div>
    );
};

export default page;