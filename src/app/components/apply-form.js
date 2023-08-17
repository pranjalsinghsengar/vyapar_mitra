import { useCallback } from "react";
import styled from "styled-components";
import { useRouter } from "next/navigation";

const FrameChild = styled.img`
  position: absolute;
  top: 20.85rem;
  left: -5.25rem;
  border-radius: 14.94px;
  width: 32.25rem;
  height: 16.97rem;
  display: none;
`;
const FrameItem = styled.img`
  position: absolute;
  top: 5.86rem;
  left: 29.61rem;
  border-radius: 86.56px;
  width: 10.82rem;
  height: 10.84rem;
`;
const FrameInner = styled.img`
  position: absolute;
  top: 3.19rem;
  left: 2.91rem;
  border-radius: 37.94px;
  width: 4.74rem;
  height: 4.75rem;
`;
const PolygonIcon = styled.img`
  position: absolute;
  top: 6.5rem;
  left: 66.98rem;
  border-radius: 37.94px;
  width: 4.74rem;
  height: 4.75rem;
`;
const FrameChild1 = styled.img`
  position: absolute;
  top: 22.19rem;
  left: 14.48rem;
  border-radius: 37.94px;
  width: 4.74rem;
  height: 4.75rem;
`;
const FrameChild2 = styled.img`
  position: absolute;
  top: 17.19rem;
  left: 47.79rem;
  border-radius: 37.94px;
  width: 4.74rem;
  height: 4.75rem;
`;
const RectangleDiv = styled.div`
  position: absolute;
  width: 99.84%;
  top: 0rem;
  right: 0%;
  left: 0.16%;
  background-color: var(--color-gray-400);
  backdrop-filter: blur(94px);
  height: 29.5rem;
`;
const Image18Icon = styled.img`
  position: absolute;
  height: 64.41%;
  width: 68.57%;
  top: 17.8%;
  right: 15.72%;
  bottom: 17.8%;
  left: 15.72%;
  max-width: 100%;
  overflow: hidden;
  max-height: 100%;
  object-fit: cover;
`;
const Image18Wrapper = styled.div`
  position: absolute;
  height: 100%;
  width: 51.18%;
  top: 0%;
  right: 48.82%;
  bottom: 0%;
  left: 0%;
  backdrop-filter: blur(26px);
`;
const ClickHereFor = styled.div`
  position: relative;
  font-weight: 600;
`;
const ClickHereForApplyWrapper = styled.div`
  position: absolute;
  top: 8.31rem;
  left: 0rem;
  border-radius: 7.86px;
  background-color: var(--color-royalblue);
  display: flex;
  flex-direction: row;
  padding: 0.45rem 1.25rem;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;
const ClickHereTo = styled.div`
  position: absolute;
  width: 100%;
  top: 0rem;
  left: 0%;
  font-size: 2.75rem;
  font-weight: 600;
  display: inline-block;
`;
const FrameParent = styled.div`
  position: absolute;
  width: 31.73%;
  top: calc(50% - 95px);
  right: 7.16%;
  left: 61.11%;
  height: 10.96rem;
`;
const PolygonParentRoot = styled.div`
  position: absolute;
  width: 85.35%;
  top: 10px;
  /* right: 7.29%; */
  /* left: 7.36%; */
  border-radius: var(--br-xs);
  background-color: var(--color-white);
  box-shadow: 0px 4px 14px rgba(0, 0, 0, 0.25);
  height: 29.5rem;
  overflow: hidden;
  text-align: left;
  font-size: 1.43rem;
  color: var(--color-black);
  font-family: var(--font-inter);
`;
const ApplyForm = () => {
  const router = useRouter();

  const onFrameContainer13Click = useCallback(() => {
    router.push("/desktop13");
  }, [router]);

  return (
    <PolygonParentRoot>
      <FrameChild alt='' src='/polygon-4.svg' />
      <FrameItem alt='' src='/polygon-5.svg' />
      <FrameInner alt='' src='/polygon-6.svg' />
      <PolygonIcon alt='' src='/polygon-6.svg' />
      <FrameChild1 alt='' src='/polygon-6.svg' />
      <FrameChild2 alt='' src='/polygon-6.svg' />
      <RectangleDiv />
      <Image18Wrapper>
        <Image18Icon alt='' src='/image-18@2x.png' />
      </Image18Wrapper>
      <FrameParent>
        <ClickHereForApplyWrapper onClick={onFrameContainer13Click}>
          <ClickHereFor>Click Here For Apply</ClickHereFor>
        </ClickHereForApplyWrapper>
        <ClickHereTo>CLick Here to Apply</ClickHereTo>
      </FrameParent>
    </PolygonParentRoot>
  );
};

export default ApplyForm;
