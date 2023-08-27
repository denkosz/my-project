import ProjectItem from "./ProjectItem";
import PythonImg from "../assets/Python_image.jpg";
import EtherumImg from "../assets/Etherum_image.jpeg";
import DjangoImg from "../assets/django_image.png";
import NodeImg from "../assets/node_image.png";
const Projects = () => {
  return (
    <div id="projects" className="max-w-[1040px] m-auto md:pl-20 p-4 py-16">
      <h1 className="text-4xl font-bold text-center text-[#001b5e]">
        Projects
      </h1>
      <p className="text-center py-8">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa nesciunt
        ratione doloribus, nobis architecto perferendis deleniti at voluptates
        suscipit labore fuga repudiandae facere, sint blanditiis, tempore nulla
        nemo eaque magnam.
      </p>
      <div className="grid sm:grid-cols-2 gap-12">
        <ProjectItem img={PythonImg} title="Python App" />
        <ProjectItem img={DjangoImg} title="Django App" />
        <ProjectItem img={NodeImg} title="NodeJS App" />
        <ProjectItem img={EtherumImg} title="Crypto App" />
      </div>
    </div>
  );
};

export default Projects;
