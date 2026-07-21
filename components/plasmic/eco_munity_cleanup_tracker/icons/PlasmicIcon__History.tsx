/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type HistoryIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function HistoryIcon(props: HistoryIconProps) {
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
        fill={"currentColor"}
        d={
          "M3 5.675V3a1 1 0 0 0-2 0v4a2 2 0 0 0 2 2h4a1 1 0 1 0 0-2H4.522q.03-.037.058-.078a8.991 8.991 0 1 1-1.515 6.084c-.061-.55-.508-.998-1.06-.998-.553 0-1.01.45-.959 1A11 11 0 1 0 3 5.675"
        }
      ></path>

      <path
        fill={"currentColor"}
        d={
          "M12 5a1 1 0 0 0-1 1v6.467s0 .26.127.457a1 1 0 0 0 .39.41l4.62 2.668a1 1 0 0 0 1-1.732L13 11.88V6a1 1 0 0 0-1-1"
        }
      ></path>
    </svg>
  );
}

export default HistoryIcon;
/* prettier-ignore-end */
