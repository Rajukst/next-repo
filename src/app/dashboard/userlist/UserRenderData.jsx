import Link from 'next/link';
import React from 'react';
import { Container } from 'react-bootstrap';
import { FaBeer, FaCalculator, FaEdit, FaEye } from 'react-icons/fa';
const UserRenderData = ({userData, index}) => {
    const {_id,name,fathersName, parmanentAddress,mobileNumber}= userData;
    return (
<>
        <tbody>
        <tr>
      <td>{index+1}</td>
      <td>{name}</td>
    <td>{fathersName}</td>
      <td>{parmanentAddress}</td>
      <td>{mobileNumber}</td>
      <td>
        <Link className='usersLinks'href={`/dashboard/userlist/view/${_id}`}><FaEye /></Link>
        <Link className='usersLinks' href={`/dashboard/userlist/edit/${_id}`}><FaEdit /></Link>
        <Link className='usersLinks' href={`/dashboard/userlist/payment/${_id}`}><FaCalculator /></Link>
        {/* <Link className='usersLinks ms-2' to={`edit/${_id}`}><i className="fa-solid fa-pen-to-square"></i></Link> */}
      </td>
    </tr>
  </tbody>
  </>
    );
};

export default UserRenderData;