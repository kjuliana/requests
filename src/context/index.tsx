import React, {createContext, useCallback, useContext, useMemo, useState} from "react";

export interface Request {
    time: Date;
    url: string
}

export interface RequestsContextType {
    requests: Request[],
    add: (newRequest: Request) => void,
}

const RequestsContext = createContext<RequestsContextType | null>(null);

export const useRequests = (): RequestsContextType => {
    const context = useContext(RequestsContext);

    if (context === null) {
        throw new Error('useRequests must be used inside RequestsProvider')
    }

    return context;
}

interface RequestsProviderProps {
    children: React.ReactNode;
}

export const RequestsProvider = ({children}: RequestsProviderProps) => {
    const [requests, setRequests] = useState<Request[]>([]);

    const add = useCallback((newRequest: Request): void => {
        setRequests((prev) => ([...prev, newRequest]));
    }, [])

    const value: RequestsContextType = useMemo(
        () => ({requests, add}),
        [requests, add]
    );

    return (
        <RequestsContext.Provider value={value}>
            {children}
        </RequestsContext.Provider>
    )
}