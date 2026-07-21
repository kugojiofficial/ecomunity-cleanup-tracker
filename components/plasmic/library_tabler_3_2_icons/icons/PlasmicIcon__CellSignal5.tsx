/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type CellSignal5IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function CellSignal5Icon(props: CellSignal5IconProps) {
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
          "M20 20H4.731a.731.731 0 01-.517-1.249L18.751 4.214A.731.731 0 0120 4.731V20zM16 7v13m-4 0v-9m-4 9v-5"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default CellSignal5Icon;
/* prettier-ignore-end */
