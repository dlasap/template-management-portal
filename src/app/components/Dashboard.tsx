import React from 'react'
import Feed from './Feed'
import Widgets from './Widgets'

const Dashboard = () => {
    return (
        <section className='w-[75%] ml-6 h-screen relative overflow-auto top-20'>

            <div className='h-full'>
                <Feed />
                <Widgets />
            </div>
        </section>
    )
}

export default Dashboard

