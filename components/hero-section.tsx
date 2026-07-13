import { Button } from "@/components/ui/button"
import { Clock } from "lucide-react"

export function HeroSection() {
  return (
    <section id="home" className="relative min-h-screen flex items-center">
      {/* Background with overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/70 z-10"></div>
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/professional-locksmith-working-on-car-door-with-mo.jpg')`,
        }}
      ></div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="text-white">
            <div className="mb-6">
              <span className="text-accent font-medium tracking-wider uppercase text-sm">Մենք Ապահովում ենք</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-balance leading-tight">
              Որակ. Վստահություն. Արդյունք.
            </h1>

            <p className="text-lg md:text-xl mb-8 text-white/90 text-pretty leading-relaxed">
              Մենք ապահովում ենք հուսալի լուծումներ Ձեր մեքենայի անվտանգության համար` դռների անվնաս բացումից մինչև բանալիների մասնագիտացված ծրագրավորում, Ձեզ հարմար վայրում և 24/7 ռեժիմով։

            </p>
            {/* 24/7 Service Badge */}
            <div className="flex items-center gap-3">
              <div className="bg-accent/20 p-3 rounded-full">
                <Clock className="h-6 w-6 text-accent" />
              </div>
              <div>
                <h3 className="font-semibold text-white">24/7 Հասանելիություն</h3>
                <p className="text-white/80 text-sm">Հասանելի ենք շուրջօրյա՝ արտակարգ իրավիճակների համար։</p>
              </div>
            </div>
          </div>

          {/* Right content - Experience badge and images */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                  <img
                    src="/modern-car-key-programming-device.jpg"
                    alt="Key programming"
                    className="w-full h-32 object-cover rounded"
                  />
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                  <img
                    src="/locksmith-tools-and-equipment.jpg"
                    alt="Locksmith tools"
                    className="w-full h-32 object-cover rounded"
                  />
                </div>
              </div>

              <div className="space-y-4 mt-8">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                  <img
                    src="/smart-car-security-system.jpg"
                    alt="Smart security"
                    className="w-full h-32 object-cover rounded"
                  />
                </div>

                {/* Experience Badge */}
                <div className="bg-accent rounded-lg p-6 text-center">
                  <div className="text-3xl font-bold text-white mb-1">10+</div>
                  <div className="text-white text-sm font-medium">Տարվա փորձ</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
