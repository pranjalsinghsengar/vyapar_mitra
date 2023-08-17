"use client";
import Header from "./components/header";
import styled from "styled-components";
import ApplyForm from "./components/apply-form";
import HomeSection from "./components/home-section";
import { useRouter } from "next/navigation";
import { useCallback } from "react";
import Global from "./global";
import LeftRightContainer, {
  H1,
  Container,
  LeftContainer,
  RightContainer,
} from "./components/LeftRightContainer";
import Director from "./components/Director";
// import { Container } from "postcss";

const Desktop8Child = styled.img`
  position: absolute;
  top: 4.74rem;
  left: 44.97rem;
  width: 0.12rem;
  height: 0.27rem;
`;
const WhatsappImage20230813At1 = styled.img`
  position: relative;
  width: 11.06rem;
  height: 6.89rem;
  object-fit: cover;
`;
const MithshaVyaparSanchar = styled.div`
  position: relative;
  font-weight: 600;
  display: inline-block;
  width: 29.38rem;
  height: 3.19rem;
  flex-shrink: 0;
`;
const WhatsappImage20230813At1Parent = styled.div`

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 1.13rem;
  font-size: var(--font-size-13xl);
`;
const AboutCompany = styled.div`

  font-weight: 800;
  width: 16.75rem;
  height: 3.63rem;
`;
const IndiaFacedMassive = styled.p`
  margin: 0;
`;
const IndiaFacedMassiveContainer = styled.div`
  position: absolute;
  width: 96.73%;
  top: 3.25rem;
  left: 3.27%;
  font-size: var(--font-size-base);
  font-weight: 300;
  color: var(--color-black);
  display: inline-block;
  height: 21.69rem;
`;
const AboutText = styled.div`
  position: absolute;
  width: 48.24%;
  top: 1.63rem;
  right: 51.76%;
  left: 0%;
  height: 24.94rem;
`;
const AboutContainerChild = styled.img`
  position: absolute;
  width: 52.39%;
  top: calc(50% - 225.5px);
  right: 0%;
  left: 47.61%;
  max-width: 100%;
  overflow: hidden;
  height: 28.19rem;
`;
const AboutContainer = styled.div`
  position: absolute;
  width: 84.1%;
  top: 44.2rem;
  right: 7.95%;
  left: 7.95%;
  height: 28.19rem;
  font-size: var(--font-size-13xl);
  color: var(--color-mediumblue);
`;
const Programme = styled.div`
  position: absolute;
  top: 0rem;
  left: 0.13rem;
  font-weight: 800;
  display: inline-block;
  width: 19.25rem;
  height: 3.94rem;
`;
const Image19Icon = styled.img`
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0%;
  right: 0%;
  bottom: 0%;
  left: 0%;
  max-width: 100%;
  overflow: hidden;
  max-height: 100%;
  object-fit: cover;
`;
const Image19Wrapper = styled.div`
  position: absolute;
  top: 1.38rem;
  left: 0rem;
  width: 35.63rem;
  height: 23.63rem;
`;
const WithThisProgramEveryPerso = styled.img`
  position: absolute;
  width: 46.78%;
  top: calc(50% - 210px);
  right: 0%;
  left: 53.22%;
  max-width: 100%;
  overflow: hidden;
  height: 26.25rem;
`;
const FrameParent = styled.div`
  position: absolute;
  width: 100%;
  top: 4.86rem;
  right: 0%;
  left: 0%;
  height: 27.38rem;
`;
const Progameecontainer = styled.div`
  position: absolute;
  width: 84.17%;
  top: 73.33rem;
  right: 7.92%;
  left: 7.92%;
  height: 32.25rem;
  color: var(--color-mediumblue);
`;
const UpgradeSkillsToContainer = styled.div`
  position: absolute;
  width: 55.42%;
  top: calc(50% - 167.81px);
  left: 0%;
  font-weight: 300;
  display: inline-block;
`;
const FrameChild = styled.img`
  position: absolute;
  height: 100%;
  width: 59.95%;
  top: 0%;
  right: 0%;
  bottom: 0%;
  left: 40.05%;
  max-width: 100%;
  overflow: hidden;
  max-height: 100%;
`;
const Mission = styled.div`
  position: absolute;
  top: 0.06rem;
  left: 0.13rem;
  font-size: var(--font-size-29xl);
  font-weight: 800;
  color: var(--color-mediumblue);
  display: inline-block;
  width: 13.69rem;
  height: 3.94rem;
  text-shadow: 0px 6px 8px rgba(0, 0, 0, 0.25);
`;
const UpgradeSkillsToIntemationalParent = styled.div`
  position: absolute;
  width: 82.71%;
  top: 106.51rem;
  right: 8.65%;
  left: 8.65%;
  height: 32.98rem;
  font-size: var(--font-size-base);
`;
const Vision = styled.div`
  position: absolute;
  top: 0rem;
  left: 0rem;
  font-weight: 800;
  display: inline-block;
  width: 13.69rem;
  height: 3.94rem;
  text-shadow: 0px 6px 8px rgba(0, 0, 0, 0.25);
`;
const Image21Icon = styled.img`
  position: absolute;
  width: 100%;
  top: calc(50% - 148.5px);
  right: 0%;
  left: 0%;
  max-width: 100%;
  overflow: hidden;
  height: 18.56rem;
  object-fit: cover;
`;
const Image21Wrapper = styled.div`
  position: absolute;
  top: 0.88rem;
  left: 0rem;
  width: 30.38rem;
  height: 18.56rem;
`;
const NsdcWasSetContainer = styled.div`
  position: absolute;
  width: 51.95%;
  top: 2.5rem;
  left: 48.05%;
  font-weight: 300;
  display: inline-block;
`;
const FrameGroup = styled.div`
  position: absolute;
  width: 100%;
  top: calc(50% - 104.5px);
  right: 0%;
  left: 0%;
  height: 20.31rem;
  font-size: var(--font-size-base);
  color: var(--color-black);
`;
const VisionParent = styled.div`
  position: absolute;
  width: 82.08%;
  top: 140.43rem;
  right: 8.96%;
  left: 8.96%;
  height: 27.56rem;
  color: var(--color-mediumblue);
`;
const Objective1 = styled.div`
  position: absolute;
  top: 168.93rem;
  left: 42.01%;
  font-weight: 800;
  color: var(--color-mediumblue);
`;
const ToContributeSignificantly1 = styled.p`
  margin-block-start: 0;
  margin-block-end: 26px;
`;
const ToContributeSignificantlyContainer = styled.div`
  position: absolute;
  width: 55%;
  top: 173.49rem;
  left: 22.5%;
  font-size: var(--font-size-base);
  letter-spacing: 0.28em;
  line-height: 199.02%;
  font-weight: 300;
  text-align: center;
  display: inline-block;
  height: 11.94rem;
`;
const FrameItem = styled.div`
  position: absolute;
  top: 7.26rem;
  left: 11.88rem;
  width: 5.85rem;
  height: 5.85rem;
  overflow: hidden;
`;
const BottomImg1 = styled.img`
  position: absolute;
  height: 58.1%;
  width: 13.59%;
  top: 20.95%;
  right: 68.83%;
  bottom: 20.95%;
  left: 17.58%;
  max-width: 100%;
  overflow: hidden;
  max-height: 100%;
  object-fit: cover;
`;
const AshishPratapSingh = styled.div`
  position: absolute;
  width: 25.63%;
  top: calc(50% + 21.07px);
  left: 42.34%;
  display: inline-block;
  height: 2.58rem;
`;
// const Director = styled.div`
//   /* position: absolute; */
//   width: 15.32%;
//   top: calc(50% - 31.37px);
//   /* left: 42.34%; */
//   display: inline-block;
//   height: 2.58rem;
// `;
const FrameContainer = styled.div`
  position: absolute;
  width: 75.12%;
  top: 186.37rem;
  right: 12.44%;
  left: 12.44%;
  border-radius: 24.35px;
  background-color: var(--color-powderblue);
  height: 18.44rem;
  overflow: hidden;
  font-size: var(--font-size-9xl);
`;
const FrameInner = styled.div`
  position: absolute;
  top: 7.21rem;
  left: 11.8rem;
  width: 5.81rem;
  height: 5.81rem;
  overflow: hidden;
`;
// const Director1 = styled.div`
//   position: absolute;
//   width: 13.87%;
//   top: calc(50% - 41.45px);
//   left: 41.06%;
//   display: inline-block;
//   height: 2.56rem;
// `;
const WhatsappImage20230813At11 = styled.img`
  position: absolute;
  height: 59.75%;
  top: 25.29%;
  bottom: 14.96%;
  left: 11.81rem;
  max-height: 100%;
  width: 8.88rem;
  object-fit: cover;
`;
const AnuradhaSrivastava = styled.div`
  position: absolute;
  top: calc(50% + 15.55px);
  left: 41.07%;
  transform: rotate(0.19deg);
  transform-origin: 0 0;
`;
const FrameDiv = styled.div`
  position: absolute;
  width: 74.58%;
  top: 205.74rem;
  right: 12.71%;
  left: 12.71%;
  border-radius: 24.18px;
  background-color: var(--color-powderblue);
  height: 18.31rem;
  overflow: hidden;
  font-size: 1.74rem;
`;
const ContactNumber = styled.div`
  position: absolute;
  top: calc(50% + 65px);
  left: 24.67%;
  font-weight: 300;
`;
const Address = styled.p`
  margin: 0;
  font-weight: 600;
`;
const Sector5 = styled.p`
  margin: 0;
  font-weight: 200;
`;
const Address5539SectorContainer = styled.div`
  position: absolute;
  width: 92.32%;
  top: 8.26%;
  left: 3.84%;
  display: inline-block;
`;
const ContactNumber0522350397Parent = styled.div`
  position: absolute;
  width: 68.68%;
  top: 224.99rem;
  right: 15.66%;
  left: 15.66%;
  border-radius: 14px;
  background-color: var(--color-white);
  box-shadow: 0px 4px 9px rgba(0, 0, 0, 0.25);
  height: 15.13rem;
  font-size: var(--font-size-10xl-9);
`;
const Desktop8Root = styled.div`
  position: relative;
  background-color: var(--color-white);
  width: 100%;

  /* height: 268.49rem; */
  overflow: hidden;
  text-align: left;
  font-size: var(--font-size-29xl);
  color: var(--color-black);
  font-family: var(--font-inter);
`;
const ClickHere = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1px;
  font-size: 1.5rem;
  /* width: 100px; */
  background: var(--color_royalblue);
