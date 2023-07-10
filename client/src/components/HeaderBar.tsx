import React from "react";
import Link from "@mui/material/Link";
import "./HeaderBar.css";

const HeaderBar: React.FC = (): JSX.Element => {
  return (
    <>
      <header>
        <Link href="/">Home</Link>
      </header>
    </>
  );
};

export default HeaderBar;
