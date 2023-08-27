import Workitem from "./Workitem";
const data = [
  {
    year: 2020,
    title: "Content Creator",
    duration: "5 years",
    details: `Lorem Ipsum is simply dummy text of the printing and 
        typesetting industry. Lorem Ipsum has been the industry's standard dummy
         text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a 
         type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, 
         remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing 
         Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
  },
  {
    year: 2017,
    title: "Google",
    duration: "2 years",
    details: `Lorem Ipsum is simply dummy text of the printing and 
        typesetting industry. Lorem Ipsum has been the industry's standard dummy
         text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a 
         type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, 
         remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing 
         Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
  },
  {
    year: 2015,
    title: "Amazon",
    duration: "3 years",
    details: `Lorem Ipsum is simply dummy text of the printing and 
        typesetting industry. Lorem Ipsum has been the industry's standard dummy
         text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a 
         type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, 
         remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing 
         Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
  },
  {
    year: 2012,
    title: "Facebook",
    duration: "5 years",
    details: `Lorem Ipsum is simply dummy text of the printing and 
        typesetting industry. Lorem Ipsum has been the industry's standard dummy
         text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a 
         type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, 
         remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing 
         Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
  },
];
const Work = () => {
  return (
    <div id="work" className="max-w-[1040px] m-auto md:pl-20 p-4 py-16">
      <h1 className="text-4xl font-bold text-center text-[#001b5e]">Work</h1>
      {data.map((item, idx) => (
        <Workitem
          key={idx}
          year={item.year}
          title={item.title}
          duration={item.duration}
          details={item.details}
        />
      ))}
    </div>
  );
};

export default Work;
