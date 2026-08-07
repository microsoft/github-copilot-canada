import GithubSlugger from 'github-slugger'
import devDaysReadme from '../dev-days/README.md?raw'
import devEnablementSeriesReadme from '../dev-enablement-series/README.md?raw'
import rootReadme from '../README.md?raw'
import usageBasedBillingReadme from '../usage-based-billing/README.md?raw'

export const pageIds = ['home', 'dev-days', 'dev-enablement-series', 'usage-based-billing'] as const
export type PageId = (typeof pageIds)[number]

export type PageContent = {
  id: PageId
  route: string
  label: string
  eyebrow: string
  description: string
  markdown: string
  sourcePath: string
}

export type TableOfContentsItem = {
  id: string
  title: string
}

export const pages: Record<PageId, PageContent> = {
  home: {
    id: 'home',
    route: '',
    label: 'Resource hub',
    eyebrow: 'Public resource hub',
    description: 'Events, learning, billing, and governance for Canada.',
    markdown: rootReadme,
    sourcePath: 'README.md',
  },
  'dev-days': {
    id: 'dev-days',
    route: 'dev-days',
    label: 'Dev Days Canada',
    eyebrow: 'Community events',
    description: 'GitHub-centric, tool-agnostic events for Canadian builders.',
    markdown: devDaysReadme,
    sourcePath: 'dev-days/README.md',
  },
  'dev-enablement-series': {
    id: 'dev-enablement-series',
    route: 'dev-enablement-series',
    label: 'Dev Enablement Series',
    eyebrow: 'Developer learning series',
    description: 'Practical sessions on Copilot, DevOps, security, and agentic workflows.',
    markdown: devEnablementSeriesReadme,
    sourcePath: 'dev-enablement-series/README.md',
  },
  'usage-based-billing': {
    id: 'usage-based-billing',
    route: 'usage-based-billing',
    label: 'Usage-based billing',
    eyebrow: 'GitHub Copilot guidance',
    description: 'A practical UBB playbook for Canadian customers.',
    markdown: usageBasedBillingReadme,
    sourcePath: 'usage-based-billing/README.md',
  },
}

export function isPageId(value: string | undefined): value is PageId {
  return pageIds.some(pageId => pageId === value)
}

function markdownText(value: string) {
  return value
    .replace(/!\[([^\]]*)\]\([^)]*\)/g, '$1')
    .replace(/\[([^\]]+)\]\([^)]*\)/g, '$1')
    .replace(/[*_~`]/g, '')
    .trim()
}

function removeFencedCodeBlocks(markdown: string) {
  let fenceMarker: '`' | '~' | undefined
  let fenceLength = 0

  return markdown
    .split('\n')
    .map(line => {
      const indentation = line.match(/^ */)?.[0].length ?? 0
      const content = line.slice(indentation)

      if (!fenceMarker) {
        const openingFence = indentation <= 3 ? content.match(/^(`{3,}|~{3,})/) : null
        if (!openingFence) {
          return line
        }

        const marker = openingFence[1][0]
        if (marker !== '`' && marker !== '~') {
          return line
        }

        fenceMarker = marker
        fenceLength = openingFence[1].length
        return ''
      }

      const closingFence = indentation <= 3 ? content.match(/^(`+|~+)[ \t]*$/) : null
      if (
        closingFence &&
        closingFence[1][0] === fenceMarker &&
        closingFence[1].length >= fenceLength
      ) {
        fenceMarker = undefined
        fenceLength = 0
      }

      return ''
    })
    .join('\n')
}

export function getTableOfContents(markdown: string): TableOfContentsItem[] {
  const slugger = new GithubSlugger()
  const headings = removeFencedCodeBlocks(markdown).matchAll(/^(#{1,6})\s+(.+?)\s*#*\s*$/gm)
  const items: TableOfContentsItem[] = []

  for (const [, hashes, rawTitle] of headings) {
    const title = markdownText(rawTitle)
    const id = slugger.slug(title)

    if (hashes.length === 2) {
      items.push({id, title})
    }
  }

  return items
}
