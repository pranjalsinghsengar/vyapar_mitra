"use client";
import Header from "../components/header";
import styled from "styled-components";
import ApplyForm from "../components/apply-form";
import HomeSection from "../components/home-section";
import { useRouter } from "next/navigation";
import { useCallback, useState } from "react";
import Global from "../global";
import Link from "next/link";
import './HomePage.css';
import LeftRightContainer, {
  H1,
  Container,
  LeftContainer,
  RightContainer,
} from "../components/LeftRightContainer";
import Director from "../components/Director";
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
  width: 20%;
  object-fit: cover;
`;
const MithshaVyaparSanchar = styled.div`
  position: relative;
  font-weight: 600;
  display: inline-block;
  ${'' /* width: 29.38rem; */}
  ${'' /* height: 3.19rem; */}
  flex-shrink: 0;
  @media (max-width: 600px) {
    font-size: 1rem;
  }
`;
const LogoContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 1.13rem;
  font-size: 2rem;
`;

// const Director = styled.div`
//   /* position: absolute; */
//   width: 15.32%;
//   top: calc(50% - 31.37px);
//   /* left: 42.34%; */
//   display: inline-block;
//   height: 2.58rem;
// `;

const Desktop8Root = styled.div`
  position: relative;
  background-color: var(--color-white);
  width: 100%;

  /* height: 268.49rem; */
  overflow: hidden;
  text-align: left;
  font-size: var(--font-size-29xl);
  color: var(--color-black);
  /* font-family: var(--font-inter); */
`;

const ClickHere_Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  font-weight: 500;

  @media (max-width: 600px) {
  }
`;
const ClickHere = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px 50px;
  border-radius: 50px;
  font-size: 1.5rem;
  /* width: 100px; */
  background: var(--color_royalblue);
  margin: 20px 0;
  @media (max-width: 600px) {
    font-size: 1rem;
    margin: 10px;
  }
`;
const ObjectiveContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 60%;
  /* background: var(--color_royalblue); */
  @media (max-width: 600px) {
    width: 100%;
  }
`;

const ObjectPera = styled.p`
  margin: 10px;
  width: 80%;
  font-size: 1.8rem;
  color: #000;
  text-align: center;
  /* font-family: Inter; */
  font-size: 16px;
  font-style: normal;
  font-weight: 300;
  line-height: 199.023%; /* 31.844px */
  letter-spacing: 4.56px;
`;
const AddressContainer = styled.div`
  margin-top: 30px 0;
  display: flex;
  width: 90%;
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
  @media (max-width: 600px) {
    font-size: 1.5rem;
  }
`;
const P = styled.p`
  font-size: 2rem;
  font-weight: 100;
  @media (max-width: 600px) {
    font-size: 1.2rem;
  }
`;
const LangContainer = styled.div`
  width: 70%;
  height: 70%;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  z-index: 999;
  background: #a7c5fc50;
  backdrop-filter: blur(15px);
  -webkit-backdrop-filter: blur(15px);
  font-size: 1.5rem;
`;
const ButtonLan = styled.div`
  background: #5d8bdab9;
  padding: 5px 20px;
  border-radius: 20px;
  display: flex;
  justify-content: center;
  cursor: pointer;
`;
export const FormContainer = styled.div`
  width: 80%;
  height: 40%;
  margin: 20px 0;
  /* background-color: pink; */
  display: flex;
  flex-direction: ${(props) => props.flexDirection};
  align-items: center;
  justify-content: space-around;
  position: relative;
  @media (max-width: 600px) {
    width: 100%;
  }
