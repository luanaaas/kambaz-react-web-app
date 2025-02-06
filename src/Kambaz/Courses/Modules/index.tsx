import { ListGroup } from "react-bootstrap";
import ModulesControls from "./ModulesControls"
import { BsGripVertical } from "react-icons/bs";
import LessonControlButtons from "./LessonControlButtons";
import ModuleControlButtons from "./ModuleControlButtons";
import CourseStatus from "../Home/Status";


export default function Modules() {
    return (
        <div>
            <div className="flex-grow-1">
        <ModulesControls /><br /><br /><br /><br />
        <ListGroup className="rounded-0" id="wd-modules">
          <ListGroup.Item className="wd-module p-0 mb-5 fs-5 border-gray">
            
            <div className="wd-title p-3 ps-2 bg-secondary">
                <BsGripVertical className="me-2 fs-3" /> Week 1 <ModuleControlButtons />
             </div>


            <ListGroup className="wd-lessons rounded-0">
                <ListGroup.Item className="wd-lesson p-3 ps-1">
                    <BsGripVertical className="me-2 fs-3" /> LEARNING OBJECTIVES <LessonControlButtons />
                </ListGroup.Item>

                <ListGroup.Item className="wd-lesson p-3 ps-1">
                    <BsGripVertical className="me-2 fs-3" /> Introduction to the course <LessonControlButtons />
                </ListGroup.Item>

                <ListGroup.Item className="wd-lesson p-3 ps-1">
                    <BsGripVertical className="me-2 fs-3" /> Learn what is Web Development <LessonControlButtons />
                </ListGroup.Item>
            </ListGroup>

          </ListGroup.Item>
          

          <ListGroup.Item className="wd-module p-0 mb-5 fs-5 border-gray">
            
            <div className="wd-title p-3 ps-2 bg-secondary">
                <BsGripVertical className="me-2 fs-3" /> Week 2 <ModuleControlButtons />
             </div>


            <ListGroup className="wd-lessons rounded-0">
                <ListGroup.Item className="wd-lesson p-3 ps-1">
                    <BsGripVertical className="me-2 fs-3" /> LESSON 1 <LessonControlButtons />
                </ListGroup.Item>

                <ListGroup.Item className="wd-lesson p-3 ps-1">
                    <BsGripVertical className="me-2 fs-3" /> LESSON 2 <LessonControlButtons />
                </ListGroup.Item>

                <ListGroup.Item className="wd-lesson p-3 ps-1">
                    <BsGripVertical className="me-2 fs-3" /> LESSON 3 <LessonControlButtons />
                </ListGroup.Item>
            </ListGroup>

          </ListGroup.Item>


          <ListGroup.Item className="wd-module p-0 mb-5 fs-5 border-gray">
            
            <div className="wd-title p-3 ps-2 bg-secondary">
                <BsGripVertical className="me-2 fs-3" /> Week 3 <ModuleControlButtons />
             </div>


            <ListGroup className="wd-lessons rounded-0">
                <ListGroup.Item className="wd-lesson p-3 ps-1">
                    <BsGripVertical className="me-2 fs-3" /> LESSON 1 <LessonControlButtons />
                </ListGroup.Item>

                <ListGroup.Item className="wd-lesson p-3 ps-1">
                    <BsGripVertical className="me-2 fs-3" /> LESSON 2 <LessonControlButtons />
                </ListGroup.Item>

                <ListGroup.Item className="wd-lesson p-3 ps-1">
                    <BsGripVertical className="me-2 fs-3" /> LESSON 3 <LessonControlButtons />
                </ListGroup.Item>
            </ListGroup>

          </ListGroup.Item>


        </ListGroup>
        </div>

        <div className="ms-4" style={{ minWidth: "250px" }}>
                <CourseStatus />
            </div>
      </div>
      
    );
}

// export default function Modules() {
//     return (
//         <div>
//             <ModulesControls />
//             <button>Expand All</button>
//             <button>View Progress</button>
//             <select>
//                 <option>Publish All</option>
//             </select>
//             <button>+ Module</button>
//             <ul id="wd-modules">
//                 <li className="wd-module">
//                     <div className="wd-title">Week 1</div>
//                     <ul className="wd-lessons">
//                         <li className="wd-lesson">
//                             <span className="wd-title">LEARNING OBJECTIVES</span>
//                             <ul className="wd-content">
//                                 <li className="wd-content-item">Introduction to the course</li>
//                                 <li className="wd-content-item">Learn what is Web Development</li>
//                             </ul>
//                         </li>
//                     </ul>
//                 </li>
//                 <li className="wd-module">
//                     <div className="wd-title">Week 2</div>
//                 </li>
//                 <li className="wd-module">
//                     <div className="wd-title">Week 3</div>
//                 </li>
//             </ul>
//         </div>
//     );
// }