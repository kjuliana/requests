import React from 'react';
import {useRequests, Request} from "../../context";
import styles from './Requests.module.css';

const Requests = () => {
    const {requests} = useRequests();
    return (
        <details open>
            <summary className={styles.summary}>Список запросов</summary>
                {requests.length ? (
                    <ul>
                        {requests.map(({time, url}: Request) =>
                            <li><time>{time.toLocaleString()}</time> {url}</li>
                        )}
                    </ul>
                ) : <p>Список запросов пуст</p>}
        </details>
    );
};

export default Requests;