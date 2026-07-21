/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type TicketOffIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function TicketOffIcon(props: TicketOffIconProps) {
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
          "M15 5v2m0 10v2M9 5h10a2 2 0 012 2v3a2 2 0 000 4v3m-2 2H5a2 2 0 01-2-2v-3a2 2 0 100-4V7a2 2 0 012-2M3 3l18 18"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default TicketOffIcon;
/* prettier-ignore-end */
