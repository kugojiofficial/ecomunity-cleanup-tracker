/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type CarFan3IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function CarFan3Icon(props: CarFan3IconProps) {
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
          "M12 12V3l4.912 1.914a1.7 1.7 0 01.428 2.925L12 12zm2.044 2.624L12 12h4m-4 0H3l1.914-4.912a1.7 1.7 0 012.925-.428L12 12zm0 0v9l-4.912-1.914a1.7 1.7 0 01-.428-2.925L12 12zm6 3.5a.5.5 0 01.5-.5h1a1.5 1.5 0 110 3m0 0H19m.5 0a1.5 1.5 0 110 3h-1a.5.5 0 01-.5-.5"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default CarFan3Icon;
/* prettier-ignore-end */
