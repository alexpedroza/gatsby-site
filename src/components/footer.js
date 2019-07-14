import React from 'react';
import { Link } from "gatsby";  
import { FaLinkedin, FaGithub, FaAt } from 'react-icons/fa';


const Footer = () => (
        <footer>
                <ul>
                    <li>
                        <Link to="#"><FaLinkedin /></Link>
                    </li>
                    <li>
                        <Link to="#"><FaGithub /></Link>
                    </li>
                    <li>
                        <Link to="#"><FaAt /></Link>
                    </li>
                </ul>
            <span>
            © {new Date().getFullYear()}, Built with
            {` `}
            <Link to="https://www.gatsbyjs.org">Gatsby</Link>
            </span>
        </footer>
    )

export default Footer