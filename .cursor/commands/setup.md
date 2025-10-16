# Project Setup Command

## Overview

Intelligent project configuration that auto-detects existing projects and merges with current `.cursor` settings, or guides setup for empty projects.

## Auto-Detection Process

### 1. Project Analysis

- **Scan Project Structure**: Analyze existing files and folders
- **Detect Project Type**: Identify React/Next.js/Node.js/Vanilla JS/etc.
- **Detect Package Manager**: Check for package-lock.json, yarn.lock, pnpm-lock.yaml
- **Detect Technologies**: TypeScript, testing frameworks, styling solutions
- **Detect Existing .cursor Config**: Check for existing configuration files

### 2. Project Type Detection Logic

- **Next.js**: `next.config.js`, `app/` or `pages/` directory, Next.js in package.json
- **React**: `src/` with React components, React in package.json dependencies
- **Node.js/Express**: `server.js`, `app.js`, Express in package.json, `routes/` folder
- **Vanilla JS**: Basic HTML/JS files, no framework dependencies
- **Full-Stack**: Combination of frontend and backend indicators

### 3. Technology Detection

- **TypeScript**: `tsconfig.json`, `.ts/.tsx` files
- **Testing**: Jest, Vitest, Cypress, Playwright in package.json
- **Styling**: Tailwind CSS, Styled Components, CSS Modules, Sass
- **Linting**: ESLint, Prettier configuration files

## Setup Modes

### Mode 1: Empty Project Setup

When no project files are detected:

1. **Collect Project Information**
   - Project name and type
   - Package manager preference
   - Technology stack choices
2. **Configure .cursor Settings**
   - Create appropriate rules based on project type
   - Set up MCP server configurations
   - Generate environment template

### Mode 2: Existing Project Setup

When project files are detected:

1. **Auto-Detect Configuration**
   - Scan and analyze existing project structure
   - Identify technologies and frameworks in use
   - Detect existing `.cursor` configuration
2. **Merge Strategy**
   - Preserve existing `.cursor` settings
   - Add missing configurations based on detected tech stack
   - Update MCP server settings if needed
   - Merge environment variables safely

## Configuration Steps

### 1. Project Detection & Analysis

- [ ] Scan project root for package.json, tsconfig.json, etc.
- [ ] Identify project type and technologies
- [ ] Check for existing `.cursor` configuration
- [ ] Detect package manager from lock files
- [ ] Analyze folder structure and naming conventions

### 2. MCP Server Configuration

- [ ] Check existing `.cursor/mcp.json`
- [ ] Enable servers based on detected project type:
  - **Vercel**: For Next.js, React, or Node.js projects
  - **Linear**: For any project (project management)
  - **Playwright**: For projects with testing setup
- [ ] Merge with existing MCP configuration

### 3. Rules Configuration

- [ ] Apply core behavioral rules (always)
- [ ] Add TypeScript rules if tsconfig.json detected
- [ ] Add React rules if React/Next.js detected
- [ ] Add Node.js rules if Express/Node.js detected
- [ ] Add testing rules if testing frameworks detected
- [ ] Add Next.js specific rules if Next.js detected
- [ ] Add MCP integration rules

### 4. Environment Setup

- [ ] Check for existing `.cursor/config/environment.json`
- [ ] Prompt for missing API keys based on enabled MCP servers
- [ ] Merge new environment variables with existing ones
- [ ] Ensure `.gitignore` includes environment file

### 5. Command Templates

- [ ] Ensure all command templates are present
- [ ] Update templates based on detected project type
- [ ] Preserve any custom command modifications

## Merge Strategy for Existing Projects

### Configuration Merging Rules

- **Preserve Existing**: Never overwrite user customizations
- **Add Missing**: Only add configurations that don't exist
- **Update Outdated**: Update version-specific settings if needed
- **Backup Changes**: Create backup before making changes

### File-Specific Merge Logic

- **mcp.json**: Merge server configurations, preserve existing settings
- **environment.json**: Add new variables, preserve existing values
- **rules/**: Add missing rule files, preserve custom rules
- **commands/**: Ensure all command templates exist, preserve modifications

## API Key Collection (Only for Missing Keys)

### GitHub Integration

- **GitHub Personal Access Token**: https://github.com/settings/tokens
- Required scopes: repo, read:org, read:user
- Only prompted if GitHub integration detected

### Linear Integration

- **Linear API Key**: https://linear.app/settings/api
- Required scopes: read, write
- Only prompted if Linear integration enabled

### Vercel Integration

- **Vercel Token**: https://vercel.com/account/tokens
- **Vercel Team ID**: Optional, for team-specific deployments
- Only prompted if Vercel integration enabled

### Supabase Integration

- **Supabase URL**: Your Supabase project URL
- **Supabase Anon Key**: Public anon key (safe for client-side)
- **Supabase Service Role Key**: Service role key (server-side only)
- Only prompted if Supabase integration detected

## Security & Best Practices

- API keys stored in `.cursor/config/environment.json`
- Environment file added to `.gitignore` automatically
- Never overwrite existing sensitive configuration
- Create backups before making changes
- Validate API keys before saving

## Usage Examples

### Empty Project

```
/setup-project
> Detected: Empty project
> Please provide project information...
```

### Existing React Project

```
/setup-project
> Detected: React + TypeScript project
> Found existing .cursor configuration
> Merging configurations...
> Added missing MCP servers
```

### Existing Next.js Project

```
/setup-project
> Detected: Next.js + TypeScript + Tailwind project
> Found existing .cursor configuration
> Updated MCP servers for Next.js
> Added missing environment variables
```

## Ready to Start?

Run `/setup-project` and I'll automatically detect your project type and configure the `.cursor` folder appropriately.
