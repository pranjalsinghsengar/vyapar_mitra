"use client";
import React, { useState } from "react";
import styled from "styled-components";
import { Formik, Field, Form, ErrorMessage } from "formik";
import Link from "../../../node_modules/next/link";

const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: #f8f8f8;
`;

const FormGroup = styled.div`
  margin-bottom: 20px;
`;

const Label = styled.label`
  font-weight: bold;
  margin-bottom: 5px;
`;

const Input = styled(Field)`
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const Select = styled(Field)`
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const TextArea = styled(Field)`
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const ErrorMessageStyled = styled(ErrorMessage)`
  color: red;
  font-size: 12px;
  margin-top: 5px;
`;

const Button = styled.button`
  padding: 10px 50px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;
`;

const TableHeader = styled.th`
  border: 1px solid #ccc;
  padding: 10px;
  text-align: center;
  background-color: #f0f0f0;
`;

const TableCell = styled.td`
  border: 1px solid #ccc;
  padding: 10px;
  text-align: center;
`;
const CheckBox = styled.div`
  width: 15px;
  height: 15px;
  border: 2px solid black;
  /* padding: 5px; */
  border-radius: 50px;
`;
const Option = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin: 0 12px;
`;
const CheckedText = styled.div``;
const BackBTn = styled.div`
  position: absolute;
  left: 50px;
  font-size: 3rem;
