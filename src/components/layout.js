import React from "react"
import Sticky from "react-stickynode"
import { Card } from "react-bootstrap"
import Navigationbar from "./navbar"
import Footer from "./footer"

const Layout = ({ title, children }) => {

    return (
        <div>
            <Sticky top={0} innerZ={9999} activeClass="nav-sticky">
                <Navigationbar />
            </Sticky>
            <Card border="light">
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <main>{children}</main>
                </Card.Body>
                <Card.Footer className="text-muted"><Footer /></Card.Footer>
            </Card>
        </div>
    )
}

export default Layout
