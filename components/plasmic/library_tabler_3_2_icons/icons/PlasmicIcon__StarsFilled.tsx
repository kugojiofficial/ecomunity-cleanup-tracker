/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type StarsFilledIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function StarsFilledIcon(props: StarsFilledIconProps) {
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
          "M17.657 12.007a1.39 1.39 0 00-1.103.765l-.855 1.723-1.907.277c-.52.072-.96.44-1.124.944l-.038.14c-.1.465.046.954.393 1.29l1.377 1.337-.326 1.892a1.394 1.394 0 002.018 1.465l1.708-.895 1.708.896a1.387 1.387 0 001.462-.105l.112-.09a1.39 1.39 0 00.442-1.272l-.325-1.891 1.38-1.339c.38-.371.516-.924.352-1.427l-.051-.134a1.39 1.39 0 00-1.073-.81l-1.907-.278-.853-1.722A1.394 1.394 0 0017.8 12l-.143.007zm-11.6 0a1.39 1.39 0 00-1.103.765l-.855 1.723-1.907.277c-.52.072-.96.44-1.124.944l-.038.14c-.1.465.046.954.393 1.29L2.8 18.483l-.326 1.892a1.393 1.393 0 002.018 1.465l1.708-.895 1.708.896a1.387 1.387 0 001.462-.105l.112-.09a1.39 1.39 0 00.442-1.272L9.6 18.483l1.38-1.339c.38-.371.516-.924.352-1.427l-.051-.134a1.39 1.39 0 00-1.073-.81L8.3 14.494l-.853-1.722A1.393 1.393 0 006.2 12l-.143.007zm5.8-10a1.39 1.39 0 00-1.103.765l-.855 1.723-1.907.277c-.52.072-.96.44-1.124.944l-.038.14c-.1.465.046.954.393 1.29L8.6 8.483l-.326 1.892a1.393 1.393 0 002.018 1.465L12 10.946l1.709.896a1.387 1.387 0 001.462-.105l.112-.09a1.39 1.39 0 00.442-1.272L15.4 8.483l1.38-1.339c.38-.371.516-.924.352-1.427l-.051-.134a1.39 1.39 0 00-1.073-.81L14.1 4.494l-.853-1.722A1.393 1.393 0 0012 2l-.143.007z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default StarsFilledIcon;
/* prettier-ignore-end */
