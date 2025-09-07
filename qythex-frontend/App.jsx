import { useState } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { Github, GitBranch, Users, Shield, Zap, BarChart3, Settings, Plus } from 'lucide-react'
import './App.css'

function App() {
  const [activeTab, setActiveTab] = useState('dashboard')

  const stats = [
    { title: 'Active Repositories', value: '24', icon: Github, change: '+12%' },
    { title: 'Workflows Running', value: '8', icon: Zap, change: '+5%' },
    { title: 'Team Members', value: '156', icon: Users, change: '+8%' },
    { title: 'Security Score', value: '94%', icon: Shield, change: '+2%' }
  ]

  const recentWorkflows = [
    { name: 'Deploy Production', status: 'success', repo: 'qythex/main-app', time: '2 min ago' },
    { name: 'Run Tests', status: 'running', repo: 'qythex/api-service', time: '5 min ago' },
    { name: 'Security Scan', status: 'success', repo: 'qythex/frontend', time: '10 min ago' },
    { name: 'Code Review', status: 'pending', repo: 'qythex/docs', time: '15 min ago' }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0 flex items-center">
                <Github className="h-8 w-8 text-blue-600" />
                <span className="ml-2 text-2xl font-bold text-gray-900">Qythex</span>
              </div>
              <nav className="hidden md:ml-8 md:flex md:space-x-8">
                <button 
                  onClick={() => setActiveTab('dashboard')}
                  className={`px-3 py-2 text-sm font-medium ${activeTab === 'dashboard' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500 hover:text-gray-700'}`}
                >
                  Dashboard
                </button>
                <button 
                  onClick={() => setActiveTab('workflows')}
                  className={`px-3 py-2 text-sm font-medium ${activeTab === 'workflows' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500 hover:text-gray-700'}`}
                >
                  Workflows
                </button>
                <button 
                  onClick={() => setActiveTab('projects')}
                  className={`px-3 py-2 text-sm font-medium ${activeTab === 'projects' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500 hover:text-gray-700'}`}
                >
                  Projects
                </button>
                <button 
                  onClick={() => setActiveTab('compliance')}
                  className={`px-3 py-2 text-sm font-medium ${activeTab === 'compliance' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500 hover:text-gray-700'}`}
                >
                  Compliance
                </button>
              </nav>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="outline" size="sm">
                <Settings className="h-4 w-4 mr-2" />
                Settings
              </Button>
              <Button size="sm">
                <Plus className="h-4 w-4 mr-2" />
                New Workflow
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {activeTab === 'dashboard' && (
          <div className="space-y-8">
            {/* Welcome Section */}
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Welcome to Qythex</h1>
              <p className="mt-2 text-gray-600">Your GitHub Enterprise Automation Hub</p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {stats.map((stat, index) => (
                <Card key={index}>
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-medium text-gray-600">{stat.title}</p>
                        <p className="text-3xl font-bold text-gray-900">{stat.value}</p>
                        <p className="text-sm text-green-600">{stat.change}</p>
                      </div>
                      <stat.icon className="h-8 w-8 text-blue-600" />
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Recent Activity */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle>Recent Workflows</CardTitle>
                  <CardDescription>Latest automation activity across your repositories</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {recentWorkflows.map((workflow, index) => (
                      <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                        <div className="flex items-center space-x-3">
                          <GitBranch className="h-4 w-4 text-gray-500" />
                          <div>
                            <p className="font-medium text-gray-900">{workflow.name}</p>
                            <p className="text-sm text-gray-500">{workflow.repo}</p>
                          </div>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Badge 
                            variant={workflow.status === 'success' ? 'default' : workflow.status === 'running' ? 'secondary' : 'outline'}
                          >
                            {workflow.status}
                          </Badge>
                          <span className="text-sm text-gray-500">{workflow.time}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Quick Actions</CardTitle>
                  <CardDescription>Common tasks and shortcuts</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-4">
                    <Button variant="outline" className="h-20 flex-col">
                      <Zap className="h-6 w-6 mb-2" />
                      Create Workflow
                    </Button>
                    <Button variant="outline" className="h-20 flex-col">
                      <BarChart3 className="h-6 w-6 mb-2" />
                      View Reports
                    </Button>
                    <Button variant="outline" className="h-20 flex-col">
                      <Shield className="h-6 w-6 mb-2" />
                      Security Scan
                    </Button>
                    <Button variant="outline" className="h-20 flex-col">
                      <Users className="h-6 w-6 mb-2" />
                      Manage Team
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        )}

        {activeTab === 'workflows' && (
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <h1 className="text-3xl font-bold text-gray-900">Workflows</h1>
              <Button>
                <Plus className="h-4 w-4 mr-2" />
                Create New Workflow
              </Button>
            </div>
            <Card>
              <CardContent className="p-8 text-center">
                <Zap className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                <h3 className="text-lg font-medium text-gray-900 mb-2">No workflows yet</h3>
                <p className="text-gray-500 mb-4">Create your first automated workflow to get started</p>
                <Button>Create Workflow</Button>
              </CardContent>
            </Card>
          </div>
        )}

        {activeTab === 'projects' && (
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <h1 className="text-3xl font-bold text-gray-900">Projects</h1>
              <Button>
                <Plus className="h-4 w-4 mr-2" />
                New Project
              </Button>
            </div>
            <Card>
              <CardContent className="p-8 text-center">
                <Github className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                <h3 className="text-lg font-medium text-gray-900 mb-2">Connect your repositories</h3>
                <p className="text-gray-500 mb-4">Link your GitHub repositories to start managing projects</p>
                <Button>Connect GitHub</Button>
              </CardContent>
            </Card>
          </div>
        )}

        {activeTab === 'compliance' && (
          <div className="space-y-6">
            <h1 className="text-3xl font-bold text-gray-900">Compliance & Security</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Security Score</CardTitle>
                  <CardDescription>Overall security posture</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-green-600 mb-2">94%</div>
                    <p className="text-gray-500">Excellent security posture</p>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Compliance Status</CardTitle>
                  <CardDescription>Regulatory compliance overview</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span>SOX Compliance</span>
                      <Badge>Compliant</Badge>
                    </div>
                    <div className="flex justify-between">
                      <span>GDPR</span>
                      <Badge>Compliant</Badge>
                    </div>
                    <div className="flex justify-between">
                      <span>SOC 2</span>
                      <Badge variant="secondary">In Progress</Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        )}
      </main>
    </div>
  )
}

export default App
