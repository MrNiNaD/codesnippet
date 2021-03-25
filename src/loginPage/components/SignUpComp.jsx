import React, { useState } from 'react';
//import styled from 'styled-components';
import { Steps, Step } from "react-step-builder";
import CommonForm from "./CommonForm";

// //Role's Value
// const student = 'Student';
// const tutor = 'Tutor';

//Classname for selected Role
// const selectedRole = 'selected_role';

const SignUpForm = () => {
  const [user, setUser] = useState(null)
  // //To manage the state of Sign up form details
  // const [formDetails, setFormDetails] = useState({});

  // //To manage state selected of the user
  // const [role, setRole] = useState(student);

  // //To manage current page number
  // const [currentPage, setCurrentPage] = useState(1);

  // //Switch to Student Role
  // const switchToStudent = () => {
  //   setRole(student);
  // }

  // //Switch to Tutor Role
  // const switchToTutor = () => {
  //   setRole(tutor);
  // }

  return (
    // <Form onSubmit={(event) => {
    //   event.preventDefault();
    //   //console.log(event.target.children);
    //   }}>
    //   <div>
    //     <RoleButton
    //       onClick={switchToStudent}
    //       className={(role === student) ? selectedRole : ''}
    //     >
    //       Student
    //     </RoleButton>
    //     <RoleButton
    //       onClick={switchToTutor}
    //       className={(role === tutor) ? selectedRole : ''}
    //     >
    //       Tutor
    //     </RoleButton>
    //   </div>
    //   {
    //     (role === student)
    //     &&
    //     <div>student</div>
    //   }
    //   {
    //     (role === tutor)
    //     &&
    //     <div>tutor</div>
    //   }
    // </Form>
    <Steps>
      <Step setUser={setUser} component={CommonForm} />
      {user?
      <Step component={() => <span>tutor</span>} />
      : <Step component={() => <span>student</span>} />}
    </Steps>
  )
}

// const Form = styled.form`
//   position: relative;
// `;

// const RoleButton = styled.span`
// background-color: green;
// cursor: pointer;
// opacity: .5;

// &.${selectedRole} {
//   opacity: 1;
// }
// `;

export default SignUpForm