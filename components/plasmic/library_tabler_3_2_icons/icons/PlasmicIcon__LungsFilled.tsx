/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type LungsFilledIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function LungsFilledIcon(props: LungsFilledIconProps) {
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
          "M12 3a1 1 0 011 1v5a2 2 0 001 1.732V7.257C14 6.015 14.995 5 16.233 5c.372 0 .738.094 1.122.307l.18.117c1.695 1.23 2.76 3.035 3.773 6.34.45 1.47.68 3.156.692 5.06.016 2.195-1.657 4.024-3.843 4.168L17.92 21C15.75 21 14 19.213 14 17.02v-4.146a4 4 0 01-1.893-1.112L12 11.644l-.107.118a4 4 0 01-1.892 1.112L10 17.02C10 19.213 8.25 21 6.081 21l-.268-.01c-2.155-.142-3.827-1.971-3.811-4.165.012-1.905.243-3.592.692-5.06C3.705 8.458 4.77 6.653 6.516 5.39l.188-.117A2.2 2.2 0 017.768 5C9.005 5 10 6.015 10 7.257l.001 3.475A2.001 2.001 0 0011 9V4a1 1 0 011-1z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default LungsFilledIcon;
/* prettier-ignore-end */
