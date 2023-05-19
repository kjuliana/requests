import React from 'react';
import Requests from "../../components/Requests/Requests";
import Button from "../../components/Button/Button";
import {useRequests} from "../../context";
import Api from "../../api/service";
import {useFetching} from "../../hooks/useFetching";

const GetPage = () => {
    const {add} = useRequests();

    const getRequest = useFetching(async () => {
        return await Api.get();
    });

    const handleClick = () => {
        const time = new Date();
        const promise = getRequest.fetch();
        add({
            time: time,
            url: 'https://httpbin.org/get'
        })
    }

    return (
        <div>
            <Button
                name='Get'
                onClick={handleClick}
            />
            <Requests/>
        </div>
    );
};

export default GetPage;