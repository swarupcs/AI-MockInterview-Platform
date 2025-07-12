
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { CheckCircle, AlertCircle, Lightbulb, RotateCcw, Download } from "lucide-react"


export function FeedbackView({ feedback, onRestart }) {
  const getScoreColor = (score) => {
    if (score >= 80) return "text-green-600"
    if (score >= 60) return "text-yellow-600"
    return "text-red-600"
  }

  const getScoreLabel = (score) => {
    if (score >= 90) return "Excellent"
    if (score >= 80) return "Very Good"
    if (score >= 70) return "Good"
    if (score >= 60) return "Fair"
    return "Needs Improvement"
  }

  return (
    <div className="container max-w-4xl py-8">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold mb-2">Interview Complete!</h1>
        <p className="text-gray-600">Here's your detailed performance analysis</p>
      </div>

      {/* Overall Score */}
      <Card className="mb-6">
        <CardHeader className="text-center">
          <CardTitle>Overall Performance</CardTitle>
          <CardDescription>Your interview score and rating</CardDescription>
        </CardHeader>
        <CardContent className="text-center">
          <div className={`text-6xl font-bold mb-2 ${getScoreColor(feedback.score)}`}>{feedback.score}</div>
          <div className="text-xl text-gray-600 mb-4">out of 100</div>
          <Badge className={`text-lg px-4 py-2 ${getScoreColor(feedback.score)}`} variant="outline">
            {getScoreLabel(feedback.score)}
          </Badge>
          <div className="mt-6 max-w-md mx-auto">
            <Progress value={feedback.score} className="h-3" />
          </div>
        </CardContent>
      </Card>

      <div className="grid gap-6 md:grid-cols-2">
        {/* Strengths */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center text-green-600">
              <CheckCircle className="w-5 h-5 mr-2" />
              Strengths
            </CardTitle>
            <CardDescription>What you did well in this interview</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3">
              {feedback.strengths.map((strength, index) => (
                <li key={index} className="flex items-start">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-sm">{strength}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        {/* Areas for Improvement */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center text-orange-600">
              <AlertCircle className="w-5 h-5 mr-2" />
              Areas for Improvement
            </CardTitle>
            <CardDescription>Focus areas for your next practice session</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3">
              {feedback.improvements.map((improvement, index) => (
                <li key={index} className="flex items-start">
                  <AlertCircle className="w-4 h-4 text-orange-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-sm">{improvement}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </div>

      {/* Suggestions */}
      <Card className="mt-6">
        <CardHeader>
          <CardTitle className="flex items-center text-blue-600">
            <Lightbulb className="w-5 h-5 mr-2" />
            Personalized Suggestions
          </CardTitle>
          <CardDescription>Actionable tips to improve your interview performance</CardDescription>
        </CardHeader>
        <CardContent>
          <ul className="space-y-4">
            {feedback.suggestions.map((suggestion, index) => (
              <li key={index} className="flex items-start">
                <div className="w-6 h-6 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center text-sm font-medium mr-3 mt-0.5 flex-shrink-0">
                  {index + 1}
                </div>
                <span className="text-sm">{suggestion}</span>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>

      {/* Detailed Analysis */}
      <Card className="mt-6">
        <CardHeader>
          <CardTitle>Detailed Analysis</CardTitle>
          <CardDescription>In-depth feedback on your responses</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-gray-700 leading-relaxed">{feedback.detailedAnalysis}</p>
        </CardContent>
      </Card>

      {/* Action Buttons */}
      <div className="flex flex-col sm:flex-row gap-4 mt-8 justify-center">
        <Button onClick={onRestart} className="bg-emerald-600 hover:bg-emerald-700 flex items-center">
          <RotateCcw className="w-4 h-4 mr-2" />
          Practice Again
        </Button>
        <Button variant="outline" className="flex items-center bg-transparent">
          <Download className="w-4 h-4 mr-2" />
          Download Report
        </Button>
      </div>
    </div>
  )
}
