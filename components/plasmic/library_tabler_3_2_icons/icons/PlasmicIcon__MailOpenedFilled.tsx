/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type MailOpenedFilledIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function MailOpenedFilledIcon(props: MailOpenedFilledIconProps) {
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
          "M14.872 14.287l6.522 6.52a2.996 2.996 0 01-2.218 1.188L19 22H5a2.995 2.995 0 01-2.394-1.191l6.521-6.522 2.318 1.545.116.066a1 1 0 00.878 0l.116-.066 2.317-1.545zM2 9.535l5.429 3.62L2 18.585v-9.05zm20 0v9.05l-5.43-5.43L22 9.535zm-9.56-7.433l.115.066 8.444 5.629-8.999 6-9-6 8.445-5.63a1 1 0 01.995-.065z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default MailOpenedFilledIcon;
/* prettier-ignore-end */
