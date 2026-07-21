/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type CookieOffIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function CookieOffIcon(props: CookieOffIconProps) {
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
          "M8 13v.01M12 17v.01M12 12v.01m6.192 6.177c-.28.28-.61.501-.976.652-1.048.263-1.787.483-2.216.661-.475.197-1.092.538-1.852 1.024a3 3 0 01-2.296 0C10.05 20.021 9.433 19.68 9 19.5c-.471-.195-1.21-.415-2.216-.66a3 3 0 01-1.623-1.624c-.265-1.052-.485-1.79-.661-2.216-.198-.479-.54-1.096-1.024-1.852a3 3 0 010-2.296c.48-.744.82-1.361 1.024-1.852.171-.413.391-1.152.66-2.216a3 3 0 01.649-.971M8.63 4.639c.14-.049.263-.095.37-.139.458-.19 1.075-.531 1.852-1.024a3 3 0 012.296 0l2.667 1.104a4 4 0 004.656 6.14l.053.132a3 3 0 010 2.296c-.497.786-.838 1.404-1.024 1.852a6.6 6.6 0 00-.135.36M3 3l18 18"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default CookieOffIcon;
/* prettier-ignore-end */
