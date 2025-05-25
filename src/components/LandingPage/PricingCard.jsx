import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle } from "lucide-react"
import { Link } from "react-router-dom"



export function PricingCard({
  title,
  price,
  period,
  description,
  features,
  buttonText,
  buttonVariant,
  popular = false,
}) {
  return (
    <Card
      className={`flex flex-col ${
        popular
          ? "border-emerald-200 shadow-md relative before:absolute before:inset-0 before:rounded-lg before:border-2 before:border-emerald-600 before:pointer-events-none"
          : ""
      }`}
    >
      {popular && (
        <div className="absolute top-0 right-0 transform translate-x-2 -translate-y-2 bg-emerald-600 text-white text-xs px-3 py-1 rounded-full">
          POPULAR
        </div>
      )}
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <div className="flex items-baseline mt-2">
          <span className="text-3xl font-bold">{price}</span>
          {period && <span className="ml-1 text-sm text-gray-500">{period}</span>}
        </div>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent className="flex-grow">
        <ul className="space-y-3">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <CheckCircle className="mr-2 h-4 w-4 text-emerald-600 mt-0.5 flex-shrink-0" />
              <span className="text-sm">{feature}</span>
            </li>
          ))}
        </ul>
      </CardContent>
      <CardFooter>
        <Link href="/signup" className="w-full">
          <Button
            variant={buttonVariant}
            className={`w-full ${buttonVariant === "default" ? "bg-emerald-600 hover:bg-emerald-700" : ""}`}
          >
            {buttonText}
          </Button>
        </Link>
      </CardFooter>
    </Card>
  )
}
