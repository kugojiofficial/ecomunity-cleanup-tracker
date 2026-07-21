/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type DiamondsFilledIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function DiamondsFilledIcon(props: DiamondsFilledIconProps) {
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
          "M12 2.005c-.777 0-1.508.367-1.971.99L4.667 9.89c-.89 1.136-.89 3.083 0 4.227l5.375 6.911a2.458 2.458 0 003.93-.017l5.361-6.894c.89-1.136.89-3.083 0-4.227l-5.375-6.911A2.446 2.446 0 0012 2.005z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default DiamondsFilledIcon;
/* prettier-ignore-end */
