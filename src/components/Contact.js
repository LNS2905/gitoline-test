import React, { useContext } from "react";
import TextField from "@mui/material/TextField";
import { styled } from "@mui/material/styles";
import {Button, Select, Textarea, Row, Col } from "react-materialize";
import Icon from "@mui/material/Icon";
import Container from "@mui/material/Container";
import { ThemeContext } from './ThemeContext'; // Import the ThemeContext

// Tạo các lớp CSS tùy chỉnh bằng styled-components
const StyledTextField = styled(TextField)({
  '& label.Mui-focused': {
    color: 'black',
  },
  '& .MuiInput-underline:after': {
    borderBottomColor: 'transparent',
  },
  '& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline': {
    borderColor: 'transparent',
  },
});

const StyledSelect = styled(Select)({
  // Tùy chỉnh CSS cho Select nếu cần
});


const StyledTextarea = styled(TextField)({
  '& label.Mui-focused': {
    color: 'black', // Màu sắc của label khi focus
  },
  '& .MuiInput-underline:after': {
    borderBottomColor: 'transparent', // Màu sắc của đường gạch chân khi focus
  },
  '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
    borderColor: 'transparent', // Màu sắc của đường viền khi focus
  },
});

const StyledButton = styled(Button)({
  // Tùy chỉnh CSS cho Button nếu cần
});

const StyledContainer = styled(Container)({
  display: 'flex',  
  justifyContent: 'center',
  alignItems: 'center',
  height: '82vh',
  width: '50%',
  margin: '0 auto',
  padding: '20px',
  boxShadow: '0 0 10px rgba(0,0,0,0.1)',
  borderRadius: '10px',
});

export default function Contact() {
  const { theme } = useContext(ThemeContext); // Access the theme from context
  const handleSubmit = (e) => {
    e.preventDefault();
    // Xử lý việc gửi form ở đây nếu cần
  };

  return (
    <div style={{backgroundColor: theme.backgroundColor}}>
    <StyledContainer style={{backgroundColor:"white"}}>
        <Row>
          <Col>
            <h3>Contact us</h3>
            <form onSubmit={handleSubmit}>
              <StyledTextField
                l={12}
                m={12}
                s={12}
                id="Text Input-38"
                label="Your Name"
              /><br></br>
              <StyledTextField
                l={12}
                m={12}
                s={12}
                id="Text Input-39"
                label="Your Phone"
              /><br></br>
              <StyledTextField
                l={12}
                m={12}
                s={12}
                email
                id="Text Input-41"
                label="Email"
                validate
              />
              <StyledSelect
                l={12}
                m={12}
                s={12}
                id="Select-46"
                multiple={false}
                onChange={function noRefCheck() {}}
                value=""
              >
                <option disabled value="">
                  Choose your favorite movie
                </option>
                <option value="1">Romantic</option>
                <option value="2">Horror</option>
                <option value="3">Action</option>
                <option value="4">Science Fiction</option>
              </StyledSelect>
              <br></br>
              <StyledTextarea
                l={12}
                s={12}
                icon={<Icon>mode_edit</Icon>}
                
                label="Your content"
              />
              <br></br>
              <StyledButton l={12} s={12} type="submit">
                Submit
              </StyledButton>
            </form>
          </Col>
        </Row>
        </StyledContainer>
        </div>
    
  )
}

