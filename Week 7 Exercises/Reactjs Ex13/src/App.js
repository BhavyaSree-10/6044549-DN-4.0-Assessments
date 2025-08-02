import BookDetails from './BookDetails';
import BlogDetails from './BlogDetails';
import CourseDetails from './CourseDetails';

function App() {
  const selected = "blog"; // try "book" or "course"

  return (
    <div>
      {selected === "book" && <BookDetails />}
      {selected === "blog" && <BlogDetails />}
      {selected === "course" && <CourseDetails />}
    </div>
  );
}

export default App;

