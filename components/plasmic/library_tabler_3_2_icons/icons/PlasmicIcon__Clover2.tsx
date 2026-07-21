/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Clover2IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Clover2Icon(props: Clover2IconProps) {
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
          "M11 11L7.603 7.56a2.104 2.104 0 010-2.95 2.04 2.04 0 012.912 0L11 5l.485-.39a2.04 2.04 0 012.912 0 2.104 2.104 0 010 2.95L11 11zm0 0l-3.397 3.44a2.104 2.104 0 000 2.95 2.041 2.041 0 002.912 0L11 17l.485.39a2.041 2.041 0 002.912 0 2.104 2.104 0 000-2.95L11 11zm3.44-3.397a2.104 2.104 0 012.95 0 2.041 2.041 0 010 2.912L17 11l.39.485a2.041 2.041 0 010 2.912 2.104 2.104 0 01-2.95 0M7.56 7.603a2.104 2.104 0 00-2.95 0 2.04 2.04 0 000 2.912L5 11l-.39.485a2.04 2.04 0 000 2.912 2.104 2.104 0 002.95 0M15 15l6 6"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default Clover2Icon;
/* prettier-ignore-end */
