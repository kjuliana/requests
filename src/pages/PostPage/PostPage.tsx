import React from 'react';
import Button from "../../components/Button/Button";
import Requests from "../../components/Requests/Requests";
import {useRequests} from "../../context";
import {useFetching} from "../../hooks/useFetching";
import Api from "../../api/service";

const PostPage = () => {
    const {add} = useRequests();

    const getRequest = useFetching(async () => {
        return await Api.post();
    });

    const handleClick = () => {
        const time = new Date();
        const promise = getRequest.fetch();
        add({
            time: time,
            url: 'https://httpbin.org/post'
        })
    }

    return (
        <div>
            <Button
                name='Post'
                onClick={handleClick}
            />
            <Requests/>
        </div>
    );
};

export default PostPage;