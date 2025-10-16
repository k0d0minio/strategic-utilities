# Chunk Command

## Overview

Process large triage tickets by analyzing content boundaries and chunking them into manageable sections. Includes project attribution analysis and approval workflow to ensure proper organization.

## Usage

- Process a specific large triage ticket: `/chunk TICKET-123`
- Process next large ticket in Triage: `/chunk`

## Two-Phase Workflow

### Phase 1: Analysis & Project Decision (Requires Approval)

1. **Retrieve and Assess Large Ticket**
   - [ ] Connect to Linear workspace
   - [ ] Get ticket from Triage column (or specified ticket number)
   - [ ] Extract ticket details: title, description, labels, assignee, priority
   - [ ] Assess ticket scope and complexity (>3 days work, multiple features)
   - [ ] Identify natural content boundaries and sections

2. **Project Attribution Analysis**
   - [ ] Analyze ticket content for project context clues
   - [ ] Search existing Linear projects for potential matches
   - [ ] Extract keywords, themes, and scope indicators
   - [ ] Determine project attribution strategy

3. **Project Decision & Approval**
   - [ ] **Option A: Existing Project Match**
     - [ ] Present: "Found existing project '[Project Name]' that matches this ticket scope. Chunked tickets will be placed in this project. Approve? Y/N"
     - [ ] Include confidence level and matching rationale
   - [ ] **Option B: New Project Creation**
     - [ ] Present: "No matching project found. Should new project '[Suggested Project Name]' be created? Approve? Y/N"
     - [ ] Include suggested project details: name, description, labels, timeline
   - [ ] **STOP**: Wait for explicit approval before proceeding

### Phase 2: Chunk Creation (After Approval)

4. **Create Chunk Tickets**
   - [ ] Extract verbatim content sections based on natural boundaries
   - [ ] Create 5-10 chunk tickets preserving original content exactly
   - [ ] Apply project attribution to all chunk tickets
   - [ ] Add minimal metadata: title, basic classification labels
   - [ ] Keep all chunk tickets in Triage column for further analysis

5. **Documentation and Cleanup**
   - [ ] Add process summary as Linear comment on original ticket
   - [ ] List all created chunk tickets with their classifications
   - [ ] Archive original ticket with project reference
   - [ ] Document chunking strategy and project attribution used

## Project Attribution Logic

### Existing Project Detection

When analyzing for existing project matches:

- **Content Analysis**: Extract themes, keywords, and scope indicators
- **Project Search**: Search Linear projects by name, description, and labels
- **Pattern Matching**: Look for project patterns that align with ticket scope
- **Confidence Assessment**: Rate match quality and present rationale

### New Project Creation

When no existing project matches:

- **Project Name**: Extract from ticket title/content themes
- **Description**: Generate from ticket context and scope
- **Labels**: Suggest appropriate categorization tags
- **Timeline**: Estimate completion timeline based on complexity
- **State**: Set appropriate project state (Planning, In Progress, etc.)

## Content Chunking Strategy

When chunking large tickets, focus on:

- **Natural Boundaries**: Major sections, timeline phases, role-based work
- **Verbatim Preservation**: Extract and preserve original content exactly
- **Minimal Processing**: Add only essential metadata (title, labels, project link)
- **No Analysis**: Do not interpret, summarize, or generate new content
- **Manageable Size**: 5-10 chunk tickets maximum to avoid context limits

## Chunk Classification Labels

Use consistent labels for chunk tickets:

- **technical**: Technical specifications, architecture, implementation
- **business**: Business strategy, go-to-market, partnerships
- **legal**: Compliance, contracts, regulatory requirements
- **operations**: Customer support, community, success metrics
- **timeline**: Specific time periods or phases
- **role-based**: CEO tasks, CTO tasks, team responsibilities

## Approval Workflow Examples

### Existing Project Scenario

```
/chunk TICKET-123
↓
Analysis Complete
↓
"Found existing project 'User Authentication System' (85% confidence) that matches this ticket scope.
The ticket contains authentication flows, user management, and security requirements that align with the project.
Chunked tickets will be placed in this project. Approve? Y/N"
```

### New Project Scenario

```
/chunk TICKET-456
↓
Analysis Complete
↓
"No matching project found. Should new project 'Payment Integration Platform' be created?
Suggested details:
- Name: Payment Integration Platform
- Description: Integration with Stripe, PayPal, and Apple Pay for subscription billing
- Labels: payments, integration, billing
- Timeline: 6-8 weeks
- State: Planning
Approve? Y/N"
```

## Chunking Guidelines

- **Preserve All Content**: Maintain every detail from original ticket
- **No Summarization**: Extract verbatim sections, don't condense
- **Clear Boundaries**: Each chunk should be a distinct, separable section
- **Consistent Naming**: Use descriptive titles that indicate content scope
- **Project Association**: Link all chunks to approved project
- **Triage Status**: Keep all chunks in Triage column for individual analysis

## Analysis Criteria

When assessing large tickets for chunking:

- **Scope Assessment**: Is ticket >3 days work or has multiple distinct sections?
- **Content Boundaries**: What are the natural break points in the content?
- **Section Identification**: What are the distinct, separable content sections?
- **Project Context**: What project themes and scope indicators are present?
- **Chunking Strategy**: How can content be divided without losing context?

## Checklist

- [ ] Large triage ticket retrieved and assessed
- [ ] Ticket scope confirmed as requiring chunking
- [ ] Project attribution analysis completed
- [ ] Project decision presented for approval
- [ ] **EXPLICIT APPROVAL RECEIVED**
- [ ] Content chunked into 5-10 manageable sections
- [ ] All chunk tickets preserve original content verbatim
- [ ] All chunk tickets linked to approved project
- [ ] Chunk tickets remain in Triage column for further analysis
- [ ] Original ticket archived with project reference
- [ ] Process documented in Linear comments
- [ ] Chunks ready for individual refinement analysis
