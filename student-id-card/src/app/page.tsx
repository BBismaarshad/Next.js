
import StudentCard from "../components/StudentCard";

const students = [
  {
    name: "Bushra",
    age: 19,
    rollNumber: "12345",
    image: "/images/1.jpeg", 
    className: "12th Grade",
  },
  {
    name: "Sana",
    age: 19,
    rollNumber: "12346",
    image: "/images/2.avif", 
    className: "12th Grade",
  },
  {
    name: "Fatima",
    age: 20,
    rollNumber: "12347",
    image: "/images/3.avif", 
    className: "12th Grade",
  },
];

export default function Home() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold text-center mb-8">Student ID Cards</h1>
      <div className="grid md:grid-cols-3 gap-8">
        {students.map((student, index) => (
          <StudentCard
            key={index}
            name={student.name}
            age={student.age}
            rollNumber={student.rollNumber}
            image={student.image}
            className={student.className}
          />
        ))}
      </div>
    </div>
  );
}
