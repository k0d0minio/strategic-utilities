# Cursor IDE Configuration Template

A comprehensive, production-ready configuration template for Cursor IDE that optimizes AI-assisted development for React, Node.js, and full-stack TypeScript projects.

## 🚀 What This Template Provides

This repository contains a complete Cursor IDE configuration that transforms your development experience with:

- **AI-Powered Development Commands**: Pre-built commands for common development tasks
- **Intelligent Code Rules**: Context-aware rules that guide AI behavior for different file types
- **MCP Server Integration**: Ready-to-use integrations with external services (Vercel, Linear, Playwright)
- **Quality Enforcement**: Automated checks for security, performance, and best practices
- **Project Setup Automation**: Interactive setup for new projects
- **Linear Integration**: Advanced ticket management and triage workflows

## 📁 Repository Structure

```
cursor-config/
├── .cursor/
│   ├── commands/           # AI development commands
│   │   ├── bug.md          # Systematic bug fixing
│   │   ├── project.md      # Large ticket project creation and splitting
│   │   ├── review.md       # Comprehensive code review
│   │   ├── setup.md        # Interactive project setup
│   │   ├── tests.md        # Test-driven development
│   │   ├── ticket.md       # Linear ticket implementation planning
│   │   └── triage.md       # Linear ticket triage and analysis
│   ├── mcp.json           # MCP server configurations
│   └── rules/              # AI behavior rules by file type
│       ├── 000-core-behavior.mdc    # Core behavioral constraints
│       ├── 100-typescript-react.mdc # TypeScript & React patterns
│       ├── 150-node-express.mdc     # Node.js & Express patterns
│       ├── 200-testing.mdc          # Testing requirements
│       ├── 250-nextjs.mdc           # Next.js specific patterns
│       └── 300-mcp-integration.mdc  # MCP security guidelines
├── .vscode/                # VS Code workspace settings (empty)
├── AGENTS.md               # AI assistant configuration
└── README.md               # This file
```

## 🛠️ Development Commands

The template includes seven powerful AI commands that automate common development workflows:

### `/review-code`
Comprehensive code review focusing on:
- Security vulnerabilities (hardcoded secrets, SQL injection, auth issues)
- Code quality (TypeScript types, error handling, complexity)
- Performance optimizations (memory leaks, re-renders, queries)
- Test coverage and edge cases

### `/project`
Large ticket project management and splitting:
- Analyzes large triage tickets (>3 days work, multiple features)
- Creates comprehensive Linear projects with detailed descriptions
- Defines realistic milestones with target dates and dependencies
- Splits original ticket into smaller, classified sub-tickets
- Preserves original content verbatim in each sub-ticket
- Links all sub-tickets to created project
- Keeps sub-tickets in Triage column for further analysis

### `/write-tests`
Test-driven development with:
- Tests written BEFORE implementation
- AAA pattern (Arrange, Act, Assert)
- Edge case and error condition testing
- Proper mocking of external dependencies
- Minimum 80% coverage requirement

### `/ticket`
Advanced Linear ticket implementation planning:
- Fetches tickets from "Ready for Dev" column
- Creates comprehensive implementation plans
- Generates detailed technical specifications
- Includes risk assessment and testing strategy
- Mandatory approval process before implementation
- Automatic git branch creation with proper naming

### `/triage`
Linear ticket triage and analysis:
- Analyzes tickets in the Triage column
- Conducts research and technical analysis
- Adds clarifying comments or splits large tickets
- Creates actionable sub-tasks with clear acceptance criteria
- Moves properly scoped tickets to "Ready for Dev"

### `/fix-bug`
Systematic bug fixing using:
- Complete codebase scanning
- Root cause analysis (not just symptoms)
- Minimal fix implementation
- Regression testing
- Verification process

### `/setup-project`
Interactive project initialization:
- Project type selection (React/Next.js, Node.js, full-stack)
- Package manager configuration
- External service integration setup
- Development preferences
- Security configuration

## 🎯 AI Behavior Rules

The template includes intelligent rules that adapt AI behavior based on file types:

### Core Behavioral Rules (`000-core-behavior.mdc`)
- Always understand codebase before suggesting changes
- Make minimal, focused changes
- Apply modifications to single file at once
- Never rename methods unless absolutely necessary
- Always raise errors explicitly, never silently ignore

### TypeScript & React Rules (`100-typescript-react.mdc`)
- Strict TypeScript mode enforcement
- Functional components with hooks
- Proper cleanup in useEffect
- Component size limits (200 lines max)
- Custom hook extraction for complex logic

