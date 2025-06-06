export function Projects2() {
  const projects = [
    {
      header: "Project Alpha",
      desc: "A web application for managing tasks and projects efficiently.",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuAacWOYF0kHE3NPhJsCLmB4ndLmQhxpTBVwzsPauKxB85awW7SbnxdIMVNx04iWVBy_-YrcoZeHi6bnIZ3fxVYHnXb1zCUoywD64Y6XoDLl3xSjXEC3ancxXfLgiXuNlcz7nDYIwIkAtUXA08ptrCDKTsUfrIttUvhthA-xPsjsMhneVgBRDdjSY8D_awHFaqbuAEe8_FAuU5H65k1MgKc3b5ga2xVJhnpBIxsq5EseKvIu6FyDydYiGXN60g_rl4ca1meqxIVfuQI",
    },
    {
      header: "Project Beta",
      desc: "An e-commerce platform with a focus on user experience and accessibility.",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuBdnr0PTlyTK5kVtrILAP1UclHT0609l2aDX-OTPCu8WNoICHcejzh9qfnZpECoKTFQveNiYjsXW8RcVvkaweElNeFceqyKWgdgskGFgLQR8q2BTPVile9Prz23QA5lw56g0NxO7-Y0Sx3TDksXPqb7vSHRbCDOpC6bqT3bENQOaD7pwlaJpSvTs0CznQdmAYQCpFSUDgRfPpGgDBBSRMVPfyKF8G_fnb3aMZEsKekcpqnwrHIUyry2JdZth-vpV5KTiWrxXLeFaWk",
    },
    {
      header: "Project Gamma",
      desc: "A mobile app for tracking fitness goals and progress.",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuCTdt6zQmQFBVgL8bKWhV3iA5c7JRPu7uOjiQCv-ny3QA44oZ-q2rlW55IA2KCIMgiOMG-cq8Gh1zUW98lydrpKtxMjK1mRbZPZsyIKKpRylTbrL89GLD_mZeTmzmhPS3OBEFXinjilvCsnVfAgz8lydFUtrsTFwh_esE0cZM_JnNNMgWTFyknhYAC3CqSVLwksb9FeeJnEmlJpHf-eqp5NVXE6fhuKw9dv_-TMFSDLU5iYv2QoUZKLTiyMSN3ks-ig340K5_elA_Y",
    },
  ];

  return (
    <div>
      {projects.map((project, index) => (
        <div key={index} className="p-4">
          <div className="flex items-stretch justify-between gap-4 rounded-xl">
            <div className="flex flex-[2_2_0px] flex-col gap-4">
              <div className="flex flex-col gap-1">
                <p className="text-white text-base font-bold leading-tight">
                  {project.header}
                </p>
                <p className="text-[#a1abb5] text-sm font-normal leading-normal">
                  {project.desc}
                </p>
              </div>
              <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-8 px-4 flex-row-reverse bg-[#2b3036] text-white text-sm font-medium leading-normal w-fit">
                <span className="truncate">View Project</span>
              </button>
            </div>
            <div
              className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl flex-1"
              style={{ backgroundImage: `url("${project.image}")` }}
            />
          </div>
        </div>
      ))}
    </div>
  );
}
