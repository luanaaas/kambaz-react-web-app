export default function AssignmentEditor() {
    return (
      <div id="wd-assignments-editor">
        <label htmlFor="wd-name">Assignment Name</label> <br /> <br />
        <input id="wd-name" value="A1 - ENV + HTML" /><br /><br />
        <textarea id="wd-description">
          The assignment is available online Submit a link to the landing page of
        </textarea>
        <br />
        <table>

          <br />
          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-points">Points</label>
            </td>
            <td>
              <input id="wd-points" value={100} />
            </td>
          </tr>
          <br />

          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-group">Assignment Group</label>
            </td>
            <td>
                <select id="wd-group">
                    <option>ASSIGNMENTS</option>
                </select>
            </td>
          </tr>
          <br />

          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-display-grade-as">Display Grade as</label>
            </td>
            <td>
                <select id="wd-display-grade-as">
                    <option>Percentage</option>
                </select>
            </td>
          </tr>
          <br />

          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-submission-type">Submission Type</label>
            </td>
            <td>
                <select id="wd-submission-type">
                    <option>Online</option>
                </select>
            </td>
          </tr>
          <br />

          <tr>
            <td align="right" valign="top">
            </td>
            <td>
                <label>Online Entry Options</label><br/>
                <input type="checkbox" name="check-entry" id="wd-text-entry"/>
                <label htmlFor="wd-text-entry">Text Entry</label><br/>

                <input type="checkbox" name="check-entry" id="wd-website-url"/>
                <label htmlFor="wd-website-url">Webstie URL</label><br/>

                <input type="checkbox" name="check-entry" id="wd-media-recordings"/>
                <label htmlFor="wd-media-recordings">Media Recordings</label><br/>

                <input type="checkbox" name="check-entry" id="wd-student-annotation"/>
                <label htmlFor="wd-student-annotation">Student Annotation</label> <br />

                <input type="checkbox" name="check-entry" id="wd-file-upload"/>
                <label htmlFor="wd-file-upload">File Uploads</label>
            </td>
          </tr>
          <br />

          <tr>
            <td align="right" valign="top">
                Assign
            </td>
            <td>
                <label htmlFor="wd-assign-to">Assign to</label>
                <br />
                 <input id="wd-assign-to" placeholder="Everyone" />
            </td>
          </tr>
          <br />
          
          <tr>
            <td align="right" valign="top">
            </td>
            <td>
                <label htmlFor="wd-due-date"> Due </label>
                <br />
                <input type="date"
                    value="2024-05-13"
                    id="wd-due-date"/><br/>
            </td>
          </tr>
          <br />

          <tr>
            <td align="right" valign="top">
            </td>
            <td>
                <label htmlFor="wd-available-from"> Available from </label>
                <br />
                <input type="date"
                    value="2024-05-06"
                    id="wd-available-from"/><br/>
            </td>
            <td>
                <label htmlFor="wd-available-until"> Until </label>
                <br />
                <input type="date"
                    value="2024-05-20"
                    id="wd-available-until"/><br/>
            </td>
          </tr>
          <br />

        </table>
        <hr />

        <table width="100%">
            <tr>
                <td align="right" valign="top"></td>
                
                <td align="right">
                    <button type="button">Cancel</button>
                    {" "}
                    <button type="button" >Save</button>
                </td>
            </tr>
        </table>
    
      </div>
  );}
  