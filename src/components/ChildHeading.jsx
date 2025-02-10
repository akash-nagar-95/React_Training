// import React from 'react'

function ChildHeading({ msg, userData }){
  return (
    <div>
      <h4>this is the content from the childheading.</h4>
      <p>message from parent component is : {msg}</p>
      <p>User Data passed from the parent is below : </p>
      <p>User Name : {userData.name}</p>
      <p>User Age : {userData.age}</p>
    </div>
  );
}

export default ChildHeading;
