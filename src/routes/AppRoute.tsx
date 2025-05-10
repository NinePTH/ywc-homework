import React from 'react'
import { Route, Routes } from 'react-router-dom'
import AllResultPage from '../pages/AllResultPage'
import SearchPage from '../pages/SearchPage'
import SponsorPage from '../pages/SponsorPage'

const AppRoute:React.FC = () => {
  return (
    <Routes>
        <Route path="/" element={<AllResultPage />}/>
        <Route path="/search" element={<SearchPage />}/>
        <Route path="/sponsors" element={<SponsorPage />}/>
    </Routes>
  )
}

export default AppRoute