import linkedinIcon from "../assets/sponsorsandmentors/linkedin.jpg"

export default function PersonCard({ person }) {
  return (
    <div
      className="
        w-[180px]
        h-[285px]

        md:w-[210px]
        md:h-[325px]

        lg:w-[232px]
        lg:h-[346px]

        rounded-[18px]
        border-2
        border-lime-300

        bg-[#0B0B0B]

        p-3

        flex
        flex-col

        transition-all
        duration-300

        hover:-translate-y-1
        hover:shadow-[0_0_25px_rgba(220,255,80,.22)]
      "
    >
      {/* Image */}
      <div className="relative">

        <div
          className="
            aspect-square
            rounded-xl
            overflow-hidden

            border
            border-lime-300/60
          "
        >
          <img
            src={person.image}
            alt={person.name}
            draggable={false}
            className="
              w-full
              h-full
              object-cover
              select-none
            "
          />
        </div>

        {/* Role Badge */}

        <div
          className="
            absolute

            left-1/2
            -bottom-3

            -translate-x-1/2

            px-4
            py-1

            rounded-full

            bg-[#06160F]

            border-2
            border-lime-300

            text-white
            text-[11px]
            font-medium

            whitespace-nowrap
          "
        >
          {person.role}
        </div>

      </div>

      {/* Bottom */}

      <div
        className="
          flex-1

          flex
          flex-col

          pt-6
        "
      >

        {/* Name */}

        <h3
          className="
            text-center

            text-lime-300

            font-bold

            text-lg

            leading-tight
          "
        >
          {person.name}
        </h3>

        {/* Job + LinkedIn */}

        <div
          className="
            mt-auto

            flex
            justify-between
            items-end

            gap-3
          "
        >

          <p
            className="
              text-[11px]
              leading-snug

              text-zinc-300
            "
          >
            {person.description}
          </p>

          {person.linkedin && (
            <a
              href={person.linkedin}
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={linkedinIcon}
                alt="LinkedIn"
                className="
                  w-6
                  h-6

                  opacity-80
                  hover:opacity-100

                  transition
                "
              />
            </a>
          )}

        </div>

      </div>
    </div>
  );
}