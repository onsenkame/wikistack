const html = require("html-template-tag");
const layout = require("./layout");

//created solution from Kevin and Warren
module.exports = () =>
  layout(html`
    <h3>Add a Page</h3>
    <hr />
    <form method="POST" action="/wiki/">
      <div class="form-group">
        <label for="Author Name" class="col-sm-2 control-label"
          >Author Name</label
        >
        <div class="col-sm-10">
          <input id="name" name="name" type="text" class="form-control" />
        </div>
      </div>

      <div class="form-group">
        <label for="email" class="col-sm-2 control-label">Author Email</label>
        <div class="col-sm-10">
          <input id="email" name="email" type="text" class="form-control" />
        </div>
      </div>

      <div class="form-group">
        <label for="title" class="col-sm-2 control-label">Page Title</label>
        <div class="col-sm-10">
          <input id="title" name="title" type="text" class="form-control" />
        </div>
      </div>

      <div class="form-group">
        <label for="content" class="col-lg control-label">Page Content</label>
        <div class="col-lg">
          <input id="content" name="content" type="text" class="form-control" />
        </div>
      </div>

      <div class="form-check">
        <label for="status" class="col-sm-2 control-label">Page Status</label>
        <div class="col-sm-10">
          <div class="form-check">
            <input
              class="form-check-input"
              type="radio"
              name="gridRadios"
              id="open"
              value="open"
              checked
            />
            <label class="form-check-label" for="gridRadios1"> Open </label>
          </div>
          <div class="form-check">
            <input
              class="form-check-input"
              type="radio"
              name="gridRadios"
              id="closed"
              value="closed"
            />
            <label class="form-check-label" for="gridRadios2"> Closed </label>
          </div>
        </div>
      </div>

      <div class="col-sm-offset-2 col-sm-10">
        <button type="submit" class="btn btn-primary">submit</button>
      </div>
    </form>
  `);

//given solution for testing
// module.exports = () => layout(html`
//   <h3>Add a Page</h3>
//   <hr>
//   <form method="POST" action="/wiki/">
    
//     <div class="form-group">
//       <label for="name" class="col-sm-2 control-label">Author Name</label>
//       <div class="col-sm-10">
//         <input name="name" type="text" class="form-control"/>
//       </div>
//     </div>
//     <div class="form-group">
//       <label for="email" class="col-sm-2 control-label">Author Email</label>
//       <div class="col-sm-10">
//         <input name="email" type="text" class="form-control"/>
//       </div>
//     </div>
    
//     <div class="form-group">
//       <label for="title" class="col-sm-2 control-label">Page Title</label>
//       <div class="col-sm-10">
//         <input name="title" type="text" class="form-control"/>
//       </div>
//     </div>
//     <div class="form-group">
//       <label for="content" class="col-sm-2 control-label">Content</label>
//       <div class="col-sm-10">
//         <textarea name="content"></textarea>
//       </div>
//     </div>
//     <div class="form-group">
//       <label for="status" class="col-sm-2 control-label">Status</label>
//       <div class="col-sm-10">
//         <select name="status">
//           <option>open</option>
//           <option>closed</option>
//         </select>
//       </div>
//     </div>
//     <div class="col-sm-offset-2 col-sm-10">
//       <button type="submit" class="btn btn-primary">submit</button>
//     </div>
  
//   </form>
// `);