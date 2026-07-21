/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Lemon2IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Lemon2Icon(props: Lemon2IconProps) {
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
          "M18 4a2 2 0 011.185 3.611c1.55 2.94.873 6.917-1.892 9.682-2.765 2.765-6.743 3.442-9.682 1.892a2 2 0 11-2.796-2.796c-1.55-2.94-.873-6.917 1.892-9.682 2.765-2.765 6.743-3.442 9.682-1.892A2 2 0 0118 4z"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default Lemon2Icon;
/* prettier-ignore-end */
