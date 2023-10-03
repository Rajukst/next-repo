"use client"
import React, { useEffect, useRef, useState } from 'react';
import toast from 'react-hot-toast';
import PayTable from './PayTable';

const page = ({params}) => {
    const addPayment = useRef();
    const [calculation, setCalculation] = useState({});
    const [load, setLoad] = useState(false);
    const { name, mobileNumber } = calculation;
    // const {user}= useAuth();
    console.log(calculation?.installmentType === "monthly");
    // const collectiorName= user.displayName;
    useEffect(() => {
      const url = `https://nishad-telecom-backend-dbuser.up.railway.app/calculation/${params.id}`;
      fetch(url)
        .then((res) => res.json())
        .then((data) => setCalculation(data));
    }, []);
  // API DONE
  
    /////////////////
    const lastPaymentDate = () => {
      if(calculation?.installmentType === "weekly"){
        fetch(`https://nishad-telecom-backend-dbuser.up.railway.app/paymentData/${params.id}`, {
          method: "PUT",
          headers: {
            "content-type": "application/json",
          },
        })
          .then((res) => res.json())
          .then((data) => {
            //    console.log(data)
            if (data.acknowledged) {
              toast.success("Payment successfull");
            }
          });
      }
      else if(calculation?.installmentType === "monthly") {
        fetch(`https://nishad-telecom-backend-dbuser.up.railway.app/monthlypaymentData/${params.id}`, {
          method: "PUT",
          headers: {
            "content-type": "application/json",
          },
        })
          .then((res) => res.json())
          .then((data) => {
            //    console.log(data)
            if (data.acknowledged) {
              toast.success("Payment successfull");
            }
          });

      }
   
    };
  
    ///////////////////////
  
    const date = new Date().toDateString();
    const payStatus = "paid";
    const paySubmit = (e) => {
      e.preventDefault();
      const payment = addPayment.current.value;
      const PaymentInfo = {
        payment,
        date,
        id,
        name,
        payStatus,
        mobileNumber,
        // collectiorName,
      };
      fetch("https://nishad-telecom-backend-dbuser.up.railway.app/payment", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(PaymentInfo),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.insertedId) {
            lastPaymentDate();
            e.target.reset();
            setLoad(!load);
          }
          console.log(data);
        });
    };
    return (
        <PayTable
        calculation={calculation}
        load={load}
        addPayment={addPayment}
        paySubmit={paySubmit}
      />
    );
};

export default page;