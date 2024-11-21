// app/page.tsx
import { Card } from '@/components/ui/card'
import aiEditorsData from '@/data/ai-editors.json'

export default function Home() {
  const { editors } = aiEditorsData;

  return (
    <main className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            AI Code Editor Navigator
          </h1>
          <p className="text-xl text-gray-600">
            Discover the perfect AI-powered coding assistant for your development workflow
          </p>
        </header>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {editors.map((editor) => (
            <Card key={editor.name} className="p-6 hover:shadow-lg transition-shadow">
              <h2 className="text-2xl font-semibold text-gray-900 mb-2">
                {editor.name}
              </h2>
              <p className="text-gray-600 mb-4">
                {editor.description}
              </p>
              <div className="mb-4">
                <span className="inline-block bg-blue-100 text-blue-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded">
                  {editor.category}
                </span>
                <span className="inline-block bg-green-100 text-green-800 text-sm font-medium px-2.5 py-0.5 rounded">
                  {editor.pricing}
                </span>
              </div>
              <ul className="mb-4 space-y-2">
                {editor.features.map((feature) => (
                  <li key={feature} className="flex items-center text-gray-600">
                    <svg className="w-4 h-4 mr-2 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
              <a
                href={editor.url}
                target="_blank"
                rel="nofollow noopener noreferrer"
                className="inline-block w-full text-center bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded transition-colors"
              >
                Visit Website
              </a>
            </Card>
          ))}
        </div>
      </div>
    </main>
  )
}
