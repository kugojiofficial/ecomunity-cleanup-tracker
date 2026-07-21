/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type CurrencyEuroIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function CurrencyEuroIcon(props: CurrencyEuroIconProps) {
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
          "M17.2 7c-.844-.965-1.913-1.617-3.074-1.876a5.212 5.212 0 00-3.45.423c-1.089.534-2.019 1.43-2.672 2.579A7.857 7.857 0 007 12c0 1.378.349 2.726 1.003 3.874.653 1.148 1.583 2.045 2.673 2.58a5.221 5.221 0 003.45.422c1.16-.259 2.23-.911 3.073-1.876M13 10H5m0 4h8"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default CurrencyEuroIcon;
/* prettier-ignore-end */
