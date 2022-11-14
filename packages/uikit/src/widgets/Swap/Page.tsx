import { AtomBox, AtomBoxProps } from "@pancakeswap/ui";
import { ReactNode } from "react";
import { SwapFooter } from "./Footer";
import { pageVariants } from "./SwapWidget.css";

type SwapPageProps = AtomBoxProps & {
  removePadding?: boolean;
  hideFooterOnDesktop?: boolean;
  noMinHeight?: boolean;
  helpUrl?: string;
  isEvm?: boolean;
  helpImage?: ReactNode;
};

export const SwapPage = ({
  removePadding,
  noMinHeight,
  children,
  hideFooterOnDesktop,
  helpUrl,
  isEvm,
  helpImage,
  ...props
}: SwapPageProps) => (
  <AtomBox className={pageVariants({ removePadding, noMinHeight })} {...props}>
    {children}
  </AtomBox>
);
