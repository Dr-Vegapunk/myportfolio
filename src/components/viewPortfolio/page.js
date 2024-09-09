'use client'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { ExternalLink, ChevronRight } from 'lucide-react'

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

const projects = [
  {
    id: 1,
    title: "E-commerce Platform",
    description: "A full-stack e-commerce solution with React and Node.js",
    imageUrl: "/placeholder.svg?height=200&width=300",
    link: "#"
  },
  {
    id: 2,
    title: "Weather App",
    description: "Real-time weather forecasting using OpenWeatherMap API",
    imageUrl: "/placeholder.svg?height=200&width=300",
    link: "#"
  },
  {
    id: 3,
    title: "Task Manager",
    description: "A productivity app built with React and Firebase",
    imageUrl: "/placeholder.svg?height=200&width=300",
    link: "#"
  },
  {
    id: 4,
    title: "Portfolio Website",
    description: "A responsive portfolio website using Next.js and Tailwind CSS",
    imageUrl: "/placeholder.svg?height=200&width=300",
    link: "#"
  }
]

export default function ViewPortfolio() {
  const [hoveredId, setHoveredId] = useState(null)

  return (
      <div className="container mx-auto px-4 bg-gradient-to-r from-blue-500 to-indigo-400">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              onMouseEnter={() => setHoveredId(project.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <Card className="overflow-hidden h-full flex flex-col">
                <div className="relative">
                  <img
                    src={project.imageUrl}
                    alt={project.title}
                    className="w-full h-48 object-cover"
                  />
                  {hoveredId === project.id && (
                    <div className="absolute inset-0 bg-primary/80 flex items-center justify-center">
                      <Button variant="secondary" asChild>
                        <a href={project.link} className="flex items-center">
                          View Project <ExternalLink className="ml-2 h-4 w-4" />
                        </a>
                      </Button>
                    </div>
                  )}
                </div>
                <CardHeader>
                  <CardTitle>{project.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-muted-foreground">{project.description}</p>
                </CardContent>
                <CardFooter>
                  <Button variant="ghost" asChild className="w-full">
                    <a href={project.link} className="flex items-center justify-between">
                      Learn More <ChevronRight className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                </CardFooter>
                
              </Card>
            </motion.div>
          ))}
        </div>
        <div className="text-center mt-12">
          <Button size="lg">
            View All Projects <ChevronRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    
  )
}