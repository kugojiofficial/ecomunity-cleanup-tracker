/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type ClockHour10FilledIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function ClockHour10FilledIcon(props: ClockHour10FilledIconProps) {
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
          "M17 3.34A10 10 0 112 12l.005-.324A10 10 0 0117 3.34zm-5.401 9.576l.052.021.08.026.08.019.072.011L12 13l.076-.003.135-.02.082-.02.103-.039.073-.035.078-.046.06-.042.08-.069.083-.088.062-.083.053-.09.031-.064.032-.081.03-.109.015-.094L13 12V7a1 1 0 00-2 0v3.131l-1.445-.963a1 1 0 00-1.317.184l-.07.093a1 1 0 00.277 1.387l3.038 2.024.116.06z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default ClockHour10FilledIcon;
/* prettier-ignore-end */
