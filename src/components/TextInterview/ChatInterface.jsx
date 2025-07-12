

import { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Send, Clock, StopCircle } from "lucide-react"


export function ChatInterface({ config, messages, setMessages, onEndInterview }) {
  const [input, setInput] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [timeLeft, setTimeLeft] = useState(config.duration * 60) // Convert to seconds
  const [questionCount, setQuestionCount] = useState(0)
  const messagesEndRef = useRef(null)

  // Timer effect
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          handleEndInterview()
          return 0
        }
        return prev - 1
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  // Auto-scroll to bottom
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [messages])

  // Initialize with first question
  useEffect(() => {
    if (messages.length === 0) {
      generateFirstQuestion()
    }
  }, [])

  const generateFirstQuestion = async () => {
    setIsLoading(true)
    try {
      const response = await fetch("/api/interview/question", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          type: config.type,
          difficulty: config.difficulty,
          isFirst: true,
        }),
      })

      const data = await response.json()
      const aiMessage = {
        id: `ai-${Date.now()}`,
        role: "assistant",
        content: data.question,
        timestamp: new Date(),
      }

      setMessages([aiMessage])
      setQuestionCount(1)
    } catch (error) {
      console.error("Error generating question:", error)
    } finally {
      setIsLoading(false)
    }
  }

  const handleSendMessage = async () => {
    if (!input.trim() || isLoading) return

    // Add user message
    const userMessage = {
      id: `user-${Date.now()}`,
      role: "user",
      content: input.trim(),
      timestamp: new Date(),
    }

    setMessages((prev) => [...prev, userMessage])
    setInput("")
    setIsLoading(true)

    try {
      // Get AI response
      const response = await fetch("/api/interview/response", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          type: config.type,
          difficulty: config.difficulty,
          userResponse: input.trim(),
          conversationHistory: messages,
          questionCount,
        }),
      })

      const data = await response.json()

      // Add AI response
      const aiMessage = {
        id: `ai-${Date.now()}`,
        role: "assistant",
        content: data.response,
        timestamp: new Date(),
      }

      setMessages((prev) => [...prev, aiMessage])

      // If there's a follow-up question, increment count
      if (data.isNewQuestion) {
        setQuestionCount((prev) => prev + 1)
      }
    } catch (error) {
      console.error("Error getting AI response:", error)
    } finally {
      setIsLoading(false)
    }
  }

  const handleEndInterview = async () => {
    setIsLoading(true)
    try {
      const response = await fetch("/api/interview/feedback", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          type: config.type,
          difficulty: config.difficulty,
          messages,
          duration: config.duration * 60 - timeLeft,
        }),
      })

      const feedback = await response.json()
      onEndInterview(feedback)
    } catch (error) {
      console.error("Error generating feedback:", error)
    } finally {
      setIsLoading(false)
    }
  }

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault()
      handleSendMessage()
    }
  }

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`
  }

  return (
    <div className="container max-w-4xl py-4 h-screen flex flex-col">
      {/* Header */}
      <Card className="mb-4">
        <CardHeader className="pb-3">
          <div className="flex items-center justify-between">
            <div>
              <CardTitle className="flex items-center space-x-2">
                <span>{config.type} Interview</span>
                <Badge variant="outline">{config.difficulty}</Badge>
              </CardTitle>
            </div>
            <div className="flex items-center space-x-4">
              <div className="flex items-center text-gray-600">
                <Clock className="w-4 h-4 mr-1" />
                <span>{formatTime(timeLeft)}</span>
              </div>
              <Button
                variant="outline"
                size="sm"
                onClick={handleEndInterview}
                className="flex items-center bg-transparent"
              >
                <StopCircle className="w-4 h-4 mr-1" />
                End Interview
              </Button>
            </div>
          </div>
        </CardHeader>
      </Card>

      {/* Chat Messages */}
      <Card className="flex-1 flex flex-col">
        <CardContent className="flex-1 overflow-y-auto p-4 space-y-4">
          {messages.map((message) => (
            <div key={message.id} className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}>
              <div
                className={`max-w-[80%] rounded-lg p-4 ${
                  message.role === "user"
                    ? "bg-emerald-600 text-white"
                    : "bg-white border border-gray-200 text-gray-800"
                }`}
              >
                <div className="flex items-center space-x-2 mb-1">
                  <span className="text-xs font-medium">{message.role === "user" ? "You" : "AI Interviewer"}</span>
                  <span className={`text-xs ${message.role === "user" ? "text-emerald-100" : "text-gray-500"}`}>
                    {message.timestamp.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
                  </span>
                </div>
                <p className="whitespace-pre-wrap">{message.content}</p>
              </div>
            </div>
          ))}

          {isLoading && (
            <div className="flex justify-start">
              <div className="max-w-[80%] rounded-lg p-4 bg-white border border-gray-200">
                <div className="flex items-center space-x-2 mb-2">
                  <span className="text-xs font-medium">AI Interviewer</span>
                  <span className="text-xs text-gray-500">thinking...</span>
                </div>
                <div className="flex space-x-2">
                  <div className="h-2 w-2 rounded-full bg-gray-400 animate-bounce"></div>
                  <div className="h-2 w-2 rounded-full bg-gray-400 animate-bounce [animation-delay:0.2s]"></div>
                  <div className="h-2 w-2 rounded-full bg-gray-400 animate-bounce [animation-delay:0.4s]"></div>
                </div>
              </div>
            </div>
          )}

          <div ref={messagesEndRef} />
        </CardContent>

        <CardFooter className="border-t p-4">
          <div className="flex w-full items-end space-x-2">
            <Textarea
              placeholder="Type your response here... (Press Enter to send, Shift+Enter for new line)"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              className="flex-1 min-h-[60px] max-h-[120px]"
              disabled={isLoading}
            />
            <Button
              onClick={handleSendMessage}
              disabled={isLoading || !input.trim()}
              className="bg-emerald-600 hover:bg-emerald-700"
            >
              <Send className="h-4 w-4" />
            </Button>
          </div>
        </CardFooter>
      </Card>
    </div>
  )
}
