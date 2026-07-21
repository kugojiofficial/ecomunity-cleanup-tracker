/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type ClockHour11FilledIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function ClockHour11FilledIcon(props: ClockHour11FilledIconProps) {
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
          "M17 3.34A10 10 0 112 12l.005-.324A10 10 0 0117 3.34zm-4.952 9.659l.069-.006.096-.016.089-.023.099-.038.082-.04.113-.073.073-.06.074-.074.075-.094.052-.08.035-.07.051-.132.031-.135.01-.082L13 12V7a1 1 0 00-2 0v1.697l-.168-.252a1 1 0 00-1.286-.336l-.1.059a1 1 0 00-.278 1.387l2.018 3.027.07.087.075.074.094.075.08.052.07.035.132.051.135.031.082.01.124.002z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default ClockHour11FilledIcon;
/* prettier-ignore-end */
