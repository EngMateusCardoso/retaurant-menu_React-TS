import styles from "./sorter.module.scss";
import options from "./options.json";
import { Dispatch, useState } from "react";
import classNames from "classnames";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";

export type SorterOpitions = '' | 'porcao' | 'qtd_pessoas' | 'preco';

interface ISorter {
    sorter: SorterOpitions;
    setSorter: Dispatch<React.SetStateAction<SorterOpitions>>;
}

export default function Sorter({ sorter, setSorter }: ISorter) {
    
    const [open, setOpen] = useState(false);
    const sorterName = sorter && options.find(option => option.value === sorter)?.name;
    
    return (
        <button 
            className={classNames({
                [styles.sorter]: true,
                [styles["sorter--active"]]: sorter !== "",
            })}
            onClick={() => setOpen(!open)}
            onBlur={() => setOpen(false)}
            >

            <span>
                {sorterName || "Sort by:"}
            </span>

            {open ? (<MdKeyboardArrowUp size={20} />) : (<MdKeyboardArrowDown size={20} />)}

            <div className={
                classNames({
                    [styles.sorter__options]: true,
                    [styles["sorter__options--active"]]: open,
                })
            }>
                {options.map(option => (
                    <div 
                        className={styles.sorter__option}
                        key={option.value}
                        onClick={() => setSorter(option.value as SorterOpitions)}
                    >
                        {option.name}
                    </div>
                ))}
            </div>
            
        </button>
    )
}