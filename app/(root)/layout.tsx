import React from 'react'
import Header from './_components/Header'

const Layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <>
            <Header />
            {children}
        </>
    )
}

export default Layout