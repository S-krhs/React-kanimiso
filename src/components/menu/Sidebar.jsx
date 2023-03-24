import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { SidebarMainLink, MenubarOtherPageLink } from "./MenubarData";
import Icon from "../../assets/oguri-icon.png";

const Sidebar = ({unityUnload}) => {
  const location = useLocation();
  const navigate = useNavigate();
  return(
    <div className="sidebar-contents">
        <div className="sidebar-access-counter">
          <p>あなたは</p>
          <div className="access-counter-pos">12345678</div>
          <p>人目の訪問者です</p>
          <div
            // eslint-disable-next-line react/no-danger
            dangerouslySetInnerHTML={{
              __html: "<!-- そんなわけないだろ(ゴンテテ日記) -->",
            }}
          />
        </div>
        <div className="sidebar-profile">
          <div className="my-name">
            <h4>
              <ruby>
                倶楽橋<rt>くらはし</rt>
              </ruby>
              &nbsp;/&nbsp;しぇんこ
            </h4>
          </div>
          <div className="my-icon-pos">
            <img className="my-icon-img" alt="" src={Icon} />
          </div>
          <div className="my-introduction">
            <h4>自己紹介</h4>
            <p>インターネットにいます</p>
            <p>ときどきに絵を描きます</p>
          </div>
        </div>
        <nav>
          <ul className="sidebar-link">
            <li className="headline">Main Contents</li>
            <div className="rows">
              {SidebarMainLink.map((value) => (
                <li className="row" key={value.id}>
                  <Link to={value.link}
                  onClick={(e)=>unityUnload(navigate,location,e)}>{value.title}</Link>
                </li>
              ))}
              <li className="row">工事中...</li>
            </div>
          </ul>
          <ul className="sidebar-link">
            <li className="headline">Links</li>
            <div className="rows">
              {MenubarOtherPageLink.map((value) => (
                <li className="row" key={value.id}>
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
          <ul className="sidebar-link">
            <li className="headline">Admin</li>
            <div className="rows">
              <li className="row">
                <a href="./admin-dummy">管理画面 - ダミー</a>
              </li>
              <li className="row">
                <a href="./admin">管理画面</a>
              </li>
            </div>
          </ul>
          <div className="margin-test" />
          <div className="hidden">
            <Link to="hidden">.</Link>
          </div>
        </nav>
      </div>
  );
}

export default Sidebar;
