import React from "react"

const Footer = () => {

  return (
    <div>
      <footer className="d-flex">
        <div className="w-100">
          © {new Date().getFullYear()} - Headless CMS React App 
        </div>
      </footer>
    </div>
  )
}

export default Footer
