import HeaderBox from "@/components/HeaderBox";
import RightSidebar from "@/components/RightSidebar";
import TotalBalanceBox from "@/components/TotalBalanceBox";
import React from "react";
import "@/components/styles/rootPage.scss";

const Home = () => {
  const loggedIn = {
    firstName: "Sunny",
    lastName: "Ugwu",
    email: "officialsunnyugwu@gmail.com",
  };
  return (
    <section className="home">
      <div className="home-content">
        <header className="home-header">
          <HeaderBox
            type="greeting"
            title="Welcome"
            user={loggedIn?.firstName || "Guest"}
            subtext="Access and manage your account transactions efficiently."
          />
          <div className="total-balance-box">
            <TotalBalanceBox
              accounts={[]}
              totalBanks={1}
              totalCurrentBalance={18524000000000}
            />
          </div>
        </header>
        RECENT TRANSACTIONS
      </div>
      <RightSidebar user={loggedIn} transaction={[]} banks={[{currentBalance: 2500000}, {currentBalance: 5000000}]} />
    </section>
  );
};

export default Home;
