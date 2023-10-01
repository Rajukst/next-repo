import Link from 'next/link';
import React from 'react';

const UserRenderData = ({userData, index}) => {
    const {_id,name,fathersName, parmanentAddress,mobileNumber}= userData;
    return (
        <tbody>
        <tr>
      <td>{index+1}</td>
      <td>{name}</td>
    <td>{fathersName}</td>
      <td>{parmanentAddress}</td>
      <td>{mobileNumber}</td>
      <td>
        <Link className='usersLinks me-2'href={`/dashboard/userlist/view/${_id}`}>Action-1</Link>
        <Link className='usersLinks' href={`/dashboard/userlist/edit/${_id}`}>action-2</Link>
        {/* <Link className='usersLinks ms-2' to={`edit/${_id}`}><i className="fa-solid fa-pen-to-square"></i></Link> */}
      </td>
    </tr>
  </tbody>
    );
};

export default UserRenderData;