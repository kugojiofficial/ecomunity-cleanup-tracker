/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type AccessibleFilledIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function AccessibleFilledIcon(props: AccessibleFilledIconProps) {
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
          "M17 3.34a10 10 0 11-14.995 8.984L2 12l.005-.324A10 10 0 0117 3.34zm-1.051 6.844a1 1 0 00-1.152-.663l-.113.03-2.684.895-2.684-.895-.113-.03a1 1 0 00-.628 1.884l.109.044L11 12.22v.976l-1.832 2.75-.06.1a1 1 0 00.237 1.21l.1.076.101.06a1 1 0 001.21-.237l.076-.1L12 15.303l1.168 1.752.07.093a1 1 0 001.653-1.102l-.059-.1L13 13.196v-.977l2.316-.771.109-.044a1 1 0 00.524-1.221v.001zM12 6a1.5 1.5 0 100 3 1.5 1.5 0 000-3z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default AccessibleFilledIcon;
/* prettier-ignore-end */
