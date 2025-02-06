import Modules from "../Modules";
import CourseStatus from "./Status";

import { Col, Row } from "react-bootstrap";


export default function Home() {
    return (
        <div id= "wd-home">
            <Row>
                <Col lg={8}>
                    <Modules />
                </Col>
                <Col lg={4} className="d-none d-lg-block">
                        <CourseStatus />
                </Col>
            </Row>
        </div>
    );
}


// export default function Home() {
//     return (
//         <div id= "wd-home">
//             <Row>
//                 <Col lg={8} md={9}>
//                     <Modules />
//                 </Col>
//                 <Col lg={4} md={3} className="d-none d-md-block">
//                         <CourseStatus />
//                 </Col>
//             </Row>
//         </div>
//     );
// }

