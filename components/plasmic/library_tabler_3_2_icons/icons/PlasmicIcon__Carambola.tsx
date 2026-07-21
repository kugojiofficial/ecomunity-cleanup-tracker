/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type CarambolaIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function CarambolaIcon(props: CarambolaIconProps) {
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
          "M17.286 21.09c-1.127 0-2.89-.871-5.288-2.615-2.397 1.745-4.16 2.617-5.288 2.616-1.817 0-1.982-2.267-.495-6.8C-.045 9.774.667 7.516 8.35 7.516h.076C9.616 3.839 10.807 2 12 2c1.19 0 2.381 1.839 3.574 5.516h.076c7.683 0 8.394 2.258 2.133 6.774 1.487 4.535 1.321 6.801-.497 6.8z"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default CarambolaIcon;
/* prettier-ignore-end */
