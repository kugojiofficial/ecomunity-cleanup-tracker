/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type ClubsFilledIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function ClubsFilledIcon(props: ClubsFilledIconProps) {
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
          "M12 2a5 5 0 00-4.488 2.797l-.103.225a4.998 4.998 0 00-.334 2.837l.027.14a5 5 0 00-3.091 9.009l.198.14a5 5 0 004.42.58l.174-.066-.773 3.095A1 1 0 009 22h6l.113-.006a1 1 0 00.857-1.237l-.774-3.095.174.065A4.999 4.999 0 1016.897 8l.028-.14A4.997 4.997 0 0012 2z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default ClubsFilledIcon;
/* prettier-ignore-end */
