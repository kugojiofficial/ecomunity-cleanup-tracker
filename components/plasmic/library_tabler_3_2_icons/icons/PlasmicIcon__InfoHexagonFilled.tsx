/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type InfoHexagonFilledIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function InfoHexagonFilledIcon(props: InfoHexagonFilledIconProps) {
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
          "M10.425 1.414a3.33 3.33 0 013.026-.097l.19.097 6.775 3.995.096.063.092.077.107.075a3.225 3.225 0 011.266 2.188l.018.202.005.204v7.284c0 1.106-.57 2.129-1.454 2.693l-.17.1-6.803 4.302c-.918.504-2.019.535-3.004.068l-.196-.1-6.695-4.237a3.225 3.225 0 01-1.671-2.619L2 15.502V8.217c0-1.106.57-2.128 1.476-2.705l6.949-4.098zM12 11h-1l-.117.007a1 1 0 000 1.986L11 13v3l.007.117a1 1 0 00.876.876L12 17h1l.117-.007a1 1 0 00.876-.876L14 16l-.007-.117a1 1 0 00-.764-.857l-.112-.02L13 15v-3l-.007-.117a1 1 0 00-.876-.876L12 11zm.01-3l-.127.007a1 1 0 000 1.986L12 10l.127-.007a1 1 0 000-1.986L12.01 8z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default InfoHexagonFilledIcon;
/* prettier-ignore-end */
