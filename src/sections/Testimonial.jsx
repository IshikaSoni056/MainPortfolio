// import { twMerge } from "tailwind-merge";
// import Marquee from "../components/Marquee";
// import { reviews } from "../constants";
// const firstRow = reviews.slice(0, reviews.length / 2);
// const secondRow = reviews.slice(reviews.length / 2);

// const ReviewCard = ({ img, name, username, body }) => {
//   return (
//     <figure
//       className={twMerge(
//         "relative h-full w-80 h-90 cursor-pointer overflow-hidden rounded-xl border p-4 border-gray-50/[.1] bg-gradient-to-r bg-indigo to-storm hover:bg-royal hover-animation"
//       )}
//     >
//       <div className="flex flex-row items-center gap-2">
//         <img
//           className="rounded-full bg-white/10"
//           width="32"
//           height="32"
//           alt=""
//           src={img}
//         />
//         <div className="flex flex-col">
//           <figcaption className="text-sm font-medium text-white">
//             {name}
//           </figcaption>
//           <p className="text-xs font-medium text-white/40">{username}</p>
//         </div>
//       </div>
//       <blockquote className="mt-2 text-sm">{body}</blockquote>
//     </figure>
//   );
// };

// export default function Testimonial() {
//   return (
//     <div className="items-start mt-25 md:mt-35 c-space">
//       <h2 className="text-heading">Hear From My Clients</h2>
//       <div className="relative flex flex-col items-center justify-center w-full mt-12 overflow-hidden ">
//         {/* <Marquee pauseOnHover className="[--duration:20s]">
//           {firstRow.map((review) => (
//             <ReviewCard key={review.username} {...review} />
//           ))}
//         </Marquee> */}
//         <Marquee reverse pauseOnHover className="[--duration:10s]">
//           {secondRow.map((review) => (
//             <ReviewCard key={review.username} {...review} />
//           ))}
//         </Marquee>
//         <div className="absolute inset-y-0 left-0 w-1/4 pointer-events-none bg-gradient-to-r from-primary"></div>
//         <div className="absolute inset-y-0 right-0 w-1/4 pointer-events-none bg-gradient-to-l from-primary"></div>
//       </div>
//     </div>
//   );
// }


import { useState } from "react";
import { twMerge } from "tailwind-merge";
import Marquee from "../components/Marquee";
import ProjectDetails from "../components/ProjectDetails";
import { reviews } from "../constants";

const ReviewCard = ({ img, name, body, onClick }) => {
  return (
    <figure
      onClick={onClick}
      className={twMerge(
        "relative w-80 h-96 cursor-pointer overflow-hidden rounded-xl border border-gray-50/[.1] bg-[#13171e] hover:bg-royal p-4 flex flex-col justify-between"
      )}
    >
      <div className="w-full h-40 rounded-lg overflow-hidden mb-4">
        <img src={img} alt={name} className="w-full h-full object-cover" />
      </div>
      <figcaption className="text-lg font-bold text-white mb-1">{name}</figcaption>
      <blockquote className="text-sm text-white/80 mb-4">{body}</blockquote>
    </figure>
  );
};

export default function Testimonial() {
  const [selectedProject, setSelectedProject] = useState(null);
  const closeModal = () => setSelectedProject(null);

  const firstRow = reviews.slice(0, reviews.length / 2);
  const secondRow = reviews.slice(reviews.length / 2);

  return (
    <div className="items-start mt-25 md:mt-35 c-space">
      <h2 className="text-heading">Featured Projects</h2>
      <div className="relative flex flex-col items-center justify-center w-full mt-12 overflow-hidden">
        <Marquee  reverse pauseOnHover className="[--duration: 10s]">
          {secondRow.map((review) => (
            <ReviewCard
              key={review.name}
              {...review}
              onClick={() => setSelectedProject(review)}
            />
          ))}
        </Marquee>
        <div className="absolute inset-y-0 left-0 w-1/4 pointer-events-none bg-gradient-to-r from-primary"></div>
        <div className="absolute inset-y-0 right-0 w-1/4 pointer-events-none bg-gradient-to-l from-primary"></div>
      </div>

      {selectedProject && (
        <ProjectDetails
          title={selectedProject.name}
          description={selectedProject.body}
          subDescription={selectedProject.subDescription || []}
          image={selectedProject.img}
          tags={selectedProject.tags || []}
          href={selectedProject.liveUrl || selectedProject.githubUrl}
          closeModal={closeModal}
        />
      )}
    </div>
  );
}
