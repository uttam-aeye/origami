"use client"

import { useState } from "react"
import { MessageCircle, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { ScrollArea } from "@/components/ui/scroll-area"

export function ChatbotButton() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState([
    { role: "bot", content: "Hello! I'm the Sri Rama ENT Care virtual assistant. How can I help you today?" },
  ])
  const [input, setInput] = useState("")

  const handleSendMessage = () => {
    if (!input.trim()) return

    // Add user message
    setMessages([...messages, { role: "user", content: input }])

    // Simulate bot response
    setTimeout(() => {
      let botResponse =
        "I'm sorry, I don't have that information. Please contact our clinic at +91 7416004877 for assistance."

      // Simple keyword-based responses
      const lowerInput = input.toLowerCase()
      if (lowerInput.includes("appointment") || lowerInput.includes("book")) {
        botResponse =
          "You can book an appointment by visiting our online booking portal at https://book-appointment.healthplix.com/dr-shakuntala-ghosh-ent-dilsukhnagar-hyderabad or by calling us at +91 7416004877."
      } else if (lowerInput.includes("hour") || lowerInput.includes("timing") || lowerInput.includes("open")) {
        botResponse = "Our clinic is open Monday to Saturday from 10:00 AM to 8:30 PM. We are closed on Sundays."
      } else if (lowerInput.includes("location") || lowerInput.includes("address") || lowerInput.includes("where")) {
        botResponse =
          "We are located at: Opp. Ravindra Bharathi School, Lane, beside SBI Road, Hanuman Nagar, Krishna Nagar, Dilsukhnagar, Hyderabad, Telangana 500060."
      } else if (lowerInput.includes("service") || lowerInput.includes("treat")) {
        botResponse =
          "We offer a wide range of ENT services including ear treatments, nose treatments, throat treatments, sinus surgery, septoplasty, turbinectomy, and more. Would you like specific information about any of these services?"
      } else if (lowerInput.includes("doctor") || lowerInput.includes("specialist")) {
        botResponse =
          "Our clinic is led by Dr. Shakuntala Ghosh, an experienced ENT specialist with expertise in various ENT conditions and surgeries."
      }

      setMessages((prev) => [...prev, { role: "bot", content: botResponse }])
    }, 1000)

    setInput("")
  }

  return (
    <>
      <Button
        className="fixed bottom-6 right-6 z-50 h-14 w-14 rounded-full shadow-lg"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X className="h-6 w-6" /> : <MessageCircle className="h-6 w-6" />}
      </Button>

      {isOpen && (
        <Card className="fixed bottom-24 right-6 z-50 w-80 md:w-96 shadow-xl">
          <CardHeader className="bg-blue-600 text-white py-3">
            <div className="flex items-center">
              <div className="mr-2 h-8 w-8 rounded-full bg-white flex items-center justify-center">
                <MessageCircle className="h-5 w-5 text-blue-600" />
              </div>
              <div>
                <h3 className="font-semibold">Sri Rama ENT Care</h3>
                <p className="text-xs text-blue-100">Virtual Assistant</p>
              </div>
            </div>
          </CardHeader>
          <CardContent className="p-0">
            <ScrollArea className="h-80 p-4">
              {messages.map((message, index) => (
                <div key={index} className={`mb-4 flex ${message.role === "user" ? "justify-end" : "justify-start"}`}>
                  <div
                    className={`max-w-[80%] rounded-lg px-4 py-2 ${
                      message.role === "user" ? "bg-blue-600 text-white" : "bg-gray-100 text-gray-800"
                    }`}
                  >
                    {message.content}
                  </div>
                </div>
              ))}
            </ScrollArea>
          </CardContent>
          <CardFooter className="border-t p-3">
            <form
              className="flex w-full gap-2"
              onSubmit={(e) => {
                e.preventDefault()
                handleSendMessage()
              }}
            >
              <Input
                placeholder="Type your message..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                className="flex-1"
              />
              <Button type="submit" size="sm">
                Send
              </Button>
            </form>
          </CardFooter>
        </Card>
      )}
    </>
  )
}

