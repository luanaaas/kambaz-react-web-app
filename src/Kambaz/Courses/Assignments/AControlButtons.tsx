import { IoEllipsisVertical } from "react-icons/io5";
import { FaTrash } from "react-icons/fa";
import GreenCheckmark from "./GreenCheckmark";
import { useSelector } from "react-redux";

export default function AControlButtons(
  { assignmentId, deleteAssignment }: { assignmentId: string; deleteAssignment: (assignmentId: string) => void; } 
) {
  const { currentUser } = useSelector((state: any) => state.accountReducer);

  
  return (
    <div className="float-end">

      {currentUser.role === "FACULTY" && (
        <FaTrash className="text-danger me-2 mb-1" onClick={(e) => {
          e.preventDefault(); 
          deleteAssignment(assignmentId);
      }}/>)}
      <GreenCheckmark />
      <IoEllipsisVertical className="fs-4" />
    </div> );}