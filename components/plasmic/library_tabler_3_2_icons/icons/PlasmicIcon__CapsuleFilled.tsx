/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type CapsuleFilledIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function CapsuleFilledIcon(props: CapsuleFilledIconProps) {
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
          "M12 2l-.243.004A7.004 7.004 0 005 9v6a7 7 0 007 7l.243-.004A7.004 7.004 0 0019 15V9a7 7 0 00-7-7z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default CapsuleFilledIcon;
/* prettier-ignore-end */
