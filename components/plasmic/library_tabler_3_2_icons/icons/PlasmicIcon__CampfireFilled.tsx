/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type CampfireFilledIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function CampfireFilledIcon(props: CampfireFilledIconProps) {
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
          "M19.757 16.03a1 1 0 01.597 1.905l-.111.035-16 4a1 1 0 01-.597-1.905l.111-.035 16-4z"
        }
        fill={"currentColor"}
      ></path>

      <path
        d={
          "M3.03 16.757a1 1 0 011.098-.749l.115.022 16 4a1 1 0 01-.37 1.962l-.116-.022-16-4a1 1 0 01-.727-1.213zM13.553 2.106C9.379 4.192 7 7.464 7 11a5 5 0 1010 0c0-1.047-.188-1.808-.606-2.705l-.169-.345-.33-.647C15.274 6.063 15 4.965 15 3a1 1 0 00-1.447-.894z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default CampfireFilledIcon;
/* prettier-ignore-end */
