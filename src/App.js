import {Route, Routes} from "react-router";

import {MainLayout, PostsComponents} from "./components";
import TodosPaget from "./pagets/TodosPaget";
import {AlbomsPaget} from "./pagets/AlbomsPaget";
import {CommentsPaget} from "./pagets/CommentsPaget";

function App() {
  return (
    <div>
<Routes>
  <Route path ={'/'} element={<MainLayout/>}>
  <Route path ={'todos'} element={<TodosPaget/>}/>
  <Route path ={'albums'} element={<AlbomsPaget/>}/>
  <Route path ={'comments'} element={<CommentsPaget/>}/>
  <Route path ={':postId'} element={<PostsComponents/>}/>
  </Route>
</Routes>
    </div>
  );
}

export default App;
