import { NextResponse } from 'next/server'

export async function GET() {
  try {
    const username = 'CuongBC195'
    const response = await fetch(
      `https://api.github.com/users/${username}/repos?sort=updated&per_page=100`,
      {
        headers: {
          'Accept': 'application/vnd.github.v3+json',
        },
        next: { revalidate: 3600 } // Cache for 1 hour
      }
    )

    if (!response.ok) {
      throw new Error('Failed to fetch repositories')
    }

    const repos = await response.json()

    // Featured repos to exclude (normalize URLs for comparison)
    const featuredRepos = [
      'capstoneproject_hms',
      'e-contract'
    ]

    // Filter out forks, archived, and featured repos
    const projects = repos
      .filter((repo: any) => {
        const isFork = repo.fork
        const isArchived = repo.archived
        const isFeatured = featuredRepos.some(featured => 
          repo.name.toLowerCase().includes(featured.toLowerCase())
        )
        return !isFork && !isArchived && !isFeatured
      })
      .map((repo: any) => ({
        id: repo.id,
        title: repo.name.replace(/-/g, ' ').replace(/_/g, ' ').replace(/\b\w/g, (l: string) => l.toUpperCase()),
        description: repo.description || 'No description available',
        github: repo.html_url,
        demo: repo.homepage || null,
        date: new Date(repo.updated_at).toLocaleDateString('en-US', { 
          year: 'numeric', 
          month: 'short' 
        }),
        stats: {
          stars: repo.stargazers_count,
          forks: repo.forks_count,
          commits: 0 // Would need additional API call to get commits
        },
        language: repo.language,
        category: 'Backend Development', // Default category
        status: 'Completed',
        featured: false,
        technologies: repo.language ? [repo.language] : []
      }))

    return NextResponse.json(projects)
  } catch (error) {
    console.error('Error fetching GitHub repositories:', error)
    return NextResponse.json(
      { error: 'Failed to fetch repositories' },
      { status: 500 }
    )
  }
}

