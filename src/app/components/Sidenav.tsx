import React, { useContext, useEffect } from "react";
import { User } from "../interface/UserInterface";
import { navList } from "../data/navList";
// import { UserContext, useUserContext } from "../data/contexts/Context";

interface UserProps {
    user: User[];
}

export const Sidenav: React.FC<UserProps> = ({ user }: UserProps) => {

    // const users = useUserContext();
    const filtered = user.filter((item) => item.profileName === "John Rosell Magalso");
    // const { profileName, job, userId, branchLocation, thumbnail } = users

    useEffect(() => {
        localStorage.setItem('items', JSON.stringify(filtered));

    }, [filtered]);
    return (
        <section className="w-1/4">
            <div className=" w-[25%] ml-2 h-screen rounded-2xl pt-5 mb-20 my-3 navbarContainer bg-white dark:bg-slate-800/80  text-center hidden lg:block fixed z-20 inset-0 top-20  right-auto pb-10 pl-8 pr-6 overflow-y-auto dark:border dark:border-slate-200/30">
                <div className=" border-b p-8">
                    {filtered.map((details) => {
                        const { userId, profileName, job, branchLocation, thumbnail } = details;
                        return (
                            <div className="" key={userId}>
                                <div className="flex justify-center flex-col font-bold">
                                    <div>
                                        <img
                                            src={thumbnail}
                                            className=" m-auto mb-[12px] w-1/4 border-white rounded-full bg-white"
                                        />
                                    </div>
                                    <h1 className="text-xl text-slate-800 dark:text-slate-200">{profileName}</h1>
                                </div>
                                <p className="font-bold text-sm text-gray-400 md:text-sm">
                                    {job}
                                </p>
                                <div className="text-gray-400">{branchLocation}</div>
                            </div>
                        );
                    })}
                </div>
                <div className="border-b py-8 ">
                    <ul>
                        {navList.map((list: any) => {
                            const { id, icon, title } = list;
                            return (
                                <li
                                    className=" text-slate-800 dark:text-slate-200 text-left px-10 py-2 font-medium cursor-pointer text-base flex items-center hover:bg-slate-800 hover:text-slate-200 dark:hover:bg-white dark:hover:text-black"
                                    key={id}
                                >
                                    {" "}
                                    <span className="mr-3 text-slate-800 dark:text-slate-200 hover:bg-slate-800 hover:text-slate-200 dark:hover:bg-white dark:hover:text-black">{icon}</span>
                                    {title}
                                </li>
                            );
                        })}
                        <li></li>
                    </ul>
                </div>
            </div>
        </section>
    );
};
