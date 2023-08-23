"use client";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Formik, Field, Form, ErrorMessage } from "formik";
import Link from "../../../node_modules/next/link";
import axios from "axios";
import Required from "./Required";
import "./Form.css";
import { useRouter } from "next/navigation";

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
  // const imageUrl = "URL_TO_YOUR_IMAGE";
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageChange = (e) => {
    setSelectedImage(e.target.files[0]);
  };

  const initialValues = {
    image: {
      sourceUri: selectedImage,
    },
    fullName: "",
    Gmail: "",
    aadharNumber: "",
    phoneNumber: "",
    fathersName: "",
    correspondenceAddress: "",
    correspondenceState: "",
    correspondenceDistrict: "",
    correspondencePincode: "",
    correspondenceMobile: "",
    permanentAddress: "",
    permanentState: "",
    permanentDistrict: "",
    permanentPincode: "",
    permanentMobile: "",
    dob: "",
    castType: "",
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
    Referral: "",
  };

  // useEffect(() => {
  //   console.log(initialValues);
  // }, [initialValues]);

  // const [qualifications, setQualifications] = useState([
  //   {
  //     srno: "1",
  //     degree: "Matric/S.S.C",
  //     university: "",
  //     year: "",
  //     percentage: "",
  //   },
  //   {
  //     srno: "2",
  //     degree: "Inter/Sr. Secondary",
  //     university: "",
  //     year: "",
  //     percentage: "",
  //   },
  //   {
  //     srno: "3",
  //     degree: "B.A./B.Com./B.Sc/B.E./B.Tech.",
  //     university: "",
  //     year: "",
  //     percentage: "",
  //   },
  //   {
  //     srno: "4",
  //     degree: "Other (if Any)",
  //     university: "",
  //     year: "",
  //     percentage: "",
  //   },
  // ]);
  // function updateQualification(index, field, value) {
  //   setQualifications((prevQualifications) => {
  //     const updatedQualifications = [...prevQualifications];
  //     updatedQualifications[index][field] = value;
  //     return updatedQualifications;
  //   });
  // }
  // const [workExperience, setWorkExperience] = useState([
  //   {
  //     srno: "1",
  //     company: "",
  //     designation: "",
  //     startDate: "",
  //     endDate: "",
  //   },
  //   {
  //     srno: "2",
  //     company: "",
  //     designation: "",
  //     startDate: "",
  //     endDate: "",
  //   },
  // ]);
  // Inside your component

  // function updateWorkExperience(index, field, value) {
  //   setWorkExperience((prevWorkExperience) => {
  //     const updatedWorkExperience = [...prevWorkExperience];
  //     updatedWorkExperience[index][field] = value;
  //     return updatedWorkExperience;
  //   });
  // }

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

    UserImage: selectedImage,
    // UserImage: formData.image.sourceUri,
    FullName: formData.fullName,
    Gmail: formData.Gmail,
    aadhar_Number: formData.aadharNumber,
    phone_Number: formData.phoneNumber,
    fathers_Name: formData.fathersName,
    correspondence_Address: formData.correspondenceAddress,
    correspondence_State: formData.correspondenceState,
    correspondence_District: formData.correspondenceDistrict,
    correspondence_Pincode: formData.correspondencePincode,
    correspondenceMobile: formData.correspondenceMobile,
    permanentAddress: formData.permanentAddress,
    permanentState: formData.permanentState,
    permanentDistrict: formData.permanentDistrict,
    permanentPincode: formData.permanentPincode,
    permanentMobile: formData.permanentMobile,
    dob: formData.dob,
    Catagory: formData.castType,

    marital_Status: formData.maritalStatus,
    //
    university: formData.university,
    year: formData.year,
    percentage: formData.percentage,
    //
    company: formData.company,
    designation: formData.designation,
    startDate: formData.startDate,
    endDate: formData.endDate,
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
  const router = useRouter();

  const SubmitHandler = async (e) => {
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
      formData.maritalStatus
      //
    ) {
      setSubmitData(true);
      console.log("alldata ", alldata);

      await axios
        .post(
          "https://sheet.best/api/sheets/7d33220f-660f-4e5f-82bc-b49e513a85ab",
          alldata
        )
        .then(
          console.log("Done"),
          // setFormData(initialValues)
          router.push("/Submit")
        );

      const email = formData.Gmail;
      const subject = "sdadasdasda";
      const message = "ojoj";

      const response = await fetch("/api/sendEmail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, subject, message }),
      });
      const data = await response.json();
      console.log("data=> ", data);
      // // Redirect to the "/Submit" page after successful submission
      // router.push("/Submit");
    } else {
      e.prevent.default();
    }
  };

  const onSubmit = (values) => {
    setFormData(values); // Update the state with form data
    console.log(values);
  };
  // const sss = () => {
  //   console.log("989");
  // };

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
            <Label>Upload Your Image</Label>
            <input type='file' accept='image/*' onChange={handleImageChange} />
            <ErrorMessageStyled name='fullName' component='div' />
          </FormGroup>
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
              type='email'
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
                // pattern='[0-9]{16}'
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
                // pattern='[0-9]{10}'
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
                  <Label>State</Label>
                  <TextArea
                    name='correspondenceState'
                    // rows={8}
                    value={formData.correspondenceState}
                    onChange={(e) =>
                      updateFieldValue("correspondenceState", e.target.value)
                    }
                  />

                  <ErrorMessageStyled
                    name='correspondenceState'
                    component='div'
                  />
                </FormGroup>
                <FormGroup>
                  <Label> District</Label>
                  <TextArea
                    name='correspondenceDistrict'
                    rows={8}
                    value={formData.correspondenceDistrict}
                    onChange={(e) =>
                      updateFieldValue("correspondenceDistrict", e.target.value)
                    }
                  />

                  <ErrorMessageStyled
                    name='correspondenceDistrict'
                    component='div'
                  />
                </FormGroup>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <FormGroup style={{ marginRight: 10 }}>
                  <Label> Pincode</Label>
                  <Input
                    // required
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
                    // required
                    type='Number'
                    name='correspondenceMobile'
                    value={formData.correspondenceMobile}
                    onChange={(e) =>
                      updateFieldValue("correspondenceMobile", e.target.value)
                    }
                    // pattern='[0-9]{10}'
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
                  required
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
                  <Label>State</Label>
                  <TextArea
                    required
                    name='permanentState'
                    // rows={8}
                    value={formData.permanentState}
                    onChange={(e) =>
                      updateFieldValue("permanentState", e.target.value)
                    }
                  />

                  <ErrorMessageStyled name='permanentState' component='div' />
                </FormGroup>
                <FormGroup>
                  <Label> District</Label>
                  <TextArea
                    required
                    name='permanentDistrict'
                    rows={8}
                    value={formData.permanentDistrict}
                    onChange={(e) =>
                      updateFieldValue("permanentDistrict", e.target.value)
                    }
                  />

                  <ErrorMessageStyled
                    name='permanentDistrict'
                    component='div'
                  />
                </FormGroup>
              </div>
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
                    pattern='[0-9]{10}'
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
                {formData.qualifications.map((qualification, index) => (
                  <tr key={index}>
                    <TableCell>{qualification.srno}</TableCell>
                    <TableCell>{qualification.degree}</TableCell>
                    <TableCell>
                      <Input
                        required
                        type='text'
                        name='university'
                        value={formData.qualifications.university}
                        onChange={(e) =>
                          updateFieldValue("university", e.target.value)
                        }
                      />
                    </TableCell>
                    <TableCell>
                      <Input
                        required
                        type='Number'
                        name={`year`}
                        value={formData.qualifications.year}
                        onChange={(e) =>
                          updateFieldValue("year", e.target.value)
                        }
                      />
                    </TableCell>
                    <TableCell>
                      <Input
                        required
                        type='Number'
                        name={`percentage`}
                        value={formData.qualifications.percentage}
                        onChange={(e) =>
                          updateFieldValue("percentage", e.target.value)
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
                {formData.workExperience.map((experience, index) => (
                  <tr key={index}>
                    <TableCell>{experience.srno}</TableCell>
                    <TableCell>
                      <Input
                        required
                        type='text'
                        name={`company`}
                        value={formData.workExperience.company}
                        onChange={(e) =>
                          updateFieldValue("company", e.target.value)
                        }
                      />
                    </TableCell>
                    <TableCell>
                      <Input
                        required
                        type='text'
                        name={`designation`}
                        value={formData.workExperience.designation}
                        onChange={(e) =>
                          updateFieldValue("designation", e.target.value)
                        }
                      />
                    </TableCell>
                    <TableCell className='TextSmall'>
                      <Input
                        required
                        type='date'
                        name={`startDate`}
                        value={formData.workExperience.startDate}
                        onChange={(e) =>
                          updateFieldValue("startDate", e.target.value)
                        }
                      />
                    </TableCell>
                    <TableCell className='TextSmall'>
                      <Input
                        type='date'
                        name={`endDate`}
                        value={formData.workExperience.endDate}
                        onChange={(e) =>
                          updateFieldValue("endDate", e.target.value)
                        }
                      />
                    </TableCell>
                  </tr>
                ))}
              </tbody>
            </Table>
          </FormGroup>
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
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "100%",
            }}
          >
            <Button type='submit' onClick={SubmitHandler}>
              Pay Rs.299
            </Button>
            {/* {SubmitData && <Link href='/Submit'></Link>} */}
          </div>
        </Form>
      </Formik>
    </Container>
  );
};

export default IndexPage;
