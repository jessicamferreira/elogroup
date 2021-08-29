import { Button } from "@material-ui/core";
import React from "react";
import CheckboxesGroup from "../../components/Checkbox";
import MultilineTextFields from "../../components/Form";
import Header from "../../components/Header";
import  { Container, LeadText } from './styles';
export default function NewLead() {
  return (
    <div>
      <Header />
        <LeadText>Novo Lead</LeadText>
      <Container>
      <MultilineTextFields />
      <CheckboxesGroup />
      <Button variant="contained" color="secondary">
  Salvar
</Button>      </Container>
    </div>
  );
}
