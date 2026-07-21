/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type CalendarIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function CalendarIcon(props: CalendarIconProps) {
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
        fill={"currentColor"}
        fillRule={"evenodd"}
        d={
          "M7 2a1 1 0 0 0-1 1v1.001c-.961.014-1.34.129-1.721.333a2.27 2.27 0 0 0-.945.945C3.116 5.686 3 6.09 3 7.205v10.59c0 1.114.116 1.519.334 1.926s.538.727.945.945S5.09 21 6.205 21h11.59c1.114 0 1.519-.116 1.926-.334s.727-.538.945-.945.334-.811.334-1.926V7.205c0-1.115-.116-1.519-.334-1.926a2.27 2.27 0 0 0-.945-.945C19.34 4.13 18.961 4.015 18 4V3a1 1 0 1 0-2 0v1H8V3a1 1 0 0 0-1-1M5 9v8.795c0 .427.019.694.049.849.012.06.017.074.049.134a.3.3 0 0 0 .124.125c.06.031.073.036.134.048.155.03.422.049.849.049h11.59c.427 0 .694-.019.849-.049a.4.4 0 0 0 .134-.049.3.3 0 0 0 .125-.124.4.4 0 0 0 .048-.134c.03-.155.049-.422.049-.849L19.004 9zm8.75 4a.75.75 0 0 0-.75.75v2.5c0 .414.336.75.75.75h2.5a.75.75 0 0 0 .75-.75v-2.5a.75.75 0 0 0-.75-.75z"
        }
        clipRule={"evenodd"}
      ></path>
    </svg>
  );
}

export default CalendarIcon;
/* prettier-ignore-end */
