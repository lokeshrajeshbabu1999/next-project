import { courses } from "@/app/mockData"; // Importing mock data
import Head from "next/head"; // Importing Head from next/head
import Link from "next/link"; // Importing Link from next/link

interface Props {
  params: {
    id: string;
  };
}

// This function generates metadata for the page, used for SEO purposes
export async function generateMetadata({ params }: { params: { id: string } }) {
  const course = courses.find((c) => c.id === params.id);

  if (!course) {
    return {
      title: "Course Not Found",
      description: "The course you are looking for doesn't exist.",
    };
  }

  return {
    title: `${course.title} | Course Details`,
    description: course.desc,
    openGraph: {
      title: course.title,
      description: course.desc,
      images: [course.image],
    },
    twitter: {
      card: "summary_large_image",
      title: course.title,
      description: course.desc,
      image: course.image,
    },
  };
}

// This is your CourseDetails component, where the metadata is generated dynamically.
export default function CourseDetails({ params }: Props) {
  // Find the course by id from the mock data
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
      {/* Setting dynamic meta tags inside the Head component */}
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

      {/* Course details UI */}
      <div className="p-8">
        <h1 className="text-3xl font-bold">{course.title}</h1>
        <p className="text-gray-600">{course.desc}</p>
        <p className="text-gray-500">Author: {course.author}</p>
        <img src={course.image} alt={course.title} className="w-small" />
        <Link href="/">
          <button className="mt-4 text-blue-500">Back to Courses</button>
        </Link>
      </div>
    </>
  );
}
