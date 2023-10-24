
interface Item {
  id: number;
  name: string;
  email: string;
  birthday_date: string;
  phone_number: string;
}

export const TableItem: React.FC<{ item: Item }> = ({ item }) => { 
    const { id, name, email, birthday_date, phone_number } = item;
    
    console.log(item)
    return (
        <tr key={id}>
          <td>{name}</td>
          <td>{email}</td>
            <td>{birthday_date}</td>
            <td>{phone_number}</td>
            <td><button>edit</button></td>
            <td><button>delete</button></td>
        </tr>
    )
}