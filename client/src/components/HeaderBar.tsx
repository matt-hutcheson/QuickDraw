import React from "react";
import Link from "@mui/material/Link";
import "./HeaderBar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { icon } from "@fortawesome/fontawesome-svg-core/import.macro";

const HeaderBar: React.FC = (): JSX.Element => {
  return (
    <>
      <FontAwesomeIcon icon={icon({ name: "user-secret" })} />
      <header>
        <Link href="/">Home</Link>
      </header>
    </>
  );
};

export default HeaderBar;
