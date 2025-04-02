import { IoEllipsisVertical } from "react-icons/io5";
import { FaPlus } from "react-icons/fa6";
import { useSelector } from "react-redux";

export default function AssignControlButtons() {
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  
  return (
    <div className="float-end">
        <div className="border border-dark rounded-pill px-3 py-1 d-inline-block"> 40% of Total </div>
      <IoEllipsisVertical className="fs-4" />
      {currentUser.role === "FACULTY" && (<FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />)}
    </div> );}

 