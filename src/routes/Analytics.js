import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import PageA1 from "./subRoutes/PageA1";
import PageA2 from "./subRoutes/PageA2";

function Analytics(props) {
  return (
    <>
      <h2>This is Analytics </h2>
      <b>This is Route Layer 2 - A1/A2</b>
      {/* The current route of Page A is '/a'
            The route of Page A1 would be '/a/a1'
            The route of Page A2 would be '/a/a2' */}
      <br />
      <Link to="/a/a1">
        <button type="button" class="btn btn-primary">
          Page A1{" "}
        </button>
      </Link>
      <br />
      <Link to="/a/a2">
        <button type="button" class="btn btn-primary">
          Page A2
        </button>
      </Link>

      <Routes>
        <Route path="a1" element={<PageA1 theVar2={props.theVar} />} />
        <Route path="a2" element={<PageA2 />} />
      </Routes>
    </>
  );
}
export default Analytics;
