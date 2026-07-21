/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type InfoTriangleFilledIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function InfoTriangleFilledIcon(props: InfoTriangleFilledIconProps) {
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
          "M12 1.67c.955 0 1.845.467 2.39 1.247l.105.16 8.114 13.548a2.913 2.913 0 01-2.307 4.363l-.195.008H3.882a2.913 2.913 0 01-2.582-4.2l.099-.185 8.11-13.538A2.914 2.914 0 0112 1.67zM12 11h-1l-.117.007a1 1 0 000 1.986L11 13v3l.007.117a1 1 0 00.876.876L12 17h1l.117-.007a1 1 0 00.876-.876L14 16l-.007-.117a1 1 0 00-.764-.857l-.112-.02L13 15v-3l-.007-.117a1 1 0 00-.876-.876L12 11zm.01-3l-.127.007a1 1 0 000 1.986L12 10l.127-.007a1 1 0 000-1.986L12.01 8z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default InfoTriangleFilledIcon;
/* prettier-ignore-end */
