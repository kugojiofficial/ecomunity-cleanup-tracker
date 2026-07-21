/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type CurrencyLydIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function CurrencyLydIcon(props: CurrencyLydIconProps) {
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
          "M11 15h.01M21 5v10a2 2 0 01-2 2h-2.764a2 2 0 01-1.789-1.106L14 15M5 8l2.773 4.687c.427.697.234 1.626-.43 2.075A1.38 1.38 0 016.57 15H4.346a.93.93 0 01-.673-.293L3 14"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default CurrencyLydIcon;
/* prettier-ignore-end */
