
import { render, screen } from '@testing-library/react'
import ProjectLinks from '../components/ProjectLinks'

describe('SCRUM-11: Project links', () => {
  test('displays a GitHub link for a project', () => {
    render(
      <ProjectLinks githubUrl="https://github.com/example/project" />
    )

    const link = screen.getByRole('link', { name: /github/i })

    expect(link).toHaveAttribute(
      'href',
      'https://github.com/example/project'
    )
  })
  test('displays a Live Demo link when a URL is available', () => {
    render(
      <ProjectLinks demoUrl="https://example.com/demo" />
    )

  const link = screen.getByRole('link', { name: /live demo/i })

    expect(link).toHaveAttribute(
      'href',
      'https://example.com/demo'
    )
  })
  test('does not display links when URLs are missing', () => {
    render(<ProjectLinks />)

  expect(
    screen.queryByRole('link', { name: /github/i })
  ).not.toBeInTheDocument()

    expect(
      screen.queryByRole('link', { name: /live demo/i })
    ).not.toBeInTheDocument()
  })
})