### Node.js & Express Rules (`150-node-express.mdc`)
- Guard clauses and early returns
- Custom error types with clear messages
- RESTful API conventions
- Input validation and security
- Performance optimization patterns

### Testing Rules (`200-testing.mdc`)
- Test-driven development enforcement
- Comprehensive test coverage (80% minimum)
- Proper mocking strategies
- Edge case testing requirements

### Next.js Rules (`250-nextjs.mdc`)
- App Router patterns (Next.js 13+)
- Server Components by default
- Performance optimization
- SEO and metadata implementation

### MCP Integration Rules (`300-mcp-integration.mdc`)
- Security best practices for API keys
- Minimal permission requirements
- Tool usage guidelines (max 40 tools)
- Confirmation for destructive operations

## 🔧 MCP Server Integration

The template includes pre-configured MCP servers for external service integration:

### Available Servers
- **Vercel**: Deployment management and preview environments
- **Linear**: Project management and issue tracking
- **Playwright**: Browser automation for testing

### Configuration
The MCP servers are configured in `.cursor/mcp.json`:
- **Vercel**: Uses hosted MCP service at `https://mcp.vercel.com`
- **Linear**: Uses remote MCP service via `mcp-remote`
- **Playwright**: Uses official Playwright MCP package

### Security Features
- Environment variable configuration
- API key protection
- Minimal permission scopes
- Read-only mode options

## 🚦 Quality Gates

Built-in quality enforcement includes:

- **File Size Limits**: Components under 200 lines, functions under 50 lines
- **Type Safety**: Strict TypeScript mode, no `any` types
- **Error Handling**: Explicit error raising, no silent failures
- **Test Coverage**: Minimum 80% coverage requirement
- **Security**: Input validation, secret protection, SQL injection prevention

## 🎨 Supported Tech Stack

### Frontend
- React 18+ with TypeScript
- Next.js 13+ (App Router)
- CSS Modules or Tailwind CSS
- React Testing Library

### Backend
- Node.js with TypeScript
- Express.js
- Jest for testing
- Supertest for API testing

### Development Tools
- ESLint + Prettier
- TypeScript strict mode
- Jest + React Testing Library
- MCP server integrations

## 🚀 Getting Started

1. **Clone this repository** to your local machine
2. **Copy the `.cursor` directory** to your project root
3. **Run `/setup-project`** command in Cursor to configure your project
4. **Configure API keys** in `.cursor/config/environment.json` for external integrations
5. **Start developing** with AI-powered commands

## 📋 Usage Examples

### Setting up a new React project:
```
/setup-project
# Follow the interactive prompts to configure:
# - Project type: React/Next.js
# - Package manager: npm/yarn/pnpm
# - TypeScript: Yes
# - Testing: Jest + React Testing Library
# - Styling: Tailwind CSS
```

### Processing large triage tickets:
```
/project
# Analyzes next large ticket in Triage column
# Creates comprehensive Linear project with milestones
# Splits into smaller, classified sub-tickets
# Links all sub-tickets to created project

/project LINEAR-123
# Processes specific large ticket by ID
# Same project creation and splitting process
```

### Processing Linear tickets:
```
/ticket
# Fetches next ticket from "Ready for Dev" column
# Creates comprehensive implementation plan
# Generates git branch with proper naming
# Requires approval before implementation

/ticket LINEAR-123
# Processes specific ticket by ID
# Same comprehensive planning process
```

### Triaging tickets:
```
/triage
# Analyzes next ticket in Triage column
# Adds clarifying comments or splits into sub-tasks
# Moves properly scoped tickets to "Ready for Dev"
```

### Planning a new feature:
```
/ticket
# Use the ticket command for feature planning
# Creates structured implementation plan in tmp/
# Includes current state, final state, file changes
# Requires approval before implementation
```

### Writing comprehensive tests:
```
/write-tests
# Generates tests following TDD principles
# Covers happy paths, edge cases, error conditions
# Ensures proper mocking and coverage
```

## 🔒 Security Considerations

- API keys are stored in `.cursor/config/environment.json`
- This file should be added to `.gitignore`
- Never commit sensitive credentials to version control
- Use minimal required permissions for external services
- Regular API key rotation recommended
- MCP servers use secure remote connections

## 🤝 Contributing

This template is designed to be:
- **Minimal**: Only essential configurations included
- **Effective**: Proven patterns for production development
- **Extensible**: Easy to customize for specific needs
- **Secure**: Built-in security best practices

## 📄 License

This configuration template is provided as-is for educational and development purposes. Feel free to customize and adapt it for your specific project needs.

---

**Ready to supercharge your development workflow?** Copy this configuration to your project and start using AI-powered development commands today!
