import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Smartphone, Car, Shield, Key, Lock, AlertTriangle, } from "lucide-react"

const services = [
  {
    icon: Smartphone,
    title: "Բանալիի Վերականգնում",
    description:
      "Ավտոմեքենաների բանալիների պրոֆեսիոնալ վերականգնում, ցանկացած բարդության՝ կորած կամ վնասված բանալիներից մինչև չիպերի ծրագրավորում։ Արագ և հուսալի լուծումներ՝ տեղում կամ սերվիսում։",
    color: "bg-card",
  },
  {
    icon: Car,
    title: "Բանալիի կրկնօրինակում",
    description:
      "Ավտոմեքենաների բանալիների կրկնօրինակում՝ արագ, ճշգրիտ և հուսալի։ Պատրաստում ենք սովորական, չիպով և հեռակառավարմամբ բանալիների կրկնօրինակներ` տարբեր մակնիշների ավտոմեքենաների համար։",
    color: "bg-card",
  },
  {
    
    icon: Lock,
    title: "Դռների անվնաս բացում",
    description:
      "Ավտոմեքենանեիի դռների անվնաս բացում՝ բանալիի կորստի կամ դռների բլոկավորման դեպքում։ Արագ և ապահով ծառայություն՝ մասնագիտական գործիքներով։",
    color: "bg-primary text-primary-foreground",
  },
  {
    icon: Key,
    title: "Սեյֆերի անվնաս բացում",
    description: "Բացումն իրականացվում է մասնագիտական գործիքներով՝ պահպանելով սեյֆի մեխանիզմը։ Արագ և հուսալի լուծում՝ տնային և գրասենյակային սեյֆերի համար։",
    color: "bg-card",
  },
  {
    
    icon: AlertTriangle,
    title: "Դիագնոստիկա",
    description: "Ավտոմեքենայի էլեկտրոնային համակարգերի արագ և ճշգրիտ ստուգում։ Բացահայտում ենք խնդիրները, վերլուծում և օգնում ենք գտնել ճիշտ լուծում տարբեր մակնիշների ավտոմեքենաների համար։",
    color: "bg-card",
  },
  {
    icon: Shield,
    title: "Անվտանգության համակարգեր",
    description:
      "Տարբեր տեսակի անվտանգության համակարգերի տեղադրում, հեռվից շահագործելու հնարավորությամբ։",
    color: "bg-card",
  },
]

export function ServicesSection() {
  return (
    <section id="services" className="py-20 px-4">
      <div className="container mx-auto">
        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const IconComponent = service.icon
            return (
              <Card
                key={index}
                className={`${service.color} border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1`}
              >
                <CardContent className="p-8 text-center">
                  {/* Icon */}
                  <div
                    className={`inline-flex p-4 rounded-full mb-6 ${
                      service.color.includes("primary") ? "bg-accent/20" : "bg-accent/10"
                    }`}
                  >
                    <IconComponent
                      className={`h-8 w-8 ${service.color.includes("primary") ? "text-accent" : "text-accent"}`}
                    />
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-semibold mb-4">{service.title}</h3>

                  {/* Description */}
                  <p
                    className={`mb-6 text-pretty leading-relaxed ${
                      service.color.includes("primary") ? "text-primary-foreground/80" : "text-muted-foreground"
                    }`}
                  >
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
