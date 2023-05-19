import {useState} from "react";

type ReturnShape<T> = {
    fetch: () => Promise<void>,
    isLoading: boolean,
    error: string,
    data: T | undefined
}

export const useFetching = <T>(callback: () => Promise<T>): ReturnShape<T> => {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');
    const [data, setData] = useState<T>();

    const fetch = async () => {
        try {
            setIsLoading(true);
            setData(await callback());
        } catch(e: unknown) {
            if (typeof e === 'object' && e !== null && 'message' in e && typeof e.message === 'string') {
                setError(e.message)
            }
        } finally {
            setIsLoading(false);
        }
    }

    return {fetch, data, isLoading, error};
}