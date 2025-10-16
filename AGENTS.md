# AGENTS.md - AI Assistant Configuration

This project uses a minimal, effective Cursor IDE configuration optimized for React and Node.js development.

## Project Structure
- **Frontend**: React/Next.js with TypeScript
- **Backend**: Node.js/Express with TypeScript
- **Testing**: Jest + React Testing Library
- **Styling**: CSS Modules or Tailwind CSS

## Development Commands
- `/review` - Comprehensive code review focusing on security and quality
- `/tests` - Generate tests following TDD principles
- `/bug` - Systematic bug fixing with root cause analysis
- `/setup` - Interactive project initialization and configuration
- `/project` - Process large triage tickets by creating Linear projects and splitting into smaller tickets
- `/triage` - Process tickets from Linear Triage column with research and analysis
- `/ticket` - Create comprehensive implementation plans for Ready for Dev tickets

## Code Style
- TypeScript strict mode enabled
- Functional components with hooks
- Explicit error handling (no silent failures)
- Minimal, focused changes only
- Test-driven development required

## Key Constraints
- Always understand codebase before suggesting changes
- Make minimal, focused changes
- Apply modifications to single file at once
- Never rename methods unless absolutely necessary
- Always raise errors explicitly, never silently ignore
- Follow modular rule system: Core behavior + technology-specific patterns

## Testing Requirements
- Write tests before implementation
- Achieve minimum 80% coverage
- Test both happy paths and edge cases
- Mock external dependencies properly

## Debugging
- Use VS Code debugger configurations
- Enable source maps for production debugging
- Use proper breakpoint strategies
- Leverage browser dev tools integration

## File Organization
- Components under 200 lines
- Functions under 50 lines
- Use proper TypeScript types
- Follow single responsibility principle
- Extract custom hooks for complex logic

## MCP Integration
This configuration includes integrated MCP servers for enhanced development workflow:

### Enabled Servers
- **Vercel**: Deploy and manage Next.js/React applications
- **Linear**: Project management and ticket tracking
- **Playwright**: Browser automation and testing

### Workflow Integration
- `/project` - Process large triage tickets by creating projects
  - Analyze large tickets (>3 days work, multiple features)
  - Create comprehensive Linear projects with milestones
  - Split into smaller, classified sub-tickets for further triage
- `/triage` - Process Linear tickets from Triage column
  - Analyze ticket scope and complexity
  - Add clarifying comments or split into actionable tickets
  - Move refined tickets to "Ready for Dev" column
- `/ticket` - Create implementation plans for Ready for Dev tickets
  - Comprehensive codebase analysis before planning
  - Detailed implementation plan with approval process
  - Automatic branch creation with pattern: `{label}/{ticket-id}-{title-slug}`
- Seamless integration between Linear tickets and git workflow

## Configuration Structure
The `.cursor` configuration follows a modular approach:
- **Rules**: Behavioral constraints and technology-specific patterns
- **Commands**: Reusable command templates for common tasks
- **MCP**: External service integrations for enhanced functionality
