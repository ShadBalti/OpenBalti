import Image from "next/image"

interface GalleryItem {
  id: string
  title: string
  description: string
  image: string
}

const galleryItems: GalleryItem[] = [
  {
    id: "landscape",
    title: "Baltistan Landscape",
    description: "The majestic mountains and valleys of Baltistan, homeland of Balti speakers",
    image: "/baltistan.jpeg",
  },
  {
    id: "script",
    title: "Balti Script Heritage",
    description: "Classical and modern scripts used in Balti language preservation",
    image: "/balti-script.png",
  },
]

export function CulturalGallery() {
  return (
    <section className="py-8 sm:py-16 md:py-24 bg-gradient-to-b from-background via-muted/30 to-background" aria-labelledby="gallery-heading">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-10 sm:mb-16 animate-fade-in">
          <h2 id="gallery-heading" className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">
            Cultural <span className="text-gradient">Heritage</span>
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground">
            Explore the landscapes, traditions, and scripts that define Balti culture
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-4 sm:gap-6 md:gap-8 max-w-5xl mx-auto">
          {galleryItems.map((item, index) => (
            <div
              key={item.id}
              className="group relative rounded-xl sm:rounded-2xl overflow-hidden animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative aspect-square overflow-hidden rounded-xl sm:rounded-2xl border border-sm:border-2 border-primary/30 shadow-lg sm:shadow-xl hover:shadow-xl sm:hover:shadow-2xl hover:shadow-primary/30 transition-all duration-500">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                  priority={index === 0}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" aria-hidden="true"></div>
                <div className="absolute inset-0 p-4 sm:p-6 flex flex-col justify-end">
                  <div className="translate-y-2 sm:translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="text-white font-semibold text-base sm:text-lg mb-1 sm:mb-2">{item.title}</h3>
                    <p className="text-white/80 text-xs sm:text-sm">{item.description}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 sm:mt-16 text-center">
          <p className="text-sm sm:text-base text-muted-foreground mb-4 sm:mb-6">
            Every image tells a story of Balti language, culture, and heritage
          </p>
        </div>
      </div>
    </section>
  )
}
