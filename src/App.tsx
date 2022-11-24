import { useState } from "react";
import "./App.css";
import Greet from "./components/Greet";
import Person from "./components/Person";
import PersonList from "./components/PersonList";
import Status from "./components/Status";
interface User {
  firstname: string;
  mobileNo: number;
}
interface Users {
  user: User;
}
function App() {
  const PersonName = {
    firstName: "bruce",
    lastName: "wyane",
  };
  const nameList = [
    {
      firstName: "jessica",
      lastName: "olive",
    },
    {
      firstName: "daljeet",
      lastName: "kyada",
    },
    {
      firstName: "manpreet",
      lastName: "singh",
    },
  ];
  const [data, setData] = useState<User>({ firstname: "", mobileNo: 12 });
  return (
    <>
      <div className="App">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            console.log(data);
          }}
        >
          <tr>
            <td>
              <label htmlFor="">FirstName :</label>
            </td>
            <tr>
              <input
                type="text"
                onChange={(e) =>
                  setData({ ...data, firstname: e.target.value })
                }
              />
            </tr>
          </tr>
          <tr>
            <td>
              <br />
            </td>
          </tr>
          <tr>
            <td>
              <label htmlFor="">Mobile Number :</label>
            </td>
            <td>
              <input
                type="number"
                onChange={(e) =>
                  setData({ ...data, mobileNo: Number(e.target.value) })
                }
              />
            </td>
          </tr>
          <tr>
            <td>
              <input type="submit" />
            </td>
          </tr>
        </form>
        <Greet name="ved" messageCount={11} isLoggedin={false} />
        <Person name={PersonName} />
        <PersonList names={nameList} />
        <Status status={"success"} />
      </div>
    </>
  );
}

export default App;
