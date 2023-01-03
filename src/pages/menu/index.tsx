import { useState } from "react";
import styles from "./menu.module.scss";
// import Logo from "../../assets/logo.svg";
//svgr
// import { ReactComponent as Logo } from "assets/logo.svg";
import  Logo from "assets/logo.png";
import Searcher from "./searcher";
import Filters from "./filters";
import Sorter from "./sorter";
import Items from "./items";
import { SorterOpitions } from "./sorter";

export default function Cardapio() {

  const [search, setSearch] = useState("");
  const [filters, setFilters] = useState<number | null>(null);
  const [sorter, setSorter] = useState<SorterOpitions>("");

  return (
    <main>
      <nav className={styles.menu_nav}>
        <img src={Logo} alt="Logo" height='75' />
        {/* <Logo/> */}
      </nav>

      <header className={styles.header}>
        <div className={styles.header__text}>Restaurant Van's House!</div>
      </header>

      <section className={styles.menu}>

        <h3 className={styles.menu__title}>Menu</h3>
        <Searcher search={search} setSearch={setSearch}/>

        <div className={styles.menu__filters}>
          <Filters filter={filters} setFilters={setFilters}/>
          <Sorter sorter={sorter} setSorter={setSorter}/>
        </div>

        <Items search={search} filters={filters} sorter={sorter}/>

      </section>
    </main>
  )
}