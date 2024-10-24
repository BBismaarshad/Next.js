import { headerItems, userInfo } from "@/contants/contant";
import Image from "next/image";
const About: React.FC = () => {
  return (
    <section
      id={headerItems.about.page}
      className="h-screen flex  flex-col  mt-40  text-center justify-center items-center md:flex-row md:text-start"
    >
      {/* left section */}

      <div className="md:ml-20 sm:ml-12 md:w-1/2">
        <h1 className="text-4xl my-6  uppercase text-teal-600">About</h1>
        <h2 className="text-3xl my-4">
          Get to know me <span className="text-teal-600">!</span>
        </h2>
        <p
          className="[&>p]:mt-5"
          dangerouslySetInnerHTML={{ __html: userInfo.about }}
        ></p>
      </div>
      {/* right section */}
      <div className="flex flex-col justify-center items-center text-center">
        <Image
          src={userInfo.picture}
          alt="dp"
          width={150}
          height={150}
          className="m-auto"
        />
        <div className="mt-3 w-3/4 break-words">
          {userInfo.skills.map((skill) => (
            <span className="bg-teal-600 m-1 p-2 text-sm inline-block rounded-md ">
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};
export default About;
