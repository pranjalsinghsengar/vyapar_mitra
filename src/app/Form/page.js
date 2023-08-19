"use client";
import React, { useState } from "react";
import styled from "styled-components";
import { Formik, Field, Form, ErrorMessage } from "formik";
import Link from "../../../node_modules/next/link";
import axios from "axios";
import { SubmitHandle } from "../utils/googleSheets";

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
    castType: "",
    maritalStatus: "",
  };
  const [qualifications, setQualifications] = useState([
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
  ]);
  function updateQualification(index, field, value) {
    setQualifications((prevQualifications) => {
      const updatedQualifications = [...prevQualifications];
      updatedQualifications[index][field] = value;
      return updatedQualifications;
    });
  }
  const [workExperience, setWorkExperience] = useState([
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
  ]);
  // Inside your component
  function updateWorkExperience(index, field, value) {
    setWorkExperience((prevWorkExperience) => {
      const updatedWorkExperience = [...prevWorkExperience];
      updatedWorkExperience[index][field] = value;
      return updatedWorkExperience;
    });
  }

  // Inside your component

  const [isChecked, setIsChecked] = useState("VyaparMitra");
  const [formData, setFormData] = useState(initialValues);

  const updateFieldValue = (fieldName, value) => {
    setFormData((prevData) => ({
      ...prevData,
      [fieldName]: value,
    }));
  };

  const alldata = {
    FullName: formData.fullName,
    aadharNumber: formData.aadharNumber,
    phoneNumber: formData.phoneNumber,
    fathersName: formData.fathersName,
    correspondenceAddress: formData.correspondenceAddress,
    correspondencePincode: formData.correspondencePincode,
    correspondenceMobile: formData.correspondenceMobile,
    permanentAddress: formData.permanentAddress,
    permanentPincode: formData.permanentPincode,
    permanentMobile: formData.permanentMobile,
    dob: formData.dob,
    castType: formData.castType,
    maritalStatus: formData.maritalStatus,
    FormType: isChecked,
    //
    university: qualifications.university,
    year: qualifications.year,
    percentage: qualifications.percentage,
    //
    company: workExperience.company,
    designation: workExperience.designation,
    startDate: workExperience.startDate,
    endDate: workExperience.endDate,
  };
  // Inside your form submission function

  const SubmitHandler = async () => {
    console.log("alldata ", alldata);
    try {
      await SubmitHandle(alldata);
    } catch (error) {
      console.error("Error:", error);
    }
    // axios
    //   .post(
    //     "https://sheet.best/api/sheets/076c7653-6491-4dc3-9bc5-7bb4c5c749ec",
    //     alldata
    //   )
    //   .then((response) => {
    //     console.log(response);
    //   });
  };

  const onSubmit = (values) => {
    setFormData(values); // Update the state with form data
    console.log(values);
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

      <Formik initialValues={formData} onSubmit={onSubmit}>
        <Form>
          {/* ... (previous form fields) */}
          <FormGroup>
            <Label>Full Name</Label>
            <Input
              type='text'
              name='fullName'
              value={formData.fullName}
              onChange={(e) => updateFieldValue("fullName", e.target.value)}
            />
            <ErrorMessageStyled name='fullName' component='div' />
          </FormGroup>

          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <FormGroup>
              <Label>Aadhar Number</Label>
              <Input
                type='text'
                name='aadharNumber'
                value={formData.aadharNumber}
                onChange={(e) =>
                  updateFieldValue("aadharNumber", e.target.value)
                }
              />
              <ErrorMessageStyled name='aadharNumber' component='div' />
            </FormGroup>
            <FormGroup>
              <Label>Phone Number</Label>
              <Input
                type='text'
                name='phoneNumber'
                value={formData.phoneNumber}
                onChange={(e) =>
                  updateFieldValue("phoneNumber", e.target.value)
                }
              />
              <ErrorMessageStyled name='phoneNumber' component='div' />
            </FormGroup>
          </div>

          <FormGroup>
            <Label>{"Father's Name"}</Label>
            <Input
              type='text'
              name='fathersName'
              value={formData.fathersName}
              onChange={(e) => updateFieldValue("fathersName", e.target.value)}
            />
            <ErrorMessageStyled name='fathersName' component='div' />
          </FormGroup>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div style={{ width: "48%" }}>
              <FormGroup>
                <Label>Correspondence Address</Label>
                <TextArea
                  name='correspondenceAddress'
                  rows='3'
                  value={formData.correspondenceAddress}
                  onChange={(e) =>
                    updateFieldValue("correspondenceAddress", e.target.value)
                  }
                />
                <ErrorMessageStyled
                  name='correspondenceAddress'
                  component='div'
                />
              </FormGroup>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <FormGroup style={{ marginRight: 10 }}>
                  <Label> Pincode</Label>
                  <Input
                    type='text'
                    name='correspondencePincode'
                    value={formData.correspondencePincode}
                    onChange={(e) =>
                      updateFieldValue("correspondencePincode", e.target.value)
                    }
                  />
                  <ErrorMessageStyled
                    name='correspondencePincode'
                    component='div'
                  />
                </FormGroup>
                <FormGroup>
                  <Label>Mobile</Label>
                  <Input
                    type='text'
                    name='correspondenceMobile'
                    value={formData.correspondenceMobile}
                    onChange={(e) =>
                      updateFieldValue("correspondenceMobile", e.target.value)
                    }
                  />
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
                <TextArea
                  name='permanentAddress'
                  rows='3'
                  value={formData.permanentAddress}
                  onChange={(e) =>
                    updateFieldValue("permanentAddress", e.target.value)
                  }
                />
                <ErrorMessageStyled name='permanentAddress' component='div' />
              </FormGroup>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <FormGroup style={{ marginRight: 10 }}>
                  <Label>Permanent Pincode</Label>
                  <Input
                    type='text'
                    name='permanentPincode'
                    value={formData.permanentPincode}
                    onChange={(e) =>
                      updateFieldValue("permanentPincode", e.target.value)
                    }
                  />
                  <ErrorMessageStyled name='permanentPincode' component='div' />
                </FormGroup>
                <FormGroup>
                  <Label>Permanent Mobile</Label>
                  <Input
                    type='text'
                    name='permanentMobile'
                    value={formData.permanentMobile}
                    onChange={(e) =>
                      updateFieldValue("permanentMobile", e.target.value)
                    }
                  />
                  <ErrorMessageStyled name='permanentMobile' component='div' />
                </FormGroup>
              </div>
            </div>
          </div>

          <FormGroup>
            <Label>Date of Birth</Label>
            <Input
              type='date'
              name='dob'
              value={formData.dob}
              onChange={(e) => updateFieldValue("dob", e.target.value)}
            />
            <ErrorMessageStyled name='dob' component='div' />
          </FormGroup>

          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <FormGroup>
              <Label>Cast: </Label>
              <Field
                as='select'
                name='castType'
                value={formData.castType}
                onChange={(e) => updateFieldValue("castType", e.target.value)}
              >
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
              <Field
                as='select'
                name='maritalStatus'
                value={formData.maritalStatus}
                onChange={(e) =>
                  updateFieldValue("maritalStatus", e.target.value)
                }
              >
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
                {qualifications.map((qualification, index) => (
                  <tr key={index}>
                    <TableCell>{qualification.srno}</TableCell>
                    <TableCell>{qualification.degree}</TableCell>
                    <TableCell>
                      <Input
                        type='text'
                        name={`qualifications[${index}].university`}
                        value={qualification.university}
                        onChange={(e) =>
                          updateQualification(
                            index,
                            "university",
                            e.target.value
                          )
                        }
                      />
                    </TableCell>
                    <TableCell>
                      <Input
                        type='text'
                        name={`qualifications[${index}].year`}
                        value={qualification.year}
                        onChange={(e) =>
                          updateQualification(index, "year", e.target.value)
                        }
                      />
                    </TableCell>
                    <TableCell>
                      <Input
                        type='text'
                        name={`qualifications[${index}].percentage`}
                        value={qualification.percentage}
                        onChange={(e) =>
                          updateQualification(
                            index,
                            "percentage",
                            e.target.value
                          )
                        }
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
                {workExperience.map((experience, index) => (
                  <tr key={index}>
                    <TableCell>{experience.srno}</TableCell>
                    <TableCell>
                      <Input
                        type='text'
                        name={`workExperience[${index}].company`}
                        value={experience.company}
                        onChange={(e) =>
                          updateWorkExperience(index, "company", e.target.value)
                        }
                      />
                    </TableCell>
                    <TableCell>
                      <Input
                        type='text'
                        name={`workExperience[${index}].designation`}
                        value={experience.designation}
                        onChange={(e) =>
                          updateWorkExperience(
                            index,
                            "designation",
                            e.target.value
                          )
                        }
                      />
                    </TableCell>
                    <TableCell>
                      <Input
                        type='text'
                        name={`workExperience[${index}].startDate`}
                        value={experience.startDate}
                        onChange={(e) =>
                          updateWorkExperience(
                            index,
                            "startDate",
                            e.target.value
                          )
                        }
                      />
                    </TableCell>
                    <TableCell>
                      <Input
                        type='text'
                        name={`workExperience[${index}].endDate`}
                        value={experience.endDate}
                        onChange={(e) =>
                          updateWorkExperience(index, "endDate", e.target.value)
                        }
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
              <Button type='submit' onClick={SubmitHandler}>
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
