import { Add } from "@mui/icons-material";
import axios from "axios";

function AddStudent({ close }) {
  function postData(e) {
    console.log(e);
    e.preventDefault();
    axios
      .post("http://localhost:1000/students", {
        name: e.target.elements.name.value,
        fathername: e.target.elements.fatherName.value,
        mothername: e.target.elements.motherName.value,
        age: e.target.elements.age.value,
        imgUrl: e.target.elements.imgUrl.value,
        address: {
          hNo: e.target.elements.hNo.value,
          locality: e.target.elements.locality.value,
          city: e.target.elements.city.value,
          state: e.target.elements.state.value,
          country: e.target.elements.country.value,
        },
      })
      .then((response) => {
        console.log(response);
      });

    close();
  }
  // useEffect(()=>{
  // })
  return (
    <div className="AddStudent">
      <form onSubmit={postData}>
        <fieldset>
          <legend>Student-Details</legend>
          <div className="">
            <label>Name : </label>
            <input type="text" name="name" required />
          </div>
          <hr />
          <div className="">
            <label>Father Name : </label>
            <input type="text" name="fatherName" required />
          </div>
          <div className="">
            <label>Mother Name : </label>
            <input type="text" name="motherName" required />
          </div>
          <hr />
          <div className="">
            <label>Age : </label>
            <input type="number" name="age" required />
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
            <input type="text" name="locality" required />
          </div>
          <div className="">
            <label>City : </label>
            <input type="text" name="city" required />
          </div>
          <div className="">
            <label>State : </label>
            <input type="text" name="state" required />
          </div>
          <div className="">
            <label>Country : </label>
            <input type="text" name="country" required />
          </div>
          <button type="submit">
            <Add />
          </button>
        </fieldset>
      </form>
    </div>
  );
}

export default AddStudent;
