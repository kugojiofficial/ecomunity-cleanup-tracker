/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type CurrencyHryvniaIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function CurrencyHryvniaIcon(props: CurrencyHryvniaIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 24 24"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M8 7a2.64 2.64 0 012.562-2h3.376A2.64 2.64 0 0116.5 7a2.57 2.57 0 01-1.344 2.922L9.28 12.86A3.338 3.338 0 007.5 16.5a3.11 3.11 0 003.05 2.5h2.888A2.64 2.64 0 0016 17M6 10h12M6 14h12"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default CurrencyHryvniaIcon;
/* prettier-ignore-end */
