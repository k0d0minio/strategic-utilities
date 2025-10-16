# Refine Command

## Overview

Analyze chunked tickets from the Linear Triage column, conduct technical research, and split them into actionable tickets with clear implementation details. Moves refined tickets to the "Planned" column.

## Usage

- Process a specific chunk ticket: `/refine TICKET-123`
- Process next chunk ticket in Triage: `/refine`

## Steps

1. **Retrieve Chunk Ticket**
   - [ ] Connect to Linear workspace
   - [ ] Get ticket from Triage column (or specified ticket number)
   - [ ] Extract ticket details: title, description, labels, assignee, priority, project
   - [ ] Verify ticket is a chunk ticket (contains preserved content from original)

2. **Technical Analysis & Research**
   - [ ] Review chunk content scope and complexity
   - [ ] Identify technical requirements and dependencies
   - [ ] Research implementation approaches and patterns
   - [ ] Analyze codebase context and related components
   - [ ] Assess if chunk can be split into logical sub-components
   - [ ] Identify unclear requirements or missing information

3. **Split Into Actionable Tickets**
   - [ ] Create detailed breakdown of 2-4 sub-tasks
   - [ ] Define clear acceptance criteria for each sub-task
   - [ ] Add implementation details and technical specifications
   - [ ] Set priority and dependency order
   - [ ] Create new tickets with comprehensive descriptions
   - [ ] Apply appropriate labels and categorization
   - [ ] Link all new tickets to the same project as original chunk

4. **Move to Planned Column**
   - [ ] Move all new actionable tickets to "Planned" column
   - [ ] Archive or close original chunk ticket
   - [ ] Update project status if needed

5. **Documentation**
   - [ ] Add comprehensive analysis summary as Linear comment
   - [ ] Document research findings and technical recommendations
   - [ ] List all new tickets created from splitting
   - [ ] Note implementation approach and dependencies

## Analysis Criteria

When analyzing chunk tickets, consider:

- **Clarity**: Are requirements specific and actionable?
- **Scope**: Can the chunk be broken into 2-4 logical sub-components?
- **Dependencies**: Are external dependencies clearly identified?
- **Acceptance Criteria**: Can success conditions be well-defined?
- **Technical Feasibility**: Is the implementation approach sound?
- **Codebase Integration**: How does this fit with existing patterns?

## Split Ticket Requirements

When splitting chunk tickets, each new ticket must include:

- **Clear Title**: Specific, actionable description
- **Detailed Description**: Complete context and requirements from chunk
- **Implementation Details**: Technical approach and specifications
- **Acceptance Criteria**: Specific, testable success conditions
- **Dependencies**: Any prerequisites or related tickets
- **Priority**: Relative importance and urgency
- **Labels**: Appropriate categorization tags (feature, bug, enhancement, etc.)
- **Project Link**: Same project as original chunk ticket

## Technical Research Guidelines

When conducting technical research:

- **Codebase Analysis**: Review related components and patterns
- **Dependency Mapping**: Identify required libraries and services
- **Implementation Patterns**: Research best practices and approaches
- **Integration Points**: Understand how changes affect existing functionality
- **Testing Requirements**: Identify testing needs and existing coverage

## Actionable Ticket Templates

### Feature Implementation Ticket

```
Title: [Specific feature description]
Description: [Detailed requirements from chunk]
Implementation: [Technical approach and architecture]
Acceptance Criteria:
- [Specific, testable condition 1]
- [Specific, testable condition 2]
Dependencies: [Any prerequisites]
Labels: feature, [relevant-technical-labels]
```

### Bug Fix Ticket

```
Title: [Specific bug description]
Description: [Bug details and reproduction steps from chunk]
Root Cause: [Technical analysis of the issue]
Fix Approach: [Proposed solution]
Acceptance Criteria:
- [Bug is resolved]
- [No regression in related functionality]
Dependencies: [Any prerequisites]
Labels: bug, [relevant-technical-labels]
```

### Enhancement Ticket

```
Title: [Specific enhancement description]
Description: [Enhancement details from chunk]
Current State: [What exists now]
Proposed Changes: [What will be improved]
Acceptance Criteria:
- [Enhancement is implemented]
- [Performance/UX improvements verified]
Dependencies: [Any prerequisites]
Labels: enhancement, [relevant-technical-labels]
```

## Decision Guidelines

- **Split Tickets**: When chunk contains multiple distinct features or can be broken into logical sub-components
- **Single Ticket**: When chunk is already appropriately sized and actionable
- **Research Required**: When chunk needs additional technical investigation

## Quality Standards

Each actionable ticket must be:

- **Self-Contained**: Complete context and requirements
- **Implementable**: Clear technical approach
- **Testable**: Specific acceptance criteria
- **Prioritized**: Clear importance and urgency
- **Dependency-Aware**: Prerequisites identified

## Checklist

- [ ] Chunk ticket retrieved from Triage column
- [ ] Comprehensive technical analysis completed
- [ ] Research conducted on implementation approaches
- [ ] Chunk split into 2-4 actionable tickets
- [ ] All new tickets have clear acceptance criteria
- [ ] Implementation details added to each ticket
- [ ] Dependencies and priorities set
- [ ] All new tickets moved to "Planned" column
- [ ] Original chunk ticket archived
- [ ] Analysis documented in Linear comments
- [ ] Tickets ready for planning phase
