import Link from 'next/link';
import React from 'react';

const layout = ({children}) => {
    return (
       <section className='dashboard-section'>
        <nav className='dashboardNav'>
        <h6>Sidebar</h6>
        <Link href="/dashboard/adduser">Add User</Link>
        <Link href="/dashboard/userlist">User List</Link>
        </nav>
        <main>{children}</main>
       </section>
    );
};

export default layout;