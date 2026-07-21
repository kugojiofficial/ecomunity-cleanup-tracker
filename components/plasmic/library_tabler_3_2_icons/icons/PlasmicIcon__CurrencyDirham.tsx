/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type CurrencyDirhamIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function CurrencyDirhamIcon(props: CurrencyDirhamIconProps) {
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
          "M8.5 19H5m3.599-2.521A1.5 1.5 0 107.5 19M7 4v9m8 0h1.888a1.5 1.5 0 001.296-2.256L16 7m-5 6.01V13"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default CurrencyDirhamIcon;
/* prettier-ignore-end */
