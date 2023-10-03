import React from 'react';
import {
    Page,
    Text,
    Image,
    Document,
    StyleSheet,
    View,
  } from "@react-pdf/renderer";
  import { Font } from "@react-pdf/renderer";
  Font.register({
    family: "AntonFamily",
  });
  
  const styles = StyleSheet.create({
    body: {
      paddingTop: 35,
      paddingBottom: 65,
      paddingHorizontal: 35,
    },
    title: {
      fontSize: 24,
      textAlign: "center",
    },
    text: {
      margin: 4,
      fontSize: 12,
      textAlign: "justify",
      textDecoration: "dot",
      borderBottomStyle: "dotted",
      borderBottomWidth: 1,
      borderBottomColor: "#888888",
    },
    textHead: {
      margin: 4,
      fontSize: 13,
      textAlign: "justify",
      textDecoration: "underline",
    },
    commitment: {
      margin: 4,
      fontSize: 12,
      textAlign: "justify",
      marginBottom: 20,
    },
    image: {
      // marginVertical: 15,
      // marginHorizontal: 100,
      margin: 4,
      height: "150px",
      width: "150px",
    },
    header: {
      fontSize: 16,
      marginBottom: 15,
      textAlign: "center",
      color: "grey",
    },
    pageNumber: {
      position: "absolute",
      fontSize: 12,
      bottom: 30,
      left: 0,
      right: 0,
      textAlign: "center",
      color: "grey",
    },
  });
const PdfData = ({data}) => {
    const {
        age,dateOfBirth,fathersName,guranterAddress, guranterMobile,guranterName,ifPaidRegular, installmentType,interestRate,
        lastDateOfPayment,mobileNumber,mothersName,name,parmanentAddress,pastProductTake,presentAddress,primaryDeposit,productDetails,
        productName,profession,purchaseDate,purchasePrice,image} = data;
    
      const salePrice =
        parseInt(purchasePrice) +
        parseInt(purchasePrice) * (parseInt(interestRate) / 100);
      const amountDue = salePrice - primaryDeposit;
    
      const startDateInMilliseconds = new Date(purchaseDate).getTime();
      const endDateInMilliseconds = new Date(lastDateOfPayment).getTime();
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
    return (
        <Document>
        <Page style={styles.body}>
          <Text style={styles.header} fixed>
            Nishad Telecom User Form
          </Text>
          <Image style={styles.image} src={image} />
          <Text style={styles.text}>Name: {name}</Text>
          <Text style={styles.text}>Father's Name: {fathersName}</Text>
          <Text style={styles.text}>Mother's Name: {mothersName}</Text>
          <Text style={styles.text}>Mobile No: {mobileNumber}</Text>
            <Text style={styles.text}>Present Address: {presentAddress},</Text>
            <Text style={styles.text}>Permanent Address: {parmanentAddress}</Text>
          <View style={{ display: "flex", flexDirection: "row" }}>
            <Text style={styles.text}>Profession: {profession}</Text>
            <Text style={styles.text}>Date of Birth: {dateOfBirth}</Text>
            <Text style={styles.text}>Age: {age}</Text>
          </View>
          <Text style={styles.textHead}>Product Details:</Text>
          <View style={{ display: "flex", flexDirection: "row" }}>
            <Text style={styles.text}>(a) Product Name: {productName}</Text>
            <Text style={styles.text}>(b) Product Details: {productDetails}</Text>
          </View>
          <Text style={styles.textHead}>Payment details:</Text>
          <View style={{ display: "flex", flexDirection: "row" }}>
            <Text style={styles.text}>
              (a) Product Buy Price: {purchasePrice}
            </Text>
            <Text style={styles.text}>(b) Product Sale Price: {salePrice}</Text>
            <Text style={styles.text}>
              (c) Primary Deposite: {primaryDeposit}
            </Text>
          </View>
          <View style={{ display: "flex", flexDirection: "row" }}>
            <Text style={styles.text}>(d) Amount due: {amountDue}</Text>
            <Text style={styles.text}>(e) Purchase Date: {purchaseDate}</Text>
            <Text style={styles.text}>
              (f) Last Payment Date: {lastDateOfPayment}
            </Text>
          </View>
          <Text style={styles.textHead}>Installment payment details:</Text>
          {/* <p className="">(a) কিস্তি সংখ্যা:</p>
            {viewData?.installmentType === "monthly" ? (
              <p className="doottedLine ps-3">{month} টি</p>
            ) : (
              <p className="doottedLine ps-3">{week} টি</p>
            )} */}
          <View style={{ display: "flex", flexDirection: "row" }}>
            <Text style={styles.text}>Total Installment: {installmentType==="monthly"? <Text style={styles.text}>{month}</Text> :<Text style={styles.text}>{week}</Text>}</Text>
            <Text style={styles.text}>Amount Per Installment: {installmentType==="monthly"? <Text style={styles.text}>{installmentPerMonth} Tk</Text> :<Text style={styles.text}>{installmentPerWeek} Tk</Text>}</Text>
            <Text style={styles.text}>Interest Rate: {interestRate}%</Text>
          </View>
          <Text style={styles.text}>
            Have you received any products before? {pastProductTake}
          </Text>
          <Text style={styles.text}>
            Did you regularly pay the price of the product? {ifPaidRegular}
          </Text>
          <Text style={styles.textHead}>Details of Guarantor:</Text>
          <View style={{ display: "flex", flexDirection: "row" }}>
          <Text style={styles.text}>Guarantor Name: {guranterName}</Text>
          <Text style={styles.text}>Guranter Mobile: {guranterMobile}</Text>
          </View>
          <Text style={styles.text}>Guranter Address: {guranterAddress}</Text> 
          <Text style={styles.textHead}>Commitment:</Text>
          <Text style={styles.commitment}>
            Knowing and understanding that the information and data of all the
            above matters are correct and accurate, I knowingly purchase the
            product from the company and guarantee that I will pay the weekly
            installments with profit every week and comply with all the rules and
            regulations related to the company's operations.
          </Text>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <Text style={styles.text}>{name}</Text>
            <Text style={styles.text}>On behalf of Nishad Telecom</Text>
          </View>
        </Page>
      </Document>
    );
};

export default PdfData;