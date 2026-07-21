/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type BrandCakeIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function BrandCakeIcon(props: BrandCakeIconProps) {
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
          "M20.84 12c0 2.05.985 3.225-.04 5-1.026 1.775-2.537 1.51-4.314 2.534C14.71 20.56 14.184 22 12.133 22c-2.051 0-2.576-1.441-4.353-2.466C6.004 18.51 4.492 18.775 3.466 17c-1.025-1.775-.04-2.95-.04-5s-.985-3.225.04-5C4.492 5.225 6.003 5.49 7.78 4.466 9.556 3.44 10.082 2 12.133 2c2.051 0 2.577 1.441 4.353 2.466 1.776 1.024 3.288.759 4.313 2.534 1.026 1.775.041 2.95.041 5z"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default BrandCakeIcon;
/* prettier-ignore-end */
