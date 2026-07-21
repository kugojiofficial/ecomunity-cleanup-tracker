/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type BadgeVrFilledIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function BadgeVrFilledIcon(props: BadgeVrFilledIconProps) {
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
          "M19 4a3 3 0 013 3v10a3 3 0 01-3 3H5a3 3 0 01-3-3V7a3 3 0 013-3h14zm-3.5 4H14a1 1 0 00-1 1v6a1 1 0 001 1l.117-.007A1 1 0 0015 15v-1.196l1.168 1.75a.999.999 0 001.387.278l.093-.07a1 1 0 00.184-1.317l-1.159-1.738.044-.023A2.5 2.5 0 0015.5 8zm-4.184.051a1 1 0 00-1.265.633L9 11.838 7.949 8.684a1 1 0 00-1.898.632l2 6c.304.912 1.594.912 1.898 0l2-6a1.001 1.001 0 00-.633-1.265zM15.5 10a.5.5 0 010 1H15v-1h.5z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default BadgeVrFilledIcon;
/* prettier-ignore-end */
