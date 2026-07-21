/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type OctagonFilledIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function OctagonFilledIcon(props: OctagonFilledIconProps) {
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
          "M15.3 2H8.7c-.562 0-1.016.201-1.407.593l-4.7 4.7A1.894 1.894 0 002 8.7v6.6c0 .562.201 1.016.593 1.407l4.7 4.7c.391.392.845.593 1.407.593h6.6c.562 0 1.016-.201 1.407-.593l4.7-4.7c.392-.391.593-.845.593-1.407V8.7c0-.562-.201-1.016-.593-1.407l-4.7-4.7A1.894 1.894 0 0015.3 2z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default OctagonFilledIcon;
/* prettier-ignore-end */
