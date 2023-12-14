"use client";
import Image from "next/image";
import { Sidenav } from "./components/Sidenav";
import { createContext, useEffect, useState } from "react";
import { User } from "./interface/UserInterface";
import Dashboard from "./components/Dashboard";
import Widgets from "./components/Widgets";
import Navbar from "./components/Navbar";
// import { UserContext } from "./data/contexts/Context";

const userDetails = [
  {
    profileName: "John Rosell Magalso",
    job: "Packaged App Development Analyst",
    userId: "12022022",
    category: "Tech",
    companyId: "13022",
    branchLocation: "Cebu City",
    thumbnail: "https://robohash.org/hicveldicta.png?size=50x50&set=set1",
  },
];

export function Home() {
  // const [users, setUsers] = useState<User[]>([]);
  // const UserContext = createContext<User | undefined>(undefined);

  // const [user, setUser] = useState<User>();
  const [isAuth, setIsAuth] = useState(true);
  return (
    <main className="flex overflow-hidden">
      <section className="dashboard bg-slate-200 dark:bg-slate-900">
        <Navbar />
        {isAuth ? (
          // <UserContext.Provider value={[user, setUser]}>
          <div className="flex justify-evenly">
            <Sidenav user={userDetails} />
            <Dashboard />
          </div>
        ) : (
          // </UserContext.Provider>
          ""
        )}
      </section>
    </main >
  );
}

export default Home;
