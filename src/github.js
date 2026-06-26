// Narik data live dari GitHub REST API (unauthenticated, 60 req/jam — cukup buat porto).
const API = 'https://api.github.com'

export async function fetchGithub(username) {
  const [userRes, reposRes] = await Promise.all([
    fetch(`${API}/users/${username}`),
    fetch(`${API}/users/${username}/repos?per_page=100&sort=updated`),
  ])
  if (!userRes.ok) throw new Error(`GitHub user ${userRes.status}`)
  const user = await userRes.json()
  const reposRaw = reposRes.ok ? await reposRes.json() : []

  const repos = reposRaw
    .filter((r) => !r.fork && !r.archived)
    .sort((a, b) => b.stargazers_count - a.stargazers_count || new Date(b.pushed_at) - new Date(a.pushed_at))

  const totalStars = repos.reduce((s, r) => s + r.stargazers_count, 0)
  const languages = [...new Set(repos.map((r) => r.language).filter(Boolean))]

  return {
    user: {
      name: user.name,
      login: user.login,
      avatar: user.avatar_url,
      bio: user.bio,
      followers: user.followers,
      following: user.following,
      publicRepos: user.public_repos,
      html_url: user.html_url,
      location: user.location,
    },
    repos: repos.slice(0, 6),
    stats: { totalStars, languages: languages.slice(0, 8), repoCount: repos.length },
  }
}
