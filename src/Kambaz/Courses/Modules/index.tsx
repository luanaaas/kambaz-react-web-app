import { FormControl, ListGroup } from "react-bootstrap";
import ModulesControls from "./ModulesControls"
import { BsGripVertical } from "react-icons/bs";
import LessonControlButtons from "./LessonControlButtons";
import ModuleControlButtons from "./ModuleControlButtons";
import { useParams } from "react-router";
import { useState, useEffect } from "react";
import { setModules, addModule, editModule, updateModule, deleteModule }
  from "./reducer";
import { useSelector, useDispatch } from "react-redux";
import * as coursesClient from "../client";
import * as modulesClient from "./client";


export default function Modules() {
    const {cid} = useParams();
    const [moduleName, setModuleName] = useState("");
    const { modules } = useSelector((state: any) => state.modulesReducer);
    const dispatch = useDispatch();
    const { currentUser } = useSelector((state: any) => state.accountReducer);

   
    const fetchModules = async () => {
      const modules = await coursesClient.findModulesForCourse(cid as string);
      dispatch(setModules(modules));
    };
    useEffect(() => {
      fetchModules();
    }, []);

    const addModuleHandler = async () => {
      const newModule = await coursesClient.createModuleForCourse(cid!, {
        name: moduleName,
        course: cid,
      });
      dispatch(addModule(newModule));
      setModuleName("");
    };

    const deleteModuleHandler = async (moduleId: string) => {
      await modulesClient.deleteModule(moduleId);
      dispatch(deleteModule(moduleId));
    };

    const updateModuleHandler = async (module: any) => {
      await modulesClient.updateModule(module);
      dispatch(updateModule(module));
    };   
   
    return (
        <div>
            <div className="flex-grow-1">
            {currentUser.role === "FACULTY" && <ModulesControls setModuleName={setModuleName} moduleName={moduleName}
          addModule={addModuleHandler}
          />}<br /><br /><br /><br />
        <ListGroup className="rounded-0" id="wd-modules">

          {modules
          .map((module: any) => (
          <ListGroup.Item className="wd-module p-0 mb-5 fs-5 border-gray">
            
            <div className="wd-title p-3 ps-2 bg-secondary">
                <BsGripVertical className="me-2 fs-3" />
                {!module.editing && module.name}
                {module.editing && (
                  <FormControl className="w-50 d-inline-block"
                        onChange={(e) =>
                          updateModuleHandler({ ...module, name: e.target.value })}
                        onKeyDown={(e) => {
                          if (e.key === "Enter") {
                            updateModuleHandler({ ...module, editing: false });
                          }
                        }}
                        defaultValue={module.name}/>
                )}
                {currentUser.role === "FACULTY" && <ModuleControlButtons
                  moduleId={module._id}
                  deleteModule={(moduleId) => deleteModuleHandler(moduleId)}
                  editModule={(moduleId) => dispatch(editModule(moduleId))} />}
             </div>


            {module.lessons && (<ListGroup className="wd-lessons rounded-0">
               {module.lessons.map((lesson : any) => (<ListGroup.Item className="wd-lesson p-3 ps-1">
                    <BsGripVertical className="me-2 fs-3" /> {lesson.name} <LessonControlButtons />
                </ListGroup.Item>))}
            </ListGroup>)}

          </ListGroup.Item>))}

        </ListGroup>
        </div>
      </div>
      
    );
}