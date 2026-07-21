/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type BinaryTree2IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function BinaryTree2Icon(props: BinaryTree2IconProps) {
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
          "M14 6a2 2 0 10-4 0 2 2 0 004 0zm-7 8a2 2 0 10-4 0 2 2 0 004 0zm14 0a2 2 0 10-4 0 2 2 0 004 0zm-7 4a2 2 0 10-4 0 2 2 0 004 0zM12 8v8m-5.684-3.504l4.368-4.992m7 4.992l-4.366-4.99"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default BinaryTree2Icon;
/* prettier-ignore-end */
