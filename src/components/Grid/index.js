import React from 'react';
import * as C from "./styles";
import GridItem from '../GridItem';

const Grid = ({ itens, setItens }) => {

    const onDelete = (ID) => {
        const newArray = itens.filter((transaction) => transaction.id !== ID);
        setItens(newArray);
        localStorage.setItem("transactions", JSON.stringify(newArray));
      };

    return(
        <C.Table>
            <C.Thead>
                <C.Tr>
                    <C.Th width={40} >DESCRIÇÃO</C.Th>
                    <C.Th width={40} >VALOR</C.Th>
                    <C.Th width={10} alignCenter>TIPO</C.Th>
                </C.Tr>
                    <C.Th width={10}></C.Th>
            </C.Thead>
            <C.Tbody>
                {itens?.map((item, index) => (
                    <GridItem key={index} item={item} onDelete={onDelete} />

                ))}
            </C.Tbody>


        </C.Table>
    );
};

export default Grid;