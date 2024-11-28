import { courses } from "@/app/mockData";
import Head from "next/head";
import Link from "next/link";
import { Helmet } from "react-helmet";

interface Props {
  params: {
    id: string;
  };
}

export default function CourseDetails({ params }: Props) {
  const course = courses.find((c) => c.id === params.id);

  if (!course) {
    return (
      <div className="p-8">
        <h1 className="text-2xl font-bold">Course Not Found</h1>
        <p className="text-gray-600">We couldn't find the course you're looking for.</p>
      </div>
    );
  }

  return (
    <>
      <Head>
        <title>{course.title} | Course Details</title>
        <meta name="description" content={course.desc} />
        <meta property="og:title" content={course.title} />
        <meta property="og:description" content={course.desc} />
        <meta property="og:image" content={course.image} />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={course.title} />
        <meta name="twitter:description" content={course.desc} />
        <meta name="twitter:image" content={course.image} />
      </Head>
      <div className="p-8">
        <h1 className="text-3xl font-bold">{course.title}</h1>
        <p className="text-gray-600">{course.desc}</p>
        <p className="text-gray-500">Author: {course.author}</p>
        <img src={course.image} alt="string" />
        <Link href="/">
          <button className="mt-4 text-blue-500">Back to Courses</button>
        </Link>
      </div></>
  );
}
