import { Table, TableHead } from "./Table.styled";
import { TableItem } from "./TableItem";

interface TableListProps {
  items: any[]; 
}

interface Item {
  id: number;
  name: string;
  email: string;
  birthday_date: string;
  phone_number: string;
}

export const TableList: React.FC<TableListProps> = ({ items }) => {
  console.log(items);
  return (
    <Table>
      <thead>
        <tr>
          <TableHead>Name</TableHead>
          <TableHead>Email</TableHead>
          <TableHead>B-day date</TableHead>
          <TableHead>Phone number</TableHead>
        </tr>
          </thead>
          <tbody>
      {items?.map((item: Item, index: number) => {
          return <TableItem key={index} item={item} />;
          
      })}
              </tbody>
    </Table>
  );
};


