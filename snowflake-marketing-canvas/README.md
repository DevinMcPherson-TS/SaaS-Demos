# Snowflake Marketing Canvas

A Cursor Canvas dashboard of `FIVETRAN_DATABASE.MARKETING` data from Snowflake.

## How it was built

Queried Snowflake with the Snowflake MCP (`sql-exec-tool`), then rendered the dashboard with `WriteCanvas`.

## Branding

The upper-left header uses the **Bumble Bee Yoga** logo from Figma Make: https://www.figma.com/make/0m8SJ07ZGr5FiwJWiGh9J9/Yoga-Business-Logo

A reusable standalone SVG (no cream background) lives at `bumble-bee-logo.svg`.

## How to use

Open or recreate the canvas in Cursor via `WriteCanvas`, or paste `SnowflakeMarketingOverview.canvas.tsx` into a canvas. The embedded metrics are a **September 2026 snapshot**, not a live query.

## Source schema

`FIVETRAN_DATABASE.MARKETING` — primarily `FACT_AD_PERFORMANCE_DAILY` joined to campaign/date/account/platform dims, plus supporting facts for web sessions, email events, and attributed conversions.

## Original canvas

https://cursor.com/canvas/store-fabe07ca-3170-48af-9f01-3f264eb49aa7/dbfc5682-98eb-48ef-bdf4-bb080a1ce2ff
