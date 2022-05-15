import { useEffect, useState, useRef } from "react";
import { Save } from "@mui/icons-material";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
function Edit() {
  let navigate = useNavigate();
  const [info, setInfo] = useState([]);
  const componentMounted = useRef(true);
  const params = useParams();

  function patchData(e) {
    console.log(e);
    e.preventDefault();
    console.log(e.target.elements.hNo.value);
    axios.patch(`http://localhost:1000/students/${info[0].id}`, {
      name: e.target.elements.name.value
        ? e.target.elements.name.value
        : info[0].name,
      fathername: e.target.elements.fatherName.value
        ? e.target.elements.fatherName.value
        : info[0].fatherName,
      mothername: e.target.elements.motherName.value
        ? e.target.elements.motherName.value
        : info[0].motherName,
      age: e.target.elements.age.value
        ? e.target.elements.age.value
        : info[0].age,
      imgUrl: e.target.elements.imgUrl.value
        ? e.target.elements.name.value
        : info[0].imgUrl,
      address: {
        hNo: e.target.elements.hNo.value
          ? e.target.elements.hNo.value
          : info[0].address.hNo,
        locality: e.target.elements.locality.value
          ? e.target.elements.locality.value
          : info[0].address.locality,
        city: e.target.elements.city.value
          ? e.target.elements.city.value
          : info[0].address.city,
        state: e.target.elements.state.value
          ? e.target.elements.state.value
          : info[0].address.state,
        country: e.target.elements.country.value
          ? e.target.elements.country.value
          : info[0].address.country,
      }
    });
    setTimeout( ()=>{ navigate("/");},300)
    // navigate("/");
  }
  useEffect(() => {
    document.title = `Student Information App - Edit`;
    if (componentMounted.current)
      axios
        .get(`http://localhost:1000/students/${params.id}`)
        .then((res) => res.data)
        .then((res) => setInfo(res));
    return () => {
      componentMounted.current = false;
    };
  });

  return (
    <div className="Edit">
      <form onSubmit={patchData}>
        <fieldset>
          <legend>Update-Details</legend>
          <div className="">
            <label>Name : </label>
            <input type="text" name="name" />
          </div>
          <hr />
          <div className="">
            <label>Father Name : </label>
            <input type="text" name="fatherName" />
          </div>
          <div className="">
            <label>Mother Name : </label>
            <input type="text" name="motherName" />
          </div>
          <hr />
          <div className="">
            <label>Age : </label>
            <input type="number" name="age" />
          </div>
          <div className="">
            <label>Image URL : </label>
            <input type="text" name="imgUrl" />
          </div>
          <hr />
          <div className="">
            <label>House/Flat/Room No. : </label>
            <input type="text" name="hNo" />
          </div>
          <div className="">
            <label>Locality : </label>
            <input type="text" name="locality" />
          </div>
          <div className="">
            <label>City : </label>
            <input type="text" name="city" />
          </div>
          <div className="">
            <label>State : </label>
            <input type="text" name="state" />
          </div>
          <div className="">
            <label>Country : </label>
            <input type="text" name="country" />
          </div>
          <button
            type="submit"
            style={{ background: "green", borderRadius: "5px" }}
          >
            <Save />
            <span> - Save Changes</span>
          </button>
        </fieldset>
      </form>
    </div>
  );
}

export default Edit;
