import {DeleteResponse, GetResponse, PostResponse} from "../models";

export default class Api {
    static async get(): Promise<GetResponse> {
        return await fetch('https://httpbin.org/get').then(response => response.json());
    }

    static async post(): Promise<PostResponse> {
        return await fetch('https://httpbin.org/post').then(response => response.json());
    }

    static async delete(): Promise<DeleteResponse> {
        return await fetch('https://httpbin.org/delete').then(response => response.json());
    }
}