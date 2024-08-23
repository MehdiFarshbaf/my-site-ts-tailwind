import {FC, ReactElement} from "react";

// styles
import styles from './ServiceCard.module.scss'


interface IProps {
    service: {
        id: number | string,
        icon?: ReactElement,
        title: string,
        description: string
    }
}

const ServiceCard: FC<IProps> = ({service}) => {
    return (
        // card
        <div key={service.id} className={styles.card}>
            {/*container*/}
            <div className={styles.container}>
                {service.icon}
                <p className={styles.title}>{service.title}</p>
                <p className={styles.description}>{service.description}</p>
            </div>
        </div>
    )
}
export default ServiceCard