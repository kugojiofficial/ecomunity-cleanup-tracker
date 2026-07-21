/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type BrandCashappIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function BrandCashappIcon(props: BrandCashappIconProps) {
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
          "M17.1 8.648a.568.568 0 01-.761.011 5.682 5.682 0 00-3.659-1.34c-1.102 0-2.205.363-2.205 1.374 0 1.023 1.182 1.364 2.546 1.875 2.386.796 4.363 1.796 4.363 4.137 0 2.545-1.977 4.295-5.204 4.488l-.295 1.364a.557.557 0 01-.546.443H9.305l-.102-.011a.568.568 0 01-.432-.67l.318-1.444a7.432 7.432 0 01-3.273-1.784v-.011a.545.545 0 010-.773l1.137-1.102c.214-.2.547-.2.761 0a5.495 5.495 0 003.852 1.5c1.478 0 2.466-.625 2.466-1.614 0-.989-1-1.25-2.886-1.954-2-.716-3.898-1.728-3.898-4.091 0-2.75 2.284-4.091 4.989-4.216l.284-1.398A.545.545 0 0113.066 3h2.023l.114.012a.543.543 0 01.42.647l-.307 1.557a8.528 8.528 0 012.818 1.58l.023.022c.216.228.216.569 0 .773L17.1 8.648z"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default BrandCashappIcon;
/* prettier-ignore-end */
