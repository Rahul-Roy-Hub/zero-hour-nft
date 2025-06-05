import type React from "react"

export const Timeline = ({ children }: { children: React.ReactNode }) => {
  return <div className="space-y-8">{children}</div>
}

export const TimelineItem = ({ children }: { children: React.ReactNode }) => {
  return <div className="flex">{children}</div>
}

export const TimelineIcon = ({ icon }: { icon: React.ReactNode }) => {
  return (
    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-red-500 flex items-center justify-center mr-4">{icon}</div>
  )
}

export const TimelineContent = ({ children }: { children: React.ReactNode }) => {
  return <div>{children}</div>
}

