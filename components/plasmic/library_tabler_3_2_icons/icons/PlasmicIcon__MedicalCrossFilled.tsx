/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type MedicalCrossFilledIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function MedicalCrossFilledIcon(props: MedicalCrossFilledIconProps) {
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
          "M11 2l-.15.005A2 2 0 009 4v2.803L6.572 5.402a2 2 0 00-2.732.732l-1 1.732-.073.138a2 2 0 00.805 2.594L5.999 12l-2.427 1.402a2 2 0 00-.732 2.732l1 1.732.083.132a2 2 0 002.649.6L9 17.196V20a2 2 0 002 2h2l.15-.005A2 2 0 0015 20v-2.804l2.428 1.403a2 2 0 002.732-.732l1-1.732.073-.138a2 2 0 00-.805-2.594L18 12l2.428-1.402a2 2 0 00.732-2.732l-1-1.732-.083-.132a2 2 0 00-2.649-.6L15 6.802V4a2 2 0 00-2-2h-2z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default MedicalCrossFilledIcon;
/* prettier-ignore-end */
