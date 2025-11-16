import Image from "next/image";

export default function MeetAttorneys() {
  const attorneys = [
    {
      name: "Roberto Martinez",
      title: "Lead Trial Attorney",
      bio: "With over 15 years of experience fighting for accident victims, Roberto has secured millions in settlements and verdicts. He's known for his aggressive negotiation tactics and unwavering commitment to his clients.",
      imageUrl: "https://images.unsplash.com/photo-1680540692052-79fde1108370?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=400",
      imageAlt: "Roberto Martinez, Lead Trial Attorney",
    },
    {
      name: "Jennifer Williams",
      title: "Senior Partner",
      bio: "Jennifer brings 10+ years of personal injury expertise to every case. Her compassionate approach and attention to detail have helped hundreds of families recover the compensation they deserve after life-altering accidents.",
      imageUrl: "https://images.unsplash.com/photo-1736939678218-bd648b5ef3bb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=400",
      imageAlt: "Jennifer Williams, Senior Partner",
    },
  ];

  return (
    <section className="py-12 md:py-16 lg:py-20 bg-neutral-lightest">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-neutral-darkest mb-4">
            Meet Your Attorneys
          </h2>
          <p className="text-lg md:text-xl text-neutral-medium max-w-3xl mx-auto">
            Experienced, compassionate, and dedicated to fighting for your rights
          </p>
        </div>

        {/* Attorneys Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 lg:gap-16 max-w-5xl mx-auto">
          {attorneys.map((attorney, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md p-6 md:p-8 hover:shadow-lg transition-shadow duration-200"
            >
              <div className="flex flex-col md:flex-row gap-6 md:gap-8">
                {/* Photo - Positioned to face toward form (right side) */}
                <div className={`flex-shrink-0 ${index === 0 ? 'md:order-1' : 'md:order-2'}`}>
                  <div className="relative w-48 h-48 md:w-56 md:h-56 mx-auto md:mx-0">
                    <Image
                      src={attorney.imageUrl}
                      alt={attorney.imageAlt}
                      fill
                      className="object-cover rounded-lg"
                      sizes="(max-width: 768px) 192px, 224px"
                      loading="lazy"
                    />
                  </div>
                </div>

                {/* Content */}
                <div className={`flex-1 flex flex-col justify-center ${index === 0 ? 'md:order-2' : 'md:order-1'}`}>
                  <h3 className="text-2xl md:text-3xl font-heading font-bold text-neutral-darkest mb-2">
                    {attorney.name}
                  </h3>
                  <p className="text-lg md:text-xl text-primary font-semibold mb-4">
                    {attorney.title}
                  </p>
                  <p className="text-neutral-dark leading-relaxed text-base md:text-lg">
                    {attorney.bio}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

