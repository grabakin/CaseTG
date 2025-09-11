import "./App.css";
import Header from "./components/layout/Header/Header.tsx";
import BottomNavigation from "./components/layout/BottomNavigation/BottomNavigation.tsx";
import {type SetStateAction, useState} from "react";
import ComingSoon from "./components/pages/ComingSoon/ComingSoon.tsx";
import CasesPage from "./components/pages/CasesPage/CasesPage.tsx";
import ProfilePage from "./components/profile/ProfilePage/ProfilePage.tsx";

function App() {
    const [activeTab, setActiveTab] = useState("cases");

    const handleTabChange = (tabId: SetStateAction<string>) => {
        setActiveTab(tabId);
    };

    const renderContent = () => {
        switch (activeTab) {
            case "cases":
                return <CasesPage/>;
            case "upgrade":
                return <ComingSoon pageName="Апгрейд"/>;
            case "contract":
                return <ComingSoon pageName="Контракт"/>;
            case "profile":
                return <ProfilePage/>;
        }
    };
    return (
        <div className="app">
            <Header/>
            <main className="main-content">
                {renderContent()}
            </main>
            <BottomNavigation activeTab={activeTab} onTabChange={handleTabChange}/>
        </div>
    );
}

export default App;
