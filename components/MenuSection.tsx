import * as React from "react";
import {
  PlasmicMenuSection,
  DefaultMenuSectionProps
} from "./plasmic/eco_munity_cleanup_tracker/PlasmicMenuSection";

export interface MenuSectionProps extends DefaultMenuSectionProps {}

function MenuSection(props: MenuSectionProps) {

  return <PlasmicMenuSection {...props} />;
}

export default MenuSection;
