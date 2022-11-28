import { useState } from "react";
import "./App.css";
import Button from "./components/Button";
import Greet from "./components/Greet";
import Heading from "./components/Heading";
import Oscar from "./components/Oscar";
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
        <Heading children={"hellow buddy"} />
        <Oscar>
          <Heading children="Oscar goes to paavan patel" />
        </Oscar>
        <Button
          handleClick={(event, id) => {
            console.log("ok ", event, id);
          }}
        />
      </div>
    </>
  );
}

export default App;
