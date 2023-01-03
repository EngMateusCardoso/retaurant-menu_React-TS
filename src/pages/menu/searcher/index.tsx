import React from "react";
import styles from "./searcher.module.scss";
import { CgSearch } from "react-icons/cg";

interface IsearchProps {
    search: string;
    setSearch: React.Dispatch<React.SetStateAction<string>>;
}

export default function Searcher({search, setSearch} : IsearchProps) {
    return (
        <div className={styles.searcher}>
            <input
                placeholder="Search"
                value={search}
                onChange={(evento) => setSearch(evento.target.value)} />
        <CgSearch size={20} color="#4C4D5E" />  
        </div>
    )
}