import React from 'react'
import { Link, useLocation, useNavigate } from "react-router-dom";
import { TopbarMainLink, MenubarOtherPageLink } from "./MenubarData";

const Topbar = ({unityUnload}) => {
  const location = useLocation();
  const navigate = useNavigate();
  return(
    <div className="topbar-contents">
        <nav>
          <ul className="topbar-link">
            <div className="cols">
              {TopbarMainLink.map((value) => (
                <li className="col" key={value.id}>
                  <Link to={value.link} 
                  onClick={(e)=>unityUnload(navigate,location,e)}>{value.title}</Link>
                </li>
              ))}
            </div>
          </ul>
          <ul className="topbar-link">
            <div className="cols">
              {MenubarOtherPageLink.map((value) => (
                <li className="col" key={value.id}>
                  <a
                    href={value.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {value.title}
                  </a>
                </li>
              ))}
            </div>
          </ul>
        </nav>
      </div>
  );
}

export default Topbar