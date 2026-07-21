/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type BadgeArFilledIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function BadgeArFilledIcon(props: BadgeArFilledIconProps) {
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
          "M19 4a3 3 0 013 3v10a3 3 0 01-3 3H5a3 3 0 01-3-3V7a3 3 0 013-3h14zM8.5 8A2.5 2.5 0 006 10.5V15a1 1 0 102 0v-1h1v1a1 1 0 00.883.993L10 16a1 1 0 001-1v-4.5A2.5 2.5 0 008.5 8zm7 0H14a1 1 0 00-1 1v6a1 1 0 001 1l.117-.007A1 1 0 0015 15v-1.196l1.168 1.75a.999.999 0 001.387.278l.093-.07a1 1 0 00.184-1.317l-1.159-1.738.044-.023A2.5 2.5 0 0015.5 8zm-7 2a.5.5 0 01.5.5V12H8v-1.5a.5.5 0 01.41-.492L8.5 10zm7 0a.5.5 0 010 1H15v-1h.5z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default BadgeArFilledIcon;
/* prettier-ignore-end */
