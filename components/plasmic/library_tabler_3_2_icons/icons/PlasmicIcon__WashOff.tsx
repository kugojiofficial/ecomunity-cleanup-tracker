/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type WashOffIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function WashOffIcon(props: WashOffIconProps) {
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
          "M3 6l1.721 10.329A2 2 0 006.694 18h10.612c.208 0 .41-.032.6-.092m1.521-2.472L21 6"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>

      <path
        d={
          "M3.486 8.965c.168.02.34.033.514.035.79.009 1.539-.178 2-.5.461-.32 1.21-.507 2-.5m4.92.919c.428-.083.805-.227 1.08-.418.461-.322 1.21-.508 2-.5.79-.008 1.539.178 2 .5.461.32 1.21.508 2 .5.17 0 .339-.015.503-.035M3 3l18 18"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default WashOffIcon;
/* prettier-ignore-end */
