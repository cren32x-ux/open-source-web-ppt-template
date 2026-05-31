import React, { useEffect, useMemo, useState } from 'react'
import { ArrowDown, ArrowRight, BarChart3, CheckCircle2, Layers3, Sparkles } from 'lucide-react'

const slides = [
  {
    eyebrow: 'Strategy Deck',
    title: 'Turn a proposal into a web-based PPT.',
    body: 'A lightweight 16:9 presentation template for strategy, consulting, product, and campaign decks.',
    type: 'hero'
  },
  {
    eyebrow: '01 Problem',
    title: 'Most web pages are not built for pitch-room storytelling.',
    cards: [
      ['Long pages bury the logic', 'Readers scroll, but presenters need sequence.'],
      ['Slide tools are hard to customize', 'Design systems and web interactions are easier in code.'],
      ['Decks need sharper structure', 'One screen should communicate one strategic step.']
    ]
  },
  {
    eyebrow: '02 Structure',
    title: 'Use a simple flow: judgment, insight, shift, idea, proof, action.',
    steps: ['Judgment', 'Insight', 'Strategic shift', 'Core idea', 'Proof points', 'Action plan']
  },
  {
    eyebrow: '03 Features',
    title: 'A minimal deck shell you can adapt in minutes.',
    cards: [
      ['16:9 stage', 'Each page is sized like a PPT slide.'],
      ['Keyboard navigation', 'Use arrow keys, PageUp/PageDown, Home, End.'],
      ['Consulting style', 'Glass cards, blue-white palette, and dense proposal modules.']
    ]
  },
  {
    eyebrow: '04 Usage',
    title: 'Edit the slide array, run Vite, present in browser.',
    steps: ['npm install', 'npm run dev', 'Edit src/App.jsx', 'Present on localhost', 'Deploy as static site']
  }
]

function Pill({ children }) {
  return <span className="pill">{children}</span>
}

function Slide({ slide }) {
  if (slide.type === 'hero') {
    return (
      <section className="slide hero">
        <div className="topbar">
          <div className="brand"><Sparkles size={22} /> Web PPT Strategy Deck</div>
          <Pill>React + Vite</Pill>
        </div>
        <div className="hero-grid">
          <div>
            <Pill>{slide.eyebrow}</Pill>
            <h1>{slide.title}</h1>
            <p>{slide.body}</p>
          </div>
          <div className="flow-card">
            <div className="flow-head">
              <strong>Proposal Flow</strong>
              <Layers3 size={26} />
            </div>
            {['Judgment', 'Insight', 'Shift', 'Idea', 'Proof', 'Action'].map((item, index) => (
              <div className="flow-row" key={item}>
                <span>{String(index + 1).padStart(2, '0')}</span>
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="slide">
      <div className="topbar">
        <div className="brand"><BarChart3 size={22} /> Web PPT Strategy Deck</div>
        <Pill>{slide.eyebrow}</Pill>
      </div>
      <div className="slide-title">
        <Pill>{slide.eyebrow}</Pill>
        <h2>{slide.title}</h2>
      </div>
      {slide.cards && (
        <div className="card-grid">
          {slide.cards.map(([title, body]) => (
            <div className="card" key={title}>
              <CheckCircle2 size={28} />
              <h3>{title}</h3>
              <p>{body}</p>
            </div>
          ))}
        </div>
      )}
      {slide.steps && (
        <div className="steps">
          {slide.steps.map((step, index) => (
            <div className="step" key={step}>
              <span>{String(index + 1).padStart(2, '0')}</span>
              <strong>{step}</strong>
              {index < slide.steps.length - 1 && <ArrowRight size={22} />}
            </div>
          ))}
        </div>
      )}
    </section>
  )
}

export default function App() {
  const deck = useMemo(() => slides, [])
  const [index, setIndex] = useState(0)
  const last = deck.length - 1

  useEffect(() => {
    const onKeyDown = (event) => {
      if (['ArrowDown', 'ArrowRight', 'PageDown', ' '].includes(event.key)) {
        event.preventDefault()
        setIndex((value) => Math.min(last, value + 1))
      }
      if (['ArrowUp', 'ArrowLeft', 'PageUp'].includes(event.key)) {
        event.preventDefault()
        setIndex((value) => Math.max(0, value - 1))
      }
      if (event.key === 'Home') setIndex(0)
      if (event.key === 'End') setIndex(last)
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [last])

  return (
    <main className="deck-shell">
      <div className="deck-stage">
        <Slide slide={deck[index]} />
      </div>
      <div className="controls">
        <button onClick={() => setIndex((value) => Math.max(0, value - 1))} disabled={index === 0}>↑</button>
        <span>{String(index + 1).padStart(2, '0')} / {String(deck.length).padStart(2, '0')}</span>
        <button onClick={() => setIndex((value) => Math.min(last, value + 1))} disabled={index === last}>↓</button>
      </div>
      <div className="hint"><ArrowDown size={16} /> Arrow keys to navigate</div>
    </main>
  )
}