`;
// ====================================================================

const HomePage = () => {
  const router = useRouter();

  const onFrameContainer13Click = useCallback(() => {
    router.push("/desktop13");
  }, [router]);
  const [language, setLanguage] = useState(null);

  const handleLanguageChange = (selectedLanguage) => {
    setLanguage(selectedLanguage);
  };
  return (
    <Desktop8Root>
      {language === null && (
        <LangContainer className={{}}>
          <div style={{ display: "flex", gap: 20, alignItems: "center" }}>
            <span>Select a language:</span>
            <div style={{ display: "flex", gap: 20 }}>
              <ButtonLan onClick={() => handleLanguageChange("hindi")}>
                Hindi
              </ButtonLan>
              <ButtonLan onClick={() => handleLanguageChange("english")}>
                English
              </ButtonLan>
            </div>
          </div>
        </LangContainer>
      )}
      <Global />
      <Header />
      <Desktop8Child alt='' src='/line-5.svg' />
      <div style={{}}>

        <div></div>
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
        <div className="LogoContainer">

          <WhatsappImage20230813At1
            alt=''
            src='/whatsapp-image-20230813-at-1650-1@2x.png'
          />
          <MithshaVyaparSanchar>
            {language === "english"
              ? " MITHSHA VYAPAR SANCHAR"
              : "मिथशा व्यापार संचार"}{" "}
          </MithshaVyaparSanchar>
        </div>
        <FormContainer id='certificate' className='certificate'>
          <LeftContainer>
            <img src='/Frame 57.png' alt='' />
          </LeftContainer>
          <RightContainer>
            <ClickHere_Container style={{ flexDirection: "column" }}>
              <h1>
                {" "}
                {language === "english"
                  ? "Fill The Form To Apply"
                  : "आवेदन करने के लिए फॉर्म भरें"}
              </h1>{" "}
              <Link href='/Form'>
                <ClickHere>Apply</ClickHere>{" "}
              </Link>
            </ClickHere_Container>
          </RightContainer>
        </FormContainer>

        <LeftRightContainer
          id='About'
          Heading={language === "english" ? "About" : "बारे में "}
          flexDirection='row'
          Img_source='/AboutCompany.png'
          pera={
            language === "english"
              ? "India faced massive unemployment during the covid pandemic. One of the worst hit sectors was the impact of the unorganized sector, firstlydue to sudden countrywide lockdown and then economic crisis. Whilesome of them managed to get back to work, many are yet to recover,like roadside shop owners, beauty parlors, vegetable vendors, etc., asthey took loans to survive and had to sell their equipment or whateverassets they had to repay. « The Coronavirus pandemic has wrecked the lives and livelihoods of millions of people in India, especially those in major cities in urban areas, who had once left their hometown/villages in search for work here. « Self-employed workers and casual wage workers are most affected with 84% and 81% losing their employment, respectively. « Atotal of 89% of the urban households reported that they would not be able to pay rent for the following month"
              : "भारत को कोविड महामारी के दौरान बड़े पैमाने पर बेरोजगारी का सामना करना पड़ा। सबसे बुरी तरह प्रभावित क्षेत्रों में से एक असंगठित क्षेत्र का प्रभाव था, मुख्य रूप से अचानक देशव्यापी तालाबंदी और फिर आर्थिक संकट के कारण। जबकि उनमें से कुछ काम पर वापस आने में कामयाब रहे, कई अभी भी ठीक नहीं हुए हैं, जैसे सड़क किनारे दुकान के मालिक, ब्यूटी पार्लर, सब्जी विक्रेता, आदि, क्योंकि उन्होंने जीवित रहने के लिए ऋण लिया था और उन्हें अपने उपकरण या जो भी संपत्ति चुकानी थी, उसे बेचना पड़ा। . “कोरोनावायरस महामारी ने भारत में लाखों लोगों के जीवन और आजीविका को बर्बाद कर दिया है, खासकर शहरी क्षेत्रों के प्रमुख शहरों में, जो कभी काम की तलाश में अपने गृहनगर/गांव छोड़कर यहां आए थे। स्व-रोज़गार श्रमिक और आकस्मिक वेतन वाले श्रमिक सबसे अधिक प्रभावित हुए हैं, क्रमशः 84% और 81% ने अपना रोजगार खो दिया है। « कुल 89% शहरी परिवारों ने बताया कि वे अगले महीने का किराया नहीं दे पाएंगे"
          }
        />
        <LeftRightContainer
          id='Programme'
          Heading={language === "english" ? "Programme" : " प्रोग्राम  "}
          flexDirection='row-reverse'
          Img_source='/Frame 99.png'
          pera={
            language === "english"
              ? "India faced massive unemployment during the covid pandemic. One of the worst hit sectors was the impact of the unorganized sector, firstly due to sudden countrywide lockdown and then economic crisis. While some of them managed to get back to work, many are yet to recover, like roadside shop owners, beauty parlors, vegetable vendors, etc., as they took loans to survive and had to sell their equipment or whatever assets they had to repay. « The Coronavirus pandemic has wrecked the lives and livelihoods of millions of people in India, especially those in major cities in urban areas, who had once left their hometown/villages in search for work here. « Self-employed workers and casual wage workers are most affected with 84% and 81% losing their employment, respectively. « Atotal of 89% of the urban households reported that they would not be able to pay rent for the following month"
              : "भारत को कोविड महामारी के दौरान बड़े पैमाने पर बेरोजगारी का सामना करना पड़ा। सबसे बुरी तरह प्रभावित क्षेत्रों में से एक असंगठित क्षेत्र पर प्रभाव था, पहले अचानक देशव्यापी तालाबंदी और फिर आर्थिक संकट के कारण। जबकि उनमें से कुछ काम पर वापस आने में कामयाब रहे, कई अभी भी ठीक नहीं हुए हैं, जैसे सड़क किनारे दुकान के मालिक, ब्यूटी पार्लर, सब्जी विक्रेता, आदि, क्योंकि उन्होंने जीवित रहने के लिए ऋण लिया था और उन्हें अपने उपकरण या जो भी संपत्ति चुकानी थी, उसे बेचना पड़ा। . “कोरोनावायरस महामारी ने भारत में लाखों लोगों के जीवन और आजीविका को बर्बाद कर दिया है, खासकर शहरी क्षेत्रों के प्रमुख शहरों में, जो कभी काम की तलाश में अपने गृहनगर/गांव छोड़कर यहां आए थे। स्व-रोज़गार श्रमिक और आकस्मिक वेतन वाले श्रमिक सबसे अधिक प्रभावित हुए हैं, क्रमशः 84% और 81% ने अपना रोजगार खो दिया है। « कुल 89% शहरी परिवारों ने बताया कि वे अगले महीने का किराया नहीं दे पाएंगे"
          }
        />

        <LeftRightContainer
          id='Mission'
          Heading={language === "english" ? "Mission" : " उद्देश्य  "}
          flexDirection='row'
          Img_source='/Frame 52.png'
          pera={
            language === "english"
              ? " Upgrade skills to Intemational standards through significant industry involvement and develop necessary frameworks for standards, curriculum and quality assurance. Enhance, support and coordinate private sector initiatives for skill development through appropriate Public-Private Partnership ( PPP) models: strive for significant operational and financial involvement from private sector.  Play the role of a ‘market-maker’ by bringing funds, particularly in sectors where market mechanisms are ineffective or missing. Prioritise initiatives that can have a multiplier or catalytic effect as opposed to one-off impact. Objective To contribute significantly to the overall target of skilling up of people in India, mainly by fostering private sector initiatives in skill de programmes and to provide funding."
              : " महत्वपूर्ण उद्योग भागीदारी के माध्यम से कौशल को अंतर्राष्ट्रीय मानकों में अपग्रेड करें और मानकों, पाठ्यक्रम आदि के लिए आवश्यक रूपरेखा विकसित करें गुणवत्ता आश्वासन। उपयुक्त सार्वजनिक-निजी भागीदारी (पीपीपी) मॉडल के माध्यम से कौशल विकास के लिए निजी क्षेत्र की पहल को बढ़ाना, समर्थन और समन्वय करना: निजी क्षेत्र से महत्वपूर्ण परिचालन और वित्तीय भागीदारी के लिए प्रयास करें। » विशेष रूप से उन क्षेत्रों में जहां बाजार तंत्र अप्रभावी या गायब हैं, धन लाकर 'बाज़ार-निर्माता' की भूमिका निभाएं। » उन पहलों को प्राथमिकता दें जिनका एकमुश्त प्रभाव के बजाय गुणक या उत्प्रेरक प्रभाव हो सकता है। उद्देश्य भारत में लोगों को कौशल प्रदान करने के समग्र लक्ष्य में महत्वपूर्ण योगदान देना, मुख्य रूप से कौशल विकास में निजी क्षेत्र की पहल को बढ़ावा देना कार्यक्रम और वित्त पोषण प्रदान करना।"
          }
        />
        <LeftRightContainer
          id='Vision'
          Heading={language === "english" ? "Vision" : " दृष्टि  "}
          flexDirection='row-reverse'
          Img_source='/Frame 100.png'
          pera={
            language === "english"
              ? " NSDC was set up as part of a national skill development mission to fulfil the growing need in India for skilled manpower across sectors and narrow the existing gap between the demand and supply of skills. “There is a compelling need to launch a world-class skill development programme in a  mission mode that will address the challenge of imparting the skills required by a growing economy. Both the structure and the leadership of the ‘mission must be such that the programme can be scaled up quickly to cover the whole country.”"
              : " एनएसडीसी की स्थापना राष्ट्रीय कौशल विकास मिशन के एक भाग के रूप में की गई थी ताकि भारत में विभिन्न क्षेत्रों और संकीर्ण क्षेत्रों में कुशल जनशक्ति की बढ़ती आवश्यकता को पूरा किया जा सके। कौशल की मांग और आपूर्ति के बीच मौजूदा अंतर। “भारत में एक विश्व स्तरीय कौशल विकास कार्यक्रम शुरू करने की अत्यधिक आवश्यकता है मिशन मोड जो बढ़ती अर्थव्यवस्था के लिए आवश्यक कौशल प्रदान करने की चुनौती का समाधान करेगा। की संरचना और नेतृत्व दोनों 'मिशन ऐसा होना चाहिए कि पूरे देश को कवर करने के लिए कार्यक्रम को तेजी से बढ़ाया जा सके।'"
          }
        />

        <ObjectiveContainer style={{}}>
          <H1>{language === "english" ? "Objective" : " विषयनिष्ठ  "} </H1>
          <ObjectPera>
            {language === "english"
              ? "To contribute significantly to the overall target of skilling up of people in India, mainly by fostering private sector initiatives in skill de programmes and to provide funding. "
              : " भारत में लोगों को कौशल प्रदान करने के समग्र लक्ष्य में महत्वपूर्ण योगदान देना, मुख्य रूप से कौशल विकास कार्यक्रमों में निजी क्षेत्र की पहल को बढ़ावा देना और धन उपलब्ध कराना।  "}
          </ObjectPera>

          <Director
            id='Directors'
            language={language}
            Img_Url='/Frame 277.png'
            Director_Name={
              language === "english"
                ? "Ashish Pratap Singh"
                : "आशीष प्रताप सिंह"
            }
          />
          <Director
            language={language}
            Img_Url='/Anuradha.png'
            Director_Name={
              language === "english"
                ? "Anuradha Srivastava"
                : "अनुराधा श्रीवास्तव"
            }
          />

          <AddressContainer>
            <P>
              <H2>Address</H2>
              5/539, Sector - 5, Gomti Nagar Extension, Lucknow (U.P.) 226010{" "}
            </P>
            <P>Contact Number - 0522 - 3503970</P>
          </AddressContainer>
        </ObjectiveContainer>
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

export default HomePage;
