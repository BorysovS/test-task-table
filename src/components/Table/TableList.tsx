import { TableItem } from "./TableItem";

interface TableListProps {
  items: any[]; // Замість 'any' визначте тип масиву items
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
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>B-day date</th>
          <th>Phone number</th>
        </tr>
          </thead>
          <tbody>
      {items?.map((item: Item, index: number) => {
          return <TableItem key={index} item={item} />;
          
      })}
              </tbody>
    </table>
  );
};


