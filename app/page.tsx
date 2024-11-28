import Link from "next/link";
import { courses } from "./mockData";

export default function HomePage() {
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Course List</h1>
      <ul className="space-y-4">
        {courses.map((course) => (
          <li key={course.id} className="border p-4 rounded shadow">
            <Link href={`/courses/${course.id}`}>

            <h2 className="text-xl font-semibold">{course.title}</h2>
            <p className="text-gray-600">{course.desc}</p>
            <p className="text-gray-500">{course.author}</p>
            <img src={course.image}  alt="string"/>
            </Link>
            {/* <Link href={`/courses/${course.id}`}>
              <button className="mt-2 text-blue-500">View Details</button>
            </Link> */}
          </li>
        ))}
      </ul>
    </div>
  );
}
