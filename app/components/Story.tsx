import {
  Timeline,
  TimelineItem,
  TimelineIcon,
  TimelineContent,
} from "@/components/ui/timeline";
import { Clock, Zap, Skull, Sun } from "lucide-react";

export default function Story() {
  return (
    <section
      id="story"
      className="py-20 bg-gray-900 relative bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/ZeroHourStoryBg.jpg')" }}
    >
      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-6xl font-medium mb-12 text-center hover:text-red-500 transition-colors">
          The Zero Hour Story
        </h2>
        <p className="text-2xl mb-8 text-center text-blue-300">
          Earth is in shattered wasteland due to its darkest failure from man,
          struggling now with life versus death for many in everyday affairs.
          And between these ideologies two kinds of societies are separated with
          people belonging into two sides holding the same goals but pursuing to
          get through either restoring a plan or accumulating an old destroyed
          advance technology trying and holding powers only for achieving world
          dominance. Amidst this devastation, freak creatures—hideous offspring
          of the scientists' experimentation failures and ecological
          catastrophe—scuttle over the earth, blurring the definition of friend
          or foe. Survival depends upon the ingenuity of those scavengers armed
          with weapons fashioned from broken technology parts married to crude
          tools born out of necessity. Hiding at the center of this collapsing
          world is a source of power-an enigma that sometimes sounds on its
          promises of salvation, other times screams out as total destruction.
          As factions fight for control of this energy, the central question
          looms: will humanity's final hour be one of redemption or ruin?
        </p>
        <Timeline>
          <TimelineItem>
            <TimelineIcon icon={<Clock className="h-6 w-6" />} />
            <TimelineContent>
              <h3 className="text-4xl font-medium mb-2 text-green-500">
                The Countdown Begins
              </h3>
              <p className="text-2xl">
                As the world teeters on the brink, survivors prepare for the
                inevitable
              </p>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineIcon icon={<Zap className="h-6 w-6" />} />
            <TimelineContent>
              <h3 className="text-4xl font-medium mb-2 text-green-500">
                The Cataclysm Strikes
              </h3>
              <p className="text-2xl">
                A series of catastrophic events plunges the world into chaos
              </p>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineIcon icon={<Skull className="h-6 w-6" />} />
            <TimelineContent>
              <h3 className="text-4xl font-medium mb-2 text-green-500">The Aftermath</h3>
              <p className="text-2xl">Survivors emerge to face a drastically altered world</p>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineIcon icon={<Sun className="h-6 w-6" />} />
            <TimelineContent>
              <h3 className="text-4xl font-medium mb-2 text-green-500">A New Dawn</h3>
              <p className="text-2xl">Hope springs eternal as humanity begins to rebuild</p>
            </TimelineContent>
          </TimelineItem>
        </Timeline>
      </div>
    </section>
  );
}
