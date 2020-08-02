# Process Data Object Into Files

1. Process Markdown -> HML
2. Leveled Object for Searches
  - Extract Pure Text
  - Push to proper level array
    - Object: array of arrays
    - Each article ->
      - Path (URL)
      - String: Type + ID + Heading? (HTML Format?)
    - Search algorithm
      1. Is only Art # chars -> Search IDs only
      2. Search headings down levels
      3. Search text down levels
3. Data Objects for HTML pages / Vue templates
  - Each Entry:
    - Is top level?:
      - Yes: Add content links, set new objects
      - No: Has sub entries?
        - Yes: Append sub-entries to content
    - All
      - Add navigational entries to objects
      - Add breadcrumbs
4. TOC Object?
  - Append entry types
  - Append top-level entries
