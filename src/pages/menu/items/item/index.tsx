import styles from './item.module.scss'
import menu from '../menu.json'
import classNames from 'classnames'

type itemProps = typeof menu[0];

export default function Item(props: itemProps) {

    const {title, description, category, size, serving, price, photo} = props;

    return (
        <div className={styles.item}>
        
            <div className={styles.item__image}>
                <img src={photo} alt={title} />
            </div>

            <div className={styles.item__description}>
                <div className={styles.item__title}>
                    <h2> {title} </h2>
                    <p> {description} </p>
                </div>

                <div className={styles.item__tags}>
                    <div className={
                        classNames({
                            [styles.item__type]: true,
                            [styles[`item__type__${category.label.toLowerCase()}`]]: true,
                        })
                    }>
                        <p>{category.label}</p>
                    </div>

                    <div className={styles.item__porcao}>
                        <p>{size}g</p>
                    </div>

                    <div className={styles.item__qtdpessoas}>
                        <p>serve {serving} pessoa{serving === 1 ? "": "s"}</p>
                    </div>

                    <div className={styles.item__valor}>
                        <p>R$ {price.toFixed(2)}</p>
                    </div>
                </div>
            </div>

        </div>
    )
}
