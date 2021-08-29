import React from 'react';
import { DndProvider} from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import Board from '../../components/Board';
import Header from '../../components/Header';
import Global from '../../styles/global';
function Leads() {
  return (
    <DndProvider backend={HTML5Backend}>
    <Header />
    <Board />
    <Global />
    </DndProvider>
  );
}

export default Leads;
