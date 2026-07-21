/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type InfoOctagonFilledIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function InfoOctagonFilledIcon(props: InfoOctagonFilledIconProps) {
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
          "M14.897 1a4 4 0 012.664 1.016l.165.156 4.1 4.1a4 4 0 011.168 2.605l.006.227v5.794a4 4 0 01-1.016 2.664l-.156.165-4.1 4.1a4 4 0 01-2.603 1.168l-.227.006H9.103a3.999 3.999 0 01-2.664-1.017l-.165-.156-4.1-4.1a4 4 0 01-1.168-2.604L1 14.897V9.103a4 4 0 011.016-2.664l.156-.165 4.1-4.1a4 4 0 012.605-1.168L9.104 1h5.793zM12 11h-1l-.117.007a1 1 0 000 1.986L11 13v3l.007.117a1 1 0 00.876.876L12 17h1l.117-.007a1 1 0 00.876-.876L14 16l-.007-.117a1 1 0 00-.764-.857l-.112-.02L13 15v-3l-.007-.117a1 1 0 00-.876-.876L12 11zm.01-3l-.127.007a1 1 0 000 1.986L12 10l.127-.007a1 1 0 000-1.986L12.01 8z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default InfoOctagonFilledIcon;
/* prettier-ignore-end */
