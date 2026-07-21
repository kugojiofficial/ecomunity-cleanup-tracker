/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type AlienIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function AlienIcon(props: AlienIconProps) {
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
          "M11 17a2.5 2.5 0 002 0M12 3C7.336 3 4.604 5.331 4.138 8.595a11.816 11.816 0 002 8.592 10.777 10.777 0 003.199 3.064c1.666 1 3.664 1 5.33 0a10.778 10.778 0 003.199-3.064 11.89 11.89 0 002-8.592C19.4 5.33 16.668 3 12.004 3H12zm-4 8l2 2m6-2l-2 2"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default AlienIcon;
/* prettier-ignore-end */
