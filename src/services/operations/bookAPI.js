import { toast } from "react-hot-toast"

import { apiConnector } from "./apiconnector"
import { booksEndpoints } from "../apis"

const { BOOKS_API } = booksEndpoints;

let result = []


export async function getAllBooks(token) {
    // const toastId = toast.loading("Loading...")

    try {
        console.log("BEFORE Calling BACKEND API FOR BOOKS ");
        const response = await apiConnector(
            "GET",
            BOOKS_API,
            null,
            {
                Authorization: `Bearer ${token}`,
            }
        )
        console.log("AFTER Calling BACKEND API FOR BOOKS");

        console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>")
        console.log("API responce", response.data)
        console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>")

        if (!response) {
            throw new Error(response.data.message)
        }
        result = response.data.data

    } catch (error) {
        console.log("GET_ALL_BOOKS_API API ERROR............", error)
        toast.error("Could Not Get ALL BOOKS")
    }
    // toast.dismiss(toastId)
    return (result)
}

export async function createNewBook(token, title) {
    // const toastId = toast.loading("Loading...")

    try {
        console.log("BEFORE CALLING BACKEND API FOR CREATE BOOKS ");
        const response = await apiConnector(
            "POST",
            BOOKS_API,
            title,
            {
                Authorization: `Bearer ${token}`,
            }
        )
        console.log("AFTER CALLING BACKEND API FOR CREATE BOOKS");

        console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>")
        console.log("API responce", response.data.data)
        console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>")

        if (!response) {
            throw new Error(response.data.message)
        }
        result = response.data.data
        toast.success("Book Created")


    } catch (error) {
        console.log("Create_BOOK API ERROR............", error)
        toast.error("Could Not Create Book")
    }
    // toast.dismiss(toastId)
    return (result)
}


export async function deleteBook(token, title) {
    // const toastId = toast.loading("Loading...")

    try {
        console.log("BEFORE Calling BACKEND API FOR DELETE BOOKS TITLE: ", title);
        const response = await apiConnector(
            "DELETE",
            BOOKS_API,
            { title },
            {
                Authorization: `Bearer ${token}`,
            }
        )
        console.log("AFTER Calling BACKEND API FOR BOOKS");

        console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>")
        console.log("API RESPONCE", response.data.data)
        console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>")

        if (!response) {
            throw new Error(response)
        }


        toast.success("Book Deleted");

    } catch (error) {
        console.log("Delete_BOOK API ERROR............", error)
        toast.error("Could Not Delete Book")
    }
    // toast.dismiss(toastId)
    return (result)
}



export async function updateBook(token, formData) {
    // const toastId = toast.loading("Loading...")

    try {
        console.log("BEFORE Calling BACKEND API FOR UPDATE BOOKS ");
        const response = await apiConnector(
            "PUT",
            BOOKS_API,
            formData,
            {
                Authorization: `Bearer ${token}`,
            }
        )

        console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>")
        console.log("API responce", response.data.data)
        console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>")

        if (!response) {
            throw new Error(response.data.message)
        }
        result = response.data.data

        toast.success("Book Updated")

    } catch (error) {
        console.log("Update_Book API ERROR............", error)
        toast.error("Could Not Update Book")
    }
    // toast.dismiss(toastId)
    return (result)
}
