/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type MasksTheaterIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function MasksTheaterIcon(props: MasksTheaterIconProps) {
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
          "M13.192 9h6.616a2 2 0 011.992 2.183l-.567 6.182A4 4 0 0117.25 21h-1.5a4 4 0 01-3.983-3.635l-.567-6.182A2 2 0 0113.192 9zM15 13h.01M18 13h.01M15 16.5c1 .667 2 .667 3 0m-9.368-.518A4.06 4.06 0 018.25 16h-1.5a4 4 0 01-3.983-3.635L2.2 6.183A2 2 0 014.192 4h6.616a2 2 0 012 2M6 8h.01M9 8h.01M6 12c.764-.51 1.528-.63 2.291-.36"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default MasksTheaterIcon;
/* prettier-ignore-end */
