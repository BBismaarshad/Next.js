
import Image from "next/image";

interface StudentCardProps {
  name: string;
  age: number;
  rollNumber: string;
  image: string;
  className: string;
}

const StudentCard: React.FC<StudentCardProps> = ({ name, age, rollNumber, image, className }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-[#0c6170] p-4">
      <div className="relative">
       
        <Image 
          src={image} 
          alt={name} 
          width={120} 
          height={120} 
          className="rounded-full mx-auto border-4 border-[#05445e]"
        />
      </div>

      <div className="text-center mt-4">
        <h2 className="text-xl font-semibold text-white">{name}</h2>
        <p className="text-[#dbf5f0]">{`Class: ${className}`}</p>
        <p className="text-[#dbf5f0]">{`Roll No: ${rollNumber}`}</p>
        <p className="text-[#dbf5f0]">{`Age: ${age}`}</p>
      </div>
    </div>
  );
};

export default StudentCard;
