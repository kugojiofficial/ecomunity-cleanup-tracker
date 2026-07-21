/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type PaperBagIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function PaperBagIcon(props: PaperBagIconProps) {
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
          "M8 3h8a2 2 0 012 2v1.82a5 5 0 00.528 2.236l.944 1.888A5 5 0 0120 13.18V19a2 2 0 01-2 2H6a2 2 0 01-2-2v-5.82a5 5 0 01.528-2.236L6 8V5a2 2 0 012-2z"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>

      <path
        d={
          "M12 15a2 2 0 104 0 2 2 0 00-4 0zm-6 6a2 2 0 002-2v-5.82a5 5 0 00-.528-2.236L6 8m5-1h2"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default PaperBagIcon;
/* prettier-ignore-end */
