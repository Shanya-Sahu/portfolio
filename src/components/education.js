const Education = () => {
  return (
    <div className="py-10">
      <section className="pl-[6%] xl:pl-[15%] pr-[6%] my-10">
        <h4 className="text-sm text-[var(--pri-heading)] font-medium text-center">
          Academic Background
        </h4>
        <h3 className="font-semibold text-2xl text-center uppercase">
          {" "}
          Education
        </h3>

        <div class="w-full lg:w-[50%] flex flex-col px-2 justify-center items-center mx-auto mt-5">
          <div class="pb-3 my-4 w-full">
            <div class="flex justify-between flex-col-reverse md:flex-row">
              <p class="text-[14px] md:text-lg font-semibold">
                Guru Ghasidas Vishwavidyalaya, Bilaspur, CG
              </p>
              <p class="mb-0 py-1 italic md:text-end text-sm">2023 - 2025</p>
            </div>
            <div>
              <div class="flex justify-between">
                <p class="md:text-end text-[14px]">
                  Master of Computer Science
                </p>
                <p class="md:text-end text-sm">6.83</p>
              </div>
            </div>
          </div>
          <div class="w-full pb-3 my-4">
            <div class="flex justify-between flex-col-reverse md:flex-row">
              <p class="text-[14px] md:text-lg font-semibold">
                Indira Gandhi National Tribal University, MP
              </p>
              <p class="mb-0 py-1 italic md:text-end text-sm">2019 - 2022</p>
            </div>
            <div>
              <div class="flex justify-between">
                <p class="md:text-end text-[14px]">
                  Bachelor of Computer Application
                </p>
                <p class="md:text-end text-sm">8.68</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Education;
