/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type MedicalCrossIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function MedicalCrossIcon(props: MedicalCrossIconProps) {
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
          "M13 3a1 1 0 011 1v4.535l3.928-2.267a1 1 0 011.366.366l1 1.732a1 1 0 01-.366 1.366L16.001 12l3.927 2.269a1 1 0 01.366 1.366l-1 1.732a1 1 0 01-1.366.366L14 15.464V20a1 1 0 01-1 1h-2a1 1 0 01-1-1v-4.536l-3.928 2.268a1 1 0 01-1.366-.366l-1-1.732a1 1 0 01.366-1.366L7.999 12 4.072 9.732a1 1 0 01-.366-1.366l1-1.732a1 1 0 011.366-.366L10 8.535V4a1 1 0 011-1h2z"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default MedicalCrossIcon;
/* prettier-ignore-end */
