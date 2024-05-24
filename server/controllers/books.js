const Books = require("../models/Books");
const User = require('../models/User');

require("dotenv").config();
// create course

exports.createBook = async (req, res) => {
    try {

        // fetch data
        const {
            title,
            auther,
            genre,
            yearPublished,
        } = req.body;

        // validation

        if (!title ||
            !auther ||
            !genre ||
            !yearPublished
        ) {
            return res.status(400).json({
                success: false,
                message: "All fields are required"
            })
        }

        const userId = req.user.id;

        // const isBookPresent = await Books.findOne(title);

        // if (isBookPresent != null) {
        //     return res.json({
        //         success: false,
        //         message: "Can't create book with same name"
        //     })
        // }


        const newBook = await Books.create({
            title,
            auther,
            genre,
            yearPublished,
            createdBy: userId
        })


        // add the book to user schema 

        await User.findByIdAndUpdate(
            { _id: userId },
            {
                $push: {
                    books: newBook._id
                }
            },
            { new: true },

        );

        // return responce

        return res.status(200).json({
            success: true,
            message: "Course Created Successfully",
            data: newBook
        })

    } catch (error) {
        console.log("Error while creating Book", error);

        return res.status(500).json({
            success: false,
            message: "failed to create Book",
            error: error.message,
        })


    }
}


// getall courses handler function

exports.getAllBooks = async (req, res) => {
    try {

        const userId = req.user.id;

        const getUser = await User.findById(userId).populate("books").exec();

        console.log("user value", getUser);


        return res.status(200).json({
            success: true,
            message: "Data for all courses fetched successfully",
            data: getUser.books
        })

    } catch (error) {
        console.log("Error while fetching ALL Courses", error);

        return res.status(500).json({
            success: false,
            message: "failed to create Course",
            error: error.message,
        })
    }
}


//getCourseDetails
exports.getBookDetails = async (req, res) => {
    try {
        //get id
        const { Book_id } = req.body;
        //find book details
        const bookDetails = await Books.find({ _id: Book_id });


        //validation
        if (!bookDetails) {
            return res.status(400).json({
                success: false,
                message: `Could not find Book`,
            });
        }
        //return response
        return res.status(200).json({
            success: true,
            message: "Course Details fetched successfully",
            data: bookDetails,
        })

    }
    catch (error) {
        console.log(error);
        return res.status(500).json({
            success: false,
            message: error.message,
        });
    }
}

exports.updateBook = async (req, res) => {
    try {
        // fetch id of book

        const { oldTitle, title, auther, genre } = req.body;

        let Book;

        console.log(oldTitle, "  ", title, "  ", auther, "  ", genre);
        let flag = false;

        if (title) {

            Book = await Books.findOneAndUpdate({ title: oldTitle }, { title }, { new: true });
            flag = true;
        }
        if (auther) {
            let newTitle = oldTitle
            if (flag) {
                newTitle = title;
            }

            Book = await Books.findOneAndUpdate({ title: newTitle }, { auther }, { new: true });
        }
        if (genre) {
            let newTitle = oldTitle
            if (flag) {
                newTitle = title;
            }

            Book = await Books.findOneAndUpdate({ title: newTitle }, { genre }, { new: true });
        }

        return res.status(200).json({
            success: true,
            message: "Book Updated Successfully",
            data: Book
        })


    } catch (error) {

        console.log("Error updating Book", error.message);

        return res.status(400).json({
            success: false,
            message: error.message
        })

    }

}


exports.deleteBook = async (req, res) => {
    try {
        const { title } = req.body;
        const userId = req.user.id;

        // Find the book by title and delete it
        const deletedBook = await Books.findOneAndDelete({ title });

        if (!deletedBook) {
            return res.status(404).json({
                success: false,
                message: "Book not found",
            });
        }

        // Update the user's books array to remove the deleted book's ID
        await User.findByIdAndUpdate(userId, {
            $pull: { books: deletedBook._id }
        });

        return res.status(200).json({
            success: true,
            message: "Book Deleted Successfully",
        });
    } catch (error) {
        console.log("Error Deleting Book", error.message);
        return res.status(400).json({
            success: false,
            message: error.message
        });
    }
};

