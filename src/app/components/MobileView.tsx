import Head from 'next/head'
import React from 'react'
import HeaderNav from './HeaderNav'
import FooterNav from './mobileComponents/FooterNav'
import FeaturedCompanies from './FeaturedCompanies'
import ContentComponent from './ContentComponent'

export default function MobileView() {
    return (
        <>
            <HeaderNav></HeaderNav>
            <FeaturedCompanies></FeaturedCompanies>
            <ContentComponent></ContentComponent>
            <FooterNav></FooterNav>
        </>
    )
}
