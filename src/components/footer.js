import React from "react"

const Footer = () => {

  return (
    <div>
      <footer className="d-flex">
        <div className="w-100">
          © {new Date().getFullYear()} - Headless CMS React App , Source Available at <a href="https://github.com/devenkhatri/react-base-for-headlesscms/" target="_blank">Github</a>
        </div>
      </footer>
    </div>
  )
}

export default Footer
