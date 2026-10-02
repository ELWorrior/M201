import Header from "./Header.jsx";
import Content from "./Content.jsx";
import Sidebar from "./Sidebar.jsx";

export default function App() {
    return (
        <>
            <Header />
            <div className="flex min-h-screen flex-col md:flex-row">
                <Sidebar />
                <Content />
            </div>
        </>
    );
}