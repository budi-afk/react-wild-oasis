import styled from "styled-components";
import GlobalStyled from "./styles/GloabalStyled";
import Button from "./ui/Button";
import Input from "./ui/Input";
import Heading from "./ui/Heading";

const StyledApp = styled.div`
  background-color: orange;
  padding: 20px;
`;

export default function App() {
  return (
    <>
      <GlobalStyled />
      <StyledApp>
        <Heading as="h1">The Wild Oasis</Heading>
        <Heading as="h2">Heading h2</Heading>
        <Heading as="h3">heading h3</Heading>
        <Button onClick={() => alert("check in")}>Check In</Button>
        <Input placeholder="Search..." />
      </StyledApp>
    </>
  );
}
