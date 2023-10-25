import { useState } from "react";
import { ModalWindow } from "../Modal/Modal";
import { LineItem, TableLine } from "./Table.styled";
import { deleteTableData } from "../../redux/Table/operation";
import { useAppDispatch } from "../../hooks/hook";

interface Item {
  id: number;
  name: string;
  email: string;
  birthday_date: string;
  phone_number: string;
}

export const TableItem: React.FC<{ item: Item }> = ({ item }) => { 
  const { id, name, email, birthday_date, phone_number } = item;

  const dispatch = useAppDispatch();

  
  const [isOpen, setIsOpen] = useState(false)

  const deleteRow = (id: number) => {
    dispatch(deleteTableData( id ));
  }

    
    console.log(item)
  return (
      <>
        <TableLine key={id}>
          <LineItem>{name}</LineItem>
          <LineItem>{email}</LineItem>
            <LineItem>{birthday_date}</LineItem>
            <LineItem>{phone_number}</LineItem>
            <LineItem><button type="button" onClick={() => setIsOpen(true)}>edit</button></LineItem>
            <LineItem><button type="button" onClick={() => deleteRow(id)}>delete</button></LineItem>
      </TableLine>
      {isOpen && <ModalWindow data={item} id={id} onClose={() => setIsOpen(false) }/>}
      </>
    )
}