import filters from "./filters.json"
import styles from "./filters.module.scss"
import classNames from "classnames";

type IOption = typeof filters[0];

interface IFilters {
    filter: number | null;
    setFilters: React.Dispatch<React.SetStateAction<number | null>>;
}

export default function Filters({ filter, setFilters }: IFilters) {

    function selectFilter(option: IOption) {
        if (filter === option.id) return setFilters(null);
        return setFilters(option.id);
    }

    return (
        <div className={styles.filters}>
            {filters.map((option) => (
                <button 
                    key={option.id} 
                    onClick={() => selectFilter(option)}
                    // className={`
                    //     ${styles.filters__filter} ${filter === option.id ? styles["filters__filter--active"] : ""}
                    // `}
                    //now with classNames package
                    className={classNames({
                        [styles.filters__filter]: true,
                        [styles["filters__filter--active"]]: filter === option.id
                    })}
                    >
                        {option.label}
                </button>
            ))}
        </div>
    )
}