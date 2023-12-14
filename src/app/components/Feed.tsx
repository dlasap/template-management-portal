import React, { useEffect, useId, useMemo, useState } from "react";
import { User } from "../interface/UserInterface";
import axios from "axios";
interface IPosts {
    id: number;
    body: string;
    userId: number;
    tags: [];
    reactions: number;
}
interface IUsers {
    id: number;
    firstName: string;
    lastName: string;
    maidenName: string;
}
export const Feed: React.FC = () => {
    const [usersList, setUsersList] = useState<IUsers[]>([]);
    const [newsPost, setNewsPost] = useState<Array<object>>([]);
    const [posts, setPosts] = useState([]);
    const feedAction = [
        { title: 'Like' }, { title: 'Comment' }, { title: 'Repost' }, { title: 'Send' }
    ]
    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const usersResponse = await axios.get("https://dummyjson.com/users");
                const users = usersResponse.data.users;
                // Fetch posts
                const postsResponse = await axios.get("https://dummyjson.com/posts");
                const posts = postsResponse.data.posts;
                //combine post and names
                const postsWithUserNames = posts.map((post: { userId: any }) => {
                    const user = users.find(
                        (user: { id: any }) => user.id === post.userId
                    );
                    const fullName = user
                        ? `${user.firstName} ${user.lastName}`
                        : "Anonymous User";
                    const thumbnail = user ? `${user.image}` : "";
                    const companyTitle = user ? `${user.company.title}` : 'Anonymous Title'
                    return { ...post, fullName, thumbnail, companyTitle };
                });
                setPosts(postsWithUserNames);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };
        fetchPosts();
    }, []);
    console.log();
    console.log("POSTS: ", posts);
    return (
        <div className="">
            <div className="w-[65%] dark:text-white text-slate-800 ">
                <span>
                    <div className="my-5 rounded-lg dark:bg-slate-800 dark:border-slate-200/30 border">
                        Here are post and status
                    </div>
                    {posts.map((posts: any, index) => {
                        return (
                            <div
                                className="bg-white dark:bg-slate-800 w-full h-full relative rounded-lg pt-4 my-3 shadow-2xl border border-slate-800/10 dark:border dark:border-slate-200/30 "
                                key={index}
                            >
                                <div className="font-bold flex items-center mb-7 px-4">
                                    <img
                                        src={posts["thumbnail"]}
                                        className="w-10 h-10 rounded-full mr-5 border-slate-200/30 border"
                                    />
                                    <div className="flex flex-col">
                                        <span className="text-slate-900 dark:text-white">
                                            {posts["fullName"]}
                                        </span>
                                        <span className=" font-thin text-sm text-slate-900 dark:text-white">
                                            {posts['companyTitle']}
                                        </span>
                                    </div>
                                </div>
                                <div className="px-8 text-slate-900 dark:text-white">{posts["body"]}</div>
                                <div className="flex justify-evenly p-2">
                                    {
                                        feedAction.map(actions =>
                                            <a className="w-full h-full text-center cursor-pointer hover:bg-slate-200 dark:hover:text-slate-900 text-slate-900 dark:text-white p-3 rounded-sm">{actions.title}</a>
                                        )
                                    }
                                </div>
                            </div>
                        )


                    })}
                </span>{" "}
            </div>
        </div>
    );
};

export default Feed;