`;

const IndexPage = () => {
  // Initial values and onSubmit function (same as before)\
  const initialValues = {
    fullName: "",
    aadharNumber: "",
    phoneNumber: "",
    fathersName: "",
    correspondenceAddress: "",
    correspondencePincode: "",
    correspondenceMobile: "",
    permanentAddress: "",
    permanentPincode: "",
    permanentMobile: "",
    dob: "",
    cardType: "",
    maritalStatus: "",
    qualifications: [
      {
        srno: "1",
        degree: "Matric/S.S.C",
        university: "",
        year: "",
        percentage: "",
      },
      {
        srno: "2",
        degree: "Inter/Sr. Secondary",
        university: "",
        year: "",
        percentage: "",
      },
      {
        srno: "3",
        degree: "B.A./B.Com./B.Sc/B.E./B.Tech.",
        university: "",
        year: "",
        percentage: "",
      },
      {
        srno: "4",
        degree: "Other (if Any)",
        university: "",
        year: "",
        percentage: "",
      },
    ],
    workExperience: [
      {
        srno: "1",
        company: "",
        designation: "",
        startDate: "",
        endDate: "",
      },
      {
        srno: "2",
        company: "",
        designation: "",
        startDate: "",
        endDate: "",
      },
    ],
  };
  const [isChecked, setIsChecked] = useState("VyaparMitra");

  // Inside your form submission function
  const submitForm = async (values) => {
    try {
      const response = await fetch("/api/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <Container>
      <Link href='/'>
        <BackBTn>{"<"}</BackBTn>
      </Link>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
        }}
      >
        <img src='/bottom-img-1@2x.png' />
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
          marginTop: 40,
          marginBottom: 40,
        }}
      >
        <Label>APPLICATION FORM FOR APPOINTMENT ON THE</Label>
        <Option>
          <CheckBox
            onClick={() => setIsChecked("VyaparMitra")}
            style={
              isChecked === "VyaparMitra"
                ? { background: "blue" }
                : { background: "none" }
            }
          ></CheckBox>
          <CheckedText> VYAPARMITRA</CheckedText>
        </Option>
        <Option>
          <CheckBox
            onClick={() => setIsChecked("SuperVisior")}
            style={
              isChecked === "SuperVisior"
                ? { background: "blue" }
                : { background: "none" }
            }
          ></CheckBox>

          <CheckedText> SUPERVISIOR</CheckedText>
        </Option>
      </div>

      <Formik initialValues={initialValues} onSubmit={onSubmit}>
        <Form>
          {/* ... (previous form fields) */}
          <FormGroup>
            <Label>Full Name</Label>
            <Input type='text' name='fullName' />
            <ErrorMessageStyled name='fullName' component='div' />
          </FormGroup>

          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <FormGroup>
              <Label>Aadhar Number</Label>
              <Input type='text' name='aadharNumber' />
              <ErrorMessageStyled name='aadharNumber' component='div' />
            </FormGroup>
            <FormGroup>
              <Label>Phone Number</Label>
              <Input type='text' name='phoneNumber' />
              <ErrorMessageStyled name='phoneNumber' component='div' />
            </FormGroup>
          </div>

          <FormGroup>
            <Label>{"Father's Name"}</Label>
            <Input type='text' name='fathersName' />
            <ErrorMessageStyled name='fathersName' component='div' />
          </FormGroup>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div style={{ width: "48%" }}>
              <FormGroup>
                <Label>Correspondence Address</Label>
                <TextArea name='correspondenceAddress' rows='3' />
                <ErrorMessageStyled
                  name='correspondenceAddress'
                  component='div'
                />
              </FormGroup>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <FormGroup style={{ marginRight: 10 }}>
                  <Label> Pincode</Label>
                  <Input type='text' name='correspondencePincode' />
                  <ErrorMessageStyled
                    name='correspondencePincode'
                    component='div'
                  />
                </FormGroup>
                <FormGroup>
                  <Label>Mobile</Label>
                  <Input type='text' name='correspondenceMobile' />
                  <ErrorMessageStyled
                    name='correspondenceMobile'
                    component='div'
                  />
                </FormGroup>
              </div>
            </div>
            <div style={{ width: "48%" }}>
              <FormGroup>
                <Label>Permanent Address</Label>
                <TextArea name='permanentAddress' rows='3' />
                <ErrorMessageStyled name='permanentAddress' component='div' />
              </FormGroup>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <FormGroup style={{ marginRight: 10 }}>
                  <Label>Permanent Pincode</Label>
                  <Input type='text' name='permanentPincode' />
                  <ErrorMessageStyled name='permanentPincode' component='div' />
                </FormGroup>
                <FormGroup>
                  <Label>Permanent Mobile</Label>
                  <Input type='text' name='permanentMobile' />
                  <ErrorMessageStyled name='permanentMobile' component='div' />
                </FormGroup>
              </div>
            </div>
          </div>

          <FormGroup>
            <Label>Date of Birth</Label>
            <Input type='date' name='dob' />
            <ErrorMessageStyled name='dob' component='div' />
          </FormGroup>

          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <FormGroup>
              <Label>Cast: </Label>
              <Field as='select' name='cardType'>
                <option value=''>Select Card Type</option>
                <option value='sc'>SC</option>
                <option value='st'>ST</option>
                <option value='gen'>General</option>
                <option value='pwds'>PWDS(divyangjan) </option>
              </Field>
              <ErrorMessageStyled name='cardType' component='div' />
            </FormGroup>

            <FormGroup>
              <Label>Marital Status:</Label>
              <Field as='select' name='maritalStatus'>
                <option value=''>Select Marital Status</option>
                <option value='married'>Married</option>
                <option value='unmarried'>Unmarried</option>
                <option value='widow'>Widow</option>
              </Field>
              <ErrorMessageStyled name='maritalStatus' component='div' />
            </FormGroup>
          </div>
          <FormGroup>
            <Label>Qualifications</Label>
            <Table>
              <thead>
                <tr>
                  <TableHeader>Sr. No.</TableHeader>
                  <TableHeader>Degree</TableHeader>
                  <TableHeader>University</TableHeader>
                  <TableHeader>Year</TableHeader>
                  <TableHeader>Percentage</TableHeader>
                </tr>
              </thead>
              <tbody>
                {initialValues.qualifications.map((qualification, index) => (
                  <tr key={index}>
                    <TableCell>{qualification.srno}</TableCell>
                    <TableCell>{qualification.degree}</TableCell>
                    <TableCell>
                      <Input
                        type='text'
                        name={`qualifications[${index}].university`}
                      />
                    </TableCell>
                    <TableCell>
                      <Input
                        type='text'
                        name={`qualifications[${index}].year`}
                      />
                    </TableCell>
                    <TableCell>
                      <Input
                        type='text'
                        name={`qualifications[${index}].percentage`}
                      />
                    </TableCell>
                  </tr>
                ))}
              </tbody>
            </Table>
          </FormGroup>

          {/* ... (work experience section) */}

          <FormGroup>
            <Label>Work Experience</Label>
            <Table>
              <thead>
                <tr>
                  <TableHeader>Sr.No.</TableHeader>
                  <TableHeader>Company</TableHeader>
                  <TableHeader>Designation</TableHeader>
                  <TableHeader>Start Date</TableHeader>
                  <TableHeader>End Date</TableHeader>
                </tr>
              </thead>
              <tbody>
                {initialValues.workExperience.map((experience, index) => (
                  <tr key={index}>
                    <TableCell>{experience.srno}</TableCell>
                    <TableCell>
                      <Input
                        type='text'
                        name={`workExperience[${index}].company`}
                      />
                    </TableCell>
                    <TableCell>
                      <Input
                        type='text'
                        name={`workExperience[${index}].designation`}
                      />
                    </TableCell>
                    <TableCell>
                      <Input
                        type='date'
                        name={`workExperience[${index}].startDate`}
                      />
                    </TableCell>
                    <TableCell>
                      <Input
                        type='date'
                        name={`workExperience[${index}].endDate`}
                      />
                    </TableCell>
                  </tr>
                ))}
              </tbody>
            </Table>
          </FormGroup>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "100%",
            }}
          >
            <Link href='/Payment'>
              <Button type='submit' onClick={submitForm}>
                Pay 299
              </Button>
            </Link>
          </div>
        </Form>
      </Formik>
    </Container>
  );
};

export default IndexPage;
