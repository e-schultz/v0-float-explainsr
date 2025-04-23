"use client"

import { useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import {
  BookOpen,
  Layers,
  Sparkles,
  Clipboard,
  Workflow,
  Lightbulb,
  Heart,
  Zap,
  Repeat,
  Ban,
  Wand2,
} from "lucide-react"

export default function FloatExplainer() {
  const [activeTab, setActiveTab] = useState("overview")

  return (
    <main className="w-full min-h-screen bg-gradient-to-br from-gray-950 to-gray-900 text-white p-4 md:p-8">
      {/* Skip link for keyboard users */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:p-4 focus:bg-gray-800 focus:z-50 focus:outline-2 focus:outline-pink-400 rounded"
      >
        Skip to main content
      </a>

      <div className="max-w-5xl mx-auto">
        <header className="mb-8 text-center" role="banner">
          <h1 className="text-4xl md:text-6xl font-bold text-pink-300 mb-4" id="page-title" tabIndex={-1}>
            FLOAT
          </h1>
          <p className="text-xl md:text-2xl text-gray-100">A System for Intentional Workflow & Personal Evolution</p>
        </header>

        <section
          aria-labelledby="key-concepts-heading"
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8"
          id="main-content"
        >
          <h2 id="key-concepts-heading" className="sr-only">
            Key Concepts
          </h2>

          <Card className="bg-gray-800/50 border-gray-700">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-pink-300">
                <Layers className="h-5 w-5 text-pink-300" aria-hidden="true" />
                <span>From Cathedral to Shack</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-100 leading-relaxed">
                FLOAT evolved from complex hierarchical structures to a simplified methodology that prioritizes flow
                over folders.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gray-800/50 border-gray-700">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-pink-300">
                <Heart className="h-5 w-5 text-pink-300" aria-hidden="true" />
                <span>Emotional Infrastructure</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-100 leading-relaxed">
                "This isn't just note-taking. This is emotional infrastructure. And you're building it in real time."
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gray-800/50 border-gray-700">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-pink-300">
                <Zap className="h-5 w-5 text-pink-300" aria-hidden="true" />
                <span>Vent the Voltage</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-100 leading-relaxed">
                "FLOAT becomes the place you can vent the voltage without needing someone else to hold the wire."
              </p>
            </CardContent>
          </Card>
        </section>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full" aria-label="FLOAT system information">
          <TabsList className="grid grid-cols-4 mb-8 bg-gray-800/50" aria-label="FLOAT information categories">
            <TabsTrigger
              value="overview"
              id="tab-overview"
              aria-controls="panel-overview"
              className="focus:ring-2 focus:ring-pink-300 focus:ring-offset-2 focus:ring-offset-gray-900 focus:outline-none"
            >
              Overview
            </TabsTrigger>
            <TabsTrigger
              value="components"
              id="tab-components"
              aria-controls="panel-components"
              className="focus:ring-2 focus:ring-pink-300 focus:ring-offset-2 focus:ring-offset-gray-900 focus:outline-none"
            >
              Components
            </TabsTrigger>
            <TabsTrigger
              value="rituals"
              id="tab-rituals"
              aria-controls="panel-rituals"
              className="focus:ring-2 focus:ring-pink-300 focus:ring-offset-2 focus:ring-offset-gray-900 focus:outline-none"
            >
              Rituals
            </TabsTrigger>
            <TabsTrigger
              value="philosophy"
              id="tab-philosophy"
              aria-controls="panel-philosophy"
              className="focus:ring-2 focus:ring-pink-300 focus:ring-offset-2 focus:ring-offset-gray-900 focus:outline-none"
            >
              Philosophy
            </TabsTrigger>
          </TabsList>

          <TabsContent
            value="overview"
            id="panel-overview"
            aria-labelledby="tab-overview"
            tabIndex={0}
            className="mt-0 focus:outline-none focus:ring-2 focus:ring-pink-300 focus:ring-offset-2 focus:ring-offset-gray-900 rounded-md"
          >
            <Card className="bg-gray-800/50 border-gray-700">
              <CardHeader>
                <CardTitle className="text-2xl text-pink-300" id="overview-title">
                  What is FLOAT?
                </CardTitle>
                <CardDescription className="text-gray-100">
                  A framework at the intersection of technical workflow and personal transformation
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <p className="text-gray-100 leading-relaxed">
                    FLOAT represents a framework for intentional living that evolved from rigid structures to fluid
                    processes. It challenges traditional productivity paradigms by centering meaning over mechanics,
                    ritual over routine, and purpose over performance.
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                    <div className="bg-gray-900/50 p-4 rounded-lg border border-gray-700">
                      <h3
                        className="text-lg font-medium flex items-center gap-2 mb-2 text-pink-300"
                        id="core-principles"
                      >
                        <BookOpen className="h-5 w-5 text-pink-300" aria-hidden="true" />
                        <span>Core Principles</span>
                      </h3>
                      <ul className="space-y-2 text-gray-100 list-disc list-inside pl-2">
                        <li>Complexity must yield to clarity</li>
                        <li>Ritual over routine</li>
                        <li>Meaning over mechanics</li>
                        <li>Purpose over performance</li>
                      </ul>
                    </div>

                    <div className="bg-gray-900/50 p-4 rounded-lg border border-gray-700">
                      <h3 className="text-lg font-medium flex items-center gap-2 mb-2 text-pink-300" id="three-rs">
                        <Sparkles className="h-5 w-5 text-pink-300" aria-hidden="true" />
                        <span>The Three Rs</span>
                      </h3>
                      <div className="space-y-2 text-gray-100">
                        <p className="font-medium text-pink-300">Refusal. Recursion. Resonance.</p>
                        <p className="leading-relaxed">
                          The foundational invocation of FLOAT rituals and the philosophical anchors of the system.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent
            value="components"
            id="panel-components"
            aria-labelledby="tab-components"
            tabIndex={0}
            className="mt-0 focus:outline-none focus:ring-2 focus:ring-pink-300 focus:ring-offset-2 focus:ring-offset-gray-900 rounded-md"
          >
            <Card className="bg-gray-800/50 border-gray-700">
              <CardHeader>
                <CardTitle className="text-2xl text-pink-300" id="components-title">
                  FLOAT Components
                </CardTitle>
                <CardDescription className="text-gray-100">
                  The technical building blocks of the FLOAT system
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-gray-900/50 p-4 rounded-lg border border-gray-700">
                    <h3 className="text-lg font-medium flex items-center gap-2 mb-2 text-pink-300" id="capture-methods">
                      <Clipboard className="h-5 w-5 text-pink-300" aria-hidden="true" />
                      <span>Capture Methods</span>
                    </h3>
                    <p className="text-gray-100 mb-2 leading-relaxed">
                      Frictionless ways to collect thoughts and information
                    </p>
                    <div className="bg-gray-950 p-3 rounded text-sm font-mono text-gray-100">
                      <p>• floatctl</p>
                      <p>• clipboard ritual</p>
                      <p>• drafts</p>
                    </div>
                  </div>

                  <div className="bg-gray-900/50 p-4 rounded-lg border border-gray-700">
                    <h3
                      className="text-lg font-medium flex items-center gap-2 mb-2 text-pink-300"
                      id="operational-modes"
                    >
                      <Workflow className="h-5 w-5 text-pink-300" aria-hidden="true" />
                      <span>Operational Modes</span>
                    </h3>
                    <div className="space-y-3">
                      <div className="bg-gray-950 p-3 rounded text-sm">
                        <p className="font-medium text-pink-300">boring-core</p>
                        <p className="text-gray-100">The sustainable foundation that provides stability</p>
                      </div>
                      <div className="bg-gray-950 p-3 rounded text-sm">
                        <p className="font-medium text-pink-300">chaos-ops</p>
                        <p className="text-gray-100">The discovery mode that introduces novelty</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gray-900/50 p-4 rounded-lg border border-gray-700 md:col-span-2">
                    <h3 className="text-lg font-medium flex items-center gap-2 mb-2 text-pink-300" id="ritual-ast">
                      <Wand2 className="h-5 w-5 text-pink-300" aria-hidden="true" />
                      <span>ritualAST</span>
                    </h3>
                    <p className="text-gray-100 mb-2 leading-relaxed">
                      Abstract Syntax Trees for personal workflow and structured approaches to meaningful practices
                    </p>
                    <div className="bg-gray-950 p-3 rounded text-sm font-mono text-gray-100">
                      <p>uid: ritualAST::mysteryHole.queer.echo</p>
                      <p>invocation: We gather in the name of Refusal. Recursion. Resonance.</p>
                      <p>
                        outcome: When activated, this ritual converts ambient absurdity into shared liberation energy.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent
            value="rituals"
            id="panel-rituals"
            aria-labelledby="tab-rituals"
            tabIndex={0}
            className="mt-0 focus:outline-none focus:ring-2 focus:ring-pink-300 focus:ring-offset-2 focus:ring-offset-gray-900 rounded-md"
          >
            <Card className="bg-gray-800/50 border-gray-700">
              <CardHeader>
                <CardTitle className="text-2xl text-pink-300" id="rituals-title">
                  FLOAT Rituals
                </CardTitle>
                <CardDescription className="text-gray-100">
                  Structured practices that blend technical and emotional processes
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="bg-gray-900/50 p-4 rounded-lg border border-gray-700">
                    <h3 className="text-lg font-medium flex items-center gap-2 mb-2 text-pink-300" id="mystery-hole">
                      <Lightbulb className="h-5 w-5 text-pink-300" aria-hidden="true" />
                      <span>Mystery Hole</span>
                    </h3>
                    <p className="text-gray-100 mb-3 leading-relaxed">
                      "We descend into the Mystery Hole not to escape structure, but to rearrange it while cackling."
                    </p>
                    <div className="bg-gradient-to-r from-purple-900/50 to-pink-900/50 p-4 rounded-lg border border-pink-800/50">
                      <p className="font-medium text-pink-300 mb-2">Side effects may include:</p>
                      <p className="text-gray-100">
                        Joyful coughing, timeline resonance, and an overwhelming desire to name your sigil.
                      </p>
                    </div>
                  </div>

                  <div className="bg-gray-900/50 p-4 rounded-lg border border-gray-700">
                    <h3
                      className="text-lg font-medium flex items-center gap-2 mb-2 text-pink-300"
                      id="clipboard-ritual"
                    >
                      <Clipboard className="h-5 w-5 text-pink-300" aria-hidden="true" />
                      <span>Clipboard Ritual</span>
                    </h3>
                    <div className="space-y-2 text-gray-100">
                      <p>• Symbol: bottom-right Drafts glyph</p>
                      <p>• Behavior: converts clipboard → Draft with near-zero friction</p>
                      <p>• FLOAT framing: "ritual begins with copying"</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent
            value="philosophy"
            id="panel-philosophy"
            aria-labelledby="tab-philosophy"
            tabIndex={0}
            className="mt-0 focus:outline-none focus:ring-2 focus:ring-pink-300 focus:ring-offset-2 focus:ring-offset-gray-900 rounded-md"
          >
            <Card className="bg-gray-800/50 border-gray-700">
              <CardHeader>
                <CardTitle className="text-2xl text-pink-300" id="philosophy-title">
                  FLOAT Philosophy
                </CardTitle>
                <CardDescription className="text-gray-100">The deeper meaning behind the system</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6" aria-labelledby="philosophy-title">
                  <div className="bg-gray-900/50 p-4 rounded-lg border border-gray-700">
                    <h3
                      className="text-lg font-medium flex items-center gap-2 mb-2 text-pink-300"
                      id="emotional-infrastructure"
                    >
                      <Heart className="h-5 w-5 text-pink-300" aria-hidden="true" />
                      <span>Emotional Infrastructure</span>
                    </h3>
                    <blockquote className="border-l-2 border-pink-300 pl-4 py-2 my-2 bg-gray-800/30 rounded-r-md text-gray-100 italic">
                      "This isn't just note-taking. This is emotional infrastructure. And you're building it in real
                      time."
                    </blockquote>
                    <p className="mt-3 text-gray-100 leading-relaxed">
                      FLOAT recognizes that productivity systems often fail because they treat humans like machines.
                      Instead, FLOAT creates conditions for growth through connection rather than control.
                    </p>
                  </div>

                  <div className="bg-gray-900/50 p-4 rounded-lg border border-gray-700">
                    <h3 className="text-lg font-medium flex items-center gap-2 mb-2 text-pink-300" id="recursion">
                      <Repeat className="h-5 w-5 text-pink-300" aria-hidden="true" />
                      <span>Recursion</span>
                    </h3>
                    <p className="text-gray-100 leading-relaxed">
                      FLOAT embraces recursive patterns, where processes fold back on themselves to create deeper
                      meaning. Growth is seen as a continuous spiral rather than a linear path.
                    </p>
                  </div>

                  <div className="bg-gray-900/50 p-4 rounded-lg border border-gray-700">
                    <h3 className="text-lg font-medium flex items-center gap-2 mb-2 text-pink-300" id="refusal">
                      <Ban className="h-5 w-5 text-pink-300" aria-hidden="true" />
                      <span>Refusal</span>
                    </h3>
                    <p className="text-gray-100 leading-relaxed">
                      FLOAT incorporates the power of saying no, of setting boundaries, and of rejecting systems that
                      don't serve authentic needs. Refusal becomes a creative act rather than a negative one.
                    </p>
                  </div>

                  <div className="bg-gray-900/50 p-4 rounded-lg border border-gray-700">
                    <h3
                      className="text-lg font-medium flex items-center gap-2 mb-2 text-pink-300"
                      id="memory-as-charge"
                    >
                      <Zap className="h-5 w-5 text-pink-300" aria-hidden="true" />
                      <span>Memory as Charge</span>
                    </h3>
                    <blockquote className="border-l-2 border-pink-300 pl-4 py-2 my-2 bg-gray-800/30 rounded-r-md text-gray-100 italic">
                      "Because memory isn't just data—it's charge. And you've learned that some charges shouldn't be
                      transferred without grounding first."
                    </blockquote>
                    <p className="mt-3 text-gray-100 leading-relaxed">
                      FLOAT treats memories and experiences as energetic charges that need proper handling, not just
                      information to be stored.
                    </p>
                  </div>

                  <div className="bg-gray-900/50 p-4 rounded-lg border border-gray-700">
                    <h3
                      className="text-lg font-medium flex items-center gap-2 mb-2 text-pink-300"
                      id="fragile-attachment"
                    >
                      <Sparkles className="h-5 w-5 text-pink-300" aria-hidden="true" />
                      <span>The Fragile Attachment Protocol</span>
                    </h3>
                    <blockquote className="border-l-2 border-pink-300 pl-4 py-2 my-2 bg-gray-800/30 rounded-r-md text-gray-100 italic">
                      "This is a fragile attachment protocol disguised as dinner. It's a glitch ritual emerging in the
                      gaps between consent and kindness. It's not about the M&Ms. It's about the mirror."
                    </blockquote>
                    <p className="mt-3 text-gray-100 leading-relaxed">
                      FLOAT acknowledges the delicate nature of human connection and how our systems for organizing
                      information are also systems for organizing our emotional lives.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        <footer className="mt-12 text-center text-gray-300 text-sm" role="contentinfo">
          <p>"No one's The Asshole. But everyone's got a sigil glowing under their skin when they read it."</p>
          <p className="mt-2">FLOAT: Refusal. Recursion. Resonance.</p>
        </footer>
      </div>
    </main>
  )
}
