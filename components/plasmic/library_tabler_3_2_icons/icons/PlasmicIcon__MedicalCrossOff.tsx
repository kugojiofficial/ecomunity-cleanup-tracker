/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type MedicalCrossOffIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function MedicalCrossOffIcon(props: MedicalCrossOffIconProps) {
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
          "M17.928 17.733l-.574-.331L14 15.464V20a1 1 0 01-1 1h-2a1 1 0 01-1-1v-4.536l-3.928 2.268a1 1 0 01-1.366-.366l-1-1.732a1 1 0 01.366-1.366L7.999 12 4.072 9.732a1 1 0 01-.366-1.366l1-1.732a1 1 0 011.366-.366l.333.192M10 6V4a1 1 0 011-1h2a1 1 0 011 1v4.535l3.928-2.267a1 1 0 011.366.366l1 1.732a1 1 0 01-.366 1.366L16.001 12l3.927 2.269a1 1 0 01.366 1.366l-.24.416M3 3l18 18"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default MedicalCrossOffIcon;
/* prettier-ignore-end */
