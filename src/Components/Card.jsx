import { Delete, DeleteOutline, Edit, EditOutlined } from "@mui/icons-material";
import axios from "axios";
import {useNavigate} from 'react-router-dom'
function Avatar(props) {
  let imgUrl = props.src ? props.src : "./images/default-profile.png";
  return (
    <div className="Avatar">
      <img
        src={imgUrl}
        alt="profile"
        style={{ width: props.width, height: props.width }}
      />
      <p className="name">{props.name}</p>
      <p className="age">Age - {props.age}</p>
    </div>
  );
}

function Card(props) {
  // let today = new Date();
  let navigate = useNavigate();
  const { id, name, age, fatherName, motherName, imgUrl, address, regDate } = props.data;
  const {Del} = props;
  function onDeleteClick(){
      axios.delete(`http://localhost:1000/students/${id}`);
      Del(id);
   }
  function onEdit(){
    navigate(`/edit/${id}`);
  }
  return (
    <div className="Card">
      <div className="profile">
        <EditOutlined onClick={onEdit} style={{ fontSize: "medium" }} />
        <Avatar src={imgUrl} width="6em" name={name} age={age} />
        <Delete onClick={onDeleteClick} style={{ fontSize: "medium", color: "tomato" }} />
      </div>
      <hr />
      <div className="detail">
        <div className="family-detail">
          <h5>
            Father's Name <span>:</span>{" "}
            <span className="names">{fatherName}</span>
          </h5>
          <h5>
            Mother's Name <span>:</span>{" "}
            <span className="names">{motherName}</span>{" "}
          </h5>
        </div>
        <hr />
        <div className="address">
          <h5>Address</h5>
          <p>{address.hNo}, {address.locality}, {address.city}, {address.state}, {address.country}</p>
        </div>
      </div>
      <hr />
      <div className="reg-date">
        <p>Registeration Date : <span>
        {/* {today.toString().slice(4,15).replace(/ /g,'-')} */}
        {regDate.slice(0,10)}
        </span></p>
      </div>
    </div>
  );
}

export default Card;
