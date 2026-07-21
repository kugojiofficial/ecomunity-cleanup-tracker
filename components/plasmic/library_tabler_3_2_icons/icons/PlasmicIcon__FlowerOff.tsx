/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type FlowerOffIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function FlowerOffIcon(props: FlowerOffIconProps) {
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
          "M9.875 9.882a3 3 0 004.247 4.238m.581-3.423a3.012 3.012 0 00-1.418-1.409"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>

      <path
        d={
          "M9 5a3 3 0 116 0c0 .562-.259 1.442-.776 2.64L13.5 9l1.76-1.893c.499-.6.922-1 1.27-1.205a2.968 2.968 0 014.07 1.099 3.01 3.01 0 01-1.09 4.098c-.374.217-.99.396-1.846.535l-1.779.244m.292.282l1.223.166c1 .145 1.698.337 2.11.576a3.01 3.01 0 011.226 3.832m-2.277 1.733c-.666.1-1.346-.03-1.929-.369-.348-.202-.771-.604-1.27-1.205L13.5 15l.724 1.36C14.74 17.559 15 18.439 15 19a3 3 0 01-6 0c0-.562.259-1.442.776-2.64L10.5 15l-1.76 1.893c-.499.601-.922 1-1.27 1.205A2.968 2.968 0 013.4 17a3.011 3.011 0 011.09-4.098c.374-.218.99-.396 1.846-.536L9 12l-2.4-.325c-1-.145-1.698-.337-2.11-.576a3.01 3.01 0 01-.191-5.078 2.98 2.98 0 011.235-.488M3 3l18 18"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default FlowerOffIcon;
/* prettier-ignore-end */
