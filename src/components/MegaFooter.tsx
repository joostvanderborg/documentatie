import React, { PropsWithChildren } from "react";
import clsx from "clsx";
import style from "./MegaFooter.module.css";
import { Link } from "@docusaurus/router";

export const MegaFooter = ({
  children,
}: PropsWithChildren<{}>) => (
  <div className={clsx(style["mega-footer"])}>
    <div className="container">
      {children}
    </div>
  </div>
);
