import React from "react";

function Foo({Gname,Lname, ChildNo}) {
  return(
  <>
    <h2> {Gname} Shivaji Jadhav </h2>
    <h2> {Lname} {Gname} Jadhav </h2>
    <h5> They have a {ChildNo} child</h5>
  </>
  )
}

function Hello() {
  return (
    <>
      <h1>Hello From Hello component...</h1>
      <br></br>
      <Foo Gname="Sudhir" Lname="Manisha" ChildNo="3" />

      <Foo Gname="Ganesh" Lname="Archana" ChildNo="2" />
    </>
  );
}

export default Hello;
