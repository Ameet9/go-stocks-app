import React from 'react'
import HeaderNav from './HeaderNav'
import FeaturedCompanies from './FeaturedCompanies'
import ContentComponent from './ContentComponent'

export default function HomePage() {
    return (
        <>
            <HeaderNav></HeaderNav>
            <FeaturedCompanies></FeaturedCompanies>
            <ContentComponent></ContentComponent>
        </>
    )
}
