/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type NavigationFilledIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function NavigationFilledIcon(props: NavigationFilledIconProps) {
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
          "M11.092 2.581a1 1 0 011.754-.116l.062.116 8.005 17.365a1.547 1.547 0 01-1.837 2.008l-7.077-2.398L5.1 21.894a1.535 1.535 0 01-1.52-.231l-.112-.1c-.398-.386-.556-.954-.393-1.556l.047-.15 7.97-17.276z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default NavigationFilledIcon;
/* prettier-ignore-end */
