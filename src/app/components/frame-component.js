"use client";

import { Property } from "csstype";
import styled from "styled-components";

const FrameDivRoot = styled.div`position: relative;
  border-radius: var(--br-2xs);
  border: 1px solid var(--color-black);
  box-sizing: border-box;
  width: 620px;
  height: 63px;
  overflow: hidden;
  position: ${(p) => p.frameDivPosition};
  width: ${(p) => p.frameDivWidth};
  height: ${(p) => p.frameDivHeight};
  top: ${(p) => p.frameDivTop};
  right: ${(p) => p.frameDivRight};
  left: ${(p) => p.frameDivLeft};
  box-sizing: ${(p) => p.frameDivBoxSizing};
  align-self: ${(p) => p.frameDivAlignSelf};
  flex: ${(p) => p.frameDivFlex};
  flex-shrink: ${(p) => p.frameDivFlexShrink};
`;
const FrameComponent = ({
  frameDivPosition,
  frameDivWidth,
  frameDivHeight,
  frameDivTop,
  frameDivRight,
  frameDivLeft,
  frameDivBoxSizing,
  frameDivAlignSelf,
  frameDivFlex,
  frameDivFlexShrink,
}) => {
  return (
    <FrameDivRoot
      frameDivPosition={frameDivPosition}
      frameDivWidth={frameDivWidth}
      frameDivHeight={frameDivHeight}
      frameDivTop={frameDivTop}
      frameDivRight={frameDivRight}
      frameDivLeft={frameDivLeft}
      frameDivBoxSizing={frameDivBoxSizing}
      frameDivAlignSelf={frameDivAlignSelf}
      frameDivFlex={frameDivFlex}
      frameDivFlexShrink={frameDivFlexShrink}
    />
  );
};

export default FrameComponent;
