import React, { useState } from "react";

import { MdAdd, MdLink } from "react-icons/md";
import { Link } from "react-router-dom";

import Card from "../Card/index";
import { Container } from "./styles";
export default function List({ data, index: listIndex }) {

  return (
    <Container done={data.done}>
      <header>
        <h2>{data.title}</h2>
        {data.creatable && (
          <Link to="/new-lead" className="button">
            <MdAdd size={30} color="#FFF"  className="icon"/>
          </Link>
        )}   

      </header>
       <ul>
      { data.cards.map((card, index) => (
          <Card 
            key={card.id} 
            listIndex={listIndex}
            index={index} 
            data={card}
          />
        ))  }

      </ul>
    </Container>
  );
}
