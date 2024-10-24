import { headerItems, userInfo } from "@/contants/contant";
import Image from "next/image";
import { projects } from "@/contants/contant";
const Porjects: React.FC = () => {
  return (
    <section
      id={headerItems.project.page}
      className=" flex  flex-col text-center justify-center items-center my-40"
    >
      <h1 className="text-4xl my-6  uppercase text-teal-600">Projects</h1>

      <div className="flex  justify-center items-center text-center mt-3  break-words flex-wrap">
        {Object.keys(projects).map((project) => (
          <Image
            src={projects[project as keyof Projects].image}
            alt=""
            width={300}
            height={300}
            className=" m-4 p-2 "
          />
        ))}
      </div>
    </section>
  );
};
export default Porjects;
