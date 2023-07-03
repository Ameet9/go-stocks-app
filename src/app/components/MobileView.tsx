import Head from 'next/head'
import React from 'react'
import HeaderNav from './HeaderNav'
import FooterNav from './mobileComponents/FooterNav'
import FeaturedCompanies from './FeaturedCompanies'
import ContentComponent from './ContentComponent'
import MobileContentComponent from './mobileComponents/MobileContentComponent'

export default function MobileView() {
    return (
        <>
            <HeaderNav></HeaderNav>
            <FeaturedCompanies></FeaturedCompanies>
            <MobileContentComponent></MobileContentComponent>
            <FooterNav></FooterNav>
        </>
    )
}
