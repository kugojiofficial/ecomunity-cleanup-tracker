/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type TestPipeOffIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function TestPipeOffIcon(props: TestPipeOffIconProps) {
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
          "M20 8.04A799.936 799.936 0 0016 12m-2 2c-1.085 1.085-3.125 3.14-6.122 6.164a2.857 2.857 0 01-4.041-4.04C6.855 13.124 8.91 11.087 10 10m2-2c.872-.872 2.191-2.205 3.959-4M7 13h6m6 2l1.5 1.6m-.74 3.173a2 2 0 01-2.612-2.608M15 3l6 6M3 3l18 18"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default TestPipeOffIcon;
/* prettier-ignore-end */
