/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type WorldCodeIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function WorldCodeIcon(props: WorldCodeIconProps) {
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
          "M20.942 13.02a9 9 0 10-9.47 7.964M3.6 9h16.8M3.6 15h9.9m-2-12a17 17 0 000 18m1-18c2 3.206 2.837 6.913 2.508 10.537M20 21l2-2-2-2m-3 0l-2 2 2 2"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default WorldCodeIcon;
/* prettier-ignore-end */
