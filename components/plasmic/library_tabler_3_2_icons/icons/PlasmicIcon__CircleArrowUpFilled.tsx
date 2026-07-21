/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type CircleArrowUpFilledIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function CircleArrowUpFilledIcon(props: CircleArrowUpFilledIconProps) {
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
          "M17 3.34a10 10 0 11-14.995 8.984L2 12l.005-.324A10 10 0 0117 3.34zM12.02 7l-.163.01-.086.016-.142.045-.113.054-.07.043-.095.071-.058.054-4 4-.083.094a1 1 0 001.497 1.32L11 10.414V16l.007.117A1 1 0 0013 16v-5.585l2.293 2.292.094.083a1 1 0 001.32-1.497l-4-4-.082-.073-.089-.064-.113-.062-.081-.034-.113-.034-.112-.02L12.019 7h.001z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default CircleArrowUpFilledIcon;
/* prettier-ignore-end */
