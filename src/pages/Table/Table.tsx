import { useEffect, useState } from "react";
import { TableList } from "../../components/Table/TableList";
import { useAppDispatch, useAppSelector } from "../../hooks/hook";
import { fetchTable } from "../../redux/Table/operation";
import { selectTable } from "../../redux/Table/selectors";

export const Table = () => {
    const dispatch = useAppDispatch();
    const table = useAppSelector(selectTable);

    const limit = 10; // Кількість елементів на сторінці
    const [offset, setOffset] = useState(0); // Поточний offset

    useEffect(() => {
      dispatch(fetchTable({ offset, limit }));
    }, [dispatch, offset, limit]);

    const loadNextPage = () => {
      setOffset((prevOffset) => prevOffset + limit);
    };

    return (
      <div>
        <p>Table</p>
        <TableList items={table} />
        <button onClick={loadNextPage}>Next page</button>
      </div>
    );
};

