/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type HelpTriangleFilledIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function HelpTriangleFilledIcon(props: HelpTriangleFilledIconProps) {
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
          "M12 1.67c.955 0 1.845.467 2.39 1.247l.105.16 8.114 13.548a2.913 2.913 0 01-2.307 4.363l-.195.008H3.882a2.913 2.913 0 01-2.582-4.2l.099-.185 8.11-13.538A2.914 2.914 0 0112 1.67zM12 15a1 1 0 00-.993.883L11 16l.007.127a1 1 0 001.986 0L13 16.01l-.007-.127A1 1 0 0012 15zm1.368-6.673a2.98 2.98 0 00-3.631.728 1 1 0 001.44 1.383l.171-.18a.98.98 0 011.11-.15 1 1 0 01-.34 1.886l-.232.012A1 1 0 0011.997 14a3 3 0 001.371-5.673z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default HelpTriangleFilledIcon;
/* prettier-ignore-end */
