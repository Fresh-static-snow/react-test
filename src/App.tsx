import Header from "./components/Header/Header";
import AppWrapper from "./components/AppWrapper/AppWrapper";
import SignForm from "./components/SignForm/SignForm";
import Intro from "./components/Intro/Intro";
import UserList from "./components/UserList/UserList";

function App() {
  return (
    <div className="App">
      <Header />
      <AppWrapper>
        <Intro />
        <div style={{ height: "140px" }}></div>
        <UserList />
        <div style={{ height: "140px" }}></div>
        <SignForm />
        <div style={{ height: "100px" }}></div>
      </AppWrapper>
    </div>
  );
}

export default App;
