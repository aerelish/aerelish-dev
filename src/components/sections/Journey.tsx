import { journeyData } from "@/data/journeyData"

type JourneyProps = {
  limit?: number;
}

function Journey({ limit }: JourneyProps) {
  const data = limit ? journeyData.slice(0, limit) : journeyData;
  return (
    <section className="relative">
      <div className="flex flex-col space-y-12">
        {data.map((data, index) => (
          <div key={index} className="flex items-start gap-6">
            {/* Vertical line extending downward */}
            <div
              className={`absolute right-0 transform -translate-x-1/2 top-2 bottom-0 w-px bg-zinc-300 mr-[147px] md:mr-[9.5px] md:right-1/4`}
            ></div>
            <div className="flex-3 space-y-6 relative">
              {
                data.events.map((event, index) => {
                  return (
                    <div key={index} className="relative">

                      {/* Month */}
                      {event.month && (
                        <div className="text-xs md:text-sm lg:text-sm text-zinc-400 mb-1">
                          {event.month}
                        </div>
                      )}

                      {/* Title */}
                      <div className="text-md font-medium md:text-md lg:text-xl text-zinc-300">
                        {event.title}
                      </div>

                      {/* Description */}
                      <div
                        className="text-base lg:text-base text-zinc-400"
                        dangerouslySetInnerHTML={{ __html: event.description }}
                      />


                      {/* Dot and Vertical line */}
                      <div className="absolute -right-2 top-0 bottom-0">
                        {/* Dot */}
                        <div className="absolute -right-1 top-1 w-2 h-2 rounded-full bg-zinc-300" />
                        {/* Vertical line extending downward */}
                        {/* <div
                            className={`absolute right-1/2 transform -translate-x-1/2 top-2 -bottom-12 w-px bg-zinc-300`}
                          ></div> */}
                      </div>

                    </div>
                  )
                })
              }
            </div>
            <div className="w-[132px] flex-none text-left text-2xl font-light text-zinc-300 md:text-3xl md:flex-1 ">
              <h1 className="text-[var(--accent-color)]" >{data.year}</h1>
              <p className="lowercase text-zinc-400 text-sm">{data.summary}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Journey