import menu from "./menu.json";
import Item from "./item";
import styles from "./items.module.scss";
import { useState } from "react";
import { useEffect } from "react";

interface IitensProps {
    search: string;
    filters: number | null;
    sorter: string;
}

export default function Items(itensProps: IitensProps) {

    const [list, setList] = useState(menu);

    const {search, filters, sorter} = itensProps;

    function searchBy(title: string) {
        const regex = new RegExp(search, 'i');
        return regex.test(title);
      }
    
    function filterBy(id: number) {
        if(filters === null) return true;
        return filters === id;
    }

    function sorterList(list: typeof menu) {
        switch(sorter) {
            case 'porcao':
                return list.sort((a, b) => a.size > b.size ? 1 : -1);
            case 'qtd_pessoas':
                return list.sort((a, b) => a.serving - b.serving);
            case 'preco':
                return list.sort((a, b) => a.price - b.price);
            default:
                return list;
        }  
    }

    useEffect(() => {
        const filteredList = menu.filter(
            (item) => searchBy(item.title) && filterBy(item.category.id)
            );
        setList(sorterList(filteredList));
    }, [search, filters, sorter]);

    return (
        <div className={styles.items}>
        {list.map((item) => (
            <Item
                key={item.id}
                {...item}
            />
        ))
        }
        </div>
    )
}
