import React from 'react'
import { Route, Routes } from 'react-router-dom'
import BooknowPage from './BooknowPage'
import DemoPage from './DemoPage'

const AllRoutes = () => {
    return (
        <div>
            <Routes>
                <Route path='/' element={<BooknowPage />}/>
                <Route path='/demopage' element={<DemoPage />} />
            </Routes>
        </div>
    )
}

export default AllRoutes
