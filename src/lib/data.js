import { connectToDb } from "./utils";
import { Post, User } from "./models";
import { unstable_noStore as noStore } from "next/cache";
// const users = [
//    { id: 1, name: "Hot" },
//    { id: 2, name: "K3y" }
// ]


// const posts = [
//    { id: 1, title: "Post 1", body: "......", userId: 1 },
//    { id: 2, title: "Post 2", body: "......", userId: 2 },
//    { id: 3, title: "Post 3", body: "......", userId: 1 },
//    { id: 4, title: "Post 4", body: "......", userId: 2 }
// ]

export const getPosts = async () => {
   try {
      connectToDb()
      const posts = await Post.find()
      return posts

   } catch (error) {
      console.log(err);
      throw new Error("Failed to fetch posts!")
   }
}

export const getPost = async (slug) => {
   // return posts.find((post) => post.id === parseInt(id));
   noStore()
   try {
      connectToDb()
      const post = await Post.findOne({ slug })
      return post

   } catch (error) {
      console.log(err);
      throw new Error("Failed to fetch post!")
   }
}

export const getUser = async (id) => {
   // return users.find((user) => user.id === parseInt(id));
   try {
      connectToDb()
      const user = await User.findById(id)
      return user

   } catch (error) {
      console.log(err);
      throw new Error("Failed to fetch user!")
   }
}

export const getUsers = async () => {
   // return users.find((user) => user.id === parseInt(id));
   try {
      connectToDb()
      const users = await User.find()
      return users

   } catch (error) {
      console.log(err);
      throw new Error("Failed to fetch users!")
   }
}