/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type ArrowBigLeftFilledIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function ArrowBigLeftFilledIcon(props: ArrowBigLeftFilledIconProps) {
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
          "M9.586 4L3 10.586a2 2 0 000 2.828L9.586 20a2 2 0 002.18.434l.145-.068A2 2 0 0013 18.586V16h7a2 2 0 002-2v-4l-.005-.15A2 2 0 0020 8l-7-.001V5.414A2 2 0 009.586 4z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default ArrowBigLeftFilledIcon;
/* prettier-ignore-end */
