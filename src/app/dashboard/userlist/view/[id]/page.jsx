"use client";
import { PDFDownloadLink } from '@react-pdf/renderer';
import React, { useEffect, useState } from 'react';
import PdfData from './PdfData';

const page = ({params}) => {
    const [viewData, setViewData] = useState({});
    useEffect(() => {
        const url = `https://nishad-telecom-backend-dbuser.up.railway.app/detaCollection/${params.id}`;
        fetch(url)
          .then((res) => res.json())
          .then((data) => setViewData(data));
      }, []);
      const salePrice =
      parseInt(viewData?.purchasePrice) +
      parseInt(viewData?.purchasePrice) *
        (parseInt(viewData?.interestRate) / 100);
    // days calculations
    const startDateInMilliseconds = new Date(viewData?.purchaseDate).getTime();
    const endDateInMilliseconds = new Date(viewData?.lastDateOfPayment).getTime();
    const timeDifferenceInMilliseconds =
      endDateInMilliseconds - startDateInMilliseconds;
    //getting day
    const daysBetweenDates = Math.ceil(
      timeDifferenceInMilliseconds / (1000 * 60 * 60 * 24)
    );
    
    console.log(daysBetweenDates); // consoling the actual days
    const week = parseInt(daysBetweenDates / 7);
    console.log("Total", week, "week");
  
    const month = parseInt(daysBetweenDates / 30);
    console.log("Total Month", month, "month");
  
    const installmentPerMonth = parseInt(salePrice / month);
    console.log(installmentPerMonth);
    const installmentPerWeek = parseInt(salePrice / week);
    console.log(installmentPerWeek);
  console.log(viewData?.image)
    return (
        <>
        <h4 className="userClass">গ্রাহক ফর্ম:</h4>
        <div className="photos">
          <img className="img-fluid" style={{height: 150, width: 150}} src={viewData?.image} alt="photos-data" />
        </div>
        <div className="viewNameDiv">
          <div className="">
            <p>1. নাম: </p>
          </div>
          <div className="myName ps-3">
            <p>{viewData?.name}</p>
          </div>
        </div>
        <div className="viewNameDiv">
          <div className="">
            <p>2. পিতার নাম: </p>
          </div>
          <div className="myName ps-3">
            <p>{viewData?.fathersName}</p>
          </div>
        </div>
        <div className="viewNameDiv">
          <div className="">
            <p>3. মাতার নাম: </p>
          </div>
          <div className="myName ps-3">
            <p>{viewData?.mothersName}</p>
          </div>
        </div>
        <div className="viewNameDiv">
          <div className="">
            <p>4. বর্তমান ঠিকানা: </p>
          </div>
          <div className="myName ps-3">
            <p>{viewData?.presentAddress}</p>
          </div>
        </div>
        <div className="viewNameDiv">
          <div className="">
            <p>5. স্থায়ী ঠিকানা: </p>
          </div>
          <div className="myName ps-3">
            <p>{viewData?.parmanentAddress}</p>
          </div>
        </div>
        <div className="viewNameDiv">
          <div className="">
            <p>6. মোবাইল নম্বর: </p>
          </div>
          <div className="myName ps-3">
            <p>{viewData?.mobileNumber}</p>
          </div>
        </div>
        <div className="viewNameDivGrid">
          <div className="FlexProfess">
            <p className="">6. পেশা: </p>
            <p className="doottedLine ps-3">{viewData?.profession}</p>
          </div>
          <div className="FlexProfess">
            <p className="">7. জন্ম তারিখ: </p>
            <p className="doottedLine ps-3">{viewData?.dateOfBirth}</p>
          </div>
          <div className="FlexProfess">
            <p className="">8. বয়স: </p>
            <p className="doottedLine ps-3">{viewData?.age} বছর</p>
          </div>
        </div>
        <div className="">
          <p>9. পণ্যের বিবরণ: </p>
        </div>
        <div className="viewNameDivs">
          <div className="FlexProfess">
            <p className=""> (a) আবেদনকৃত পণ্যের নাম: </p>
            <p className="doottedLine ps-3">{viewData?.productName}</p>
          </div>
          <div className="FlexProfess">
            <p className="">(b) আবেদনকৃত পণ্যের বিবরণ: </p>
            <p className="doottedLine ps-3">{viewData?.productDetails}</p>
          </div>
        </div>
        <div className="">
          <p>10. অর্থ প্রদানের বিবরণ: </p>
        </div>
        <div className="viewNameDivGrid">
          <div className="FlexProfess">
            <p className=""> (a) মোট পণ্যের ক্রয়মূল্য: </p>
            <p className="doottedLine ps-3">{viewData?.purchasePrice}</p>
          </div>
          <div className="FlexProfess">
            <p className="">(b) মোট পণ্যের বিক্রয়মূল্য: </p>
            <p className="doottedLine ps-3">{salePrice}</p>
          </div>
          <div className="FlexProfess">
            <p className="">(c) প্রাথমিক জমার পরিমান: </p>
            <p className="doottedLine ps-3">{viewData?.primaryDeposit}</p>
          </div>
          <div className="FlexProfess">
            <p className="">(d) কিস্তির ধরণ: </p>
            <p>{viewData?.installmentType}</p>
          </div>
          <div className="FlexProfess">
            <p className="">(b) পণ্য ক্রয়ের তারিখ: </p>
            <p className="doottedLine ps-3">{viewData?.purchaseDate}</p>
          </div>
          <div className="FlexProfess">
            <p className="">(b) বকেয়া পরিশোধের শেষ তারিখ: </p>
            <p className="doottedLine ps-3">{viewData?.lastDateOfPayment}</p>
          </div>
        </div>
        <div className="">
          <p>11. কিস্তি পরিশোধের বিবরণ: </p>
        </div>
        <div className="viewNameDivGrid">
          <div className="FlexProfess">
            <p className="">(a) কিস্তি সংখ্যা:</p>
            {viewData?.installmentType === "monthly" ? (
              <p className="doottedLine ps-3">{month} টি</p>
            ) : (
              <p className="doottedLine ps-3">{week} টি</p>
            )}
          </div>
          <div className="FlexProfess">
            <p className="">(b) প্রতি কিস্তির পরিমান:</p>
            {viewData?.installmentType === "monthly" ? (
              <p className="doottedLine ps-3">{installmentPerMonth} টাকা</p>
            ) : (
              <p className="doottedLine ps-3">{installmentPerWeek} টাকা</p>
            )}
          </div>
          <div className="FlexProfess">
            <p className="">(b) মুনাফার হার: </p>
            <div className="">
              <p className="doottedLine ps-3">{viewData?.interestRate}%</p>
            </div>
          </div>
        </div>
        <div className="FlexProfess">
          <p className="">12.ইতিপূর্বে কোন পণ্য গ্রহণ করেছেন? </p>
          <div className="">
            <p className="doottedLine ps-3">{viewData?.pastProductTake}</p>
          </div>
        </div>
        <div className="FlexProfess">
          <p className="">13.পণ্যের মূল্য নিয়মিত পরিশোধ করেছেন? </p>
          <div className="">
            <p className="doottedLine ps-3">{viewData?.ifPaidRegular}</p>
          </div>
        </div>
        <div className="">
          <p>14. গ্যারান্টার বা নিশ্চয়তা প্রদানকারীর বিবরণ: </p>
        </div>
        <div className="viewNameDivGrid">
          <div className="FlexProfess">
            <p className=""> গ্যারান্টারের নাম: </p>
            <p className="doottedLine ps-3">{viewData?.guranterName}</p>
          </div>
          <div className="FlexProfess">
            <p className="">ঠিকানা: </p>
            <p className="doottedLine ps-3">{viewData?.guranterAddress}</p>
          </div>
          <div className="FlexProfess">
            <p className="">মোবাইল নং: </p>
            <p className="doottedLine ps-3">{viewData?.guranterMobile}</p>
          </div>
        </div>
        <div className="">
          <p>15. অঙ্গীকারনামা: </p>
        </div>
        <div className="">
          <p>
            উপরোক্ত সকল বিষয়ের তথ্য ও উপাত্ত সঠিক ও নির্ভূল তাই জেনে, বুঝে আমি
            সজ্ঞানে অত্র প্রতিষ্ঠানের নিকট থেকে পণ্য বাকিতে ক্রয় করিলাম এবং
            নিশ্চয়তা দিচ্ছি যে, আমি সাপ্তাহিক কিস্তি মুনাফাসহ প্রতি সপ্তাহে পরিশোধ
            করব এবং প্রতিষ্ঠানের কার্যক্রম সম্পর্কিত সকল নিয়ম কানুন মেনে চলব।
          </p>
        </div>
        <h6>{viewData?.name}</h6>
        <p>.....................................................</p>
  
      <PDFDownloadLink
          document={<PdfData data={viewData} salePrice={salePrice} />}
          filename="FORMS"
        >
          {({ loading }) =>
            loading ? (
              <button>Loading Document...</button>
            ) : (
              <button className="downloadButton">Download Form</button>
            )
          }
        </PDFDownloadLink>
      </>
    );
};

export default page;