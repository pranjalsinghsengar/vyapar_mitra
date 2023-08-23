"use client";
import React, { useState } from "react";
import styled from "styled-components";
import { Formik, Field, Form, ErrorMessage } from "formik";
import Link from "../../../node_modules/next/link";
import axios from "axios";
import Required from "./Required";
import "./Form.css";
// import sendEmail

// import { SubmitHandle } from "../utils/googleSheets";

const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: #f8f8f8;
  @media (max-width: 600px) {
    font-size: 0.7rem;
  }
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
  left: 5%;
  font-size: 1rem;
`;

const IndexPage = () => {
  // Initial values and onSubmit function (same as before)\
  const initialValues = {
    fullName: "",
    Gmail: "",
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
    Referral: "",
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
  const [SubmitData, setSubmitData] = useState(false);

  const alldata = {
    Form_Type: isChecked,

    FullName: formData.fullName,
    Gmail: formData.Gmail,
    aadhar_Number: formData.aadharNumber,
    phone_Number: formData.phoneNumber,
    fathers_Name: formData.fathersName,
    correspondence_Address: formData.correspondenceAddress,
    correspondence_Pincode: formData.correspondencePincode,
    correspondenceMobile: formData.correspondenceMobile,
    permanentAddress: formData.permanentAddress,
    permanentPincode: formData.permanentPincode,
    permanentMobile: formData.permanentMobile,
    dob: formData.dob,
    Catagory: formData.castType,

    marital_Status: formData.maritalStatus,
    //
    university: qualifications.university,
    year: qualifications.year,
    percentage: qualifications.percentage,
    //
    company: workExperience.company,
    designation: workExperience.designation,
    startDate: workExperience.startDate,
    endDate: workExperience.endDate,
    Referral: formData.Referral,
  };
  // Inside your form submission function

  // const SCOPES = ["https://www.googleapis.com/auth/spreadsheets"];

  // function writeData(auth) {
  //   const sheets = google.sheets({ version: "v4", auth });
  //   //  ALL DATA
  //   let values = alldata;
  //   const resource = {
  //     values,
  //   };

  //   sheets.spreadsheets.values.append(
  //     {
  //       spreadsheetId: "1oH2kjRfNYoXYLzWZvWSAV4DyzotVKXZh7g9BVRD6Jxs",
  //       range: "Class Data!A1",
  //       valueInputOption: "RAW",
  //       resource: resource,
  //     },
  //     (err, result) => {
  //       if (err) {
  //         // Handle error
  //         console.log(err);
  //       } else {
  //         console.log(
  //           "%d cells updated on range: %s",
  //           result.data.updates.updatedCells,
  //           result.data.updates.updatedRange
  //         );
  //       }
  //     }
  //   );
  // }

  const SubmitHandler = async () => {
    console.log("alldata ", alldata);
    if (
      formData.fullName &&
      formData.Gmail &&
      formData.aadharNumber &&
      formData.phoneNumber &&
      formData.fathersName &&
      formData.correspondenceAddress &&
      formData.correspondencePincode &&
      formData.correspondenceMobile &&
      formData.permanentAddress &&
      formData.permanentPincode &&
      formData.permanentMobile &&
      formData.dob &&
      formData.castType &&
      formData.maritalStatus &&
      //
      qualifications.university &&
      qualifications.year &&
      qualifications.percentage &&
      //
      workExperience.company &&
      workExperience.startDate &&
      workExperience.designation
    ) {
      setSubmitData(true);
      await axios
        .post(
          "https://sheet.best/api/sheets/7d33220f-660f-4e5f-82bc-b49e513a85ab",
          alldata
        )
        .then((response) => {
          console.log("response", response);
        });

      async (email, subject, message) => {
        return axios({
          method: "post",
          url: "/api/send-mail",
          data: {
            email: formData.Gmail,
            subject: subject,
            message: message,
          },
        });
      };
    } else {
      // alert("FF");
      setSubmitData(false);
    }
  };

  const onSubmit = (values) => {
    setFormData(values); // Update the state with form data
    console.log(values);
  };

  return (
    <Container className='TextSmall'>
      <Link href='/'>
        <BackBTn>
          <div>{"Back"}</div>
        </BackBTn>
      </Link>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
        }}
      >
        <img style={{ width: "80%" }} src='/bottom-img-1@2x.png' />
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
              required
              type='text'
              name='fullName'
              value={formData.fullName}
              onChange={(e) => updateFieldValue("fullName", e.target.value)}
            />
            <ErrorMessageStyled name='fullName' component='div' />
          </FormGroup>
          <FormGroup>
            <Label>Gmail</Label>
            <Input
              required
              type='text'
              name='Gmail'
              value={formData.Gmail}
              onChange={(e) => updateFieldValue("Gmail", e.target.value)}
            />
            <ErrorMessageStyled name='aadharNumber' component='div' />
          </FormGroup>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <FormGroup>
              <Label>Aadhar Number</Label>
              <Input
                required
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
                required
                type='Number'
                name='phoneNumber'
                value={formData.phoneNumber}
                onChange={(e) => {
                  if (formData.phoneNumber.length < 10) {
                    updateFieldValue("phoneNumber", e.target.value);
                  }
                }}
              />
              <ErrorMessageStyled name='phoneNumber' component='div' />
            </FormGroup>
          </div>

          <FormGroup>
            <Label>{"Father's Name"}</Label>
            <Input
              required
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
                  rows={8}
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
                    required
                    type='Number'
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
                    required
                    type='Number'
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
                  rows={8}
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
                    required
                    type='Number'
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
                    required
                    type='Number'
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
              required
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
                required
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
                required
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
            {/* <div style={{ width: "100%" }}> */}
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
                        required
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
                        required
                        type='Number'
                        name={`qualifications[${index}].year`}
                        value={qualification.year}
                        onChange={(e) =>
                          updateQualification(index, "year", e.target.value)
                        }
                      />
                    </TableCell>
                    <TableCell>
                      <Input
                        required
                        type='Number'
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
            {/* </div> */}
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
                        required
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
                        required
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
                    <TableCell className='TextSmall'>
                      <Input
                        required
                        type='date'
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
                    <TableCell className='TextSmall'>
                      <Input
                        type='date'
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
            <FormGroup
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                marginTop: 10,
                gap: 10,
              }}
            >
              <Label>Referral</Label>
              <div style={{}}>
                <Input
                  type='text'
                  name='Referral'
                  value={formData.Referral}
                  onChange={(e) => updateFieldValue("Referral", e.target.value)}
                />
              </div>
            </FormGroup>
          </FormGroup>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "100%",
            }}
          >
            <Button type='submit' onClick={SubmitHandler}>
              Pay 299
            </Button>
            {SubmitData && <Link href='/Submit'></Link>}
          </div>
        </Form>
      </Formik>
    </Container>
  );
};

export default IndexPage;
