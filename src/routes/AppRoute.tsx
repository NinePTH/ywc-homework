import React from 'react'
import { Route, Routes } from 'react-router-dom'
import AllResultPage from '../pages/AllResultPage'
import LocalResultPage from '../pages/LocalResultPage'
import SearchPage from '../pages/SearchPage'
import SponsorPage from '../pages/SponsorPage'

const AppRoute:React.FC = () => {
  return (
    <Routes>
        <Route path="/" element={<AllResultPage />}/>
        <Route path="/local" element={<LocalResultPage />}/>
        <Route path="/search" element={<SearchPage />}/>
        <Route path="/sponsors" element={<SponsorPage />}/>
    </Routes>
  )
}

export default AppRoute