import { PersonAdd } from "@mui/icons-material";
import axios from "axios";
import { useEffect, useRef, useState } from "react";
import AddStudent from "./AddStudent";
import Card from "./Card";

function Home() {
  const [info, setInfo] = useState([]);
  const [bool,setBool] = useState(false);
  const [search, setSearch] = useState("");
  const [del,setDel] = useState(0);
  const componentdidmount = useRef(true);
  console.log(info);
  function typing(e) {
    let value = e.target.value;
    setSearch(value);
  }
  function Deleted(id){
      setDel(id);
    axios
    .get("http://localhost:1000/students")
    .then((res) => res.data)
    .then((res) => setInfo(res));
  }
  useEffect(() => {

    document.title = `Student Information App - Home`;
    componentdidmount.current=true;
    if (componentdidmount.current)
      axios
        .get("http://localhost:1000/students")
        .then((res) => res.data)
        .then((res) => setInfo(res));
    return () => {
      componentdidmount.current = false;
    };
  }
  ,[del,bool]
  );
  const foundInfo = info.filter(
    (elm) =>
      elm.name.toLowerCase().includes(search.toLowerCase()) ||
      elm.address.city.toLowerCase().includes(search.toLowerCase()) ||
      elm.regDate.toLowerCase().includes(search.toLowerCase())
  );
  return (
    <div className="Home">
      <input
        className="input"
        type="text"
        value={search}
        placeholder="Search for Student by name, regDate, city..."
        onChange={typing}
      />
      <hr/>
      <div className="addCard" onClick={()=>{ setBool(bool? false:true) }}><PersonAdd/> <span> - Add Student</span></div>
      {bool && <AddStudent close={()=>{setBool(false)}} />}
      <hr/>
      {foundInfo
        ? foundInfo.map((elem, index) => <Card key={index} Del={Deleted} data={elem} />)
        : info.map((elem, index) => <Card key={index} data={elem} />)}
    </div>
  );
}

export default Home;
