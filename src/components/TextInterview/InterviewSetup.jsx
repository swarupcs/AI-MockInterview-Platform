
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Clock, Code, Users, Database, Monitor, Server, Briefcase } from "lucide-react"



const interviewTypes = [
  {
    type: "DSA" ,
    title: "Data Structures & Algorithms",
    description: "Coding problems, algorithmic thinking, and problem-solving skills",
    icon: Code,
    color: "bg-blue-100 text-blue-800",
  },
  {
    type: "Behavioral" ,
    title: "Behavioral Interview",
    description: "Leadership, teamwork, conflict resolution, and soft skills",
    icon: Users,
    color: "bg-green-100 text-green-800",
  },
  {
    type: "System Design" ,
    title: "System Design",
    description: "Architecture, scalability, and distributed systems design",
    icon: Database,
    color: "bg-purple-100 text-purple-800",
  },
  {
    type: "Frontend" ,
    title: "Frontend Development",
    description: "React, JavaScript, CSS, and frontend architecture",
    icon: Monitor,
    color: "bg-orange-100 text-orange-800",
  },
  {
    type: "Backend" ,
    title: "Backend Development",
    description: "APIs, databases, server architecture, and backend technologies",
    icon: Server,
    color: "bg-red-100 text-red-800",
  },
  {
    type: "Product Management" ,
    title: "Product Management",
    description: "Product strategy, user research, and business analysis",
    icon: Briefcase,
    color: "bg-indigo-100 text-indigo-800",
  },
]

export function InterviewSetup({ onStart }) {
  const [selectedType, setSelectedType] = useState(null)
  const [difficulty, setDifficulty] = useState("Medium")
  const [duration, setDuration] = useState(30)

  const handleStart = () => {
    if (selectedType) {
      onStart({
        type: selectedType,
        difficulty,
        duration,
      })
    }
  }

  return (
    <div className="container max-w-4xl py-8">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold mb-2">Start Your Mock Interview</h1>
        <p className="text-gray-600">Choose your interview type and preferences to begin practicing</p>
      </div>

      <Card className="mb-6">
        <CardHeader>
          <CardTitle>Select Interview Type</CardTitle>
          <CardDescription>Choose the type of interview you want to practice</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {interviewTypes.map((interview) => {
              const Icon = interview.icon
              const isSelected = selectedType === interview.type

              return (
                <div
                  key={interview.type}
                  className={`cursor-pointer rounded-lg border-2 p-4 transition-all hover:shadow-md ${
                    isSelected ? "border-emerald-500 bg-emerald-50" : "border-gray-200 hover:border-gray-300"
                  }`}
                  onClick={() => setSelectedType(interview.type)}
                >
                  <div className="flex items-center space-x-3 mb-3">
                    <div className={`rounded-full p-2 ${interview.color}`}>
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="font-medium">{interview.title}</h3>
                  </div>
                  <p className="text-sm text-gray-600">{interview.description}</p>
                  {isSelected && (
                    <div className="mt-3">
                      <Badge className="bg-emerald-100 text-emerald-800">Selected</Badge>
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        </CardContent>
      </Card>

      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Difficulty Level</CardTitle>
            <CardDescription>Choose the complexity of questions</CardDescription>
          </CardHeader>
          <CardContent>
            <Select value={difficulty} onValueChange={(value) => setDifficulty(value)}>
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Easy">
                  <div className="flex items-center space-x-2">
                    <div className="h-2 w-2 rounded-full bg-green-500"></div>
                    <span>Easy - Fundamental concepts</span>
                  </div>
                </SelectItem>
                <SelectItem value="Medium">
                  <div className="flex items-center space-x-2">
                    <div className="h-2 w-2 rounded-full bg-yellow-500"></div>
                    <span>Medium - Intermediate level</span>
                  </div>
                </SelectItem>
                <SelectItem value="Hard">
                  <div className="flex items-center space-x-2">
                    <div className="h-2 w-2 rounded-full bg-red-500"></div>
                    <span>Hard - Advanced concepts</span>
                  </div>
                </SelectItem>
              </SelectContent>
            </Select>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Interview Duration</CardTitle>
            <CardDescription>Set the length of your practice session</CardDescription>
          </CardHeader>
          <CardContent>
            <Select value={duration.toString()} onValueChange={(value) => setDuration(Number.parseInt(value))}>
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="15">
                  <div className="flex items-center space-x-2">
                    <Clock className="h-4 w-4" />
                    <span>15 minutes - Quick practice</span>
                  </div>
                </SelectItem>
                <SelectItem value="30">
                  <div className="flex items-center space-x-2">
                    <Clock className="h-4 w-4" />
                    <span>30 minutes - Standard session</span>
                  </div>
                </SelectItem>
                <SelectItem value="45">
                  <div className="flex items-center space-x-2">
                    <Clock className="h-4 w-4" />
                    <span>45 minutes - Extended practice</span>
                  </div>
                </SelectItem>
                <SelectItem value="60">
                  <div className="flex items-center space-x-2">
                    <Clock className="h-4 w-4" />
                    <span>60 minutes - Full interview</span>
                  </div>
                </SelectItem>
              </SelectContent>
            </Select>
          </CardContent>
        </Card>
      </div>

      <Card className="mt-6">
        <CardFooter className="pt-6">
          <Button
            onClick={handleStart}
            disabled={!selectedType}
            className="w-full bg-emerald-600 hover:bg-emerald-700"
            size="lg"
          >
            Start Interview
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}
