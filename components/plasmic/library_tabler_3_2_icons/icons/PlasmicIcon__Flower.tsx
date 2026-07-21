/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type FlowerIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function FlowerIcon(props: FlowerIconProps) {
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
        d={"M9 12a3 3 0 106 0 3 3 0 00-6 0z"}
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>

      <path
        d={
          "M12 2a3 3 0 013 3c0 .562-.259 1.442-.776 2.64L13.5 9l1.76-1.893c.499-.6.922-1 1.27-1.205a2.968 2.968 0 014.07 1.099 3.01 3.01 0 01-1.09 4.098c-.374.217-.99.396-1.846.535L15 12l2.4.326c1 .145 1.698.337 2.11.576a3.01 3.01 0 01.327 4.977 2.968 2.968 0 01-3.307.219c-.348-.202-.771-.604-1.27-1.205L13.5 15l.724 1.36C14.74 17.559 15 18.439 15 19a3 3 0 01-6 0c0-.562.259-1.442.776-2.64L10.5 15l-1.76 1.893c-.499.601-.922 1-1.27 1.205A2.968 2.968 0 013.4 17a3.011 3.011 0 011.09-4.098c.374-.218.99-.396 1.846-.536L9 12l-2.4-.325c-1-.145-1.698-.337-2.11-.576a3.01 3.01 0 01-.327-4.978A2.968 2.968 0 017.47 5.9c.348.203.771.604 1.27 1.205L10.5 9C9.5 6.708 9 5.375 9 5a3 3 0 013-3z"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default FlowerIcon;
/* prettier-ignore-end */
