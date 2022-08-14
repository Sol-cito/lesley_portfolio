import { useState } from "react";
import { useLocation } from "react-router-dom";
import HeaderButton from "./Components/HeaderButton";
import HeaderLogo from "./Components/HeaderLogo";
import "./Header.scss";
import HEADER_MODEL_DATA from "./models/HeaderModel";

const Header = () => {
  const location = useLocation();

  const [selectedHeaderBtn, setSelectedHeaderBtn] = useState<string>(
    location.pathname.slice(1)
      ? location.pathname.slice(1)
      : HEADER_MODEL_DATA.headerButton[0].name
  );

  return (
    <div className="header">
      <div className="logo_area">
        <HeaderLogo logoName={HEADER_MODEL_DATA.headerLogoName} />
      </div>
      <div className="button_area">
        {HEADER_MODEL_DATA.headerButton.map((data, idx) => {
          return (
            <HeaderButton
              key={idx}
              btnName={data.name}
              isSelected={data.name === selectedHeaderBtn}
              url={data.url}
              setSelectedHeaderBtn={setSelectedHeaderBtn}
            />
          );
        })}
      </div>
    </div>
  );
};
export default Header;