`;

const ObjectPera = styled.p`
  margin: 10px;
  width: 80%;
  font-size: 1.8rem;
  color: #000;
  text-align: center;
  font-family: Inter;
  font-size: 16px;
  font-style: normal;
  font-weight: 300;
  line-height: 199.023%; /* 31.844px */
  letter-spacing: 4.56px;
`;
const AddressContainer = styled.div`
  margin-top: 30px;
  display: flex;
  width: 989px;
  padding: 20px 38px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 58px;
  border-radius: 14px;
  background: #fff;
  box-shadow: 0px 4px 9px 0px rgba(0, 0, 0, 0.25);
`;
const H2 = styled.h2`
  font-size: 2rem;
  font-weight: 700;
`;
const P = styled.p`
  font-size: 2rem;
  font-weight: 200;
`;

// ====================================================================

const Desktop8 = () => {
  const router = useRouter();

  const onFrameContainer13Click = useCallback(() => {
    router.push("/desktop13");
  }, [router]);

  return (
    <Desktop8Root>
      <Global />
      <Header />
      <Desktop8Child alt='' src='/line-5.svg' />

      <div style={{ position: "relative"}}>
        <WhatsappImage20230813At1Parent>
          <WhatsappImage20230813At1
            alt=''
            src='/whatsapp-image-20230813-at-1650-1@2x.png'
          />
          <MithshaVyaparSanchar>MITHSHA VYAPAR SANCHAR</MithshaVyaparSanchar>
        </WhatsappImage20230813At1Parent>
      </div>
      {/* <div style={{ position: "relative", width: "100%", height: "29.5rem" }}>
        <ApplyForm />
      </div> */}

      {/* <Container>
        <LeftContainer>
          <img src={{}} alt='' />
        </LeftContainer>
        <RightContainer style={{}}>
          <h1> CLick Here to Apply</h1>
          <p>
            {" "}
            <ClickHere>Apply</ClickHere>{" "}
          </p>
        </RightContainer>
      </Container> */}

      {/* Code from here */}
      <div
        style={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          gap: "10px",
          position: "relative",
        }}
      >
        <LeftRightContainer
          Heading='About'
          flexDirection='row'
          Img_source='/AboutCompany.png'
          pera='India faced massive unemployment during the covid pandemic. One of the
          worst hit sectors was the impact of the unorganized sector, firstly
          due to sudden countrywide lockdown and then economic crisis. While
          some of them managed to get back to work, many are yet to recover,
          like roadside shop owners, beauty parlors, vegetable vendors, etc., as
          they took loans to survive and had to sell their equipment or whatever
          assets they had to repay. « The Coronavirus pandemic has wrecked the
          lives and livelihoods of millions of people in India, especially those
          in major cities in urban areas, who had once left their
          hometown/villages in search for work here. « Self-employed workers and
          casual wage workers are most affected with 84% and 81% losing their
          employment, respectively. « Atotal of 89% of the urban households
          reported that they would not be able to pay rent for the following
          month'
        />
 <LeftRightContainer
          Heading='Programme'
          flexDirection='row-reverse'
          Img_source='/AboutCompany.png'
          pera='India faced massive unemployment during the covid pandemic. One of the
          worst hit sectors was the impact of the unorganized sector, firstly
          due to sudden countrywide lockdown and then economic crisis. While
          some of them managed to get back to work, many are yet to recover,
          like roadside shop owners, beauty parlors, vegetable vendors, etc., as
          they took loans to survive and had to sell their equipment or whatever
          assets they had to repay. « The Coronavirus pandemic has wrecked the
          lives and livelihoods of millions of people in India, especially those
          in major cities in urban areas, who had once left their
          hometown/villages in search for work here. « Self-employed workers and
          casual wage workers are most affected with 84% and 81% losing their
          employment, respectively. « Atotal of 89% of the urban households
          reported that they would not be able to pay rent for the following
          month'
        />

        <LeftRightContainer
          Heading='Mission'
          flexDirection='row'
          Img_source='/Frame 52.png'
          pera=' » Upgrade skills to Intemational standards through significant industry involvement and develop necessary frameworks for standards, curriculum and
          quality assurance.
          
          » Enhance, support and coordinate private sector initiatives for skill development through appropriate Public-Private Partnership ( PPP) models:
          strive for significant operational and financial involvement from private sector.
          
          » Play the role of a ‘market-maker’ by bringing funds, particularly in sectors where market mechanisms are ineffective or missing.
          » Prioritise initiatives that can have a multiplier or catalytic effect as opposed to one-off impact.
          Objective
          
          To contribute significantly to the overall target of skilling up of people in India, mainly by fostering private sector initiatives in skill de
          programmes and to provide funding.
          '
        />

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            width: "60%",
          }}
        >
          <H1>Objective</H1>
          <ObjectPera>
            To contribute significantly to the overall target of skilling up of
            people in India, mainly by fostering private sector initiatives in
            skill de programmes and to provide funding.
          </ObjectPera>

          <Director Img_Url={{}} Director_Name='Ashish Pratap Singh' />
          <Director Img_Url={{}} Director_Name='Anuradha Srivastava' />

          <AddressContainer>
            <P>
              <H2>Address</H2>
              5/539, Sector - 5, Gomti Nagar Extension, Lucknow (U.P.) 226010{" "}
            </P>
            <P>Contact Number - 0522 - 3503970</P>
          </AddressContainer>
        </div>
      </div>
      {/* <FrameContainer>
        <FrameItem />
        <BottomImg1 alt='' src='/bottom-img-1@2x.png' />
        <AshishPratapSingh>Ashish Pratap Singh</AshishPratapSingh>
        <Director>Director :</Director>
      </FrameContainer>
      <FrameDiv>
        <FrameInner />
        <Director1>Director :</Director1>
        <WhatsappImage20230813At11
          alt=''
          src='/whatsapp-image-20230813-at-1738-1@2x.png'
        />
        <AnuradhaSrivastava>Anuradha Srivastava</AnuradhaSrivastava>
      </FrameDiv>
      <ContactNumber0522350397Parent>
        <ContactNumber>Contact Number - 0522 - 3503970</ContactNumber>
        <Address5539SectorContainer>
          <Address>Address</Address>
          <IndiaFacedMassive>&nbsp;</IndiaFacedMassive>
          <Sector5>
            5/539, Sector - 5, Gomti Nagar Extension, Lucknow (U.P.) 226010
          </Sector5>
        </Address5539SectorContainer>
      </ContactNumber0522350397Parent> */}
      {/* <HomeSection /> */}
      <div
        style={{ height: "150px", background: "black", marginTop: "30px" }}
      ></div>
    </Desktop8Root>
  );
};

export default Desktop8;
