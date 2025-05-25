import { Star } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"



export function TestimonialCard({ name, role, image, rating, quote }) {
  return (
    <div className="flex flex-col p-6 bg-white rounded-lg shadow-sm border border-gray-100">
      <div className="flex items-center space-x-4 mb-4">
        <Avatar className="h-12 w-12">
          <AvatarImage src={image || "/placeholder.svg"} alt={name} />
          <AvatarFallback>{name.charAt(0)}</AvatarFallback>
        </Avatar>
        <div>
          <h4 className="font-medium">{name}</h4>
          <p className="text-sm text-gray-500">{role}</p>
        </div>
      </div>
      <div className="flex mb-4">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star key={i} className={`h-4 w-4 ${i < rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}`} />
        ))}
      </div>
      <blockquote className="text-gray-600 italic mb-4">"{quote}"</blockquote>
    </div>
  )
}
